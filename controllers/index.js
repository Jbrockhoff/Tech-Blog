const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
const pageRoutes = require('./pageRoutes')

router.use('/', pageRoutes)

module.exports = router;
