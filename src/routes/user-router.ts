import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
  get: '/all',
  add: '/add',
  update: '/update',
  delete: '/delete/:id',
} as const;

/**
 * Get all users.
 */
router.get('/getData', async (_: Request, res: Response) => {
  return res.status(OK).json({});
});

// Export default
export default router;
