const mongoose = require('mongoose');
let quizSetSchema = mongoose.Schema({ 
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: { type: Array, required: true },
});
module.exports = mongoose.model('quizSet', quizSet);