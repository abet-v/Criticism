const Model = require('../model');
const {Post, Manufacturer} = Model;

const postController = {
  all (req, res) {
    // Returns all posts
    Post.find({})
    // alongside it's manufacturer
    // information
      .populate('manufacturer')
      .exec((err, posts) => res.json(posts))
  },
  byId (req, res) {
    const idParam = req.params.id;
    // Returns a single post
    // based on the passed in ID parameter
    Post
      .findOne({_id: idParam})
      // as well as it's manufacturer
      .populate('manufacturer')
      .exec( (err, post) => res.json(post) );
  },
  create (req, res) {
    const requestBody = req.body;
    // Creates a new record from a submitted form
    const newPost = new Post(requestBody);
    // and saves the record to
    // the data base
    newPost.save( (err, saved) => {
      // Returns the saved post
      // after a successful save
      Post
        .findOne({_id: saved._id})
        .populate('manufacturer')
        .exec((err, post) => res.json(post));
    } )
  },
  update (req, res) {
    const idParam = req.params.id;
    let post = req.body;
    // Finds a post to be updated
    Post.findOne({_id: idParam}, (err, data) => {
      // Updates the post payload
      data.name = post.name;
      data.description = post.description;
      data.image = post.image;
      data.price = post.price;
      data.manufacturer = post.manufacturer;
      // Saves the post
      data.save((err, updated) => res.json(updated));
    })
  },
  remove (req, res) {
    const idParam = req.params.id;
    // Removes a post
    Post.findOne({_id: idParam}).remove( (err, removed) => res.json(idParam) )
  }
};

module.exports = postController;