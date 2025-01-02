# Wybieramy obraz bazowy
FROM node:16

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy pliki package.json i package-lock.json do katalogu roboczego
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy wszystkie pliki źródłowe
COPY . .

# Tworzymy skrypt bashowy do uruchomienia generate.js przed budowaniem aplikacji
RUN echo '#!/bin/bash\n\
  node generate.js\n\
  npm run build\n\
  node dist/main' > /app/run.sh && chmod +x /app/run.sh

# Ustawiamy domyślną komendę do uruchomienia skryptu
CMD ["./run.sh"]
