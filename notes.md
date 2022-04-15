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

### Installing Helm from Google Cloud Console And Add Ingress-Nginx


- `curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3`
- `chmod 700 get_helm.sh`
- `./get_helm.sh`
- `helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx`
- `helm install my-release ingress-nginx/ingress-nginx`

### Install Cert Manager

1. Add the Jetstack Helm repository
   `helm repo add jetstack https://charts.jetstack.io`
2. Update your local Helm chart repository cache
   `helm repo update`
3. Install the cert-manager Helm Chart:


   ```sh

   helm install \
    cert-manager jetstack/cert-manager \
    --namespace cert-manager \
    --create-namespace \
    --version v1.8.0 \
    --set installCRDs=true
   ```

4. Install the CRDs
   `kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.2.0/cert-manager.crds.yaml`