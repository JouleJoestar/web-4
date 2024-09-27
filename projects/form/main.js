function muFUNC() {
    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("surname");
    var nameValue = nameInput.value;
    var surnameValue = surnameInput.value;
    if (nameValue != "" && surnameValue !=0){
        var resultElement = document.getElementById("result");  
        resultElement.textContent = "Здравствуйте, " + nameValue + " " + surnameValue + "!";
    } else{
        alert("Вы не заполнили поля!");
    }
}  