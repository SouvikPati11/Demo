/*CMD
  command: tgpostview3
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

if (!content) {
  Bot.sendMessage("Internal Server Error")
  return
}
if (!params) {
  Bot.sendMessage("Internal Server Error")
  return
}

var result = JSON.parse(content)
var id = result.order
let bot10 = User.getProperty("memamount")
let subs = User.getProperty("subs")
let answer = User.getProperty("answer")

Bot.run({
command : "Complete",
run_after : 3600,
options: { order: bot10 ,subs : subs, answer: answer,id :id}
});

var stat = Libs.ResourcesLib.anotherChatRes("bots", "global")
var level = Libs.ResourcesLib.userRes("level")
var key = Bot.getProperty("channel")
var key = Bot.getProperty("channel")
var num = Libs.ResourcesLib.userRes("num")
var balance = Libs.ResourcesLib.userRes("balance",email)
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")"
var res= Libs.ResourcesLib.userRes("balance")
var email = User.getProperty("email")
var k = Bot.getProperty("management")
var alertsChannel = Bot.getProperty("alertsChannel")
if (k == "on") {
  Api.sendPhoto({
    photo: "https://imbt.ga/0qL1iJuryt",
    caption:
      "<b> We are currently Saving power, Please use this command after some Hours</b>",
    parse_mode: "HTML"
  })
  return
} else var to = Bot.getProperty("maintenance")
if (to == "on") {
  Bot.sendMessage(
    "*😌 Sorry*, The Bot is currently *🛠 Under Maintenance,*\n    🤘 _Please wait it may take up to 1-12 Hour_.")
  return
} else
var ban = Bot.getProperty(user.telegramid + "ban")
if (ban == true) {
  var button = [
    { title: "🗣️Contact Support", url: "https://t.me/SocialBoosterPanel" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
return
}else
if(res.value() < answer ){
var button = [[{title:"Deposit ✅",command:"➕ Deposit"}]]

Bot.sendInlineKeyboard(button,

  "⚠️ _To Order You Need To Have_ "+answer+"$\n\n💵 _Your Balance: "+res.value()+"$_\n\n✅ _Deposit Now To Order_"

)
return
}else{
balance.add(-answer)
num.add(1)
level.add(1)
var bots = User.getProperty("bots")
if (!bots) {
  stat.add(1)
}
}

  let options = { disable_web_page_preview: true, parse_mode: "Markdown"};

Bot.sendMessage("*Your Order Has Been Submitted and Processing\n\nOrder Details :\nℹ️ Order ID :* "+id+"\n*🔗 Link : "+subs+"*\n💰 *Order Price :* "+answer+" Points\n*👀 Views Ordered :* "+bot10+" Views\n\n*😊 Thanks for ordering\nCheck Your Order Status Here @SocialHiker*", options)

Api.sendMessage ({chat_id: "@SocialHiker", text: "✅ *New Order Recieved by "+bot.name+"*\n\nℹ️ Order ID : "+id+"\n✨ Service : *👀 Telegram Views*\n📈 Quantity : "+bot10+" Views\n💰 Order Charge : "+answer+" Points\n\n*Description:-*\nThis service will help you to increase your channel post views.\n\n🤩 *Grow Your Telegram Platforms\nFrom Here ➡️ @"+bot.name+"*",
parse_mode: "Markdown", disable_web_page_preview: true
})
