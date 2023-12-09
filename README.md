# k8s 101

If you wanna follow along, clone this repo:

```bash
$ git clone https://github.com/rusucosmin/k8s-101
$ cd k8s-101
```

## Prerequisites

- `git`
- `yarn`
- `docker`
- `terraform`
- `gcloud`
- `kubectl`

## Step 1: Build your app

In this example, we use a simply Node app running an express server. See `server/index.js` for an example.

To run the server locally:
```bash
$ cd server
$ yarn install
$ yarn start
# In another terminal, or navigate with your browser, to make sure the server is running:
$ curl http://localhost:3000/
```

## Step 2: Dockerize the app.

Check out `server/Dockerfile` for an example

```bash
$ cd server
# Build the docker image:
#   Replace with your own dockerhub username, and create a repo with the name k8s-101.
#   For the purpose of this execise, make that repo public
$ docker build . -t rusucosmin/k8s-101:v1
# Push the docker image to dockerhub (so k8s can pull it)
$ docker push rusucosmin/k8s-101:v1
# Test if everything work by running the new image, and checking again the server
$ docker run -p 3000:3000 rusucosmin/k8s-101:v1
# In another terminal, or navigate with your browser, to make sure the server is running:
$ curl http://localhost:3000/
```

## Step 3: Create your k8s infrastructure


Use the cluster:
```bash
$ gcloud container clusters get-credentials this-is-not-my-first-time --region us-central1 --project dutylabs-adhoc
```

## Step 4: Deploy

```bash
$ cd kube
$ kubectl apply -f deployment.yaml -f service.yaml -f ingress.yaml
```