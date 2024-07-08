# Use OpenJDK 11 base image
FROM openjdk:11-jre-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file built by Maven
COPY target/TodoApp-0.0.1-SNAPSHOT.jar TodoApp-0.0.1-SNAPSHOT.jar

# Expose port 8080
EXPOSE 8080

# Command to run the Spring Boot application
CMD ["java", "-jar", "TodoApp-0.0.1-SNAPSHOT.jar"]
