const express                = require('express');
const router                 = express.Router();
const postController      = require('../../controllers/post');
const manufacturerController = require('../../controllers/manufacturer');

router.get('/manufacturers', manufacturerController.all);

router.get('/post', postController.all);
router.get('/post/:id', postController.byId);
router.post('/post', postController.create);
router.put('/post/:id', postController.update);
router.delete('/post/:id', postController.remove);

module.exports = router;