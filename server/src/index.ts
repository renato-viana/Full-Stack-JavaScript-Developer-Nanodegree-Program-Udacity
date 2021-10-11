import express from 'express';

const app = express();
const port = 3000;

// define a route handler for the default home page
app.get('/api', (req, res) => {
  res.send('Server working!');
  console.log(req.ip);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
