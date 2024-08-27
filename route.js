import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;

app.use(express.static(__dirname))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/home/index.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/pages/login/index.html")
})

app.listen(port, (req, res) => {
    console.log(`Request Method: ${port}`)
})
