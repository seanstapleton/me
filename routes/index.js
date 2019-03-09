const express = require('express');
const _ = require('lodash');

const router = express.Router();

const quotes = [
    {
        quote: 'A fool sleeps when he\'s tired. A wise man sleeps when he can.',
        person: 'Dan Mace',
        image: 'https://pbs.twimg.com/profile_images/1001630047873183744/-gAlkD1p_400x400.jpg'
    },
    {
        quote: 'Talk is cheap. Show me the code',
        person: 'Linus Torvald',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/220px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg'
    },
    {
        quote: 'The utmost thing is the user experience, to have the most useful experience.',
        person: 'Marissa Meyer',
        image: 'https://static01.nyt.com/images/2018/04/18/business/18CORNER-MARISSA/merlin_136626357_af00aab0-fef3-4028-a338-f3e75ff66c48-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    },
    {
        quote: 'Success is a lousy teacher. It seduces smart people into thinking they can\'t lose.',
        person: 'Bill Gates',
        image: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg'
    },
    {
        quote: 'If you aren’t embarrassed by the first version of your product, you shipped too late.',
        person: 'Reid Hoffman',
        image: 'https://pbs.twimg.com/profile_images/971127018023665664/cDRrTbCI_400x400.jpg'
    },
    {
        quote: 'Get really efficient at the boring stuff or it will consume your life.',
        person: 'Idk',
        image: 'https://media.licdn.com/dms/image/C5603AQEdI2eOdOQbGw/profile-displayphoto-shrink_200_200/0?e=1557360000&v=beta&t=5-UsSj5MhWHMz6pVtQzrMo0LJxaoCQkTXUXMhoPnUsU'
    }
];

router.get('/quote',  (req, res) => {
    const ridx = _.random(0, _.size(quotes)-1);
    const quote = quotes[ridx];
    const html = `
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet">
        <style> body { margin: 0 } </style>
        <div>
            <div style='width: 100px; height:100px; background-image: url(${quote.image}); background-size: cover; float: left; display: block;'></div>
            <div style='float: left; padding-left: 10px; width: calc(100% - 110px); font-family: Open Sans'>
                <p style='margin-top: 7.5px;'>${quote.quote}</p>
                <p style='padding: 0;'>-${quote.person}</p>
            </div>
        </div>`;
    return res.send(html);
});

module.exports = router;
