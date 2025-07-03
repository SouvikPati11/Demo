/*CMD
  command: awaiting_max_views
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

let maxViews = message;

if (!isNumeric(maxViews)) {
  Bot.sendMessage("❗ দয়া করে একটি বৈধ সংখ্যা লিখুন।\n\n🔼 প্রতিটি পোস্টে সর্বোচ্চ কতটি ভিউ চান?");
  return;
}

User.setProperty("max_views", maxViews, "string");

let username = User.getProperty("channel_username");
let link = "https://t.me/" + username;
let quantity = User.getProperty("max_new_posts");
let old_posts = User.getProperty("old_posts");
let min = User.getProperty("min_views");
let max = User.getProperty("max_views");

// API call
HTTP.post({
  url: "https://n1panel.com/api/v2",
  body: {
    key: "106882239b9d2c8d7875585ceb10d266",
    action: "add",
    service: "3184",
    link: link,
    quantity: quantity,
    runs: quantity,
    old_posts: old_posts,
    min: min,
    max: max
  },
  success: "/onOrderSuccesss",
  error: "/onOrderError"
});

User.setProperty("auto_view_step", "", "string");
Bot.sendMessage("🚀 আপনার অর্ডার প্রক্রিয়া চলছে, অনুগ্রহ করে অপেক্ষা করুন...");

