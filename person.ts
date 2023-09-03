class Person {
    private _name: string;
    private _birthYear: number;

    public constructor (...args: (string | number)[]) {
        if (args.length == 0) {
            this._name = "";
            this._birthYear = 0;
        } else if (args.length == 2) {
            if (typeof args[0] === 'string') {
                this._name = args[0];
            }
            if (typeof args[1] === 'number') {
                this._birthYear = args[1];
            }
        }
    }
 
    get name (): string {
        return this._name;
    }

    get birthYear (): number {
        return this._birthYear;
    }

    set name (name: string){
        this._name = name;
    }

    set birthYear (birthYear: number){
        this._birthYear = birthYear;
    }

    equals (obj: Person) : boolean {
        if (obj !instanceof Person) {
            return false;
        }
        const keys = Object.keys(obj);
        for (const property in keys) {
            if (obj[property] !== this[property]) {
                return false;
            }
        }
        return true;
    }

}