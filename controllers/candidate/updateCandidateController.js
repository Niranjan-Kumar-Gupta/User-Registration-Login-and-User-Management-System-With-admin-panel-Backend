import { Candidate } from "../../models";
import Joi from "joi"


const updateCandidateController = {
    async updateCondidate(req,res,next){
       //vaalidate
       const candidateSchema = Joi.object({
        _id:Joi.string().required(),
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

        const {_id,name,dateOfBirth,age,address,state,pinCode} = req.body;


        //prepare the model

        const candidate = {
            name,
            dateOfBirth,
            age,
            address,
            state,
            pinCode
        }

        try {
             const updateCandidate = await Candidate.findOneAndUpdate({_id},candidate, {
                new: true
              });
             res.json({sucess:1,message:"sucessfully updated"})
        } catch (err) {
            return next(err)
        }

       
    }
}


export default updateCandidateController