
describe('A silly test', function() {
    it('it is really dumb', function() {
        browser.sleep(2000);
        browser.ignoreSynchronization = true;
        browser.get('http://'+ browser.params.url.host +':' + browser.params.url.port);
        browser.sleep(2000);

        expect(browser.getCurrentUrl()).toBe('http://' + browser.params.url.host +':' + browser.params.port + '/');
    });
});