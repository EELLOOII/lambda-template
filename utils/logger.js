export const logInfo = (message, data = {}) => {
  console.log(JSON.stringify({ level: "INFO", message, ...data }));
};

export const logError = (message, error) => {
  console.error(JSON.stringify({
    level: "ERROR",
    message,
    error: error.message || error,
    stack: error.stack,
  }));
};
