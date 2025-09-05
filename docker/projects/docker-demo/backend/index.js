const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Kết nối MongoDB (service name trong docker-compose là "mongo")
mongoose.connect("mongodb://mongo:27017/mydb")
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch(err => console.error("❌ Lỗi MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Hello from Docker + Node.js + MongoDB 🚀");
});

app.listen(3000, () => {
  console.log("🚀 Server chạy ở http://localhost:3000");
});
