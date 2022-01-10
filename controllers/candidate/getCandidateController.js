
import { Candidate } from "../../models";

const getCandidateController = {
    async getCondidate(req,res,next){
        try {
            const candidate = await Candidate.find()
            res.json(candidate)
        } catch (error) {
            return next(error)
        }
      
    }
}


export default getCandidateController