FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps --prefer-offline --no-audit

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD /bin/sh -c "npx prisma generate && npm run dev" 