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

    constructor ();
    constructor (deptName: string);
    constructor (name: string, birthYear: number, deptName: string);
    constructor (...args : any[]) {
       super(); //apparantly when extending super has to be called first before 'this'.
       if (args.length === 0) {
        this.deptName = "";
        Employee.numEmployees += 1;
       }

    }
 }
