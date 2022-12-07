# from network.tf

# get all available AZs in our region
data "aws_availability_zones" "available_azs" {
    state = "available"
    
    # List of availability zones that do not support EKS
    exclude_names = ["us-east-1b","us-east-1c","us-east-1d","us-east-1e"]
}