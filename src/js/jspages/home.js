import userStore from "../user/userStore.js";

const home = (async () => {
    const $ = ((selector) => document.querySelector(selector));
    
    await userStore.getUserProfile();
    console.log(userStore.getUser().name)
    $("#user").textContent = userStore.getUser().name;
    // userStore.getUserProfile().then(res => {
    //     $("#user").textContent = userStore.getUser().name;
    //     console.log(userStore.getUser())
    //     alert("Bemvindo " + userStore.getUser().name)
    // });
})(); 