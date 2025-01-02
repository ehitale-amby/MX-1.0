const axios = require("axios");
const astro_patch = require("../lib/plugins");
const Config = require("../config");

astro_patch.cmd(
  {
    pattern: "randompicture",
    desc: "Fetches a random picture (dog, cat, car, etc.)",
    category: "random",
    filename: __filename,
    use: "<category>",
    alias: ["randompic", "randomimage"],
  },
  async (message, query) => {
    try {
      // Categories: dog, cat, car, naruto, animal, random, animpic
      const categories = ["dog", "cat", "cars", "naruto", "animal", "random", "animpic"];
      
      if (!query || !categories.includes(query.toLowerCase())) {
        return await message.reply(
          `Please provide a valid category. Available categories are: ${categories.join(", ")}`
        );
      }

      // Build the API URL
      const apiUrl = `https://random-images-6flf.onrender.com/${query.toLowerCase()}`;
      const response = await axios.get(apiUrl);

      if (response && response.data && response.data.image) {
        const imageUrl = response.data.image;

        // Send the image to the user
        await message.reply({
          text: `Here is your random ${query} picture! 🖼️`,
          image: { url: imageUrl },
        });
      } else {
        return await message.reply(`Sorry, couldn't fetch a ${query} picture at the moment.`);
      }
    } catch (error) {
      console.error("Error fetching random picture:", error);
      await message.reply("An error occurred while fetching the picture.");
    }
  }
);

astro_patch.cmd(
  {
    pattern: "randomanimepic",
    desc: "Fetches a random anime picture",
    category: "random",
    filename: __filename,
    use: "",
    alias: ["randomanime", "randomanimpic"],
  },
  async (message) => {
    try {
      // Fetch random anime picture
      const apiUrl = "https://random-images-6flf.onrender.com/animpic";
      const response = await axios.get(apiUrl);

      if (response && response.data && response.data.image) {
        const imageUrl = response.data.image;

        // Send the image to the user
        await message.reply({
          text: "Here is your random anime picture! 🌸",
          image: { url: imageUrl },
        });
      } else {
        return await message.reply("Sorry, couldn't fetch an anime picture at the moment.");
      }
    } catch (error) {
      console.error("Error fetching random anime picture:", error);
      await message.reply("An error occurred while fetching the anime picture.");
    }
  }
);
