import { Page } from "@playwright/test";
export default class ToDoPage {
    private page:Page;
    constructor (page:Page){
        this.page=page;
    }
    private get welcomeMessage(){
        return '[data-testid="welcome"]';
    }
    verifiy (){
         return this.page.locator(this.welcomeMessage)
    }

}