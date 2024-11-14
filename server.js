require('@aikidosec/firewall'); // Aikido Zen must be at the very top

const express = require('express'); // Import Express
const app = express(); // Initialize Express app
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world! This is a basic Node.js app with Aikido Zen.');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});