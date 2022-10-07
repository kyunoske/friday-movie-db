FROM openjdk:17

LABEL maintainer="test@neuefische.de"

ADD backend/target/backend.jar backend.jar

CMD [ "sh", "-c", "java -DServer.port=$PORT -jar /backend.jar"]