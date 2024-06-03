import express from "express";
import http from "http";

const web = express();
web.use((req, res, next) => {
  res.status(404).json({
    message: "page not found",
  });
});

const server = http.createServer(web);
server.listen(80, () => {
  console.log("server running");
});
