const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;

// express middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// serve static assets when on heroku
if ( process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.use(routes);

app.listen(PORT, () => {
    console.log(`server started`)
});