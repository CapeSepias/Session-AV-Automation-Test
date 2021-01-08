class homePage {

        /* Define Elements */
        loginLink() {return ('.main-menu > :nth-child(6) > a')}
        allAccessEventLogin() {return ('body > header > nav > a:nth-child(1)')}

      }
module.exports = new homePage()