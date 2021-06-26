import userStore from "../user/userStore.js";

const profile = (() => {
    const $ = ((selector) => document.querySelector(selector));
    
    updateProfile();
    //initUpdateDataBtn();

    async function updateProfile() {
        await userStore.getUserProfile();
        $("#profile-id").textContent = userStore.getUser().id;
        $("#profile-name").textContent = userStore.getUser().name;
        $("#profile-nickname").textContent = userStore.getUser().nickname;
        $("#profile-email").textContent = userStore.getUser().email;
        $("#profile-salary").textContent = userStore.getUser().salary;
    }

    function initUpdateDataBtn() {
        $("#updateDataBtn").addEventListener("click", () => {
            $("#profileDataList").classList.add("display-none");
            $("#profileDataForm").classList.remove("display-none");
        })
    }

})(); 