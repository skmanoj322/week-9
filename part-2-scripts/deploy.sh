#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.0/bin

cd week-9
 git pull origin2 master
 cd server
 pm2 kill
 pm2 start index.js
