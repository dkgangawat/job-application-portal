import app from "./app";
import config from "./config/envConfig";
process.on("uncaughtException", (err) => {
  console.log(
    `Uncaught Exception: ${500} - ${err.message}, Stack: ${err.stack}`
  );
  process.exit(1);
});

const server = app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});

process.on("unhandledRejection", (err: any) => {
  console.log(
    `Unhandled Rejection: ${500} - ${err.message}, Stack: ${err.stack}`
  );
  server.close(() => {
    process.exit(1);
  });
});
