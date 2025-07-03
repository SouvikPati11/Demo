/*CMD
  command: onUserInput
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Demo

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let step = User.getProperty("auto_view_step");

if (step == "awaiting_username") {
  User.setProperty("channel_username", message, "string");
  User.setProperty("auto_view_step", "awaiting_max_new_posts", "string");
  Bot.sendMessage("📥 সর্বোচ্চ কতটি নতুন পোস্টে ভিউ দিতে চান?");
}

