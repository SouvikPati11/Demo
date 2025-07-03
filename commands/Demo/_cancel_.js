/*CMD
  command: /cancel_
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

let id = message.split("/cancel_")[1];
let order = Bot.getProperty("order_" + id);

if (order && order.user_id == user.telegramid) {
  // (চাইলে এখানে API cancel করার HTTP যুক্ত করতে পারো)
  Bot.sendMessage("❌ Order Cancelled: " + id);
  Bot.setProperty("order_" + id, null);
} else {
  Bot.sendMessage("❌ আপনি এই অর্ডার বাতিল করতে পারবেন না।");
}

