import passport from 'passport'

function login() {
  return passport.authenticate('local', {
    successRedirect: '/loginok',
    failureRedirect: '/loginfail',
  })
}

export { login }
