/*CMD
  command: tgpostview1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("subs", message,"string")
let bot10 = User.getProperty("memamount")
let subs = User.getProperty("subs")
let answer = User.getProperty("answer")

var button = [[{text:"❌ Cancel",callback_data:"Memdis"},{text: "✅ Confirm" ,callback_data: "tgpostview2"}]]
var par = "html"
var g = "<b>👇🏻 Do You Confirm This Order?\n\n🔗 Link : "+message+"\n💰 Order Price : "+answer+" Point\n👀 Views Ordered : "+bot10+"\n\n👈🏻 With Confirming your order will be submitted and processing</b>"
Api.sendMessage({chat_id:chat.chatid,text:g,parse_mode:par,disable_web_page_preview: true,reply_markup:{inline_keyboard:button}})
