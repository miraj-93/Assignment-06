// Show alert when the homepage loads
window.onload = function () {
    alert("Welcome to the Learning Janala!                                                প্রথমেই ইউজার নাম ও পাসওয়ার্ড 1234 দিয়ে Get Started বাটন ক্লিক করুন,                                                                                   আমাদের সাথে আপনার জার্নি শুরু করুন");
};
// Function to fetch levels from API when Learn button is clicked
const fetchLevels = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => loadLevels(data.data)) // Pass correct data
        .catch(error => console.error("Error fetching levels:", error));
};

// Function to display levels
const loadLevels = (levels) => {
    const dataContainer = document.getElementById("LearningLevel");
    dataContainer.innerHTML = ""; // Clear previous content

    levels.forEach(level => {
        const levelCard = document.createElement("div");
        levelCard.classList.add("p-2", "border", "rounded-md", "shadow-md", "bg-gray-100", "mb-1");

        levelCard.innerHTML = `
            <button onclick="fetchLesson"('${level.level_id}')" class="text-sm text-blue-600 cursor-pointer">
                ${level.level_no}: ${level.lessonName}
            </button>
        `;

        dataContainer.appendChild(levelCard);
    });
};

// Function to fetch vocabulary based on level selection
const fetchLesson = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(res => res.json())
        .then(data => loadLessons(data.data)) // Ensure correct API response handling
        .catch(error => console.error("Error fetching lessons:", error));
};

// Function to display vocabulary lessons
const loadLessons = (lessons) => {
    const lessonContainer = document.getElementById("vocabList");
    lessonContainer.innerHTML = ""; // Clear previous content

    lessons.forEach(lesson => {
        const lessonCard = document.createElement("div");
        lessonCard.classList.add("p-2", "border", "rounded-md", "shadow-md", "bg-gray-100", "mb-1");
        
        lessonCard.innerHTML = `
            <h2 class="text-sm text-blue-600 cursor-pointer"> 
                ${lesson.word}: ${lesson.meaning}, ${lesson.pronunciation}
            </h2>
        `;

        lessonContainer.appendChild(lessonCard);
    });
};

// Attach event listener to the Learn button
document.getElementById("learnBtn").addEventListener("click", fetchLevels);

// Function to toggle FAQ section smoothly
const toggleFAQ = () => {
    const questionAnswer = document.getElementById("faQHandle");
    questionAnswer.classList.toggle("hidden");
};

// Attach event listener for FAQ button
document.getElementById("questionAnswerBtn").addEventListener("click", toggleFAQ);


//Firstly no see navbar
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("navbar").classList.add("hidden"); // Hide navbar
    document.getElementById("faQHandle").classList.add("hidden");
});
// Logout function
document.getElementById("LogoutBtn").addEventListener("click", () => {
    document.getElementById("login-section").style.display = "flex"; // Show login section
   document.getElementById("navbar").classList.add("hidden"); // Hide navbar

});

// Function to show/hide navbar on login
const hideNavbar = () => {
    const username = document.getElementById("userName").value;
    const password = document.getElementById("userPassword").value;
    const navbar = document.getElementById("navbar");
    const loginSection = document.getElementById("login-section");
     const faQHandle=document.getElementById("faQHandle");
    if (username !== "" && password === "1234") {
        navbar.classList.remove("hidden"); // Show navbar
        faQHandle.classList.remove("hidden");

 // দুই সেকেন্ড পর এলার্ট পার্ট (2000ms)
 setTimeout(() => {
    alert(" successfully Login!                                                               Now  Go to Navbar and start to Learn with Us!                                                Click on Learn Button");
}, 2000);

    } else {
        alert("Invalid username or password!                                                     চার সংখ্যার কোড ব্যবহার করুন");
    }
};






const faQHandle = () => {// Function to scroll to and toggle FAQ section
    const faqSection = document.getElementById("faQHandle");

    
    faqSection.classList.toggle("hidden");// Toggle visibility

    
    if (!faqSection.classList.contains("hidden")) {// Scroll smoothly to the FAQ section if it's visible
        faqSection.scrollIntoView({ behavior: "smooth" });
    }
};


document.getElementById("questionAnswerBtn").addEventListener("click", faQHandle);// Attach event listener to FAQ button
