const router = require('express').Router();
const apiRoutes = require('./controllers');
const homeRoutes = require('./homeroutes.js');
const dashboardRoutes = require('./dashboardroutes.js');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});



module.exports = router;