class userDashboardPage {

    /* Define Elements */
    h1() {return ('body > div.dashboard > div.dashboard_content > div.wrapper > main > div.wrapper > div > h1')}
    createOrganizationButton() {return ('body > div.dashboard > div.dashboard_sidebar > nav > a:nth-child(7) > div > span')}
    hopinOrganizationButton() {return ('body > div.dashboard > div.dashboard_sidebar > nav > a:nth-child(6) > div > span.dashboard-navigation_subtitle')}
    organizerNameField() {return ('#organization_name')}
    organizerEmailField() {return ('#organization_email')}
  
  }  
module.exports = new userDashboardPage()