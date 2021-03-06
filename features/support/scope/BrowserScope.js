const puppeteer = require('puppeteer');

/**
 * Manage the Puppeteer browser and page objects.
 */
class BrowserScope {
    constructor(){
        this.browser = null;
        this.page = null;
    }

    async init(){
        this.close();

        this.page = null;
        this.browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-dev-shm-usage'], 
            ignoreHTTPSErrors: true
        });
    }

    async close(){
        if(this.browser)
            await this.browser.close();
        
        this.page = null;
        this.browser = null;
    }
}

module.exports = BrowserScope;