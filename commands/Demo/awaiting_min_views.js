/*CMD
  command: awaiting_min_views
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

let minViews = message;

if (!isNumeric(minViews)) {
  Bot.sendMessage("❗ দয়া করে একটি বৈধ সংখ্যা লিখুন।\n\n🔽 প্রতিটি পোস্টে সর্বনিম্ন কতটি ভিউ চান?");
  return;
}

User.setProperty("min_views", minViews, "string");
User.setProperty("auto_view_step", "awaiting_max_views", "string");
Bot.runCommand("awaiting_max_views");

