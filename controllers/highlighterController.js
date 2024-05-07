const HighlighterData = require('../models/highlighterModel');

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.createHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        const createHighlighter = await HighlighterData.create(req.body);
        if (createHighlighter) {
            res.status(201).json({
                success: true,
                id: createHighlighter._id,
            });
        }
        else {
            res.status(400).json({
                success: false,
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }

});

exports.getArticleHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        const articleId = req.query.articleId;
        console.log(articleId,"articleId==>>");
        const getArticleHighlighterData = await HighlighterData.find({articleId:articleId});
        if (getArticleHighlighterData) {
            res.status(200).json({
                success: true,
                data: getArticleHighlighterData
            });
        }
        else {
            res.status(400).json({
                success: false,
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }

});

exports.deleteArticleHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        const id = req.query.id;
        console.log(id,"articleId==>>");
        const getArticleHighlighterData = await HighlighterData.findByIdAndDelete(id);
        if (getArticleHighlighterData) {
            res.status(200).json({
                success: true,
            });
        }
        else {
            res.status(400).json({
                success: false,
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }

});