const readline = require("readline-sync");

const URL = 'https://jsonplaceholder.typicode.com';
const USER_ENDPOINT = `${URL}/users`;
const POST_ENDPOINT = `${URL}/posts`;

//Usage
app();

function app() {
    let isInteracting = true;
    while (isInteracting) {
        handlePromise();
        break;
    }
    function handlePromise() {
        if (!isInteracting) return;
        printMenu();
        getUserOption()
            .then(function (userOption) {
                switch (userOption) {
                    case 1:
                        return handleGetAPost();
                        break;
                    case 2:
                        return handleGetAllPosts();
                        break;
                    case 0:
                        isInteracting = false;
                        console.log("See you again.");
                        break;
                    default:
                        console.log("Invalid option!");
                }
            }).then(handlePromise);

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
        resolve(Number(readline.question("Your option:"))
        )
    })
}

function handleGetAPost() {
    const userId = getUserInput('userID: ');
    return getAllPosts(userId)
        .then(function (returnedData) {
            if (returnedData.existUser) {
                const postId = getUserInput('postId:');
                const targetPost = returnedData.userRelatedPosts.filter(function (post) {
                    return post.id === postId;
                });
                console.log(targetPost);

            }
        })
}



function handleGetAllPosts() {
    const userId = getUserInput('userId: ');
    return getAllPosts(userId)
        .then(function (returnedData) {
            if (returnedData.existUser) {
                console.log(returnedData.userRelatedPosts);
            }
        })
}


//Support functions
function getAllPosts(userId) {
    return fetch(`${USER_ENDPOINT}/${userId}`)
        .then(function (userResponse) {
            const existUser = userResponse.ok;
            if (existUser) {
                return fetch(POST_ENDPOINT)
                    .then(function (response) {
                        return response.json()
                            .then(function (postResponse) {
                                const userRelatedPosts = postResponse.filter(function (post) {
                                    return post.userId === userId;
                                });
                                return {
                                    existUser: true,
                                    userRelatedPosts: userRelatedPosts
                                }
                            })

                    })
            } else {
                console.log(`User ${userId} does not exist `);
                return { hasUser: false };

            }
        })
}

function getUserInput(question) {
    return Number(readline.question(question));
}



