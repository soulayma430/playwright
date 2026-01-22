import {test,expect} from '@playwright/test'
// npm install @faker-js/faker --save-dev : pour que faker s'ajoute aux dependencies 
// import{faker} from '@faker-js/faker'
import User from './models/User';
import RegisterPage from './pages/RegisterPage';
import ToDoPage from './pages/ToDoPage';

test("should be able to register to toDO website",async ({page,request,context})=>{
   const user =new User()
    const registerPage=new RegisterPage(page) // the utility of dynamic contructor 
    registerPage.load()
    registerPage.register(user)
    const todo =new ToDoPage(page) 
    await expect(todo.verifiy()).toBeVisible();


});
