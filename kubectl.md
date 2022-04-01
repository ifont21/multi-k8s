## Kubectl Commands

### Adding pods

- `kubectl apply -f <file_name>.yaml`

### Adding services

- `kubectl apply -f <file_name-service>.yaml`

### Get Pods

- `kubectl get pods`

### Describe Pods

- `kubectl describe pods <pod_name>(optional)`

### Get Pods With More Info

- `kubectl get pods -o wide`

### Get Services

- `kubectl get services`

### Delete a Pod

- `kubectl delete -f <file_name>.yaml`

### Get All Deployments

- `kubectl get deployments`

### Update Build Image for a Deployments

- `kubectl set image <k8-object-type>/<object-name> <container-name>=<image:tag>`
- `kubectl set image deployment/client-deployment client=dockerifont21/multi-client:v5`

### Get Logs

- `kubectl logs <pod_name>`

### Get Storage By Default

- `kubectl get storageclass`

### Get Persistent Volume

- `kubectl get pv`

### Creating a secret

- `kubectl create secret <generic/docker-registry/tls> <secret_name> --from-literal key=value`
- `kubectl create secret generic pgpassword --from-literal PG_PASSWORD=12345asdf` 

### Get secrets

- `kubectl get secrets`




