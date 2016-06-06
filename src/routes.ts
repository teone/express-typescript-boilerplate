import express = require("express")

export function index(req: express.Request, res: express.Response) {
  return res.send(200, { 'app': 'onlab registration' });
};