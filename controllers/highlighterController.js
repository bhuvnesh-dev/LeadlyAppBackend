const HighlighterData = require('../models/highlighterModel');
const NewTestHighlighterData = require('../models/newTestHighlighterModel');
const axios = require('axios');

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ArticleModel = require('../models/articleModel');
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

exports.createNewHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        console.log(req.body.textQuoteSelector, "req.body==>>>");
        const createHighlighter = await NewTestHighlighterData.create(req.body);
        console.log(createHighlighter, "createHighlighter===>>>")
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
        console.log(error, "error for this")
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }

});

exports.getArticleHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        const articleId = req.query.articleId;
        console.log(articleId, "articleId==>>");
        const getArticleHighlighterData = await HighlighterData.find({ articleId: articleId });
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

exports.getNewArticleHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        const articleId = req.query.articleId;
        console.log(articleId, "articleId==>>");
        const getArticleHighlighterData = await NewTestHighlighterData.find({ articleId: articleId });
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
        console.log(id, "articleId==>>");
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

exports.deleteNewArticleHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        const id = req.query.id;
        console.log(id, "articleId==>>");
        const getArticleHighlighterData = await NewTestHighlighterData.findByIdAndDelete(id);
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


exports.updateArticleDataAws = catchAsyncErrors(async (req, res, next) => {
    try {
        console.log(req.body,"body data")
        const articleData = await axios.post("http://api.edpodia.co.uk/v1/dev_update/upwork/bhnv",{...req.body});
        console.log(articleData,"articleData Addded");
        if (articleData.data.status === 200) {
            res.status(200).json({
                success: true,
                message: "success",
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
// exports.getArticleData = catchAsyncErrors(async (req, res, next) => {
//     try {
//         const articleData = await ArticleModel.findById("667a8e2219dd938dfc5c43aa");
//         console.log(articleData)
//         if (articleData) {
//             res.status(200).json({
//                 success: true,
//                 data: articleData,
//             });
//         }

//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: error.message,
//         });
//     }
// })

exports.updateArticleData = catchAsyncErrors(async (req, res, next) => {
    try {
        const { id, value } = req.body;
        const articleData = await ArticleModel.findById("667a8e2219dd938dfc5c43aa");
        const block = articleData.notes[0].blocks.id(id);
        block.value = value;
        const success = await articleData.save();
        if (success) {
            res.status(200).json({
                success: true,
                message: "Updated Successfully!",
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
})

exports.updateNewHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        console.log(req.query)
        const { id } = req.query;
        const {value} = req.body;
        console.log(id,value,"id and value")
        const highlighterData = await NewTestHighlighterData.findById(id);
        console.log(highlighterData,"highlighterData")
        const block = highlighterData.textQuoteSelector;
        block.exact = value;
        const success = await highlighterData.save();
        if (success) {
            res.status(200).json({
                success: true,
                message: "Updated Successfully!",
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
})


exports.updateArticleHighlighter = catchAsyncErrors(async (req, res, next) => {
    try {
        const id = req.query.id;
        console.log(id, "articleId==>>");
        const color = req.body.highlighterColor;
        const getArticleHighlighterData = await HighlighterData.findByIdAndUpdate(id, {
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

exports.getProxyData = catchAsyncErrors(async (req, res, next) => {
    // const url = req.body.url;
    const queryParams = req.query;

    console.log(queryParams, "queryParams===>>");
    let url = `https://app.barseltid.no/${queryParams.url ? queryParams.url : ''}/?json` +
        `${queryParams.folder_id ? `&folder_id=${queryParams.folder_id}` : ''}` +
        `${queryParams.only_with_dates ? `&only_with_dates=${queryParams.only_with_dates}` : ''}` +
        `${queryParams.sort_by ? `&sort_by=${queryParams.sort_by}` : ''}` +
        `${queryParams.pos ? `&pos=${queryParams.pos}` : ''}` +
        `${queryParams.uid ? `&uid=110ec58a-a0f2-4ac4-8393-c866d813b8d1` : ''}` +
        `${queryParams.item_id ? `&item_id=${queryParams.item_id}` : ''}`;
    console.log(url, "url")
    if (url.endsWith("/?json")) {
        // Remove "/?json" from the end of the URL
        url = url.slice(0, -6); // Remove the last 6 characters
    }
    try {
        const articleData = await axios.get(url);
        console.log(articleData.data.status, "articleData==>>")
        if (articleData.data) {
            res.status(200).json({
                success: true,
                data: articleData.data,
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