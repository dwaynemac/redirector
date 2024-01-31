require('dotenv').config();
function loadConfig() {
  const requiredEnvars = [
    'TARGET_URL'
  ];

  for (const key of requiredEnvars) {
    if (!process.env[key]) {
      throw new Error(`Environment variable ${key} is required`);
    }
  }

  return {
    targetUrl: process.env.TARGET_URL
  };
}

const config = loadConfig();

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': config.targetUrl + req.url
  });
  res.end();
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
