import userStore from "../user/userStore.js";

const profile = (async () => {
    const $ = ((selector) => document.querySelector(selector));
    
    await userStore.getUserProfile();
    console.log(userStore.getUser())
    $("#profile-id").textContent = userStore.getUser().id;
    $("#profile-name").textContent = userStore.getUser().name;
    $("#profile-nickname").textContent = userStore.getUser().nickname;
    $("#profile-email").textContent = userStore.getUser().email;
    $("#profile-salary").textContent = userStore.getUser().salary;
})(); 