# Source: https://blog.imfiny.com/imfiny-aws-terraform-2019-01-18-aws-launch-templates-html
data "template_file" "user_data_hw" {
  template = <<EOF
#!/bin/bash -xe
apt-get update -y
apt-get install -y awscli docker.io jq
EOF
}

# Source: https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-join/
# See ./deploy.sh for standalone process
data "template_file" "kubeadm_join_hw" {
  template = <<EOF
#!/bin/bash -xe
kubeadm token create --print-join-command
kubeadm join --discovery-token abcdef.1234567890abcdef --discovery-token-ca-cert-hash sha256:1234..cdef 1.2.3.4:6443
EOF
}