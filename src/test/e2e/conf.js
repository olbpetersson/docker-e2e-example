exports.config = {
    specs: ['silly-spec.js'],
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },
    params: {
        host: "",
        port: -1
    },
};
