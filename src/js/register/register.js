const registerModule = (() => {
    const $ = ((selector) => document.querySelector(selector));
    const email = $("#inputEmailRegister");
    const password = $("#inputPasswordRegister");
    
    $("#registerUser").addEventListener("click", () => registerUser());

    function registerUser() {
        if(isValidInputs()) {
            alert("ainda não funfakkkk")
            //saveNewUser(getNewUserObject(email.value, password.value))
        }else{
            alert("Preenche direito aí, tabarel!");
        }
    }

    function isValidInputs() {
        if(email.value.trim().length > 8 && password.value.trim().length > 3) return true;
        return false;
    }

    function getNewUserObject(email, password){
        return {
            "accountNumber": 0,
            "creditCard": 0,
            "email": "string",
            "name": "string",
            "nickname": "string",
            "password": "string",
            "salary": 0
          }
    }

    function saveNewUser(user){
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
    console.log(JSON.stringify(user))
        fetch("http://localhost:8085/clients", {
            mode: 'no-cors',
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        })
        .then(response => response)
        .then(json => console.log(json))
        .catch(error => console.log('Authorization failed : ' + error.message));
    }

})();

export default registerModule;
