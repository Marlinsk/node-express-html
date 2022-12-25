const express = require("express")
const path = require("path")

const router = express.Router()
const basePath = path.join(__dirname, "pages")

router.get("/", (req, res) => {
  return res.sendFile(`${basePath}/main.html`)
});

router.use(function(req, res, next) {
  return res.status(404).sendFile(`${basePath}/404.html`)
})

module.exports = router