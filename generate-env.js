const fs = require('fs');

const testEnv = "PRODUCTION=true";

// Zapisanie zmiennej do pliku .env
fs.writeFileSync('./.env', testEnv, 'utf8', (err) => {
  if (err) {
    console.error("Błąd podczas zapisywania pliku .env:", err);
  } else {
    console.log('.env został utworzony');
  }
});
