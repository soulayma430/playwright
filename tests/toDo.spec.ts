import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'
import User from './models/User'
import ToDoApi from './apis/ToDoApi'
import RegisterPage from './pages/RegisterPage'
import NewToDoPage from './pages/NewToDoPage.ts'


test("should be able to add", async ({ page, request, context }) => {
    const user = new User()
    const registerPage = new RegisterPage(page, request, context)
    await registerPage.RegisterUsingAPI(user)
    await new ToDoApi(request).ToDo(user)
    const newtodopage=new NewToDoPage(page)
    await newtodopage.load();
    expect(await newtodopage.verifiyItem()).toEqual('PLAYWRIGHT')

    
})

test("Should be able to delete a todo", async ({ page, request, context }) => {
    const user = new User()
    const registerPage = new RegisterPage(page, request, context)
    await registerPage.RegisterUsingAPI(user)
    await new ToDoApi(request).ToDo(user)
    const newtodopage=new NewToDoPage(page)
    await newtodopage.load();
    await expect(await newtodopage.verifiyDelete()).toBeVisible()
})
