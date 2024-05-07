const express = require("express");
const { createHighlighter, getArticleHighlighter, deleteArticleHighlighter } = require("../controllers/highlighterController");

const router = express.Router();
router.route("/highlighter").post(createHighlighter).get(getArticleHighlighter).delete(deleteArticleHighlighter);

module.exports = router;