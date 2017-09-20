FROM node:alpine

# workdir 
WORKDIR /usr/src/app 

# install app dependencies  
COPY package.json . 
RUN npm install 

# bundle source 
COPY . . 

# port on the docker virtual network 
EXPOSE 3000 35729

# run app 
CMD ["npm", "start"]
