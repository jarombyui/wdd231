// Function to filter courses based on category
function filterCourses(category) {
    const courses = document.querySelectorAll('.course');
  
    courses.forEach(course => {
      if (category === 'all') {
        course.style.display = 'inline-block';
      } else {
        course.style.display = course.classList.contains(category) ? 'inline-block' : 'none';
      }
    });
  }
  
  // Display current date in the footer
// Get the current year for the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date for the footer
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
   
