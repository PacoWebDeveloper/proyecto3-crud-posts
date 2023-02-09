const router = require('express').Router()

const postsServices = require('./posts.services')

router.get('/posts', postsServices.getAllPosts)

router.get('/posts/:id', postsServices.getPostById)

router.post('/posts', postsServices.createPost)

router.put('/posts/:id', postsServices.updatePost)

router.patch('/posts/:id', postsServices.patchPost)

router.delete('/posts/:id', postsServices.detetePost)

module.exports = router