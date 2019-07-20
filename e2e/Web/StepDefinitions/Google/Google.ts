import { Then } from "cucumber";
import allureReporter from '@wdio/allure-reporter';
import chai = require('chai');

import PageObject from "./GooglePageObject";
import { SEVERITYLEVEL } from "../../../Shared/Enums";

Then(/^Check searching page is opened.$/, function(): void {
    allureReporter.addSeverity(SEVERITYLEVEL.BLOCKER);

    chai.expect(PageObject.searchInput.isExisting(), 'Searching Input Not Exist !').to.be.true;

    return;
});
