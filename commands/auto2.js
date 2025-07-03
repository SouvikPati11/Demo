/*CMD
  command: auto2
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
    Bot.sendMessage("_❌ Please enter numbers only. Letters or symbols are not allowed._")
    return
  }

  var messageValue = parseInt(message)

  if (messageValue < 100) {
    Bot.sendMessage("_❌ Minimum Order Is 100 Views_")
    return
  }
  if (messageValue > 10000) {
    Bot.sendMessage("_❌ Maximum Order Is 10000 Views_")
    return
  }

  var balance = Libs.ResourcesLib.userRes("balance")
  if (messageValue > balance.value()) {
    Bot.sendMessage("_❌ Your Balance " + balance.value().toFixed(2) + " Points_")
    return
  }

  var link = User.getProperty("Link")

  // ✅ "_" কে "%5F" দিয়ে রিপ্লেস করে encode করা
  var fixedLink = link.replace(/_/g, "%5F")
  var encodedLink = encodeURIComponent(fixedLink)

  User.setProperty("OrderAmount", messageValue, "integer")

  var url = "https://smmbirla.com/api/v2?key=02087f6d2f4739f1aa1bb1086da7260e&action=add&service=512&link=" + encodedLink + "&quantity=" + messageValue

  HTTP.get({
    url: url,
    success: "/onSuccess"
  })

  balance.add(-messageValue)
}

