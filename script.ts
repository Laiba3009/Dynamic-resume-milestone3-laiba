//Listing Element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();


    //Type Assertion     
    const profilePictureInput =document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;    
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

if (profilePictureInput && nameElement && emailElement && contactElement && addressElement && educationElement && experienceElement && skillsElement) {

const name = nameElement.value;
const email = emailElement.value;
const contact = contactElement.value;
const address = addressElement.value;
const education = educationElement.value;
const experience = experienceElement.value;
const skills = skillsElement.value;

//Picture Elements
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';


    const resumeOutput = `
    <h2>Resume<h2/>
    ${profilePictureURL? `<img src="${profilePictureURL}"alt="profile picture" class="profilePicture">`: '' } 

    <p><strong>Name:</strong>${name}</p>    
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Contact:</strong>${contact}</p>
    <p><strong>Address:</strong>${address}</p>

    <h3>Education<h3/>
    <p>${education}</p>
    <h3>Experience<h3/>
    <p>${experience}</p>
    <h3>Skills<h3/>
    <p>${skills}</p>
    `;


    //ResumeOutput
   const resumeOutputElement = document.getElementById('resumeOutput')
 if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
} else {
  console.error('the resume output elements are missing')
}   
 } else {
    console.error('one or more output elements are missing')
 }
})