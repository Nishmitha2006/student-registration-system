
// Get the registration form
const form = document.getElementById("studentForm");

// Get the result section
const result = document.getElementById("result");

// When the form is submitted
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get student details
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    // Validate date of birth
const selectedDate = new Date(dob);
const today = new Date();
today.setHours(0, 0, 0, 0);

if (selectedDate > today) {
    alert("Date of birth cannot be in the future!");
    return;
}

    // Get selected gender
    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    // Get selected courses
    const courses = document.querySelectorAll(
        'input[name="course"]:checked'
    );

    // Get selected department
    const department = document.getElementById("department").value;

    // Validate gender
    if (!gender) {
        alert("Please select your gender!");
        return;
    }

    // Validate course
    if (courses.length === 0) {
        alert("Please select at least one course!");
        return;
    }

    // Store selected course names
    let selectedCourses = [];

    courses.forEach(function(course) {
        selectedCourses.push(course.value);
    });

    // Display student details
    result.textContent =
        "REGISTRATION SUCCESSFUL!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Gender: " + gender.value + "\n" +
        "Courses: " + selectedCourses.join(", ") + "\n" +
        "Department: " + department;

});
// Clear form button
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function() {

    // Clear all form fields
    form.reset();

    // Clear submitted student details
    result.textContent = "";

});
