class Departmant {
  private readonly id: string;
  private name: string;
  protected employees: string[];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
    this.employees = [];
  };

  describe(this: Departmant) {
    console.log(`Department (${this.id}) ${this.name}`);
  };
  addEmployee(employee: string) {
    this.employees.push(employee);
  };
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

};

const accounting  = new Departmant('d1', 'Accounting');
console.log(accounting);
accounting.describe();
accounting.addEmployee('lom');
accounting.addEmployee('bob');
accounting.printEmployeeInformation();

class ITDepartment extends Departmant {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  printAdminInformation() {
    console.log(this.admins.length);
    console.log(this.admins);
  }
}
const accountingIT  = new ITDepartment('d2', ['admin1, admin2, admin3']);
console.log(accountingIT);
accountingIT.describe();
accountingIT.addEmployee('lomIT');
accountingIT.addEmployee('bobIT');
accountingIT.printEmployeeInformation();
accountingIT.printAdminInformation();
