/*CMD
  command: /onSuccess
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

let response

try {
  response = JSON.parse(content)
} catch (e) {
  Bot.sendMessage("❌ Could not parse API response.")
  return
}

if (!response.order) {
  Bot.sendMessage("❌ Order failed. Please try again.")
  return
}

let orderID = response.order
let link = User.getProperty("Link")
let amount = User.getProperty("OrderAmount")

// ✅ ইউজারকে অর্ডার কনফার্মেশন পাঠাও
Bot.sendMessage(
  "*✅ Order Confirmed!*\n\n" +
  "🆔 *Order ID:* `" + orderID + "`\n" +
  "👁️‍🗨️ *Amount:* " + amount + " Views\n" +
  "🔗 *Post Link:*\n" + link,
  { parse_mode: "Markdown", disable_web_page_preview: true }
)

// ✅ Telegram Channel এ রিপোর্ট পাঠাও
Api.sendMessage({
  chat_id: "@SocialHiker",
  text:
    "*📄 New Order Submitted ViewsBoosterProBot*\n\n" +
    "✅ *Status:* Processing...\n" +
    "✨ *Service:* 👁 Views\n" +
    "🕐 *Complete Time:* 0-5 Minute\n" +
    "ℹ️ *Order ID:* `" + orderID + "`\n" +
    "📈 *Quantity:* `" + amount + "` Views\n\n" +
    "*Description:*\nThis service will help you to increase your telegram post views.\n\n" +
    "🤩 *Grow Your Telegram Platform From Here ➡️* @" + bot.name,
  parse_mode: "Markdown",
  disable_web_page_preview: true
})

