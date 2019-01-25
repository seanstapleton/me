const express = require('express');
const _ = require('lodash');

const router = express.Router();

const quotes = [
    { quote: 'A fool sleeps when he\'s tired. A wise man sleeps when he can.', person: 'Dan Mace' },
    { quote: 'Talk is cheap. Show me the code', person: 'Linus Torvald' },
    { quote: 'The utmost thing is the user experience, to have the most useful experience.', person: 'Marissa Meyer' },
    { quote: 'Success is a lousy teacher. It seduces smart people into thinking they can\'t lose.', person: 'Bill Gates' }
];

router.get('/quote',  (req, res) => {
    const ridx = _.random(0, _.size(quotes)-1);
    const quoteString = `"${quotes[ridx].quote}" -${quotes[ridx].person}`;
    return res.send(quoteString);
});

module.exports = router;
