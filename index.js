const bot = require(__dirname + '/lib/astro');
const { VERSION } = require(__dirname + '/config');

const start = async () => {
    Debug.info(`MX-1.0 ${VERSION} 🤔`);
    try {
        await bot.init();
        bot.logger.info('HELLO WORLD 🌎');
        await bot.DATABASE.sync();
        await bot.connect();
    } catch (error) {
        Debug.error(error);
        start();
    }
};
start();


