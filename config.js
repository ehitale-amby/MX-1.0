const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0J5VlNueWNZM3VHd0p6Znp3WWhKYi9zbVBkc3pCaE1vYy9aNWZqdFoxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzJTVXNpeUFDTTVBamJvRnJhZEwyZGpuMzIxRmlqT0VMRlg2enlleFJFZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQmFES2ltb1d1YzhlVmVOZ3dvTFIxRjQ5dmJaajFLOVlEL0w3MHlnYUdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzbWtYRSttK2dGMkI2L0E0M3lLWmd1LzNJVVgvQS92RmVMZkxyeXF1c0ZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOOWE0U01BdVhSKytyR3hwc2Nzc1pVRkN5SWd2ejgwMnBmOFVBbmdERnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5ndTE2RGpKU0ZtQ3VNWTZrNlpOeXZVY0dqNUpuZ1VWZW1qMWdNRXVIblE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVxSmt1ditSL1FkNFkyUm9DZFJYZWJoMU1uOHYvQ0VWd2dVY0d3RzlGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejZtRnBlSUZmYlcvWlFINlIvZEdKZm9wLysrTndwRUluaDRINWVHT3VuST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhzS3NnZC9yRGpuVGp2RE1IeS9RRXVsRkU2N0VRRXFUdWJncThTcVJXd1A2eEw2Z2pHbDBwVkYwNU50aW0zaEJqWENHNUU0cHUvZEhPV1VyclR5V2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiI2ZG9ZTEk0czArRjI1bUNyZUdEVUIxYUR1SmpRZVNDTEFKbzlaUEJzVFVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKSFhUOEtTVCIsIm1lIjp7ImlkIjoiMjM0NzA0NTc4NzgyMzozOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI2OTUwMTAxMDU3NTUzNzozOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AyTnI3c0dFT3FzdUw0R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilo3OHBwRTFlTVJhMkE1MldzaEtXbVd2VFFjOEtuOVd6bWF1eEd0UERmVHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikx0RWlDaDZzdDNBR3dKZG5wa0krdEYrVGJNeDR3NVpLS1NheXB3Z2FiMHZOb2l6VXF4a1Vha1JzbUhjdW50TEpUdGd2WFNqTm5DbWhyUHczVitVRENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2WDhqUkJBUzF6alp5cFl5UURZd2dIZE1iZDRYTTNGS0pEQ3F3WVptQTVHVDBHcEh5UWZhSExORHV6dENBTFVEczJpTjczVjd4Y2JTdmJNUjU4RHdqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDU3ODc4MjM6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2UvS2FSTlhqRVd0Z09kbHJJU2xwbHIwMEhQQ3AvVnM1bXJzUnJUdzMwOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxNTU5NDE1LCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0xMSJ9";
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
