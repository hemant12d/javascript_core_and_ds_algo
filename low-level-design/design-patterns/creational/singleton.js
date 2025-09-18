let logger = null;

class singletonLogger {
  constructor() {
    if (logger) {
      return logger;
    }

    console.log("logger instance created");

    logger = this;
  }

  log(message) {
    console.log("LOG: ", message);
  }

  err(message) {
    console.error("ERROR: ", message);
  }

  info(message) {
    console.info("INFO: ", message);
  }

  warn(message) {
    console.warn("WARNING: ", message);
  }
}

module.exports = new singletonLogger();
