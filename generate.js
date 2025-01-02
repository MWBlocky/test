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
      schedule: '20 11 * * 4',
    },
  ],
  env: {
    CRON_SECRET: 'secrbuibet',
  },
};
fs.writeFileSync(
  path.join(__dirname, 'vercel.json'),
  JSON.stringify(vercelConfig, null, 2),
);

console.log('Plik vercel.json został wygenerowany.');
