/*CMD
  command: /onSuccess1
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

let res
try {
  res = JSON.parse(content)
} catch (e) {
  Bot.sendMessage("❌ API response error. Could not parse response.")
  return
}

if (res.order) {
  let orderId = res.order
  let link = User.getProperty("Link")
  let orderQty = User.getProperty("OrderQty")
  let amt = orderQty / 10

  // ✅ User কে confirmation message
  Bot.sendMessage(
    "*✅ Your Reaction Order Has Been Placed Successfully!*\n\n" +
    "🆔 *Order ID:* `" + orderId + "`\n" +
    "👍 *Amount:* " + amt + " Reactions\n" +
    "🔗 *Post Link:*\n" + link,
    {
      parse_mode: "Markdown",
      disable_web_page_preview: true
    }
  )

  // ✅ Telegram channel এ অর্ডার ডিটেলস
  Api.sendMessage({
    chat_id: "@SocialHiker", // চ্যানেলের username (public)
    text:
      "*📄 New Reaction Order Submitted ViewsBoosterProBot*\n\n" +
      "✅ *Status:* Processing...\n" +
      "✨ *Service:* Reactions (👍🤩🎉🔥❤️🥰👏🏻)️\n" +
      "🕐 *Complete Time:* 0-5 Minute\n"+
      "🆔 *Order ID:* `" + orderId + "`\n" +
      "📈 *Quantity:* `" + amt + "` Reactions\n\n" +
      "*Description:*\nThis service will help you to increase your telegram post views.\n\n" +
      "🤩 *Grow Your Telegram Platform From Here ➡️* @" + bot.name,
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
} else {
  Bot.sendMessage("❌ Something went wrong. Please try again later.")
}

