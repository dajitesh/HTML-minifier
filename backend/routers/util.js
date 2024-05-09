const express = require('express');
const { default: postcss } = require('postcss');
const router = express.Router();

// endpoint to minify css from client
router.post('/minify', (req, res) => {
    const { css } = req.body;
    console.log(css);
    postcss([require('cssnano')({
        preset: 'default',
    })])
        .process(css, { from: undefined })
        .then((result) => {
            res.status(200).json(result.css);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;