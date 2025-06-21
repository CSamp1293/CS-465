const mongoose = require('mongoose');
const newsModel = require('../database/models/news');

// GET: /news - return list of all news
const newsList = async (req, res) => {
    newsModel
        .find({})
        .exec((err, news) => {
            if (!news) {
                return res
                    .status(404)
                    .json({ message: 'News not found' });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(news);
            }
        });
};

// GET: /news/:newsCode - return a single news piece
const newsFindCode = async (req, res) => {
    newsModel
        .find({ 'code': req.params.newsCode })
        .exec((err, news) => {
            if (!news) {
                return res
                    .status(404)
                    .json({ message: 'News not found with code ' + req.params.newsCode });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(news);
            }
        });
};

module.exports = {
    newsList,
    newsFindCode
};