/*CMD
  command: tgpostview2
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var res= Libs.ResourcesLib.userRes("balance")
let bot10 = User.getProperty("memamount")
let subs = User.getProperty("subs")
let answer = User.getProperty("answer")
if(res.value() < answer ){
var button = [[{title:"Deposit ✅",command:"➕ Deposit"}]]

Bot.sendInlineKeyboard(button,

  "⚠️ _To Order You Need To Have_ "+answer+"$\n\n💵 _Your Balance: "+res.value()+"$_\n\n✅ _Deposit Now To Order_"

)
return
}else{
HTTP.get({
  url:
    "https://smmbirla.com/api/v2?key=02087f6d2f4739f1aa1bb1086da7260e&action=add&service=512&link=" +
    subs +
    "&quantity=" +
    bot10 +
    "",
  success: "tgpostview3 " + subs + ""
})
}
