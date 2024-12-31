const fs = require('fs');

const vercelConfig = {
  version: 2,
  builds: [
    {
      src: "src/main.ts",
      use: "@vercel/node",
    },
  ],
  routes: [
    {
      src: "/(.*)",
      dest: "src/main.ts",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "X-Requested-With,Content-Type,Accept",
      },
    },
  ],
};

fs.writeFileSync(
  './vercel.json',
  JSON.stringify(vercelConfig), (err) => {
    if (err) throw err;
    console.log('vercel.json written');
  });