import { faker } from "@faker-js/faker";
export default class User{
    private firstName : string ;
    private lastName :string ;
    private email : string ;
    private password : string;
    private accesstoken:string;
  constructor(){
        this.firstName= faker.person.firstName();
        this.lastName= faker.person.lastName();
        this.email=faker.internet.email();
        this.password= "Test1234";
    
    }
   public  getFirstName(): string {
    return this.firstName;
}
  public  getLastName(): string {
    return this.lastName;
}
  public  getPassword(): string {
    return this.password;
}
  public  getEmail(): string {
    return this.email;
}
 public  getAccessToken(): string {
    return this.accesstoken;
}
public setAccessToken (access_token:string)
{
    this.accesstoken=access_token;
}

}