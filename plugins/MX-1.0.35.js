const axios = require('axios'); // Import axios to make HTTP requests
const astro_patch = require("../lib/plugins");

module.exports = async (context) => {
    const { client, m, prefix } = context;
    const botname = process.env.BOTNAME || "MX-1.0"; // Bot Name

    // Dog Picture Command
    astro_patch.cmd(
        {
            pattern: "dog",
            desc: "Fetches a random dog picture",
            category: "Random Picture",
            filename: __filename,
            alias: ["randomdog", "dogpic"],
        },
        async (message) => {
            try {
                const apiUrl = 'https://random-images-6flf.onrender.com/api/images/dog';
                const response = await axios.get(apiUrl);

                if (response.data.images && response.data.images.length > 0) {
                    const randomImage = response.data.images[Math.floor(Math.random() * response.data.images.length)];
                    const messageText = `Hello ${m.pushName}, here is a random dog image for you! 🐕\n\nCategory: DOG\n\nPOWERED BY MXGAMECODER.`;

                    await client.sendMessage(m.chat, {
                        image: { url: randomImage },
                        caption: messageText,
                        fileLength: "9999999999898989899999999"
                    }, { quoted: m });
                } else {
                    throw new Error('No images found for dog');
                }
            } catch (error) {
                console.error('Error fetching dog picture:', error);
                await client.sendMessage(m.chat, { text: "Sorry, couldn't fetch a dog picture at the moment." });
            }
        }
    );

    // Cat Picture Command
    astro_patch.cmd(
        {
            pattern: "cat",
            desc: "Fetches a random cat picture",
            category: "Random Picture",
            filename: __filename,
            alias: ["randomcat", "catpic"],
        },
        async (message) => {
            try {
                const apiUrl = 'https://random-images-6flf.onrender.com/api/images/cat';
                const response = await axios.get(apiUrl);

                if (response.data.images && response.data.images.length > 0) {
                    const randomImage = response.data.images[Math.floor(Math.random() * response.data.images.length)];
                    const messageText = `Hello ${m.pushName}, here is a random cat image for you! 🐱\n\nCategory: CAT\n\nPOWERED BY MXGAMECODER.`;

                    await client.sendMessage(m.chat, {
                        image: { url: randomImage },
                        caption: messageText,
                        fileLength: "9999999999898989899999999"
                    }, { quoted: m });
                } else {
                    throw new Error('No images found for cat');
                }
            } catch (error) {
                console.error('Error fetching cat picture:', error);
                await client.sendMessage(m.chat, { text: "Sorry, couldn't fetch a cat picture at the moment." });
            }
        }
    );

    // Naruto Picture Command
    astro_patch.cmd(
        {
            pattern: "naruto",
            desc: "Fetches a random Naruto picture",
            category: "Random Picture",
            filename: __filename,
            alias: ["randomnaruto", "narutopic"],
        },
        async (message) => {
            try {
                const apiUrl = 'https://random-images-6flf.onrender.com/api/images/naruto';
                const response = await axios.get(apiUrl);

                if (response.data.images && response.data.images.length > 0) {
                    const randomImage = response.data.images[Math.floor(Math.random() * response.data.images.length)];
                    const messageText = `Hello ${m.pushName}, here is a random Naruto image for you! 🌀\n\nCategory: NARUTO\n\nPOWERED BY MXGAMECODER.`;

                    await client.sendMessage(m.chat, {
                        image: { url: randomImage },
                        caption: messageText,
                        fileLength: "9999999999898989899999999"
                    }, { quoted: m });
                } else {
                    throw new Error('No images found for naruto');
                }
            } catch (error) {
                console.error('Error fetching naruto picture:', error);
                await client.sendMessage(m.chat, { text: "Sorry, couldn't fetch a Naruto picture at the moment." });
            }
        }
    );

    // Car Picture Command
    astro_patch.cmd(
        {
            pattern: "cars",
            desc: "Fetches a random car picture",
            category: "Random Picture",
            filename: __filename,
            alias: ["randomcars", "carpic"],
        },
        async (message) => {
            try {
                const apiUrl = 'https://random-images-6flf.onrender.com/api/images/cars';
                const response = await axios.get(apiUrl);

                if (response.data.images && response.data.images.length > 0) {
                    const randomImage = response.data.images[Math.floor(Math.random() * response.data.images.length)];
                    const messageText = `Hello ${m.pushName}, here is a random car image for you! 🚗\n\nCategory: CARS\n\nPOWERED BY MXGAMECODER.`;

                    await client.sendMessage(m.chat, {
                        image: { url: randomImage },
                        caption: messageText,
                        fileLength: "9999999999898989899999999"
                    }, { quoted: m });
                } else {
                    throw new Error('No images found for cars');
                }
            } catch (error) {
                console.error('Error fetching car picture:', error);
                await client.sendMessage(m.chat, { text: "Sorry, couldn't fetch a car picture at the moment." });
            }
        }
    );

    // Animal Picture Command
    astro_patch.cmd(
        {
            pattern: "animal",
            desc: "Fetches a random animal picture",
            category: "Random Picture",
            filename: __filename,
            alias: ["randomanimal", "animalpic"],
        },
        async (message) => {
            try {
                const apiUrl = 'https://random-images-6flf.onrender.com/api/images/animal';
                const response = await axios.get(apiUrl);

                if (response.data.images && response.data.images.length > 0) {
                    const randomImage = response.data.images[Math.floor(Math.random() * response.data.images.length)];
                    const messageText = `Hello ${m.pushName}, here is a random animal image for you! 🦄\n\nCategory: ANIMAL\n\nPOWERED BY MXGAMECODER.`;

                    await client.sendMessage(m.chat, {
                        image: { url: randomImage },
                        caption: messageText,
                        fileLength: "9999999999898989899999999"
                    }, { quoted: m });
                } else {
                    throw new Error('No images found for animal');
                }
            } catch (error) {
                console.error('Error fetching animal picture:', error);
                await client.sendMessage(m.chat, { text: "Sorry, couldn't fetch an animal picture at the moment." });
            }
        }
    );

    // Random Picture Command
    astro_patch.cmd(
        {
            pattern: "randompic",
            desc: "Fetches a random picture (any category)",
            category: "Random Picture",
            filename: __filename,
            alias: ["randompic"],
        },
        async (message) => {
            try {
                const apiUrl = 'https://random-images-6flf.onrender.com/api/images/random';
                const response = await axios.get(apiUrl);

                if (response.data.images && response.data.images.length > 0) {
                    const randomImage = response.data.images[Math.floor(Math.random() * response.data.images.length)];
                    const messageText = `Hello ${m.pushName}, here is a random picture for you! 🖼️\n\nCategory: RANDOM\n\nPOWERED BY MXGAMECODER.`;

                    await client.sendMessage(m.chat, {
                        image: { url: randomImage },
                        caption: messageText,
                        fileLength: "9999999999898989899999999"
                    }, { quoted: m });
                } else {
                    throw new Error('No images found for random');
                }
            } catch (error) {
                console.error('Error fetching random picture:', error);
                await client.sendMessage(m.chat, { text: "Sorry, couldn't fetch a random picture at the moment." });
            }
        }
    );

    // Anime Picture Command
    astro_patch.cmd(
        {
            pattern: "animepic",
            desc: "Fetches a random anime picture",
            category: "Random Picture",
            filename: __filename,
            alias: ["randomanimepic", "animepic"],
        },
        async (message) => {
            try {
                const apiUrl = 'https://random-images-6flf.onrender.com/api/images/animepic';
                const response = await axios.get(apiUrl);

                if (response.data.images && response.data.images.length > 0) {
                    const randomImage = response.data.images[Math.floor(Math.random() * response.data.images.length)];
                    const messageText = `Hello ${m.pushName}, here is a random anime image for you! 🎥\n\nCategory: ANIME\n\nPOWERED BY MXGAMECODER.`;

                    await client.sendMessage(m.chat, {
                        image: { url: randomImage },
                        caption: messageText,
                        fileLength: "9999999999898989899999999"
                    }, { quoted: m });
                } else {
                    throw new Error('No images found for animepic');
                }
            } catch (error) {
                console.error('Error fetching anime picture:', error);
                await client.sendMessage(m.chat, { text: "Sorry, couldn't fetch an anime picture at the moment." });
            }
        }
    );
};
