export class User {
    public username: string;
    public password: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public roles: string[];

    constructor() {
        this.username = "";
        this.password = "";
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.roles = [];
    }

}