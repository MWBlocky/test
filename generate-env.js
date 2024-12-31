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
};
fs.writeFileSync(
  path.join(process.cwd(), 'vercel.json'),
  JSON.stringify(vercelConfig, null, 2),
  'utf8',
  (err) => {
    if (err) {
      console.error('Błąd podczas zapisywania pliku vercel.json:', err);
    } else {
      console.log('Plik vercel.json został wygenerowany.');
    }
  },
);
