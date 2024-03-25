function calculateNfunction calculateNetSalary(basicSalary, benefits) {
    // Tax calculation
    const taxRate = 0.3; // Example tax rate, you can adjust this as needed
    const tax = taxRate * basicSalary;

    // NHIF Deductions
    const nhifRate = 0.025; // Example NHIF rate, you can adjust this as needed
    const nhifDeductions = nhifRate * basicSalary;

    // NSSF Deductions
    const nssfRate = 0.06; // Example NSSF rate, you can adjust this as needed
    const nssfDeductions = nssfRate * basicSalary;

    // Gross Salary
    const grossSalary = basicSalary + benefits;

    // Net Salary calculation
    const netSalary = grossSalary - (tax + nhifDeductions + nssfDeductions);

    return {
        Tax: tax,
        NHIF_Deductions: nhifDeductions,
        NSSF_Deductions: nssfDeductions,
        Gross_Salary: grossSalary,
        Net_Salary: netSalary
    };
}

// Example usage:
const basicSalary = parseFloat(prompt("Enter Basic Salary: "));
const benefits = parseFloat(prompt("Enter Benefits: "));

const result = calculateNetSalary(basicSalary, benefits);

for (const [key, value] of Object.entries(result)) {
    console.log('${key}: ${value}');
}Setsalary

