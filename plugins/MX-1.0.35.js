const axios = require("axios");
const astro_patch = require("../lib/plugins");

// Dog Picture Command
astro_patch.cmd(
  {
    pattern: "dog",
    desc: "Fetches a random dog picture",
    category: "Random Picture",  // Category Name
    filename: __filename,
    alias: ["randomdog", "dogpic"],
  },
  async (message) => {
    try {
      const apiUrl = "https://random-images-6flf.onrender.com/dog";
      const response = await axios.get(apiUrl);

      if (response && response.data && response.data.image) {
        const imageUrl = response.data.image;
        await message.reply({
          text: "Here is your random dog picture! 🐕",
          image: { url: imageUrl },
        });
      } else {
        return await message.reply("Sorry, couldn't fetch a dog picture at the moment.");
      }
    } catch (error) {
      console.error("Error fetching dog picture:", error);
      await message.reply("An error occurred while fetching the dog picture.");
    }
  }
);

// Cat Picture Command
astro_patch.cmd(
  {
    pattern: "cat",
    desc: "Fetches a random cat picture",
    category: "Random Picture",  // Category Name
    filename: __filename,
    alias: ["randomcat", "catpic"],
  },
  async (message) => {
    try {
      const apiUrl = "https://random-images-6flf.onrender.com/cat";
      const response = await axios.get(apiUrl);

      if (response && response.data && response.data.image) {
        const imageUrl = response.data.image;
        await message.reply({
          text: "Here is your random cat picture! 🐱",
          image: { url: imageUrl },
        });
      } else {
        return await message.reply("Sorry, couldn't fetch a cat picture at the moment.");
      }
    } catch (error) {
      console.error("Error fetching cat picture:", error);
      await message.reply("An error occurred while fetching the cat picture.");
    }
  }
);

// Naruto Picture Command
astro_patch.cmd(
  {
    pattern: "naruto",
    desc: "Fetches a random Naruto picture",
    category: "Random Picture",  // Category Name
    filename: __filename,
    alias: ["randomnaruto", "narutopic"],
  },
  async (message) => {
    try {
      const apiUrl = "https://random-images-6flf.onrender.com/naruto";
      const response = await axios.get(apiUrl);

      if (response && response.data && response.data.image) {
        const imageUrl = response.data.image;
        await message.reply({
          text: "Here is your random Naruto picture! 🌀",
          image: { url: imageUrl },
        });
      } else {
        return await message.reply("Sorry, couldn't fetch a Naruto picture at the moment.");
      }
    } catch (error) {
      console.error("Error fetching Naruto picture:", error);
      await message.reply("An error occurred while fetching the Naruto picture.");
    }
  }
);

// Car Picture Command
astro_patch.cmd(
  {
    pattern: "cars",
    desc: "Fetches a random car picture",
    category: "Random Picture",  // Category Name
    filename: __filename,
    alias: ["randomcars", "carpic"],
  },
  async (message) => {
    try {
      const apiUrl = "https://random-images-6flf.onrender.com/cars";
      const response = await axios.get(apiUrl);

      if (response && response.data && response.data.image) {
        const imageUrl = response.data.image;
        await message.reply({
          text: "Here is your random car picture! 🚗",
          image: { url: imageUrl },
        });
      } else {
        return await message.reply("Sorry, couldn't fetch a car picture at the moment.");
      }
    } catch (error) {
      console.error("Error fetching car picture:", error);
      await message.reply("An error occurred while fetching the car picture.");
    }
  }
);

// Animal Picture Command
astro_patch.cmd(
  {
    pattern: "animal",
    desc: "Fetches a random animal picture",
    category: "Random Picture",  // Category Name
    filename: __filename,
    alias: ["randomanimal", "animalpic"],
  },
  async (message) => {
    try {
      const apiUrl = "https://random-images-6flf.onrender.com/animal";
      const response = await axios.get(apiUrl);

      if (response && response.data && response.data.image) {
        const imageUrl = response.data.image;
        await message.reply({
          text: "Here is your random animal picture! 🦄",
          image: { url: imageUrl },
        });
      } else {
        return await message.reply("Sorry, couldn't fetch an animal picture at the moment.");
      }
    } catch (error) {
      console.error("Error fetching animal picture:", error);
      await message.reply("An error occurred while fetching the animal picture.");
    }
  }
);

// Random Picture Command (Fallback)
astro_patch.cmd(
  {
    pattern: "randompic",
    desc: "Fetches a random picture (any category)",
    category: "Random Picture",  // Category Name
    filename: __filename,
    alias: ["randompic"],
  },
  async (message) => {
    try {
      const apiUrl = "https://random-images-6flf.onrender.com/random";
      const response = await axios.get(apiUrl);

      if (response && response.data && response.data.image) {
        const imageUrl = response.data.image;
        await message.reply({
          text: "Here is your random picture! 🖼️",
          image: { url: imageUrl },
        });
      } else {
        return await message.reply("Sorry, couldn't fetch a random picture at the moment.");
      }
    } catch (error) {
      console.error("Error fetching random picture:", error);
      await message.reply("An error occurred while fetching the random picture.");
    }
  }
);




//animepic Command (Fallback)
astro_patch.cmd(
  {
    pattern: "animepic",
    desc: "Fetches a random picture (any category)",
    category: "Random Picture",  // Category Name
    filename: __filename,
    alias: ["randompic"],
  },
  async (message) => {
    try {
      const apiUrl = "https://random-images-6flf.onrender.com/animepic";
      const response = await axios.get(apiUrl);

      if (response && response.data && response.data.image) {
        const imageUrl = response.data.image;
        await message.reply({
          text: "Here is your anime picture! 🖼️",
          image: { url: imageUrl },
        });
      } else {
        return await message.reply("Sorry, couldn't fetch a random picture at the moment.");
      }
    } catch (error) {
      console.error("Error fetching random picture:", error);
      await message.reply("An error occurred while fetching the random picture.");
    }
  }
);
