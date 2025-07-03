/*CMD
  command: 👁‍🗨 Order single post Views
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *👁️‍🗨️ Enter Amount On Views You Want Please Enter More Than 100*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("memamount", message,"string")
var value = message
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
Bot.runCommand("👁‍🗨 Order single post Views")
}else{
if(data.message < 100){
Bot.sendMessage("*Minimum Order Is* 100")
Bot.runCommand("👁‍🗨 Order single post Views")
}else{
Bot.runCommand("tgpostview")}}
