function doPost(e) {
  var update = JSON.parse(e.postData.contents);
  
  if (update.hasOwnProperty("message")) {
    var msg = update.message;
    var chatId = msg.chat.id;
    var messageToSend;
    
      if (msg.hasOwnProperty("entities") && msg.entities[0].type == "bot_command") {
        // Make bot reply to /command with "Hello world"
        if (msg.text == "/command") {
          var messageToSend = "Hello world";
        }
    
        var payload = { method: "sendMessage", chat_id: String(chatId), text: messageToSend, parse_mode: "HTML",};
        var data = {method: "post",payload: payload,};
      
        const scriptProperties = PropertiesService.getScriptProperties(); // example for API key named 'key' under settings in script properties 
        UrlFetchApp.fetch("https://api.telegram.org/bot" + scriptProperties.getProperty('key').toString() + "/",data,); // retrieve API key & send forged message
    }
  }
}
