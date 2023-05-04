import { Router } from 'express';
import * as controller from './emails.controller';

var router = new Router();

router.post('/check', controller.check);

export default router;
