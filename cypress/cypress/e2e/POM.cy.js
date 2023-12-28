import { LoginPage } from "./pages/login_page"

const loginpage = new LoginPage ()
it('pom',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginpage.enterusername('Admin')
    loginpage.enterpassword('admin123')
    loginpage.clicklogin()


})