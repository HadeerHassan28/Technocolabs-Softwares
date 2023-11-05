// import Employee from "./employee.js";
// function getEmployeeInformation(inputSalary) {
//   Employee.salary = inputSalary;
//   console.log("Cadre: " + Employee.getCadre());
//   console.log("Tax: " + Employee.calculateTax());
//   console.log("Benefits: " + Employee.getBenefits());
//   console.log("Bonus: " + Employee.calculateBonus());
//   console.log(
//     "Reimbursement Eligibility: " + Employee.reimbursementEligibility() + "\n"
//   );
// }

// getEmployeeInformation(10000);
// getEmployeeInformation(50000);
// getEmployeeInformation(100000);
///////////////
// Import specific variables and the Employee module
// import {
//   cadre,
//   tax,
//   benefits,
//   bonus,
//   reimbursement,
//   Employee,
// } from "./employee.js";

// // Access variables and functions using their names directly
// function getEmployeeInformation(salary) {
//   Employee.salary = salary;
//   console.log("Cadre: " + cadre());
//   console.log("Tax: " + tax());
//   console.log("Benefits: " + benefits());
//   console.log("Bonus: " + bonus());
//   console.log("Reimbursement Eligibility: " + reimbursement() + "\n");
// }

// getEmployeeInformation(10000);
// getEmployeeInformation(50000);
// getEmployeeInformation(100000);
////////////////////////
import {
  Employee,
  getCadre,
  calculateTax,
  reimbursementEligibility,
  getBenefits,
  calculateBonus,
} from "./employee.js";

// Access variables and functions using their names directly
function getEmployeeInformation(salary) {
  Employee.salary = salary;
  console.log("Cadre: " + getCadre());
  console.log("Tax: " + calculateTax());
  console.log("Benefits: " + getBenefits());
  console.log("Bonus: " + calculateBonus());
  console.log(
    "Reimbursement Eligibility: " + reimbursementEligibility() + "\n"
  );
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
