import * as express from "express";
import * as bodyParser from "body-parser";
import * as routes from "./src/routes";
const app = express();


app.use(bodyParser.json());

const env = process.env.NODE_ENV || 'production';
if (env === 'development') {
  // app.use(errorHandler());
}

app.get('/', routes.index);

app.listen(3000, function() {
  console.log("Demo Express server listening on port %d in %s mode", 3000, env);
});

export var App = app;