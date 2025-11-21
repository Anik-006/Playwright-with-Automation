export default class CommonActions{
    constructor(page){
        this.page = page;
    }
    async navigateUrl(url){
        //await this.page.pause();
        await this.page.goto(url);
    }
    async clickElement(selector){
        await this.page.click(selector);
    }
    async fillElement(selector, text){
        await this.page.fill(selector,text);
    }
    
}