import userStore from "../user/userStore.js";

console.log("HOME")
alert("home iniciao")
const home = (async () => {
    const $ = ((selector) => document.querySelector(selector));
    alert("entrou na funcao assync")
    await userStore.getUserProfile();
    console.log(userStore.getUser())
    alert("Bemvindo " + userStore.getUser().name)
    $("#user").textContent = userStore.getUser().name;
})(); 