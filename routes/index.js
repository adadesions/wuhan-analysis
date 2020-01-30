var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/analysis', function(req, res, next) {
  let seq = req.body.seq
  let seqLen = seq.length
  let bases = {A: 0, T:0, C:0, G:0}

  for(let s of seq) {
    bases[s] += 1
  }

  const percent = (x, y) => (x*100/y).toFixed(2)

  bases.A = percent(bases.A, seqLen)
  bases.T = percent(bases.T, seqLen)
  bases.C = percent(bases.C, seqLen)
  bases.G = percent(bases.G, seqLen)

  res.render('analysis', bases)
});

module.exports = router;
