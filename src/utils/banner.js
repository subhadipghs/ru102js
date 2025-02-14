const logger = require('./logger');

/**
 * Displays a RediSolar banner as an into level log message.
 */
const showBanner = () => {
  logger.info(
    `
    ____           ___ _____       __
   / __ \\___  ____/ (_) ___/____  / /___ ______
  / /_/ / _ \\/ __  / /\\__ \\/ __ \\/ / __ \`/ ___/
 / _, _/  __/ /_/ / /___/ / /_/ / / /_/ / /
/_/ |_|\\___/\\__,_/_//____/\\____/_/\\__,_/_/
    `,
  );
};

module.exports = showBanner;
