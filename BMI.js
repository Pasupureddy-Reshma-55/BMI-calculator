const weightInput = document.getElementById("Weightkg");
const heightInput = document.getElementById("cm");

const resultButton = document.getElementById("result");

const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");
const message = document.getElementById("message");

const metricButton = document.getElementById("metric");
const imperialButton = document.getElementById("imperial");


// Calculate BMI
resultButton.addEventListener("click", function () {

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Check empty or invalid values
    if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {
        bmiValue.textContent = "--";
        category.textContent = "--";
        message.textContent = "Please enter a valid weight and height.";
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // BMI formula
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display BMI
    bmiValue.textContent = bmi.toFixed(1);


    // Determine BMI category
    if (bmi < 18.5) {

        category.textContent = "Underweight";
        category.style.color = "#3b82f6";

        message.textContent =
            "Your BMI is below the normal range. Consider maintaining a balanced diet.";

    } else if (bmi >= 18.5 && bmi < 25) {

        category.textContent = "Normal";
        category.style.color = "#22c55e";

        message.textContent =
            "Your BMI is within the normal range. Keep maintaining a healthy lifestyle.";

    } else if (bmi >= 25 && bmi < 30) {

        category.textContent = "Overweight";
        category.style.color = "#facc15";

        message.textContent =
            "Your BMI is above the normal range. Regular exercise and a balanced diet may help.";

    } else {

        category.textContent = "Obese";
        category.style.color = "#ef4444";

        message.textContent =
            "Your BMI is in the obese range. Consider discussing your health with a healthcare professional.";
    }
});


// Metric button
metricButton.addEventListener("click", function () {

    metricButton.style.background = "#2563eb";
    metricButton.style.color = "white";

    imperialButton.style.background = "#e2e8f0";
    imperialButton.style.color = "#334155";

    // Change labels
    document.querySelector(
        '#calculator label:nth-of-type(1)'
    ).textContent = "Weight (kg)";

    document.querySelector(
        '#calculator label:nth-of-type(2)'
    ).textContent = "Height (cm)";

    weightInput.placeholder = "Enter your weight";
    heightInput.placeholder = "Enter your height";
});


// Imperial button
imperialButton.addEventListener("click", function () {

    imperialButton.style.background = "#2563eb";
    imperialButton.style.color = "white";

    metricButton.style.background = "#e2e8f0";
    metricButton.style.color = "#334155";

    // Change labels
    document.querySelector(
        '#calculator label:nth-of-type(1)'
    ).textContent = "Weight (lb)";

    document.querySelector(
        '#calculator label:nth-of-type(2)'
    ).textContent = "Height (in)";

    weightInput.placeholder = "Enter your weight";
    heightInput.placeholder = "Enter your height";
});