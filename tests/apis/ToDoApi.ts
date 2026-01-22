import { APIRequestContext } from "@playwright/test";
import User from "../models/User";

export default class ToDoApi{
    private request :APIRequestContext;
  
    constructor(request:APIRequestContext){
        this.request=request;
       

    }

async ToDo(user:User){
  return await this.request.post('/api/v1/tasks', {data: 

    {
     isCompleted : false,
     item :"PLAYWRIGHT",

    },
    //send authorization
    headers :{
        Authorization:`Bearer ${user.getAccessToken()}`
    }

});
}
}