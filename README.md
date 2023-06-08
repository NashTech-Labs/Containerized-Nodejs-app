# containerized-nodejs-app

This application has been packaged into a Docker container, allowing for easy deployment and scalability across different environments.

# Prerequisites

Make sure you have the Docker dependencies installed on your system

# Getting Started

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Build the Docker image by running the following command:

```bash
$ docker build --tag nodejs-docker-app -f Dockerfile .
```

This command builds the Docker image using the provided Dockerfile and tags it as nodejs-docker-app.

4. Once the image is built successfully, you can run the container using the following command:

```bash
$ docker container run -d -p 8080:8080 nodejs-docker-app
```

# Stopping the container

To stop the running container, you need to find its container ID or name. Use the following command to list all running containers:

```bash
$ docker ps
```

Once you have the container ID or name, stop it by running:

```bash
$ docker stop <container_id>
```
