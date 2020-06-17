# Udagram Image Filtering Application

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into two parts:
1. Frontend - Angular web application built with Ionic Framework
2. Backend RESTful API - Node-Express application

## Getting Started
The application is set up to build Docker containers through the .travis.yml file (found in the root directory) and to push those containers to Docker Hub. The containers are available in the following repositories:

* defish1962/udagram-feed-api - The Feed API microservice
* defish1962/udagram-user-api - The User authentication API microservice
* defish1962/nginx - The NGINX Reverse Proxy service
* defish1962/udagram-front-end - The Ionic front end web application providing the User Interface

### Database
Create a PostgreSQL database either locally or on AWS RDS. Set the config values for environment variables prefixed with `POSTGRES_` in `set_env.sh`.

### S3
Create an AWS S3 bucket. Set the config values for environment variables prefixed with `AWS_` in `set_env.sh`.

* You can visit `http://localhost:8080/api/v0/feed` in your web browser to verify that the application is running. You should see a JSON payload. Feel free to play around with Postman to test the API's.

* You can visit `http://localhost:8100` in your web browser to verify that the application is running. You should see a web interface.
