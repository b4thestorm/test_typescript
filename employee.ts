import Person from './person';

/** 
 * JSDoc 
 *
 *  - deptName: String
 *  - numEmployees: static int
 *  + employeeID: int		//generated 
 *  + Employee()			// deptName = “”, employeeID computed
 *  + Employee(String deptName)	// employeeID computed
 *  + Employee(String name, int birthYear, String deptName)	// employeeID computed
 *  + getDeptName(): String
 *  + static getNumEmployees(): int
 *  + getEmployeeID(): int
 *  + setDeptName(String deptName): void
 *  + equals(Object obj): boolean	//all attributes inherited+local must match for 2 Employee objects to be considered equal
 *  + toString(): String	//”<content of Person> Employee: Department: %20s | Employee Number: %3d”, deptName, employeeID
 *  + compareTo(Person p): int	//use the Comparable interface specification. Sort by employeeID
 *
**/

 class Employee extends Person {
    private deptName : string;
    private static numEmployees : number = 0;
    public employeeID: number  = 0;

    constructor (...args : any[]) {
       super(); //apparantly when extending super has to be called first before 'this'.
       Employee.numEmployees += 1;
        //Violates Single Responsibility principle 
       if (args.length === 0) {
          this.default_constructor();
       }
       if (args.length === 1 ) {
          this.initial_name_constructor(args);
       }

       if (args.length === 3) {
          this.full_argument_constructor(args)
       }
    }

    private default_constructor() {
        this.deptName === "";
        this.employeeID += 1;
    }

    private initial_name_constructor(args) {
        if (typeof args[0] !== "string") {
            throw new Error("must pass a string value");
        }
        this.deptName = args[0];
        this.employeeID += 1; 
    }

    private full_argument_constructor(args) {
        if (typeof args.shift(0) !== "string") {
            throw new Error("must pass a string value");
        }
        
        if (!args.every((input) => typeof input === "number")) {
            throw new Error("must pass a number value");
        }
            
        this.name = args[0];
        this.birthYear = args[1]
        this.deptName = args[2];
        this.employeeID += 1; 
    }




 }
