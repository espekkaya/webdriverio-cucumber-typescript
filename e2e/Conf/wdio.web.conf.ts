const config: any = require('./wdio.shared.conf.ts').config;

config.suites = {
    Google: [
        'Web/Features/Google/Google.feature'
    ]
};

// @ts-ignore
config.cucumberOpts.require = [
    'Web/StepDefinitions/**/*.ts',
    'Web/Shared/**/*.ts',
    'Shared/**/*.ts'
];

config.capabilities = [{
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 5,
    //
    browserName: 'chrome',
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
    'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: [
            '--disable-infobars',
            '--disable-web-security',
            '--disable-extensions',
            '--disable-dev-shm-usage'
        ]
    }
}];

config.services = [
    'selenium-standalone'
];

export { config };