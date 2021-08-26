---
title: Kubernetes Command
date: "2021-08-26T12:24:04.284Z"
description: "These are some of kubernetes command"
---
### Node, Pod, Label, Annotation

All labels can be applied not only to the pod

All annotations can be applied not only to pods

## Pod and Node

### View the node

```bash
$ kubectl get nodes
```

### See the pod

```bash
$ kubectl get pods
```

### View pod by displaying label

```bash
$ kubectl get pods --show-labels
```

### Search for pods based on labels

```bash
$ kubectl get pods -l key 
```

### Make a pod

```bash
$ kubectl create -f nama-file-pod.yaml
```

### Create pods in certain namespaces

```bash
$ kubectl create -f nama-file-pod.yaml --namespace nama-namaspace
```

### View the description of the pod

```bash
$ kubectl describe pod nama-pod
```

### Delete pod

```bash
$ kubectl delete pod nama-pod
```

### Delete all pods in the namespace

```bash
$ kubectl delete pod --all --namespace nama-namepace
```

## Namespace

### View the namescape

```bash
$ kubectl get namespaces
```

Or likethis

```bash
$ kubectl get ns
```

### See pods in certain namespaces

```bash
$ kubectl get pods -n nama-namespace
```

### Create namespace

```bash
$ kubectl creat -f nama-file-namespace.yaml
```

### Delete namespace

```bash
$ kubectl delete namespace nama-namespace
```

## Probe

So there are 3 probes :

- livenessProbe 
Health check, if it's not healthy then the pod will be restarted
- readinessProbe
Health check, if the pod is not healthy the traffic will be turned off
- startupProbe
Health check when pod runs (at startup)

There are many more commands for Kubernetes. The above commands are only a few.