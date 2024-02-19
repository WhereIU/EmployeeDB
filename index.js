const EmployeeDB = {
  employees: [],
  addEmployee(employeeInfo) {
    const { name, position, department } = employeeInfo;
    if (!(name && position && department)) {
      return false;
    }

    if (this.getExistingIndex(employeeInfo) === -1) {
      const employee = this.fixValues(employeeInfo);
      this.employees.push(employee);
    }

    return true;
  },

  removeEmployee(employeeInfo) {
    const i = this.getExistingIndex(employeeInfo);
    if (i !== -1) {
      delete this.employees[i];
      return true;
    }

    return false;
    // only changes the value in the array to empty cell
  },

  updateEmployee([employeeInfo, newInfo]) {
    if (employeeInfo.name
      && employeeInfo.position
      && employeeInfo.department
      && newInfo.name
      && newInfo.position
      && newInfo.department) {
      const fixedEmployeeInfo = this.fixValues(employeeInfo);
      const fixedNewInfo = this.fixValues(newInfo);
      const i = this.getExistingIndex(fixedEmployeeInfo);
      if (i !== -1) {
        this.employees[i] = { ...fixedNewInfo };
        return true;
      }
    }

    return false;
  },

  readEmployee() {
    return this.employees;
  },

  fixValues({ name, position, department }) {
    const letters = name.toLowerCase().split('');
    letters[0] = letters[0].toUpperCase();
    return { name: letters.join(''), position, department: department.toLowerCase() };
  },

  getExistingIndex(employeeInfo) {
    const {
      name: fixedName, position: fixedPosition,
      department: fixedDepartment,
    } = this.fixValues(employeeInfo);
    const employeesLen = this.employees.length;
    for (let i = 0; employeesLen > i; i += 1) {
      if (this.employees[i] !== undefined) {
        const
          {
            name: existingName, position: existingPosition,
            department: existingDepartment,
          } = this.employees[i];
        if (fixedName === existingName && fixedPosition === existingPosition
        && fixedDepartment === existingDepartment) {
          return i;
        }
      }
    }

    return -1;
  },

  uniqueDepartments() {
    const result = [];
    const employeesLen = this.employees.length;
    for (let i = 0; employeesLen > i; i += 1) {
      const department = this.employees[i]?.department;
      if (department !== undefined) {
        if (!result.includes(department)) {
          result.push(department);
        }
      }
    }

    return result;
  },
  clone() {
    const result = { ...this };
    result.employees = structuredClone(this.employees);
    return result;
  },

  assign(object) {
    const employeesLen = object.employees.length;
    for (let i = 0; employeesLen > i; i += 1) {
      if (object.employees[i] !== undefined) {
        const employee = this.fixValues(object.employees[i]);
        const i2 = this.getExistingIndex(employee);
        if (i2 === -1) {
          this.employees.push(employee);
        } else {
          this.employees[i2] = employee;
        }
      }
    }

    return true;
  },

  compare(employee1, employee2) {
    const fixed1 = this.fixValues(employee1);
    const fixed2 = this.fixValues(employee2);
    if (fixed1.name === fixed2.name
      && fixed1.position === fixed2.position
      && fixed1.department === fixed2.department
    ) {
      return true;
    }

    return false;
    // cant be compared of employee1 === employee2 bcs of links compare
  },
};

export default EmployeeDB;
