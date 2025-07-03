/*CMD
  command: awaiting_max_new_posts
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

let maxNewPosts = message;

if (!isNumeric(maxNewPosts)) {
  Bot.sendMessage("❗ দয়া করে একটি বৈধ সংখ্যা লিখুন।\n\n📥 সর্বোচ্চ কতটি নতুন পোস্টে ভিউ দিতে চান?");
  return;
}

User.setProperty("max_new_posts", maxNewPosts, "string");
User.setProperty("auto_view_step", "awaiting_old_posts", "string");
Bot.runCommand("awaiting_old_posts");

