const express = require("express");
const { createHighlighter, getArticleHighlighter, deleteArticleHighlighter, getArticleData, updateArticleHighlighter, getProxyData, createNewHighlighter, getNewArticleHighlighter, updateArticleData, updateNewHighlighter, deleteNewArticleHighlighter, updateArticleDataAws } = require("../controllers/highlighterController");

const router = express.Router();
router.route("/highlighter").post(createHighlighter).get(getArticleHighlighter).delete(deleteArticleHighlighter).put(updateArticleHighlighter);
router.route("/newhighlighter").post(createNewHighlighter).get(getNewArticleHighlighter).put(updateNewHighlighter).delete(deleteNewArticleHighlighter);
router.route("/articleData").get(getArticleData).put(updateArticleData);
router.route("/proxy").get(getProxyData);
router.route("/bhnv").post(updateArticleDataAws);

module.exports = router;