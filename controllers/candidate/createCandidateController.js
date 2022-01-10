import Joi from "joi"
import { Candidate } from "../../models";


const createCandidateController = {
    async createCandidate(req,res,next){

        // validation
        
        const candidateSchema = Joi.object({
            name:Joi.string().required(),
            dateOfBirth:Joi.string().required(),
            age:Joi.number().integer().min(0).max(203).required(),
            address:Joi.string().required(),
            state:Joi.string().required(),
            pinCode:Joi.number().required()
        })

        const {error} = candidateSchema.validate(req.body);
        if (error) {
            return next(error)
        }

        //check if user is already exits in database

        const {name,dateOfBirth,age,address,state,pinCode} = req.body;

 
        //prepare the model

        const candidate = new Candidate({
            name,
            dateOfBirth,
            age,
            address,
            state,
            pinCode
        })
        try {
            const result = await candidate.save();
            res.json({result})
        } catch (err) {
            return next(err)
        }

     
    }
}

export default createCandidateController 