window.onload = () => {
    let createForm = document.getElementById("create-form");
    // Get all fields from form
    let deptInputEl = document.getElementById("dept");
    let courseNumInputEl = document.getElementById("courseNum");
    let courseNameInputEl = document.getElementById("courseName");
    let instructorInputEl = document.getElementById("instructor");
    let startDateInputEl = document.getElementById("startDate");
    let numDaysInputEl = document.getElementById("numDays");

    createForm.onsubmit = (e) => {
        e.preventDefault();

        let currentFormData = {
            dept: deptInputEl.value,
            courseNum: courseNumInputEl.value,
            courseName: courseNameInputEl.value,
            instructor: instructorInputEl.value,
            startDate: startDateInputEl.value,
            numDays: numDaysInputEl.value,
        };

        fetch("http://localhost:8081/api/courses", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(currentFormData),
        })
            .then((res) => res.json())
            .then((newCourseDetails) => {
                location.href = `getOneCourse.html?id=${newCourseDetails.id}`;
            }).catch((err)=>{
                console.error(err);
            })
    };
};
