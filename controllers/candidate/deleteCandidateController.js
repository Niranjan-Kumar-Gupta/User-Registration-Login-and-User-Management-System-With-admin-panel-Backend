
import { Candidate } from "../../models";

const deleteCandidateController = {
    async deleteCondidate(req,res,next){
        const id = req.params['_id']
        try {
            const deleteCandidate = await Candidate.deleteOne({ _id:id });
            res.json({deleteCandidate})
            
        } catch (error) {
            return next(error)
        }
       
    }
}


export default deleteCandidateController