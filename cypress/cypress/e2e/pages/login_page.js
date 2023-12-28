export class LoginPage{

username_textbox = (':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
password_textbox = (':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
login_button = ('.oxd-button')

enterusername(username){
    cy.get(this.username_textbox)
      .type(username)
}
enterpassword(password){
    cy.get(this.password_textbox)
      .type(password)
}
clicklogin(){
    cy.get(this.login_button).click()
}
}