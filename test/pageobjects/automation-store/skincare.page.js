import BasePage from "./base.page";
import ItemComponent from "../automation-store/components/item.comp";

class SkinCarePage extends BasePage {
    get itemComponent() {
        return ItemComponent;
    }
    
}

export default new SkinCarePage ();