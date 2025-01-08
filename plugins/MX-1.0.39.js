const { smd } = require("../lib");

smd(
  {
    cmdname: "cats",
    desc: "Send Images of randome Cats!",
    type: "fun",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://cataas.com/cat",
        { caption: "*meyaoooooooooooooon!*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: cat`, e, false);
    }
  }
);
