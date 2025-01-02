const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dCaVo4UVRlSG9DdnViQjhBM2dDd3hxemFrR3MxR1V3WGEzTU1UNlcxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnMwUFFqSDNsVWNJWUZBL2QrZ01UUDRZalpiY1JGUDd4ZlNXZHRzeTl4cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT3U5ejR6WlVlZWlxR1RuQVVnSHRYQndKN0hGS3RwbjMxZ2dyVnVxSzNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpOGVLekFMaHBHSi9wcnRXQlJRV2JxMXRJZkxLV2JDalR2ZGV1SmhDUUg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQRmJPTThLMzVQQ1FseEc1dzl4RU0zbHF3U3oxdjM3MW03MDhvdVpJbWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZmZEdTSDdMejNHUHVEKzBkekxPTVVSc21kNmpBUjNuOGF5OElCVmdlRnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pMU1BUbXNONHg3OVlUcWliM0ZraXVRcXZIUnArSUMvRTF4di9ZcE9rcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJQd1Z1K21TSXViMFA3Nm9lclZ3bTNEcFpGaHFndWVPNTdlM1dYd3VtMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9UY3FHbjdhaFNUSDFYNWx0K25ZK0lDd1dNQTY1SDJTaVZlNUh1Q1lycXh4dE5XcXRLTDE5YWtWYkFrMk4vb3dxNEdDVEdHTnhKK2xxaEZoUU1PcUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6InNzYU9KejVuWjVzbE1OU244UUt6VnovTy91ZnB6QWNMTXFLaDZsUzJ1Rlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InlfcDZUY2xPVDBhR2c1XzdrN3pwdlEiLCJwaG9uZUlkIjoiNzQwMDg4OWEtYTMyYy00ZWE1LTkzOWMtYzZiMDJhOTE5YjU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd2M05DblBmbGV4ZVlSRTlxUVprV2hXWXRQcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaa0ZvU2ltRUVlM2dOYmM1U1R1VXF2VnhvdDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkM5TENTNDkiLCJtZSI6eyJpZCI6IjIzNDkwMjE1MDYwMzY6MzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTVggR86UTc6eQ8OYRM6eUiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGZDLzRZQ0VQM0UxTHNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoibmk0QVYyQkNoWUltdXg1djdNd3JHVE5Pd2xzOS8xeXllMVlJdlBWZ1kwST0iLCJhY2NvdW50U2lnbmF0dXJlIjoidUVWSXlZYUlUYWxrYnNuME5vTUhNU05VV2txNW5VUGtKTlRoTWlrR1JXL3dhOEZpSHZPSERNcG5KbGo4cGVTQWtleDk0YXR2dmY0K1V3ZkswcGNqQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6InphQkZsZlJaRTVSVnRiS0xEL3ZyK0FhdTlLNnlSekt0SVh6MmdGSG8rR1Z0ZUFMTDcvaFBaOUh6Y0JyaHNuMmpvenNCZWhqVjVYWEQ5ZmcyZG5uZkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyMTUwNjAzNjozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaNHVBRmRnUW9XQ0pyc2ViK3pNS3hrelRzSmJQZjljc250V0NMejFZR05DIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NzI5ODAyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVA0cyJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349021506036";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.ibb.co/ydmb74F/images.jpg,https://i.ibb.co/ydmb74F/images.jpg"; // do not touch it
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.ibb.co/ydmb74F/images.jpg,https://i.ibb.co/ydmb74F/images.jpg,https://i.ibb.co/ydmb74F/images.jpg"; // do not touch it
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
