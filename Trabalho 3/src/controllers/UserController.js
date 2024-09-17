const { response } = require("express");

class UserController {
    index(request, responde){
        response.send("Response from User Controller");

    }
    show(){

    }
    store(){

    }
    update(){

    }
    delete(){

    }

}

//Singleton

module.exports = use.UserController();