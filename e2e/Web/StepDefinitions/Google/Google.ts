import { Given } from "cucumber";

import { WorldPageObject } from "../../Shared/World.PageObject";

Given(/^I open "([^"]*)?" the website$/, async function(link: string): Promise<void> {
    return await WorldPageObject.open(link);
});
