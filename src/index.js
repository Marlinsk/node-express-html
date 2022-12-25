const express = require("express")
const router = require("./router")
const path = require("path")
const port = 5000
const app = express()

app.use(express.static(path.join(__dirname, "../public")))
app.use("/", router)

app.listen(port, () => {
  console.log(`Server starting 🚀 http://localhost:${port}`)
});