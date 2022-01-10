
import { Candidate } from "../../models";

const getCandidateByIdController = {
    async getCondidate(req,res,next){
        try {
            // console.log(req.params)
            const candidate = await Candidate.findById(req.params._id)
            res.json(candidate)
        } catch (error) {
            return next(error)
        }
      
    }
}


export default getCandidateByIdController