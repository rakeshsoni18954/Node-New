const App = require('./site-routes/route-app1.js');
const App2 = require('./site-routes/route-app2.js');

module.exports = function (app) {
    app.get('/', function (req, res) { res.send('working route'); });
    app.use('/app', App);
    app.use('/app2', App2);

    // If nothing else matches, return 404
    app.use(function (req, res) {
        return res.status(404).json({
            success: false,
            error: errors.E_NOT_FOUND
        });
    });
}