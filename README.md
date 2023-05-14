# ProlectCloudAPI
This guide provides detailed instructions on how to install and launch the CloudProject on your local computer using Docker. To proceed with the installation, ensure that you have Docker and Docker Compose installed on your system. If you don't have them installed already, visit the official Docker website and download the appropriate versions for your operating system.

To begin with, clone the CloudProject repository using the command below in your terminal or command prompt:

```
git clone https://github.com/Ashry520/ProlectCloudAPI.git
```

Next, navigate to the project directory by executing the following command:

```
cd CloudProjectAPI
```

After that, use Docker Compose to build the Docker images for the backend and frontend applications by running the command:

```
docker-compose build
```

Finally, start the Docker containers by executing the command:

```
docker-compose up
```

This command will automatically download any required Docker images and create the necessary containers for the project. It is important to note that port 5000 should not be in use by any other application on your machine.

Once the containers are up and running, open a web browser and enter http://localhost:5000/persons to access the frontend application.
