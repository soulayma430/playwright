import { Page } from "@playwright/test";
import User from "../models/User";
import UserApi from "../apis/UserApi";
import { APIRequestContext } from "@playwright/test";
import { BrowserContext } from "@playwright/test";
import config from "../../playwright.config";
export default class RegisterPage {
    private page : Page ;
    private request ?: APIRequestContext;
    private context ?: BrowserContext;
    // Dynamic Contructor : ? --> optional ( request and context are optional )
    // ! : to indicate it will be present there  
    constructor (page : Page , request ?:APIRequestContext,context?:BrowserContext){
        this.page=page;
        this.request=request;
        this.context=context;

    }
    //Elements 
    private get FirstNameInput (){
        return '[data-testid="first-name"]';
    }
    private get LastNameInput (){
        return '[data-testid="last-name"]';
    }
    private get EmailInput (){
        return '[data-testid="email"]';
    }
    private get PasswordInput (){
        return '[data-testid="password"]';
    }
     private get ConfirmedPasswordInput (){
        return '[data-testid="confirm-password"]';
    }
    private get SubmitButton (){
        return '[data-testid="submit"]';
    }
    //methods or steps
    async load(){
        await this.page.goto('/signup')
    }
    async register(user:User){
        await this.page.type(this.FirstNameInput,user.getFirstName())
        await this.page.type(this.LastNameInput,user.getLastName())
        await this.page.type(this.EmailInput,user.getEmail())
        await this.page.type(this.PasswordInput,user.getPassword())
        await this.page.type(this.ConfirmedPasswordInput,user.getPassword())
        await this.page.click(this.SubmitButton)
    }
    async RegisterUsingAPI(user:User){
        //ragister using API
        const response = await new UserApi(this.request!).register(user)
        const responsebody = await response.json()
        const accesstoken = responsebody.access_token
        const userid = responsebody.userID
        const firstname = responsebody.firstName
        user.setAccessToken(accesstoken)

        await this.context!.addCookies([
        {
             name :"access_token",
             value : accesstoken,
             url:config.use?.baseURL,
        },
         {
              name :"firstName",
             value : firstname,
             url:config.use?.baseURL,
         },
         {
             name :"userID",
             value : userid,
             url:config.use?.baseURL,
         },

    ])
    }

}