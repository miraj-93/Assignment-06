// Function to fetch data from API when Learn button is clicked
const LearnBtn = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => dataLoad(data.data)) // Pass data correctly
        .catch(error => console.error("Error fetching levels:", error));
};

// Function to load and display levels
const dataLoad = (levels) => {
    const dataContainer = document.getElementById("LearningLevel");
    
    // Clear previous content
    dataContainer.innerHTML = "";

    levels.forEach(level => {
        const levelCard = document.createElement("div");
        levelCard.classList.add("p-2", "border", "rounded-md", "shadow-md", "bg-gray-100", "mb-1");

        levelCard.innerHTML = `
            <button onclick="lessonBtn('${level.level_id}')" class="text-sm text-blue-600 cursor-pointer">
                ${level.level_no}: ${level.lessonName}
            </button>
        `;

        dataContainer.appendChild(levelCard);
    });
};

// Function to fetch vocabulary from API when a Level button is clicked
const lessonBtn = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then(res => res.json())
        .then(data => lessonLoad(data.data)) // Ensure correct API response handling
        .catch(error => console.error("Error fetching lessons:", error));
};

// Function to load and display vocabulary lessons
const lessonLoad = (lessons) => {
    const lessonContainer = document.getElementById("vocabList");
    
    // Clear previous content
    lessonContainer.innerHTML = "";

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
document.getElementById("learnBtn").addEventListener("click", LearnBtn);
