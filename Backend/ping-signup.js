const axios = require('axios');

const pingSignup = async () => {
  try {
    console.log('🚀 Pinging signup with existing email...');
    const res = await axios.post('http://localhost:5000/api/auth/signup', {
      name: 'Test User',
      email: 'dhotrev384@gmail.com',
      password: 'password123'
    });
    console.log('✅ Success?! (Should have failed):', res.data);
  } catch (err) {
    console.log('❌ Caught Error:');
    if (err.response) {
      console.log('STATUS:', err.response.status);
      console.log('DATA:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.log('MESSAGE:', err.message);
    }
  }
};

pingSignup();
