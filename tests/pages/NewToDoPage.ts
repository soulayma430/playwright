import { Page } from "@playwright/test";
export default class NewToDoPage {
    private page :Page ;
    constructor (page :Page){
        this.page=page 
    }
    private get ToDoItem(){
        return '[data-testid="todo-item"]';
    }
     private get delete(){
        return '[data-testid="delete"]';
    }

    async load(){
        await this.page.goto('/todo');


    }
    async verifiyItem () {
        return await this.page.locator(this.ToDoItem).nth(0).innerText();
    }

     async verifiyDelete () {
          await this.page.click('[data-testid="delete"]')
          return  this.page.locator('[data-testid="no-todos"]')
    }

    

}