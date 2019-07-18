"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wdio_shared_conf_1 = require("./wdio.shared.conf");
wdio_shared_conf_1.config.capabilities = [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
    }];
wdio_shared_conf_1.config.services = [
    'selenium-standalone'
];
wdio_shared_conf_1.config.cucumberOpts.require = [
    'Web/StepDefinations/**/*.ts',
    'Web/Shared/**/*.ts',
    'Shared/**/*.ts'
];
