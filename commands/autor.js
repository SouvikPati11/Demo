/*CMD
  command: autor
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

let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
if (balance.value() < 3000){
Bot.sendMessage("_❌ You have to own at least 3000 Points_")
}else{
Bot.sendMessage("👁️‍🗨️ *Enter Amount Of Points For Which You Want Reactions\n\nIf You Want 50 Positive Reactions Then Enter 500\n\n500 Points = 50 Reactions 👍 *")
Bot.runCommand("autor2")
}
