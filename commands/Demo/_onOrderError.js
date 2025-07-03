/*CMD
  command: /onOrderError
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

let all_keys = Bot.getAllKeys();
let orders = all_keys.filter(key => key.indexOf("order_") === 0);
let user_orders = [];

for (let i in orders) {
  let data = Bot.getProperty(orders[i]);
  if (data.user_id == user.telegramid) {
    user_orders.push(data);
  }
}

if (user_orders.length == 0) {
  Bot.sendMessage("❌ কোনো অর্ডার পাওয়া যায়নি।");
} else {
  let txt = "📋 আপনার অর্ডারসমূহ:\n\n";
  for (let i in user_orders) {
    let order = user_orders[i];
    txt += `🆔 Order ID: ${order.order_id}\n📡 Channel: ${order.channel}\n📥 Posts: ${order.quantity}\n📊 Views: ${order.min} to ${order.max}\n❌ Cancel: /cancel_${order.order_id}\n\n`;
  }
  Bot.sendMessage(txt);
}

