import WorldPageObject from "../../Shared/WorldPageObject";

class GooglePageObject extends WorldPageObject {

    public get searchInput(): WebdriverIO.Element { return $("input[type='text']"); }

}

export default new GooglePageObject();
