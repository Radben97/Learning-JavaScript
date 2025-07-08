class user {
    constructor(email, name) {
        this.id = email,
        this.name = name
    }
    display() { return `greetings, my name is ${this.name}` };
}

export default user;