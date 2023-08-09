const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.json({ msg: "123" }));
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.listen(3000, () => console.log("Server running on port 3000"));
