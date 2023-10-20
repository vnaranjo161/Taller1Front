document.addEventListener("DOMContentLoaded", function () {
    const commentUser = document.getElementById("comment")
    const buttonUpper = document.getElementById("commentUpperCase")
    const buttonLower = document.getElementById("commentLowerCase")
    const buttonCapitalize = document.getElementById("capitalize")
    const counter = document.getElementById("counter")
    const commentBox = document.querySelector(`.comment-box ul`)
    const buttonComment = document.getElementById(`loadComment`)
    let dataCounter = 255;
    counter.textContent = dataCounter;

    buttonUpper.addEventListener(`click`, convertToUpper)
    buttonLower.addEventListener(`click`, convertToLower)
    buttonCapitalize.addEventListener(`click`, capitalize)
    buttonComment.addEventListener(`click`, addComment)

    function capitalize(){
        commentUser.setAttribute('class','capitalize')
       
    }

    function updateCounter() {
        dataCounter = 255 - commentUser.value.trim().length()
        counter.textContent = dataCounter;
    }
    function convertToUpper() {
        commentUser.value = commentUser.value.toUpperCase()
    }

    function convertToLower() {
        commentUser.value = commentUser.value.toLowerCase()
    }

    function addComment() {
        if (commentUser.value.trim() !== "") {
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.style.color= "green"
            p.style.fontWeight = "bold"
            p.innerHTML = `<strong>Usuario x:</strong> ${commentUser.value}`;
            li.appendChild(p);
            commentBox.appendChild(li);
            commentUser.value = "";
        }
    }
    commentUser.addEventListener(`input`, updateCounter);

   
});