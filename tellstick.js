/**
 * Copyright 2014 Jaakko Ala-Paavola.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var net = require('net');
var TelldusEvents = require('tellsock').TelldusEvents;
var node= {};

module.exports = function(RED) {
    "use strict";
    function TellstickNode(n) {
        RED.nodes.createNode(this, n);
        node = this;
	    node.socket = n.socket;
	    node.lastEvent = false;

	   var telldus = new TelldusEvents({eventSocket: n.socket});

        telldus.on('connect', function() {
            node.status({fill:"green", shape:"dot",text:"connected"});
        });

        telldus.on('close', function() {
            node.status({fill:"red", shape:"ring",text:"disconnected"});
        });

        telldus.on('error',function() {
            node.status({fill:"red", shape:"ring",text:"disconnected"});
        });

	   telldus.on('raw', function(data) {
            var msg={};
            msg.payload = data;
            msg.socket = node.socket;
            node.send(msg);
        });
    }

    RED.nodes.registerType("tellstick",TellstickNode);
};

