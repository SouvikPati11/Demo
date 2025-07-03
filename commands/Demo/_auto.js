/*CMD
  command: /auto
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Demo

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let keyboard = [
  [{ text: "🚀 Auto View Service" }],
  [{ text: "📦 My Orders" }]
];

Bot.sendInlineKeyboard(keyboard, "👋 স্বাগতম! একটি অপশন বেছে নিন:");

