const userStore = (() => {

    let user;

    function getUserProfile() {
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        headers.append('Authorization', `Bearer ${localStorage.getItem("token")}`)
        const options = {
            method: 'GET',
            headers: headers,
        };
        const prodUrl = "http://ec2-3-142-222-51.us-east-2.compute.amazonaws.com:8085";
        const devUrl = "http://localhost:8085";
        return fetch(devUrl + "/clients/" + localStorage.getItem("email"), options)
        .then(response => response.json())
        .then(json => setUserInfo(json))
        .catch(error => console.log('Authorization failed : ' + error.message));
    }

    function setUserInfo(json) {
        console.log(json)
        user = json;
    }

    function getUser() {
        return user;
    }

    return {
        getUserProfile,
        getUser
    }
})();

export default userStore;