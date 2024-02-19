import EmployeeDB from './index.js';

EmployeeDB.addEmployee(
  {
    name: 'aLex',
    position: 'worker',
    department: 'IT',
  },
);

console.log('existingIndex = ', EmployeeDB.getExistingIndex(
  {
    name: 'alex',
    position: 'worker',
    department: 'IT',
  },
));

EmployeeDB.addEmployee(
  {
    name: 'rorY',
    position: 'worker',
    department: 'op',
  },
);

EmployeeDB.addEmployee(
  {
    name: 'roRy',
    position: 'worker',
    department: 'op',
  },
);

EmployeeDB.removeEmployee(
  {
    name: 'alex',
    position: 'worker',
    department: 'IT',
  },
);

EmployeeDB.addEmployee(
  {
    name: 'lui',
    position: 'leader',
    department: 'analytic',
  },
);

EmployeeDB.addEmployee(
  {
    name: 'mimi',
    position: 'worker',
    department: 'analytic',
  },
);

EmployeeDB.updateEmployee(
  [{
    name: 'rory',
    position: 'worker',
    department: 'op',
  }, {
    name: 'rorYppp',
    position: 'worker1',
    department: 'op11',
  }],
);

EmployeeDB.updateEmployee(
  [{
    name: 'alex',
    position: 'worker',
    department: 'IT',
  }, {
    name: 'alex3',
    position: 'worker',
    department: 'IT111',
  }],
);

console.log('result1 = ', EmployeeDB);

console.log('readEmployee = ', EmployeeDB.readEmployee());

console.log('uniqueDepartments = ', EmployeeDB.uniqueDepartments());

console.log('newEmpDB (clone) -----');
const newEmpDB = EmployeeDB.clone();
newEmpDB.addEmployee({
  name: 'luigi',
  position: 'leader',
  department: 'host',
});
console.log(newEmpDB);
console.log('EmployeeDB -----');
console.log(EmployeeDB);

console.log('is obj.link copied =', newEmpDB === EmployeeDB);

console.log('assign -----');
EmployeeDB.assign(newEmpDB);
console.log(EmployeeDB);

console.log('compare -----');
console.log(EmployeeDB.compare(
  {
    name: 'luigi',
    position: 'leader',
    department: 'host',
  },
  {
    name: 'luigi',
    position: 'leader',
    department: 'host',
  },
));
console.log(EmployeeDB.compare(
  {
    name: 'luigi',
    position: 'leader',
    department: 'host',
  },
  {
    name: 'luigi2',
    position: 'leader',
    department: 'host',
  },
));
