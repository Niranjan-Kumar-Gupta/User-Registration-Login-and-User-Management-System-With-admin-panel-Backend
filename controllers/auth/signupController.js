import Joi from "joi"
import bcrypt from 'bcrypt';
import { User } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";

const signupController = {
    async signup(req,res,next){

        // validation
        
        const signupSchema = Joi.object({
            email:Joi.string().email().required(),
            phone:Joi.string().min(10).required(),
            password:Joi.string().regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).required()
        })

        const {error} = signupSchema.validate(req.body);
        if (error) {
            return next(error)
        }

        //check if user is already exits in database

        try {
            const exit = await User.exists({email:req.body.email});
            if (exit) {
                return next(CustomErrorHandler.alredayExits('email is already exit'))
            }
        } catch (err) {
            return next(err);
        }

        const {email,phone,password} = req.body;

        //hashed the password

        const hashedPassword = await bcrypt.hash(password,10);

        //prepare the model

        const user = new User({
            email,
            phone,
            password:hashedPassword
        })

        try {
            const result = await user.save();
        } catch (err) {
            return next(err)
        }

        res.json({status:1,message:'sucessfully signup'})
    }
}

export default signupController