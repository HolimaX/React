# Source: https://stackoverflow.com/questions/53749816/how-do-i-launch-an-aws-ec2-instance-using-an-aws-launch-template-with-terraform
resource "aws_launch_template" "LT1-V1" {
    //name_prefix   = "Ubuntu1804-K8NSandbox"
    //image_id      = "ami-09b7c1a9c3627b787"
    //instance_type = "t2.micro"
    name = "Ubuntu1804-K8NSandbox"
    disable_api_termination = true
    iam_instance_profile {
      name = "profile-1"
    }
    image_id = "${data.aws_ami.ubuntu-1804.id}"
    instance_initiated_shutdown_behavior = "terminate"
    instance_type = "t2.micro"
    key_name = "key-1"
    vpc_security_group_ids = ["<sg-1>"]

    user_data = "${base64encode(data.template_file.user_data_hw.rendered)}"
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

