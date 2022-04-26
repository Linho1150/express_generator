import { Router } from 'express';
import sampleRouter from './sample';
import userRouter from './user-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/sample',sampleRouter);

// Export default.
export default baseRouter;
