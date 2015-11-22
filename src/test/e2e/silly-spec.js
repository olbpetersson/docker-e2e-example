
describe('A silly test', function() {
    it('it is really dumb', function() {
        browser.sleep(2000);
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:' + browser.params.port);
        browser.sleep(2000);

        expect(browser.getCurrentUrl()).toBe('http://localhost:' + browser.params.port + '/');
    });
});