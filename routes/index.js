import express from 'express';
import { createCandidateController, loginController, signupController,getCandidateController, deleteCandidateController, updateCandidateController, getCandidatebyIdController } from '../controllers';

const router = express.Router();

router.post('/signup',signupController.signup)
router.post('/login',loginController.login)
router.post('/createCandidate',createCandidateController.createCandidate)
router.get('/getCandidate',getCandidateController.getCondidate)
router.get('/getCandidateById/:_id',getCandidatebyIdController.getCondidate)
router.delete('/deleteCandidate/:_id',deleteCandidateController.deleteCondidate)
router.put('/updateCandidate',updateCandidateController.updateCondidate)

export default router