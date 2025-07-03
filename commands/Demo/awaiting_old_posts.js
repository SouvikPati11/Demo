/*CMD
  command: awaiting_old_posts
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

let oldPosts = message;

if (!isNumeric(oldPosts)) {
  Bot.sendMessage("❗ দয়া করে একটি বৈধ সংখ্যা লিখুন।\n\n📤 কতটি পুরানো পোস্টে ভিউ দিতে চান?");
  return;
}

User.setProperty("old_posts", oldPosts, "string");
User.setProperty("auto_view_step", "awaiting_min_views", "string");
Bot.runCommand("awaiting_min_views");

