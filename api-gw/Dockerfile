# Node.js tabanlı bir imaj kullanma
FROM node:14

# Çalışma dizinini ayarla
WORKDIR /usr/src/app

# Paket dosyalarını kopyala ve bağımlılıkları yükle
COPY package*.json ./
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamayı başlat
CMD ["node", "server.js"]
