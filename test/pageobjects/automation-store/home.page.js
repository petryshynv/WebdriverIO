import BasePage from "./base.page";
import CategoryMenuComponent from "../automation-store/components/category-menu.comp"

class HomePage extends BasePage {
    open(){
        return super.open("");
    }
//git tets
//one more test
//another tset testGit2
//test3
    get categoryMenuComponent() {
        return CategoryMenuComponent;
    }
    //git test
}
export default new HomePage();