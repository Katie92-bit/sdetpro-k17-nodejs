import ExternalLoginPage from "./ExternalLoginPage";
import InternalLoginPage from "./InternalLoginPage";
import LoginTestFlow from "./LoginTestFlow";

let i=new InternalLoginPage();
let e = ExternalLoginPage();
let loginTestFlow=new LoginTestFlow();

//Test Internal

loginTestFlow.login("teocodon", "neverknow", internalLoginPage);

//Test External
loginTestFlow.login("tidaohoa", "everyoneknow", externalLoginPage);
