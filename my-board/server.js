const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONNECT TO MONGODB SERVER
mongoose
  .connect(`mongodb+srv://iphone9266:1234@cluster0.bw2vckm.mongodb.net/Board?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    // 국방연구원은 SSL 관련 설정으로 인해서 false로 설정
    sslValidate : false
 })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(event => console.error(event));

//router
app.use('/boards', require('./router/boards'));
app.use('/', require('./router/homes'));


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));