const fs = require("fs");

function logReqRes(filename) {
  return (req, res, next) => {
    // Logs to the specified filename with a timestamp, IP, method, and path
    fs.appendFile(filename, `${Date.now()}: ${req.ip} ${req.method} ${req.path}\n`, (err) => {
      if (err) console.error("Logging error:", err);
      next(); // Only proceeds to the next middleware if logging is complete
    });
  };
}

module.exports = {
  logReqRes,
};
