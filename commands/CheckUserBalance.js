/*CMD
  command: CheckUserBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send Telegram User I'D*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var badUsers = Bot.getProperty("mods", { list: {} })
if (!badUsers.list[user.telegramid] && user.telegramid != 5325612831) {
  Api.sendPhoto({
    photo: "https://images.app.goo.gl/4rcN9nn7G1skV28J9",
    caption: "<b>You were demoted</b>",
    parse_mode: "HTML"
  })

  return
} else var res = Libs.ResourcesLib.anotherUserRes("balance", message)
Bot.sendMessage("*User Balance Is:* " + res.value()+" Points")

