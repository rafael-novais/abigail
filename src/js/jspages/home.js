import userStore from "../user/userStore.js";

console.log("HOME")
alert("home iniciao")
const home = (async () => {
    const $ = ((selector) => document.querySelector(selector));
    alert("entrou na funcao assync")
    
    let user = await userStore.getUserProfile();
    console.log(user)
    $("#user").textContent = user.name;
    // userStore.getUserProfile().then(res => {
    //     $("#user").textContent = userStore.getUser().name;
    //     console.log(userStore.getUser())
    //     alert("Bemvindo " + userStore.getUser().name)
    // });
})(); 