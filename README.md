node-red-contrib-tellstick
====================

A <a href="http://nodered.org" target="_new">Node-RED</a> node which supports receiving data from Tellstick Duo from Telldus.

More detailed description: <a href="http://ala-paavola.fi/Node-RED">http://ala-paavola.fi/Node-RED</a>.

Install
-------

Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-tellstick


Usage
-----

Install telldus-core driver: 

    sudo apt-get install telldus-core

The node connects to unix domain socket created by telldus-core, by default in /tmp/TelldusEvents.
