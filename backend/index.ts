import express from 'express';

const app = express();

app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/api/greet/:name', (req, res) => {
    const lang = req.query.lang;

    if (!lang) {
        return res.status(400).json({ message: `Error: Language is undefined.` });
    }

    if (lang === 'en') {
        return res.json({ message: 'Hello ' + req.params.name });
    } else if (lang === 'hu')  {
        return res.json({ message: 'Szia ' + req.params.name });
    } else {
        return res.status(404).json({ message: `Error: language ${lang} is not found.` });
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000 ...');
});

