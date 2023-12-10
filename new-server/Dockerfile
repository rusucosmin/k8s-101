FROM node:18.14.0

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN yarn install

# Starting our application
CMD [ "node", "index.js" ]

# Exposing server port
EXPOSE 3000