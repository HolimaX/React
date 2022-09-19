# Source: https://blog.gruntwork.io/how-to-manage-terraform-state-28f5697e68fa#aeb7
terraform {
  required_version = "1.2.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.11.0"
    }
  }

  backend "s3" {
    # Replace this with your bucket name!
    bucket         = "k8s-state-store-lltfstate-ec2"
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-2"
    # Replace this with your DynamoDB table name!
    dynamodb_table = "terraform-up-and-running-locks-ec2"
    encrypt        = true
  }
}

resource "aws_s3_bucket" "terraform_state-V1" {
  bucket = "k8s-state-store-lltfstate-ec2"
  # Enable versioning so we can see the full revision history of our
  # state files
  versioning {
    enabled = true
  }
  # Enable server-side encryption by default
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

resource "aws_dynamodb_table" "terraform_locks-V1" {
  name         = "terraform-up-and-running-locks-ec2"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}