const HighlighterData = require('../models/highlighterModel');
const axios = require('axios');

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

exports.getArticleData = catchAsyncErrors(async (req, res, next) => {
    try {
        const articleData = await axios.get("http://ec2-3-16-231-109.us-east-2.compute.amazonaws.com/v1/admin/shareableContents?subtopicID=65fe3ef1943c0ae041bdd852&commentPage=true");
        if (articleData.data.status === 200) {
            res.status(200).json({
                success: true,
                data: articleData.data.data,
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

exports.updateArticleHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        const id = req.query.id;
        console.log(id,"articleId==>>");
        const color = req.body.highlighterColor;
        const getArticleHighlighterData = await HighlighterData.findByIdAndUpdate(id,{
            highlighterColor: color,
        });
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