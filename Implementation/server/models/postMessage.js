import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    writer: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;