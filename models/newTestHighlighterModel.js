const mongoose = require('mongoose');

const newTestHighlighterDataSchema = new mongoose.Schema({
  textQuoteSelector: {
    exact: String,
    prefix: String,
    suffix: String,
    quoteType: String,
  },
  articleId: String,
});

const newTestHighlighterData = mongoose.model('newTestHighlighterData', newTestHighlighterDataSchema);

module.exports = newTestHighlighterData;
