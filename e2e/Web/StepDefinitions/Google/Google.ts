import { Then } from "cucumber";
import allureReporter from '@wdio/allure-reporter';
import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

import PageObject from "./GooglePageObject";
import { SEVERITYLEVEL } from "../../../Shared/Enums";

Then(/^Check searching page is opened.$/, async function(): Promise<void> {
    allureReporter.addSeverity(SEVERITYLEVEL.BLOCKER);

    const elm = await PageObject.searchInput.isDisplayed();
    console.log(elm, PageObject.searchInput.isDisplayed());
    return await chai.expect(PageObject.searchInput.isExisting(), 'Searching Input Not Exist !').to.eventually.be.true;
});
