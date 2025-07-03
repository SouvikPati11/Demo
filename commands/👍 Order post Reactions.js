/*CMD
  command: 👍 Order post Reactions
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔰 Send Post Link Where You Want To Get Positive Reactions (Send Only Public Posts)*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let Link = User.getProperty("Link")
User.setProperty("Link" , data.message ,"string")
Bot.runCommand("autor")
