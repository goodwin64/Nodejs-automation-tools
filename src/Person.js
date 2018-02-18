import { CURRENT_YEAR } from "./constants";

export default class Person {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }

    get birthday() {
        return CURRENT_YEAR - this.age;
    }
}
