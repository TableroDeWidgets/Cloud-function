// api/login.js
const axios = require('axios');

module.exports = async (req, res) => {
  //const allowedOrigins = ['https://your-flutter-web-app.com'];

  //if (!allowedOrigins.includes(req.headers.origin)) {
  //  res.status(403).send('Forbidden');
  //  return;
  //}

  const email = process.env.EMAIL;
  const userPassword = process.env.USER_PASSWORD;

  try {
    const response = await axios.post('https://apify.epayco.co/login/mail', {
      email: email,
      password: userPassword
    });

    // Send only the necessary data to the client
    res.status(200).send({ token: response.data.token });
  } catch (error) {
    res.status(500).send('Error logging in');
  }
};

// module.exports = (req, res) => {

//   res.status(200).json({ message: 'Hello world' });

// }
