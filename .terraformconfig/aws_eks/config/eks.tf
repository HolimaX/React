# get EKS authentication for being able to manage k8s objects from terraform
provider "kubernetes" {
  host                   = data.aws_eks_cluster.cluster.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)
  token                  = data.aws_eks_cluster_auth.cluster.token
}
provider "helm" {
  kubernetes {
    host                   = data.aws_eks_cluster.cluster.endpoint
    cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)
    token                  = data.aws_eks_cluster_auth.cluster.token
  }
}

# deploy spot termination handler
resource "helm_release" "spot_termination_handler" {
  name          = var.spot_termination_handler_chart_name
  chart         = var.spot_termination_handler_chart_name
  repository    = var.spot_termination_handler_chart_repo
  version       = var.spot_termination_handler_chart_version
  namespace     = var.spot_termination_handler_chart_namespace
  wait_for_jobs = true
}

# deploy prometheus
resource "helm_release" "prometheus" {
  name             = "prom"
  chart            = "kube-prometheus-stack"
  repository       = "https://prometheus-community.github.io/helm-charts"
  namespace        = "monitoring"
  version          = "39.11.0"
  #version          = "17.1.3"
  create_namespace = true
  wait             = true
  reset_values     = true
  max_history      = 3
}
