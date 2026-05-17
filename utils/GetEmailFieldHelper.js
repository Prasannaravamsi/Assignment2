const {Page,expect}=require("@playwright/test")

function getEmailField(page){
    return page.getByPlaceholder("you@email.com")
}

module.exports={getEmailField}