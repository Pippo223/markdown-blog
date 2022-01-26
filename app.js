const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 5000;
const articleRouter = require('./routes/articles')

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))
app.use('/articles', articleRouter);

const articles = [{
    title: 'Test Article',
    createdAt: new Date,
    description: 'Test Description'
}, 
{
    title: 'Test Article 2',
    createdAt: new Date,
    description: 'Test Description 2'
},]
app.get('/', (req, res) =>{
    res.render('articles/index', { articles: articles});
})



app.listen(PORT, ()=>{
    console.log('Listening on port', PORT)
});