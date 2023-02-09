import { Router } from 'express'
import content from '../middleware/content.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'
import { jwt } from '../middleware/auth.js'
import { createActivity, getSellActivitys, getAllActivitys, getActivity, editActivity } from '../controllers/activitys.js'

const router = Router()

router.post('/', content('multipart/form-data'), jwt, admin, upload, createActivity)
router.get('/', getSellActivitys)
router.get('/all', jwt, admin, getAllActivitys)
router.get('/:id', getActivity)
router.patch('/:id', content('multipart/form-data'), jwt, admin, upload, editActivity)

export default router
