import Person from "./Person";

export default class Student extends Person {
    constructor(personProps, { marks = [] }) {
        super(personProps);
        this.marks = marks;
    }

    get averageMark() {
        const { marks } = this;
        return marks.reduce((sum, currMark) => sum + currMark, 0) / marks.length;
    }
}
