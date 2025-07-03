/*CMD
  command: VBMENU
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

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");

if (userstat == "member" || userstat == "administrator" || userstat == "creator") {

  if (!referbonus) {
    let refUser = Libs.ReferralLib.currentUser.attractedByUser();
    if (refUser) {
      var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
      balanceref.add(1000);
      Bot.sendMessageToChatWithId(refUser.chatId, "_You have received 1000 Points from " + user.first_name + "_");
      
      // ✅ বোনাস একবারই দেওয়া হবে নিশ্চিত করতে
      User.setProperty("referbonus", "done", "string");
    }
  }

  var balance = Libs.ResourcesLib.userRes("balance");
  var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
  var ref = Libs.ResourcesLib.userRes("referral");
  var msgid = User.getProperty("msgid");

  Api.deleteMessage({ message_id: msgid });

  Bot.sendKeyboard(
    "👁‍🗨 Order single post Views,\n👁‍🗨 Order multi post Views\n👍 Order post Reactions,\n👤 My Account,➕ Buy point\n🌐 Statistics,🎉 Bonus",
    "🏘 Main Menu\n*This bot is fully powered by @SocialMediaHikeOfficial*"
  );

} else if (userstat == "left") {
  Bot.runCommand("/start");
}

