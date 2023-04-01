FROM node:14
WORKDIR /app
COPY package*.json ./
# Install dependencies
RUN npm install
# Install MongoDB and Mongoose
# RUN npm install mongodb mongoose
COPY . .
# ENV MONGO_URL mongodb://mongo:27017/mission5db
EXPOSE 8000
CMD [ "node","index" ]
