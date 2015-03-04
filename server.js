'use strict';

import React from 'react';
import Router from 'react-router';
import express from 'express';
import routes from './routes';

let app = express();

app.use(function (req, res) {
    Router.run(routes, req.url, (Handler) => {
        let content = React.renderToString(<Handler />);
        res.send(content);
    });
});

let server = app.listen(3000);