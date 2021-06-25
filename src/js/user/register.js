const registerModule = (() => {
    const $ = ((selector) => document.querySelector(selector));
    const name = $("#inputNameRegister");
    const email = $("#inputEmailRegister");
    const password = $("#inputPasswordRegister");
    
    $("#registerUser").addEventListener("click", (event) => {
        event.preventDefault();
        registerUser()
    });
    
    function registerUser() {
        if(isValidInputs()) {
            saveNewUser(getNewUserObject(name.value, email.value, password.value))
        }else{
            alert("Preenche direito aí, tabarel!");
        }
    }

    function isValidInputs() {
        if(email.value.trim().length > 8 && 
            password.value.trim().length > 4 && 
            name.value.trim().length > 4) return true;
        return false;
    }

    function getNewUserObject(name, email, password){
        return {
            "email": email,
            "name": name,
            "password": password
          }
    }

    function saveNewUser(user){
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        };
        const prodUrl = "http://ec2-3-142-222-51.us-east-2.compute.amazonaws.com:8085";
        const devUrl = "http://localhost:8085";
        fetch(prodUrl + "/clients", options)
        .then(response => response)
        .then(json => registerDone())
        .catch(error => console.log('Authorization failed : ' + error.message));
    }

    function registerDone(){
        name.value = ""; email.value = ""; password.value = "";
        window.location.href = "/src/pages/login.html";
        alert("Cadastro concluído! Faça login para continuar")
    }
})();

export default registerModule;
