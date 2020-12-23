# General mapping

 - frontend - Dashboard
 - application - Visualization app and Custom app

NAME               STATUS   ROLES               AGE   VERSION
ip-172-31-35-167   Ready    application,slave   36m   v1.17.3
ip-172-31-37-189   Ready    frontend,slave      38m   v1.17.3
ip-172-31-40-97    Ready    backend,master      40m   v1.17.3
ip-172-31-47-162   Ready    monitoring,slave    35m   v1.17.3

# Known issues

## Issue #1
```Aug 07 08:31:08 ip-172-31-47-162 kubelet[835]: W0807 08:31:08.204556     835 watcher.go:87] Error while processing event ("/sys/fs/cgroup/devices/system.slice/run-redc1387a78bb4ab580fd5153d8cd271b.scope": 0x40000100 == IN_CREATE|IN_ISDIR): inotify_add_watch /sys/fs/cgroup/devices/system.slice/run-redc1387a78bb4ab580fd5153d8cd271b.scope: no such file or directory```

## Report:
https://github.com/kubernetes/kubernetes/issues/76531

## Solution:

1. ```kubectl delete -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')&password-secret=weave-passwd)"```
2. ```kubectl apply -f "https://github.com/weaveworks/weave/releases/download/v2.4.1/weave-daemonset-k8s-1.8.yaml"```
3. ```kubectl logs -n kubernetes-dashboard dashboard-metrics-scraper-94998cfb6-wlsv6```
4. ```kubectl get pods --all-namespaces --output=wide```
5. If pods are not getting created:
6. ```kubectl delete namespaces kubernetes-dashboard```
7. ```kubectl apply -f recommended.yaml.1```
8. If pods still are not getting created:
9. ```kubectl get pods --all-namespaces --output=wide```
10. ```kubectl delete namespaces kubernetes-dashboard```
11. Repeat step 1 and 2 ( with version weave-2.5.2 ) like this:
12. ```kubectl delete -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')&password-secret=weave-passwd)"```
13. ```291  kubectl apply -f "https://github.com/weaveworks/weave/releases/download/v2.5.2/weave-daemonset-k8s-1.8.yaml"```
14. ```292  kubectl get pods --all-namespaces --output=wide```
15. ```293  kubectl apply -f recommended.yaml.1```
16. ```294  kubectl get pods --all-namespaces --output=wide```
17. If pods still are not getting created ( are stuck at CreatingContainer ), repeat step 11 ( which repeats steps 1 and 2 ), whith weave-2.5.0.
18. If pods still are not getting created ( are stuck at CreatingContainer ), repeat step 17 with weave-2.3.0. After that, continue to next step.
19. Now, the metrics pods should hve created and the rest should be at some kind of LoopBack state. Continue to next step.
20. Now attempt once again to set up weave-2.4.1 and the kubernetes-dashboard:
21. ```312  kubectl apply -f "https://github.com/weaveworks/weave/releases/download/v2.4.1/weave-daemonset-k8s-1.7.yaml"```
22. ```313  kubectl get pods --all-namespaces --output=wide```
23. ```314  kubectl get nodes --all-namespaces --output=wide```
24. ```315  kubectl get ev -n kubernetes-dashboard```
25. ```316  kubectl apply -f recommended.yaml.1```
26. ```317  kubectl get ev -n kubernetes-dashboard```
27. ```318  kubectl get pods --all-namespaces --output=wide```

## Issue #2
```Aug 07 08:31:08 <cluster-name-by-default-hostname> kubelet[835]: E0807 08:31:08.425896     835 summary_sys_containers.go:47] Failed to get system container stats for "/system.slice/docker.service": failed to get cgroup stats for "/system.slice/docker.service": failed to get container info for "/system.slice/docker.service": unknown container "/system.slice/docker.service"```

## Report:
See https://github.com/kubernetes/kubernetes/issues/56850

## Solution:
N/A

## Issue #3
```Aug 07 08:31:08 <cluster-name-by-default-as-hostname> kubelet[835]: W0807 08:31:08.909159     835 pod_container_deletor.go:75] Container "4a69fb086ce2fe7cac3d3a5e6535c1c60951316c4f8c954901de05ad03a7e65d" not found in pod's containers```

## Report:
See https://github.com/kubernetes/kubeadm/issues/1026

## Solution:
N/A

## Issue #4
```StopPodSandbox "9dfd449d99efe66115045c5557efba54d57cab1b3617fb67fb412fc11487d266" from runtime service failed: rpc error: code = DeadlineExceeded desc = context deadline exceeded```

## Report:
See https://github.com/kubernetes/kubeadm/issues/1078

## Solution:
N/A
