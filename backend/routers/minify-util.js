const express = require('express');
const { default: postcss } = require('postcss');
const Terser = require("terser");
const router = express.Router();

// endpoint to minify css from client
router.post('/minify-css', (req, res) => {
    const { css } = req.body;
    // console.log(css);
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

// endpoint to minify js from client
router.post('/minify-js', async (req, res) => {
    const { js } = req.body;
    try {
        const result = await Terser.minify(js);
        if (result.error) {
            console.log(result.error);
            res.status(500).json(result.error);
        } else {
            res.status(200).json(result.code);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;