const router = require('express').Router();

const apiRoutes = require('../api/controllers');
const homeRoutes = require('./homeroutes.js');
const dashboardRoutes = require('./dashboardroutes.js');

router.use('../api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;