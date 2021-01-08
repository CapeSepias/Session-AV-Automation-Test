class loginPage {

    /* Define Elements */
    emailField() {return ('#user_email')}
    passwordField() {return ('#user_password')}
    loginButton() {return ('#new_user > input.button.-full')}

  }
module.exports = new loginPage()