const express = require('express');
const router = express.Router();
const Posts = require('../models/postsModel');
const catchAsync = require('../utils/catchAsync');

router.get('/likes', catchAsync(async (req, res, next) => {
    const posts = await Posts.find({ liked: true });
    console.log(posts);
    res.status(200).json({
        posts
    })
}))

router.get('/', catchAsync(async (req, res, next) => {
    let skip = 0, limitNo = 20;
    if (req.query.page) {
        const pageNo = req.query.page * 1;
        limitNo = req.query.limit * 1;
        skip = (pageNo - 1) * limitNo;
    }
    const posts = await Posts.find().skip(skip).limit(limitNo);
    console.log(posts);
    res.status(200).json({
        length: posts.length,
        posts
    })
}))
router.post('/toggleLike', catchAsync(async (req, res, next) => {
    const post = await Posts.findById(req.body.id);
    if (post) {
        post.liked = !post.liked;
        await post.save();
        res.status(200).json({
            status: 'Success'
        })
    }
}))
module.exports = router;