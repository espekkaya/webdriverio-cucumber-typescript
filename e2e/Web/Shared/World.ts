import { Given } from 'cucumber';

import WorldPageObject from "./WorldPageObject";

Given(/^I open "([^"]*)?" the website.$/,  function(link: string): void {
    WorldPageObject.open(link);
});
