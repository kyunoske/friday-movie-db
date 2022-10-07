FROM openjdk:17

LABEL maintainer="test@neuefische.de"

ADD backend/target/friday-movie-db.jar friday-movie-db.jar

CMD [ "sh", "-c", "java -DServer.port=$PORT -jar /friday-movie-db.jar"]