/*CMD
  command: /broad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: msg

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = 5325612831
Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
Bot.setProperty("adminBroadcast", message)
Bot.runAll({
    command: "broadcast_2"
})
Bot.sendMessage("✅Message sent to all active members")
}else{
Bot.sendMessage("you are not allowed to use this")
}
