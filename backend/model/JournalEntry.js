const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JournalEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('JournalEntry', JournalEntrySchema);
