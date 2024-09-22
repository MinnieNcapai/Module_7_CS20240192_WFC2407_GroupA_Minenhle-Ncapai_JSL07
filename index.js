document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');

    // Get the toggle button element by its ID
    const toggleButton = document.getElementById('themeToggle');

    // Function to toggle between dark and light themes
    const toggleTheme = () => {
      // Toggle 'dark-theme' class on the body for dark mode
      document.body.classList.toggle('dark-theme');
      // Apply dark-theme class to the form as well
      cardForm.classList.toggle('dark-theme'); 
      // Apply dark-theme class to modal
    modal.classList.toggle('dark-theme'); 
  };
  
// Add click listener to toggle button for theme change
  toggleButton.addEventListener('click', toggleTheme);
  // Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
  });


    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values for student name, personal message and course name
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage') ;
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      // Added 'innerHTML' to automatically populate the certificate's HTML structure
      certificateContent.innerHTML = `  
      <h1>Certificate of Achievement</h1>
      <p>This is to certify that</p
      <h3>${studentName}</h3>
      <p>has almost completed the</p>
      <h3> ${courseName}!</h3>
      <p>with legendary perseverance and cat-like curiosity for never giving up 🏆</p>
      <img src="logo.png" alt="Logo" class="logo">
       <p>${personalMessage}.</p>
       
    `; 
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none'; 
    });
  });
  
  