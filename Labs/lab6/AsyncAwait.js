const readline = require("readline-sync");

const URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${URL}/users`;
const POST_ENDPOINT = `${URL}/posts`;

//Usage
app();

async function app() {
    let isInteracting = true;

    while (isInteracting) {
        printMenu();
        const userOption = await getUserOption();

        switch (userOption) {
            case 1:
                await handleGetAPost();
                break;
            case 2:
                await handleGetAllPosts();
                break;
            case 0:
                isInteracting = false;
                console.log("See you again.");
                break;
            default:
                console.log("Invalid option!");
        }
    }
}

function printMenu() {
    console.log(`
    1. Get a post content
    2. Get all posts
    0. Exit
  `);
}

function getUserOption() {
    return new Promise(function (resolve) {
        const option = Number(readline.question("Your option: "));
        resolve(option);
    });
}

async function handleGetAPost() {
    const userId = getUserInput("userId: ");
    const returnedData = await getAllPosts(userId);

    if (returnedData.existUser) {
        const postId = getUserInput("postId: ");
        const targetPost = returnedData.userRelatedPosts.filter(function (post) {
            return post.id === postId;
        });
        console.log(targetPost);
    }
}

async function handleGetAllPosts() {
    const userId = getUserInput("userId: ");
    const returnedData = await getAllPosts(userId);

    if (returnedData.existUser) {
        console.log(returnedData.userRelatedPosts);
    }
}

// Support functions
async function getAllPosts(userId) {
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

function getUserInput(question) {
    return Number(readline.question(question));
}
