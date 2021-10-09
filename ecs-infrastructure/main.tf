terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 2.0"
    }
  }

  backend "s3" {
    bucket = "bound-daniel-terraform-state-bucket"
    key    = "state/ecs/terraform_state.tfstate"
    region = "ap-southeast-2"
  }
}

provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}
