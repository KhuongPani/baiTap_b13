
// Define the daily wage
const dailyWage = 100000;

// Function to calculate the salary
function calculateSalary(dailyWage, numberOfDays) {
    return dailyWage * numberOfDays;
}

// Add event listener to the button
document.getElementById('calculateButton').addEventListener('click', function() {
    // Get the number of working days from the input
    const numberOfDays = parseInt(document.getElementById('daysWorked').value);

    // Calculate the total salary
    const totalSalary = calculateSalary(dailyWage, numberOfDays);

    // Display the total salary on the web page
    document.getElementById('result').textContent = 'Total Salary: ' + totalSalary;
});
// Function to calculate the average of 5 numbers
function calculateAverage() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);

    const average = (num1 + num2 + num3 + num4 + num5) / 5;

    document.getElementById('averageResult').textContent = 'Average: ' + average;
}

// Function to convert USD to VND
const exchangeRate = 23500;

function convertCurrency() {
    const usdAmount = parseFloat(document.getElementById('usdAmount').value);
    const vndAmount = usdAmount * exchangeRate;

    document.getElementById('conversionResult').textContent = 'Amount in VND: ' + vndAmount;
}

// Function to calculate area and perimeter of a rectangle
function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    const area = length * width;
    const perimeter = 2 * (length + width);

    document.getElementById('rectangleResult').textContent = 'Area: ' + area + ', Perimeter: ' + perimeter;
}

// Function to calculate the sum of the digits of a two-digit number
function sumDigits() {
    const twoDigitNumber = parseInt(document.getElementById('twoDigitNumber').value);

    const unitsDigit = twoDigitNumber % 10;
    const tensDigit = Math.floor(twoDigitNumber / 10);

    const sum = unitsDigit + tensDigit;

    document.getElementById('sumDigitsResult').textContent = 'Sum of digits: ' + sum;
}

// Event listeners for buttons
document.getElementById('calculateAverage').addEventListener('click', calculateAverage);
document.getElementById('convertCurrency').addEventListener('click', convertCurrency);
document.getElementById('calculateRectangle').addEventListener('click', calculateRectangle);
document.getElementById('sumDigits').addEventListener('click', sumDigits);
