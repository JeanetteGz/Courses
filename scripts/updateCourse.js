// Create a form that accepts all the fields of the course
// Get id from query string (URLSearchParams)
// Use the id to fetch course details to prepopulate the form "http://localhost:8081/api/courses/1"
// Add an event handler for the submit button in the form
// Fetch(PUT) to update this course "http://localhost:8081/api/courses/1"
// Redirect to getOneCourse page "/getOneCourse.html?id=1"

window.onload = () => {
    // Get the current course ID from query param
    let urlParams = new URLSearchParams(location.search);
    let currentCourseId = urlParams.get('id');
    let updateForm = document.getElementById("update-form");


        // Get all of the field values
        let deptInputEl = document.getElementById("dept");
        let courseNumInputEl = document.getElementById("courseNum");
        let courseNameInputEl = document.getElementById("courseName");
        let instructorInputEl = document.getElementById("instructor")
        let startDateInputEl = document.getElementById("startDate");
        let numDaysInputEl = document.getElementById("numDays");

        // Fetch to get current course details
        fetch(`http://localhost:8081/api/courses/${currentCourseId}`)
        .then((res) => res.json())
        .then((courseDetails) => {
            // Set the form values to the retrieved current course
            deptInputEl.value = courseDetails.dept;
            courseNumInputEl.value = courseDetails.courseNum;
            courseNameInputEl.value = courseDetails.courseName;
            instructorInputEl.value = courseDetails.instructor;
            startDateInputEl.value = courseDetails.startDate;
            numDaysInputEl.value = courseDetails.numDays;
        });

        updateForm.onsubmit = (e) => {
            // Prevent a page refresh
            e.preventDefault();
            // Creating the data to update from the current value of our form fields
            let currentFormData = {
                "dept": deptInputEl.value,
                "courseNum": courseNumInputEl.value,
                "courseName": courseNameInputEl.value,
                "instructor": instructorInputEl.value,
                "startDate": startDateInputEl.value,
                "numDays": numDaysInputEl.value,
            };



        // Send thew data to the API using Fetch
        fetch(`http://localhost:8081/api/courses/${currentCourseId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(currentFormData),
        }).then((res) => {
            console.log("Course has been updated successfully");
            // Redirect to getOneCourse page
            window.location.href = `/getOneCourse.html?id=${currentCourseId}`;
        }).catch((err) => {
            console.log("Course update has failed", err);
        });
    };
};
