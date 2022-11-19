const express = require('express');
const indexRouter=require("./routes/index");


const app = express();


app.use('/', indexRouter);

app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.listen(7000, () => {
    console.log('7000번 포트에서 대기 중');
  });

module.exports = app;