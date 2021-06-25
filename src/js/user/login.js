const loginModule = (() => {
    const $ = ((selector) => document.querySelector(selector));
    const email = $("#inputEmailLogin");
    const password = $("#inputPasswordLogin");
    
    $("#loginBtn").addEventListener("click", (event) => {
        event.preventDefault();
        login()
    });
    
    function login() {
        if(isValidInputs()) {
            ajaxLogin(getLoginObject(email.value, password.value))
        }else{
            alert("Preenche direito aí, tabarel!");
        }
    }

    function isValidInputs() {
        if(email.value.trim().length > 8 && 
            password.value.trim().length > 4) return true;
        return false;
    }

    function getLoginObject(email, password){
        return {
            "email": email,
            "password": password
          }
    }

    function ajaxLogin(user){
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        };
        const prodUrl = "http://ec2-3-142-222-51.us-east-2.compute.amazonaws.com:8085";
        const devUrl = "http://localhost:8085";
        fetch(devUrl + "/auth", options)
        .then(response => response.json())
        .then(json => registerDone(json))
        .catch(error => console.log('Authorization failed : ' + error.message));
    }

    function registerDone(json){
        localStorage.setItem("token", json.token);
        localStorage.setItem("email", email.value);
        email.value = ""; password.value = "";
        window.location.href = "/src/pages/home.html";
    }
})();

export default loginModule;
