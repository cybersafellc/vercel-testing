import express from "express";
import http from "http";
import dotenv from "dotenv";
dotenv.config();

const web = express();
web.use((req, res, next) => {
  res.status(404).json({
    message: "page not found",
  });
});

const server = http.createServer(web);
server.listen(process.env.PORT, () => {
  console.log("server running");
});
