const fs = require('fs');
const path = require('path');

const vercelConfig = {
  version: 2,
  builds: [
    {
      src: 'src/main.ts',
      use: '@vercel/node',
    },
  ],
  routes: [
    {
      src: '/(.*)',
      dest: 'src/main.ts',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Accept',
      },
    },
  ],
  crons: [
    {
      path: '/',
      schedule: '22 11 * * 4',
    },
  ],
  env: {
    CRON_SECRET: 'secrbuibet',
  },
};

let vercelPath = path.join(process.cwd(), 'vercel.json');
let file = fs.readFileSync(vercelPath);

if (fs.existsSync(file)) {
  console.log('vercel.json already exists.');
  fs.writeFileSync(vercelPath, JSON.stringify(vercelConfig, null, 2));
  console.log('vercel.json has been updated successfully.');
} else {
  fs.writeFileSync(vercelPath, JSON.stringify(vercelConfig, null, 2));
  console.log('vercel.json has been created successfully.');
}
