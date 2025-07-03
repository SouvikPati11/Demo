/*CMD
  command: /abd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: UID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "yourid"
if (user.telegramid == 5325612831){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb");
}else{
return
}
