const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUx3ckNiVTNhMmlvWmtibDdNWkhXNVNWZUFPNHViUldicXBRY1JwdFBrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMG1WWHVjMmpFRUxkRGoxM21nK3RPTVJqSkV3cDdWZG9mZXI0KzJ4M0ZUND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTW8vVVZpTWxYUThybENnZ1VPSmRqbVJSS1JtUDVmR0dlVGg3SjZQM1hJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1YTQ4VlAvQk9MbzFOMEt4cU9UYUpFTGxncjZ2dVR4VnhuVlNEcy9pQ0FJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNU3NIdTZFUWk1alhvaW44R1o4TWdOdzZHcUhXZzZidG1GbGlvQTYrM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5FY0lLb2t1M0hROXlZdTNneENJeUZRZmtubC9aUG1aTy9aQlpwQm13Rnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ083VVUyZG80VUhUTUNINUZPaTlHUGFQSUxNMkpMSDBodzUyQ0h6NFgwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdEL1pYakdxcHNZRGxseGFVR0F0eXFlVWZDRTJnV3hvSFF6SFZVL1h6TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJxaUJEalJOeGhaVzdsdFJkUy8xVm1zaVYwdFdUMUcxMXA1QW11a2swT2o4QUZ3cVEyRVpZeWpIcnBUUjFiYlVIUFJDbENIK2R0Z0wzQVJhd1FqY2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJMSjVScjEzNWZ4WlluaStnY2JJTnhER2U4NURMeDVGYzNZU3lsMlgySTk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzQjVQU2U3Y1REbWwzTlFsalRTTndBIiwicGhvbmVJZCI6ImVjOWU3NzUzLTM0YjAtNDdlZi05ZWEyLWNhNDhhNzc5N2ZkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwM2d2a1JWR3lHYTVPWXVVRTYwZXdRQlFoVU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1Q1bkJOSkgvL3lnSmU2VFp1THlhaWZDUmNJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRFRUFZM00zIiwibWUiOnsiaWQiOiIyMzQ3MDQ1Nzg3ODIzOjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkIgUiBZIEEgTiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWVtdHJBREVLR0F1YjBHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0ZYN05LK0pyL2UrcWNkYkNnTy9wd1ByMDNWYTFsOUE3RHBmdUUwYzdsST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTFk3TzFlMTlUNThQM2d0YXNzYzF4cHRvRVBJcFZPa3JTY0RrN0E1bjZWdnNzUlR1dXdYSkk1d0ZpMWFFWVpVTVhvVlU3YWR2YmMzZWxGL04vY01tQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImUvTndpUW9WYTVHQTVTNG0xVUtUenNUSDR6R1JmTnZPQzFhbENrU0dwQVhHM3RXa1dkK3daWTVZbEVNMzV2cSszQ0VmQmJaUkNzcCtHV0RNVkpvZ2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0NTc4NzgyMzoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaFYrelN2aWEvM3ZxbkhXd29EdjZjRDY5TjFXdFpmUU93Nlg3aE5ITzVTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5NDcyOTQzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUo3dSJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2347045787823";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.ibb.co/ydmb74F/images.jpg,https://i.ibb.co/3M4XPRr/images.jpg"; // do not touch it
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.ibb.co/zNCcyCx/images-3.jpg,https://i.ibb.co/85zBx67/images-1.jpg,https://i.ibb.co/MMpyjGt/images-2.jpg"; // do not touch it
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MX-1.0`",
  author: process.env.PACK_AUTHER || "MX-1.0",
  packname: process.env.PACK_NAME || "MX",
  botname: process.env.BOT_NAME || "MX-1.0",
  ownername: process.env.OWNER_NAME || "MX-GΔMΞCØDΞR",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/themxgamecoder/MX-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vavz0e6E50Ugp30Z6z0W";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vavz0e6E50Ugp30Z6z0W";
global.devs = "2349021506036";
global.msg_style = process.env.STYLE || "1";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
