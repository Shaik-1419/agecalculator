function calculateAge() {
    const dob = document.getElementById("dob").value;
    const ageResult = document.getElementById("ageResult");
    const ageSpan = document.getElementById("age");

    if (!dob) {
        ageResult.style.visibility = "hidden";
        alert("Please enter a valid date of birth.");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    ageSpan.textContent = age;
    ageResult.style.visibility = "visible";
}
