function toggle(targetId) {
    var target = document.getElementById(targetId);

    if(target.classList.contains("w3-hide")) {
        target.classList.remove("w3-hide");
    }
    else {
        target.classList.add("w3-hide");
    }
}