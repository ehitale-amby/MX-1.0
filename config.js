const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05uN20welVldmZVYll4SVozK0w4ZkNPb3lIeWdsSUVudUpSSzJzejlYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWpMVktWQ0g2SDlyQzNydXVMS25nL2pvd3ZoSkpNZ2REQVBJaERSUzZ6Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSmViY1FUd1gxR0MvSVNIMzRZem0rZjFRbXFvUTNwWHhCMEEvRWxIMkZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4VlE3bVFQam1NUWpOLy9PUmNKR21scmFUeklKNVlZcUhsQWt2dFpFWEJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBVkFHVkJXZjllZlZwMFVKUE1RRmk3TmtSV3RIMmx4aGc3TXpSWjc2MDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJXL3VKTkZjMk02S05xRFZCYnBTTFhuYmlqaFdQL0NDNWUyVUhiUVJjeGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Z1ZE13cFhkZkVSbmFKMGdkVHVSVGNnbmJBR0s4Q2ZuVXpUVlY5bWdHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTN3L0NSaytCWkZCbC9ZZkJHNjhwMW04cTlFVkpRTlkxWXZnNXl0djNrZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5xL2NDNVJGSWJ3VHp2SC9WRTRKTS82REtVMDQreUYwODBpTlI1R2NZRldGZnNheDF0Vk9yZmVhQmVuSWJyTEFpdTZrUzJpWmQ0NzRiM2dxdGUyeEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJnZzczZmxsU1FCTGtNdm1kS0VJY05FZVQxcHhrZ0dwSGlJd3dEa1BtZFpZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVTU9XMDNsalQyNjJFd1IxQ1dGa0dRIiwicGhvbmVJZCI6IjUyYjc0NDc1LWQzMTktNGRlNS1hYjJhLThjZDZjMThhNGM5ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSHNad0Y0aWFxQmhnZ0JLRWgyUlFWWnRTVkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVdHYzlUNVZHZ3lwZnZNcmlZeVZNd2hmRVV3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFLSEZZR1g3IiwibWUiOnsiaWQiOiIyMzQ3MDQ1Nzg3ODIzOjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01iSi9KZ0RFS2FYMnJzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNUaVRTelBicG9BR3lvb2JnNFdnNUtpUDdJN0xxd05UYVRwdDhXdDhDaXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkgrckVxNEZ0OXpnVUR2am90TTNPZytyZnpudno4UHh5R0hrN2hQT04ycDZPRm5jN1RDRE96N0ZNVThKb0JSeWE0NUdLQXBpVnh2WGJrVTF4WXh3ekRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtbVdpcFlyZk1Sc2xjMzZHOVhnRHZBV2RtdzdFWUFwbkF0bVZ1V0lVL3NUOTBvS0Nham1rcDlKUXNKb0FacmY1blZNZXVSTlZ1Snc3NmNjK0RXNGxDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDU3ODc4MjM6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYRTRrMHN6MjZhQUJzcUtHNE9Gb09Tb2oreU95NnNEVTJrNmJmRnJmQW9zIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1ODIyMjU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBjNCJ9";
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
