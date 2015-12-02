var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Koa test';
});

app.listen(4747);