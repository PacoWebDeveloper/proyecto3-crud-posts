const postController = require('./posts.controllers')

const postsServices = {
    getAllPosts : (req, res) => {
        postController.findAllPosts()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    getPostById : (req, res) => {
        const id = req.params.id

        postController.findPostById(id)
            .then(data => {
                if (data)
                    res.status(200).json(data)
                else
                    res.status(404).json({message: 'Post not found'})
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    createPost : (req, res) => {
        
        const postObj = req.body
        if (!postObj.content || !postObj.userName || !postObj.published)
        res.status(400).json({
            message: 'Missing data',
            fields: {
                content: 'String',
                userName: 'String',
                isPublished: 'Boolean'
            }
        })
        else
            postController.createPost(postObj)
                .then(data => {
                    res.status(201).json(data)
                })
                .catch(err => {
                    res.status(400).json({message: 'It is possible some data is missing', err})
                })
    },
    updatePost : (req, res) => {
        const id = req.params.id
        const postObj = req.body
        
        if (!postObj.content || !postObj.userName || !postObj.published)
            res.status(400).json({
                message: 'Missing data',
                fields: {
                    content: 'String',
                    userName: 'String',
                    isPublished: 'Boolean'
                }
            })
        else    
            postController.updatePost(id, postObj)
                .then(data => {
                    if (data)
                        res.status(200).json({message: 'Post updated successfully'})
                    else
                        res.status(404).json({message: 'Post not found'})
                })
                .catch(err => {
                    res.status(304).json({message: 'Post not modified', err})
                })
    },
    patchPost : (req, res) => {
        const id = req.params.id
        const postObj = req.body

        postController.updatePost(id, postObj)
            .then(data => {
                if (data)
                    res.status(200).json({message: 'Post updated successfully'})
                else
                    res.status(404).json({message: 'Post not found'})
            })
            .catch(err => {
                res.status(304).json({message: 'Post not modified', err})
            })
    },
    detetePost : (req, res) => {
        const  id  = req.params.id

        postController.deletePost(id)
            .then(data => {
                if (data)
                    res.status(200).json({message: 'Post deleted'})
                else
                    res.status(404).json({message: 'Post not found'})
            })
            .catch(err => {
                res.status(400).json({err})
            })
    }
}

module.exports = postsServices