class organizerDashboardPage {

    /* Define Elements */
    createEventButton() {return ('body > div.dashboard > div.dashboard_content > div.wrapper > main > div.container.-max-10 > div > a')}
    eventNameField() {return ('#name')}
    eventTypePublic() {return ('body > div.dashboard > div.dashboard_content > div.wrapper > main > div.container.-max-6.mt-64 > div:nth-child(2) > form > div.field.stack.-gap-12 > label:nth-child(4) > span')}
    createEventButton2() {return ('body > div.dashboard > div.dashboard_content > div.wrapper > main > div.container.-max-6.mt-64 > div:nth-child(2) > form > input.button.-full')}
    allAccessEvent() {return ('body > div.dashboard > div.dashboard_content > div.wrapper > main > div.container.-max-6.mt-64 > div:nth-child(2) > form > input.button.-full')}
    
  }  
module.exports = new organizerDashboardPage()

