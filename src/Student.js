import meanBy from 'lodash.meanby';
import identity from 'lodash.identity';

import Person from "./Person";

export default class Student extends Person {
    constructor(personProps, { marks = [] }) {
        super(personProps);
        this.marks = marks;
    }

    // Vanilla JS way
    // get averageMark() {
    //     const { marks } = this;
    //     return marks.reduce((sum, currMark) => sum + currMark, 0) / marks.length;
    // }

    // Lodash way
    get averageMark() {
        const { marks } = this;
        return meanBy(marks, identity);
    }
}
