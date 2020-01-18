const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ar1q4.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({message:'Hello World'});
});

app.listen(3333);