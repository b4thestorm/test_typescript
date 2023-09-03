class Course {
    constructor (
         public readonly _isGraduateCourse: boolean,
         public readonly _courseNum: number,
         public readonly _courseDept: string,
         public readonly _numCredits: number) {
            _isGraduateCourse = _isGraduateCourse;
            _courseNum = _courseNum;
            _courseDept = _courseDept;
            _numCredits = _numCredits;
    }

    get isGraduateCourse(): boolean {
        return this._isGraduateCourse;
    }

    get courseNum(): number {
        return this._courseNum;
    }

    get courseDept(): string {
        return this._courseDept;
    }

    get numCredits(): number {
        return this._numCredits;
    }

    get courseName(): string {
        const courseType: string =  this.isGraduateCourse ? 'G ' : 'U ';
        return courseType + `${this.courseDept} ${this.courseNum}`;
    }

    equals(course: Course): boolean {
        const type: string = typeof course;
        if (type !== 'Course') {
            return false;
        }

        const courseProperties: Array<string> = Object.keys(course);
        for (const courseProperty in courseProperties) {
            if (course[courseProperty] !== this[courseProperty]) {
                return false;
            }
        }

        return true;
    }


}