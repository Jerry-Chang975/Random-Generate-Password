import { Router } from 'express';
export const router = Router();

import { generatePassword } from '../controllers/controller.js';

router.get('/', (req, res) => {
  res.render('index', { params: { passwordLength: 8 } });
});

router.post('/generate-password', generatePassword);
