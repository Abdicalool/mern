const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("App is Running"));

//define Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/user", require("./routes/api/users"));
const PORT = 5000;

app.listen(PORT, () => console.log(`Server are running on port  ${PORT}`));
