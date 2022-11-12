autoscaling_average_cpu = 30
eks_managed_node_groups = {
  "lliepins-app-eks-x86" = {
    ami_type     = "AL2_x86_64"
    min_size     = 1
    max_size     = 4
    desired_size = 1
    instance_types = [
      "t3.small",
      "t3.medium",
      "t3.large",
      "t3a.small",
      "t3a.medium",
      "t3a.large"
    ]
    capacity_type = "SPOT"
    network_interfaces = [{
      delete_on_termination       = true
      associate_public_ip_address = true
    }]
  }
  "lliepins-app-eks-arm" = {
    ami_type     = "AL2_ARM_64"
    min_size     = 1
    max_size     = 4
    desired_size = 1
    instance_types = [
      "c7g.medium",
      "c7g.large"
    ]
    capacity_type = "ON_DEMAND"
    network_interfaces = [{
      delete_on_termination       = true
      associate_public_ip_address = true
    }]
  }
}
