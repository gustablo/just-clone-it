FROM node:18

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

# waits 20 seconds before mysql starts
CMD ["/bin/sh", "-c", "sleep 20 && npx prisma db push && npx prisma generate && npm run dev"]
