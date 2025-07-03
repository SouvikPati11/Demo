/*CMD
  command: tgpostview
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

let bot10 = User.getProperty("memamount")

var answer = bot10 * 1
User.setProperty("answer", answer,"string")
let optio = { disable_web_page_preview: true, parse_mode: "Markdown"}
Bot.sendMessage("*🔰 Send Post Link Where You Want To Get Views (Send Only Public Posts)*", optio)
Bot.runCommand("tgpostview1")
