// Create a container for putting our courses
// Fetch all courses and show them on the page "http://localhost:8081/api/courses"

window.onload = () => {
    fetch("http://localhost:8081/api/courses")
        .then((res)=>res.json())
        .then((courses)=>{
            let coursesContainerEl = document.getElementById("courses-container");

            courses.forEach((course)=>{
                // Created a div element for storing basic course details
                let courseCard = document.createElement("div");
                // Added a class called "card" for styling
                courseCard.classList.add("card");

                // Interpolate each course card from our fetch request
                courseCard.innerHTML = `
                    <p>${course.courseName} is starting on ${course.startDate}</p>
                    <a href="/getOneCourse.html?id=${course.id}">See Details</a>
                `;
                // <div class="card">HTML5 and CSS3</div>

                coursesContainerEl.appendChild(courseCard);
                // <div id="courses-container">
                //      ...
                //      <div class="card">HTML5 and CSS3</div>
                // </div>
            })
        })
};