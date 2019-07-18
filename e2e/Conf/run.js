// region Basic configuration
/*
Basic configuration to run webdriverio
@configuration-cli $ node node_modules\@wdio\cli\bin\wdio.js Conf/run.js --ENV=wdio.web.conf --suite=Google
@configuration-cli $ node node_modules\@wdio\cli\bin\wdio.js Conf/run.js --ENV=wdio.web.conf --suite=Google --cucumberOpts.tags="@Test" --cucumberOpts.name=Test
*/
// endregion

let env = 'wdio.web.conf';

process.argv.forEach(function (element) {
    if (element.includes('--')) {
        let spl = element.replace('--', '').split('=');

        if (spl[0] === 'ENV') env = spl[1];
    }
});

require('ts-node/register');
module.exports = require('./' + env +'.ts');
