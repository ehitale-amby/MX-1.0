FROM node:16
RUN git clone https://github.com/themxgamecoder/MX-1.0 /root/themxgamecoder
WORKDIR /root/themxgamecoder 
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#themxgamecoder
