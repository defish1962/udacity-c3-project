# Udagram Image Filtering Application

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

## Getting Started
The application is set up to build Docker containers through the .travis.yml file (found in the root directory) and to push those containers to Docker Hub (hub.docker.io). The containers are available in the following repositories:

* defish1962/udagram-feed-api - The Feed API microservice
* defish1962/udagram-user-api - The User authentication API microservice
* defish1962/nginx - The NGINX Reverse Proxy service
* defish1962/udagram-front-end - The Ionic front end web application providing the User Interface

### Database
Create a PostgreSQL database either locally or on AWS RDS. Set the config values for environment variables prefixed with `POSTGRES_` in `set_env.sh`.

### S3
Create an AWS S3 bucket. Set the config values for environment variables prefixed with `AWS_` in the env-configmap.yml file

### Kubernetes Pods
Create your kubernetes pods with the kubectl command against the deployment (depl) and service YAML files in the Deployment/k8s folder (kubectl apply -f <name-depl.yml>)

Modify the following files and add your encrypted (base64) secrets:
aws-secret.yml
env-configmap.yml
env-secret.yml

Deploy the secrets yaml files as kubernetes secrets using the kubectl command:
kubectl apply -f aws-secret.yml
kubectl apply -f env-configmap.yml
kubectl apply -f env-secret.yml

### Port Forwarding
Set up port forwarding from your local machine to the kubernetes pods with the following commands:

Forward API requests to the microservices through the reverse proxy:
kubectl port-forward service/reverseproxy 8080:8080

Forward web requests from your browser to the front end web server:
kubectl port-forward service/frontend 8100:8100

### Test the Feed API from your browser or through Postman
* You can visit `http://localhost:8080/api/v0/feed` in your web browser to verify that the application is running. You should see a JSON payload. Feel free to play around with Postman to test the API's.

### Run the web application to see uploaded pictures, create an account, login, logout, and upload your own pictures:
* You can visit `http://localhost:8100` in your web browser to verify that the application is running. You should see a web interface.

### Check the status of Kubernetes pods
run the command kubectl get pods to see the current state of pods installed in the Kubernetes cluster

run the command kubectl describe pod <pod ID> to get detailed information about a specific pod
  
run the command kubectl logs <pod ID> to view the logs of a particular pod. This is useful for troubleshooting deployment or runtime issues with deployed pods. 
