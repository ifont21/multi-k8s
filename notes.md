## Docker and K8

### Configure docker CLI to point out to minikube docker CLI

- run this command in a terminal `eval $(minikube docker-env)`
- that is temporary and as soon as you shut down the computer or close the terminal docker CLI is again pointing to local docker CLI

### Minikube start

- `minikube start --driver=hyperkit`

## Kubernetes

### Pods

Is a group of containers with a common purpose

### Deployments

Maintains a set of identical pods, ensuring that they have the correct config and that the right number exists. Deployments is a type of controller

---

### Services

Sets up networking in a Kubernetes Cluster

#### ClusterIP

- Expose a set of pods to other objects in the cluster

#### NodePort

- Expose a set of pods to the outside world (only good for dev purposes!!!)

#### LoadBalancer

- Legacy way of getting network traffic into a cluster

#### Ingress

- Exposes a set of services to the outside world.

---

### Secrets

Securely stores a piece of information in the cluster, such as a database password 

### Error Fix

After installing **ingress-nginx** if you get an error trying to add the addons to the ingress you can run this

`kubectl delete job nginx-admission-create -n ingress-nginx`

---

## Helm

Helm is a program that we can use to administer third parties software inside our K8s cluster

- Helm Client
- Tiller Server 