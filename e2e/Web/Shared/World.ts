import { Given } from 'cucumber';

import WorldPageObject from "./WorldPageObject";

Given(/^I open "([^"]*)?" the website.$/, async function(link): Promise<void> {
    return await WorldPageObject.open(link);
});
