terraform {
  required_version = "1.2.7"

  # see backend.tfvars, passed via gtilab-ci.yaml
  backend "s3" {}

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.11.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.11.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "2.5.1"
    }
    time = {
      source  = "hashicorp/time"
      version = "0.7.2"
    }
  }
}

data "aws_caller_identity" "current" {} # used for accesing Account ID and ARN

provider "aws" {
  default_tags {
    tags = {
      iac_environment = var.iac_environment_tag
    }
  }
}
