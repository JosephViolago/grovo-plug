var debug = require('debug')('botkit:incoming_webhooks');

module.exports = function(webserver, controller) {

    debug('Configured /slack/receive url');
    webserver.get('/hello', function(req, res) {
        res.status(200);
        res.send({"hello": "world!"});
    });

}
