const express = require("express");
const { createHighlighter, getArticleHighlighter, deleteArticleHighlighter, getArticleData, updateArticleHighlighter } = require("../controllers/highlighterController");

const router = express.Router();
router.route("/highlighter").post(createHighlighter).get(getArticleHighlighter).delete(deleteArticleHighlighter).put(updateArticleHighlighter);
router.route("/articleData").get(getArticleData);

module.exports = router;