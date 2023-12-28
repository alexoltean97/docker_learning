import mongoose from 'mongoose';

const { Schema } = mongoose;

const favoriteSchema = new Schema({
    type: String, // 'movie' | 'character'
    name: String,
    url: String
});

export const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;