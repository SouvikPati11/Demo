/*CMD
  command: /onOrderSuccesss
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

let res = JSON.parse(content);
if (res.order) {
  let order_id = res.order;
  let user_id = user.telegramid;

  Bot.sendMessage("✅ অর্ডার সফল হয়েছে!\n🆔 Order ID: " + order_id);

  let orderData = {
    order_id: order_id,
    user_id: user_id,
    channel: User.getProperty("channel_username"),
    quantity: User.getProperty("max_new_posts"),
    old_posts: User.getProperty("old_posts"),
    min: User.getProperty("min_views"),
    max: User.getProperty("max_views")
  };

  Bot.setProperty("order_" + order_id, orderData, "json");
} else {
  Bot.sendMessage("❌ অর্ডার ফেইল হয়েছে। দয়া করে আবার চেষ্টা করুন।");
}

