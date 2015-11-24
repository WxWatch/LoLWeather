var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var request = require('request');

router.get('/weather/:lat/:lon', getWeather);
router.get('/locations', getLocations);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getLocations(req, res, next) {
    res.status(200).send(data.locations);
}

function getWeather(req, res, next) {
    request('https://api.forecast.io/forecast/b6dac7610318bc31c62ff30fea5b8a13/' + req.params.lat + ',' + req.params.lon, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.status(200).send(body);
        }
    });
}
