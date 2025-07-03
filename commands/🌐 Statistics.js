/*CMD
  command: 🌐 Statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");

if (stat == "ban") {
  Bot.sendMessage("*🚫 You're Banned*");
} else {
  // রিসোর্স নাম পরিবর্তন করে "total_points" করা হলো
  var totalPoints = Libs.ResourcesLib.anotherChatRes("total_points", "global");
  var totalMembers = Libs.ResourcesLib.anotherChatRes("status", "global").value().toFixed(0);

  var message = 
    "*📊 Total Members: " + totalMembers + 
    " Users*";

  Bot.sendMessage(message);
}
