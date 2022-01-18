const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("App is Running"));
const PORT = 5000;

app.listen(PORT, () => console.log(`Server are running on port  ${PORT}`));
