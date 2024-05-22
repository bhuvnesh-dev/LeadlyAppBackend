const mongoose = require('mongoose');

const highlighterDataSchema = new mongoose.Schema({
  highlighterData: {
    endHTML: String,
    endIsText: Boolean,
    endNode: String,
    endOffset: Number,
    endTagName: String,
    startHTML: String,
    startIsText: Boolean,
    startNode: String,
    startOffset: Number,
    startTagName: String,
  },
  exactSelectedText: String,
  articleId: String,
  highlighterColor: {
    type: String,
    default: "yellow"
  },
  isRemoved: {
    type: Boolean,
    default: false,
  }
  // Add more fields as needed
});

const highlighterData = mongoose.model('highlighterData', highlighterDataSchema);

module.exports = highlighterData;
