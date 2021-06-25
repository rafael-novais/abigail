import userStore from "../user/userStore.js";

export const home = (async () => {
    const $ = ((selector) => document.querySelector(selector));

    await userStore.getUserProfile();
    console.log(userStore.getUser())
    alert("Bemvindo " + userStore.getUser().name)
    $("#user").textContent = userStore.getUser().name;
})(); 