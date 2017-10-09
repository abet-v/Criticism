var   mongoose = require('mongoose');
const Schema    = mongoose.Schema,
      model     = mongoose.model.bind(mongoose),
      ObjectId  = mongoose.Schema.Types.ObjectId;

const postSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  // One to many relationship
  manufacturer: {type: ObjectId, ref: 'Manufacturer'}
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

const Post      = model('Post', postSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema)

module.exports = {Post, Manufacturer};