// Create a form that accepts all the fields of the course
// Get id from query string (URLSearchParams)
// Use the id to fetch course details to prepopulate the form "http://localhost:8081/api/courses/1"
// Add an event handler for the submit button in the form
// Fetch(PUT) to update this course "http://localhost:8081/api/courses/1"
// Redirect to getOneCourse page "/getOneCourse.html?id=1"

window.onload = () => {
    let urlParams = new URLSearchParams(location.search);
    let currentCourseId = urlParams.get('id');
    let updateForm = document.getElementById("update-form");

    updateForm.onsubmit = (e) => {
        // Prevent a page refresh
        e.preventDefault();

        // Get all of the field values
        let dept = document.getElementById("dept").value;
        let courseNum = document.getElementById("courseNum").value;
        let instructor = document.getElementById("instructor").value;
        let startDate = document.getElementById("startDate").value;
        let numDays = document.getElementById("numDays").value;

        // Prepare the data for the fetch request
        let formData = {
            dept: dept,
            courseNum: courseNum,
            instructor: instructor,
            startDate: startDate,
            numDays: numDays
        };

        // Make a PUT request to update the course
        fetch(`http://localhost:8081/api/courses/${currentCourseId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            console.log("Course has been updated successfully");
            // Redirect to getOneCourse page
            window.location.href = `/getOneCourse.html?id=${currentCourseId}`;
        }).catch((err) => {
            console.log("Course update has failed", err);
        });
    };
};
