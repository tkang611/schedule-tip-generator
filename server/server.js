const express = require('express')
const app = express();
app.use(express.json());

app.use('/', (req, res) => {
    res.status(200).json('testing?')
})

//global error handler
app.use((err, req, res, next) => {
    const errObj = {
      log: 'global error handler invoked',
      status: 400,
      message: err,
    };
    if (err.name === 'InvalidParameterCombinationException') {
      errObj.tooManyDatapoints = true;
    }
    return res.status(errObj.status).json(errObj);
  })
  
  app.listen(3000, () => {
    console.log('Listening on port: 3000.')
  })