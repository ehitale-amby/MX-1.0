const { smd, bot_ } = require("../lib");

smd(
  {
    cmdname: "reportbug",
    alias: ["bugreport", "report"],
    desc: "Report a bug to the developer",
    fromMe: true,
    type: "user",
    use: "<bug description>",
    filename: __filename,
  },
  async (_0x5c3dd1, _0x543e4e) => {
    try {
      let bugDescription = _0x543e4e.trim();
      if (!bugDescription) {
        return await _0x5c3dd1.reply("*Please provide a description of the bug you encountered.*");
      }

      // Prepare the bug report message
      let reportMessage = `*Bug Report from User: ${_0x5c3dd1.user}*\n\nDescription:\n${bugDescription}`;

      // Send the report to your WhatsApp number
      const developerNumber = "2349021506036"; // Replace with your WhatsApp number
      await _0x5c3dd1.bot.sendMessage(developerNumber, {
        text: reportMessage,
      });

      return await _0x5c3dd1.reply("*Bug report sent successfully! Thank you for your feedback.*");

    } catch (_0x4bb48d) {
      await _0x5c3dd1.error(
        _0x4bb48d + "\n\nCommand: ReportBug ",
        _0x4bb48d
      );
    }
  }
);
