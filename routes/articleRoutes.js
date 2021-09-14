const express = require('express');
const articleController = require('../controllers/articleController');
const router = express.Router();

//article
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticle);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;