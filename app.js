function handleEditProfile () {
    var name = document.getElementById("name").textContent;
    var inputName = document.getElementById("input-name");
    inputName.value = name;

    var email = document.getElementById("email").textContent;
    var inputEmail = document.getElementById("input-email");
    inputEmail.value = email;

    var interests = document.getElementById("interests").textContent;
    var inputInterests = document.getElementById("input-interests");
    inputInterests.value = interests;

    document.getElementById("edit-view").style.display = "block";
    document.getElementById("display-view").style.display = "none";
}


function handleUpdateProfile() {
    var updatedName = document.getElementById("input-name").value;
    var name = document.getElementById("name");
    name.textContent = updatedName;
    
    var updatedEmail = document.getElementById("input-email").value;
    var email = document.getElementById("email");
    if (validator.isEmail(updatedEmail)) {
        email.textContent = updatedEmail;
    } else {
        alert("wrong email format");
    }
    

    
    var updatedInterests = document.getElementById("input-interests").value;
    var interests = document.getElementById("input-interests");
    interests.textContent = updatedInterests;

    document.getElementById("edit-view").style.display="none";
    document.getElementById("display-view").style.display="block";
}

