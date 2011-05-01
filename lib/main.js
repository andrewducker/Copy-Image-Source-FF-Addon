// Import the APIs we need.
var contextMenu = require("context-menu");
var request = require("request");
var selection = require("selection");
var data = require("self").data;
var clipboard = require("clipboard");



exports.main = function(options, callbacks) 
{
   
  // Create a new context menu item.
  var menuItem = contextMenu.Item(
  {
 
    label: "Copy Image Source",

    // Show this item when an image exists.

    context: contextMenu.SelectorContext("img"),

    // When this item is clicked, post a message to the item with the
    // selected text and current URL.
    contentScriptFile: data.url("ClickMonitor.js"),

    onMessage: function handleMessage(message)
    {
    clipboard.set(message);
    }
  });
    
};
 
exports.onUnload = function (reason) 
{
  console.log(reason);
};

