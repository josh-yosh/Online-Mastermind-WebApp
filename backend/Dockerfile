FROM gradle:9.0.0 AS build
COPY . .
RUN gradle clean dependencies
RUN gradle build

FROM openjdk:18-jdk-slim
COPY --from=build /home/gradle/build/libs/backend-app.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]


