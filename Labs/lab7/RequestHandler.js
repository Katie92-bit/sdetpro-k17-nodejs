const Post = require("./Post");

const URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${URL}/users`;
const POST_ENDPOINT = `${URL}/posts`;

// RequestHandler.js
class RequestHandler {

    async handleGetTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
        const returnedData = await this._getAllPosts(userId);
        if (returnedData.existUser) {
            const targetPost = returnedData.userRelatedPosts.find(p => p.id === postId);
            if(!targetPost){
                console.log(`Cannot find post: ${postId} for the user: ${userId}`);
                return null;
            }
            return new Post(targetPost.userId, targetPost.id, targetPost.title, targetPost.body);
        }

    }


    async handleGetAllPosts(userId) {
        const returnedData = await this._getAllPosts(userId);
        if (returnedData.existUser) {
            return returnedData.userRelatedPosts.map(
                p => new Post(p.userId, p.id, p.title, p.body)
            )
        }

    }

    async _getAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const userResponse = await fetch(`${USER_ENDPOINT}/${userId}`);
        const existUser = userResponse.ok;

        if (!existUser) {
            console.log(`User ${userId} does not exist`);
            return { existUser: false };
        }

        const response = await fetch(POST_ENDPOINT);
        const postResponse = await response.json();

        const userRelatedPosts = postResponse.filter(function (post) {
            return post.userId === userId
        });
        return {
            existUser: true,
            userRelatedPosts: userRelatedPosts,
        };
    }
}

module.exports = RequestHandler;