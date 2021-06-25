import userStore from "../user/userStore.js";

export const home = (() => {
    const $ = ((selector) => document.querySelector(selector));

    window.onload = async function(){
        await userStore.getUserProfile();
        console.log(userStore.getUser())
        $("#user").textContent = userStore.getUser().name;
    }
    
})(); 