// TestPostModel.js
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11() {
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object
    const handler = new RequestHandler();
    // const post = ...
    const post = await handler.handleGetTargetPost(userId, postId);
    if (post) {
        console.log(`Post ${postId} of ${userId}: ${post.id} ${post.title}`);
    } else {
        console.log(`Post ${postId} of ${userId} NOT FOUND`);

    }
    // const allPost = ...

    const allPost = await handler.handleGetAllPosts(userId);
    if (allPost.length > 0) {
        console.log(`All posts of user ${userId}: `);
        for (const p of allPost) {
            console.log(`- [${p.id}] ${p.title}`);
        }

    } else {
        console.log(`There is no post for user ${userId}`);

    }
}