import express from 'express'
import passport from 'passport'
//import * as auth from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/loginok',
    failureRedirect: '/loginfail',
    session: false,
  }),
  (req, res) => {
    console.log(req)
    res.redirect('/loginok')
  }
)

export default authRouter
