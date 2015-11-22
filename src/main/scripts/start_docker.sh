docker rm -f mongodb;docker run --name mongodb -p 27017:27017 -d mongo && \
docker rm -f spring-boot; docker run --name spring-boot -d --link mongodb:mongodb -p 8080:8080 se.olapetersson-spring-boot/reactive:latest
