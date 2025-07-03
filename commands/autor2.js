/*CMD
  command: autor2
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

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  if (!/^\d+$/.test(message)) {
    Bot.sendMessage("_❌ Please enter numbers only._")
    return
  }

  var orderQty = parseInt(message)
  var minOrder = 500
  var maxOrder = 100000

  if (orderQty < minOrder) {
    Bot.sendMessage("_❌ Minimum Order Is " + minOrder + " Reactions_")
    return
  }

  if (orderQty > maxOrder) {
    Bot.sendMessage("_❌ Maximum Order Is " + maxOrder + " Reactions_")
    return
  }

  var amt = orderQty / 10
  var balance = Libs.ResourcesLib.userRes("balance")

  if (orderQty > balance.value()) {
    Bot.sendMessage("_❌ Your Balance is not sufficient. Available: " + balance.value().toFixed(2) + " Reactions_")
    return
  }

  var link = User.getProperty("Link")
  User.setProperty("OrderAmount", amt, "float") // ✅ অর্ডার পরিমাণ মনে রাখা হচ্ছে

  var url = "https://n1panel.com/api/v2?key=106882239b9d2c8d7875585ceb10d266&action=add&service=3193&link=" + link + "&quantity=" + amt

User.setProperty("OrderQty", orderQty, "integer")  // ✅ এটা যুক্ত করুন

HTTP.get({
  url: url,
  success: "/onSuccess1"
})

  balance.add(-orderQty)
}

