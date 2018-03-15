var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'QUE SE CUENTAN LOS HIJUEPUTAS?', autor:"Laura Enciso" });
});
     //sjnvskfbjsdbgisbgiusdbig
module.exports = router;
