//Firstly no see navbar
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("navbar").classList.add("hidden"); // Hide navbar section
    document.getElementById("faQHandle").classList.add("hidden");//hide QueastionAnswer Section
    document.getElementById("learnSection").classList.add("hidden");//hide Learing level Section
    document.getElementById("VocabularySection").classList.add("hidden");// Learing Vocabulary Section
   
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
    const learnSection=document.getElementById("learnSection");
    const VocabularySection=document.getElementById("VocabularySection");
    if (username !== "" && password === "1234") {
        navbar.classList.remove("hidden"); // Show navbar
        faQHandle.classList.remove("hidden");
        learnSection.classList.remove("hidden");
        VocabularySection.classList.remove("hidden");

 // 1.0 সেকেন্ড পর এলার্ট  (2000ms)
 setTimeout(() => {
    alert(" successfully Login!                                                               Now  Go to Navbar and start to Learn with Us!                                                Click on Learn Button");
}, 1000);

    } else {
        alert("Invalid username or password!                                                     চার সংখ্যার কোড ব্যবহার করুন=1234");
    }
};


/*
// Function to fetch levels from API when Learn button is clicked
const fetchLevels = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => loadLevels(data.data)) // Pass correct data
       
};

// Function to display levels
const loadLevels = (levels) => {
    const dataContainer = document.getElementById("LearningLevel");
    dataContainer.innerHTML = ""; // Clear previous content

    levels.forEach(level => {
        const levelCard = document.createElement("div");
        levelCard.classList.add("p-2","border", "rounded-md", "shadow-md", "hover:bg-green-600", "mb-1");

        levelCard.innerHTML = `
            <button onclick="fetchLesson"('${level.level_id}')" class="text-sm font-white  cursor-pointer">
                ${level.level_no}: ${level.lessonName}
            </button>
        `;

        dataContainer.appendChild(levelCard);
    });
};
fetchLevels();

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
*/

//load from ApI Level section

function loadLevels(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
.then((res)=>res.json())
.then((data)=>displayLevels(data.data))

}

function loadData(){
    fetch("https://openapi.programming-hero.com/api/words/all")
    .then((response)=> response.json())
    .then( (data)=>displayDatas(data.data));
}

/*object
{
  "id": 102,
  "level_no": 2,
  "lessonName": "Everyday Words"
}
  */

function loadLevelsData(id){

const url=`https://openapi.programming-hero.com/api/level/${id}`
fetch(url)
.then((res)=>res.json())
.then((data) =>displayDatas (data.data))
     //{
   // removeActiveClass();
    //no active class

    const clickedButton = document.getElementById(`level-${id}`);
    
    clickedButton.classList.add("active");
    //console.log( clickedButton);
//});

}

function displayLevels(levels){

    const levelContainer=document.getElementById("learnContainer");

    for(let level of levels){

        //console.log(level);

const levelDiv=document.createElement("div");
levelDiv.innerHTML=`
 <button id="${level.id}" onclick="loadLevelsData(${level.level_no})"  class="btn btn-md hover:bg-green-700 p-2 m-2 text-28 ">${level.lessonName} </button>
`;
 levelContainer.append(levelDiv);
    }
}
/*
{
    "id": 4,
    "level": 5,
    "word": "Diligent",
    "meaning": "পরিশ্রমী",
    "pronunciation": "ডিলিজেন্ট"
  }
    */
  const displayDatas=(data)=>{

        //console.log(data)
        const dataContainer=document.getElementById("vocabList")
        dataContainer.innerHTML=" ";
        if(data.lenght==0){
            dataContainer.innerHTML=`<div> 
            <img src="assets\assets\alert-error.png">
            <h1>Sorry! No Word  Here..Go Next..</h1></div>`;
            return;
        }

        data.forEach(data=>{console.log(data);

            const dataCard=document.createElement("div")
            dataCard.innerHTML=`
            <h3 class="text-md border shadow-lg shadow-green-800 bg-slate-200 p-4 w-[210px]  h-[210px] rounded-lg">Word: <br>${data.word}<br>[${data.pronunciation}]<br> অর্থ(বাংলা)= ${data.meaning}</h3>
            `;
            dataContainer.append(dataCard);
        });

    };

loadLevels();
loadData();
loadLevelsData();





