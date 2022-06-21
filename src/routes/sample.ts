import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const { OK } = StatusCodes;

const sampleRouter = Router();
sampleRouter.get('/getSample', (req, res) => {
  return res.status(OK).send('Hello sample');
});

export default sampleRouter;
