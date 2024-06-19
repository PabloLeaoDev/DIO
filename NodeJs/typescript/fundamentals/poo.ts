class User {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showName = () => {
        console.log(this.name);
    }
}

const pablo: User = new User('Pablo', 18);
pablo.showName();