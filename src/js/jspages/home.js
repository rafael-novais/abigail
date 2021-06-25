import userStore from "../user/userStore.js";

console.log("HOME")
alert("home iniciao")
const home = (() => {
    const $ = ((selector) => document.querySelector(selector));
    alert("entrou na funcao assync")
    userStore.getUserProfile().then(res => {
        $("#user").textContent = userStore.getUser().name;
        console.log(userStore.getUser())
        alert("Bemvindo " + userStore.getUser().name)
    });
})(); 