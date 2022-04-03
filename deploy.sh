docker build -t dockerifont21/multi-client:latest -t dockerifont21/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t dockerifont21/multi-server:latest -t dockerifont21/multi-server:$SHA -f ./client/Dockerfile ./server
docker build -t dockerifont21/multi-worker:latest -t dockerifont21/multi-worker:$SHA -f ./client/Dockerfile ./worker

docker push dockerifont21/multi-client:latest
docker push dockerifont21/multi-server:latest
docker push dockerifont21/multi-worker:latest

docker push dockerifont21/multi-client:$SHA
docker push dockerifont21/multi-server:$SHA
docker push dockerifont21/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/client-deployment client=dockerifont21/multi-client:$SHA
kubectl set image deployments/server-deployment server=dockerifont21/multi-server:$SHA
kubectl set image deployments/worker-deployment worker=dockerifont21/multi-worker:$SHA