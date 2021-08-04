// /* eslint-disable no-console, max-len */

// require('dotenv').config();

// const chalk = require('chalk');
// const { server: app } = require('./app');
// require('./router');
// const { tearDown } = require('./database/db');

// const port = process.env.PORT || 3000;
// const server = app.listen(port, () => {
//     console.log(`Backend Listening on port ${port}`);
// });

// let isShuttingDown = false;
// function shutdown() {
//     if (isShuttingDown) return;
//     isShuttingDown = true;

//     console.info(chalk.red('=================== Closing web connections...'));
//     Object.keys(connectionMap).forEach((connectionId) => connectionMap[connectionId].end());
//     console.info(chalk.red('=================== Closing web server...'));
//     server.close(() => {
//         console.info(chalk.red('=================== Web server closed. Closing database connection...'));
//         tearDown()
//             .then(() => {
//                 console.info(chalk.green('=================== Database connection closed.'));
//                 process.exit(0);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });

//         setTimeout(() => {
//             console.error(chalk.bgRed.black('Could not close connections in time, forcefully shutting down... '));
//             process.exit(1);
//         }, 2000);
//     });
// }

// process.on('SIGINT', shutdown);
// process.on('SIGTERM', shutdown);
