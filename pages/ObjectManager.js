import LoginPage from "./LoginPage";


export default class ObjectManager{
    constructor(page){
        this.page = page;
        this.loginpage = new LoginPage(page);
    }
}