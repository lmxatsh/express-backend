import { Strategy as LocalStrategy } from 'passport-local'
import users from './models/users.model.js'

function setPassportlocalStrategy(passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        //session: false,
      },
      function (email, password, done) {
        console.log(`login info: ${email}, ${password}`)
        users
          .findOne({
            where: {
              email: email,
            },
          })
          .then((user) => {
            if (user && user.password === password) {
              return done(null, user)
            } else {
              return done(null, false)
            }
          })
          .catch((err) => {
            console.log(err)
            return done(err)
          })
      }
    )
  )
}
export { setPassportlocalStrategy }
