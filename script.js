var _a;
//Listing Element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Type Assertion     
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && contactElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //Picture Elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n    <h2>Resume<h2/>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\"alt=\"profile picture\" class=\"profilePicture\">") : '', " \n\n    <p><strong>Name:</strong>").concat(name_1, "</p>    \n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Contact:</strong>").concat(contact, "</p>\n    <p><strong>Address:</strong>").concat(address, "</p>\n\n    <h3>Education<h3/>\n    <p>").concat(education, "</p>\n    <h3>Experience<h3/>\n    <p>").concat(experience, "</p>\n    <h3>Skills<h3/>\n    <p>").concat(skills, "</p>\n    ");
        //ResumeOutput
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
