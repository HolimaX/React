# Source: https://blog.gruntwork.io/how-to-manage-terraform-state-28f5697e68fa#aeb7
terraform {
  backend "s3" {
    # Replace this with your bucket name!
    bucket         = "k8s-state-store-lltfstate"
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-2"
    # Replace this with your DynamoDB table name!
    dynamodb_table = "terraform-up-and-running-locks"
    encrypt        = true
  }
}

resource "aws_s3_bucket" "terraform_state-V1" {
  bucket = "k8s-state-store-lltfstate"
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
  name         = "terraform-up-and-running-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}

output "s3_bucket_arn" {
  value       = aws_s3_bucket.terraform_state.arn
  description = "The ARN of the S3 bucket"
}

output "dynamodb_table_name" {
  value       = aws_dynamodb_table.terraform_locks.name
  description = "The name of the DynamoDB table"
}

# Source: https://stackoverflow.com/questions/53749816/how-do-i-launch-an-aws-ec2-instance-using-an-aws-launch-template-with-terraform
resource "aws_launch_template" "LT1-V1" {
    name_prefix   = "Ubuntu1804-K8NSandbox"
    image_id      = "ami-09b7c1a9c3627b787"
    instance_type = "t2.micro"
}

resource "aws_autoscaling_group" "ASG1-V1" {
    availability_zones = ["us-east-2a"]
    desired_capacity   = 1
    max_size           = 1
    min_size           = 1

    launch_template = {
      id      = "${aws_launch_template.LT1-V1.id}"
      version = "$$Latest"
    }
}
