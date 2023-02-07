const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({extended: false}));
app.use(express.json());

/*=======================Routes========================*/
app.use(require('./routes/main'));

app.use(express.static(path.join(__dirname, 'public')));
/*====================================================*/
/*=======================Server========================*/
app.listen(3000, () => {
    console.log('Server listening on port: 3000');
});
/*====================================================*/