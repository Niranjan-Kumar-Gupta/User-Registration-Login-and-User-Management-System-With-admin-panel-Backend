

class CustomErrorHandler extends Error{
    constructor(status,msg){
        super()
        this.status = status;
        this.msg = msg;
    }
    static alredayExits(message){
        return new CustomErrorHandler(409,message)
    }
    static wrongCrendential(message='Username or password is wrong'){
        return new CustomErrorHandler(401,message)
    }
}

export default CustomErrorHandler