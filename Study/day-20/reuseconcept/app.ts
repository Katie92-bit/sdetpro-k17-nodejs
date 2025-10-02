import UserApi from "./UserApi";

main();
async function main() {
    const baseUrl = "jsonplaceholder";
    const userApiHander = new UserApi(baseUrl);

    //Get all users
    const allUsers: any[] = await userApiHander.getUsers();

    //Create user
    const user = {
        name: "Teo codon",
        password: "aicungbit"
    }

    const userCreationResponse = await userApiHander.createUser(user);
    console.log(userCreationResponse);


}