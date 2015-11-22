exports.config = {
    specs: ['silly-spec.js'],
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },
    params: {
        port : 8080
    },
};
