const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the ReadTime schema
const ReadTimeSchema = new Schema({
    timeLabel: { type: String, required: true },
    time: { type: String, required: true }
});

// Define the Block schema
const BlockSchema = new Schema({
    value: { type: String },
    htmlValue: { type: String },
    assetUri: { type: String },
    assetUrl: { type: String },
    currentBlock: { type: String, required: true },
    caption: { type: String },
    lastModified: { type: Schema.Types.ObjectId, ref: 'User' },
    sortPosition: { type: Number }
});

// Define the Ratings schema
const RatingsSchema = new Schema({
    currentRating: { type: Number, required: true }
});

// Define the Notes schema
const NotesSchema = new Schema({
    isPublished: { type: Boolean, default: false },
    isExample: { type: Boolean, default: false },
    isDefinition: { type: Boolean, default: false },
    plans: [{ type: String }],
    status: { type: String, required: true },
    sortPosition: { type: Number, required: true },
    hideNote: { type: Boolean, default: false },
    readTime: ReadTimeSchema,
    title: { type: String, required: true },
    blocks: [BlockSchema],
    ratings: RatingsSchema,
    changeStatus: { type: Boolean, default: true },
    viewCommentButton: { type: Boolean, default: true },
    canSave: { type: Boolean, default: true },
    nonPermittedTransition: [{ type: String }],
    activeComments: { type: Number, default: 0 },
    pendingToResolve: { type: Number, default: 0 }
});

// Define the Chapter schema
const ChapterSchema = new Schema({
    status: { type: String, required: true },
    name: { type: String, required: true },
    key: { type: String, required: true },
    mindMap: { type: String },
    mindMapFull: { type: String },
    id: { type: Schema.Types.ObjectId, required: true }
});

// Define the main schema for the data
const ArticleSchema = new Schema({
    sortPosition: { type: Number, required: true },
    status: { type: String, required: true },
    name: { type: String, required: true },
    class: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    chapter: ChapterSchema,
    topic: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    cloneParent: { type: Schema.Types.ObjectId, ref: 'Parent' },
    lastUpdatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    notes: [NotesSchema]
});

const ArticleModel = mongoose.model('article', ArticleSchema);

module.exports = ArticleModel;
