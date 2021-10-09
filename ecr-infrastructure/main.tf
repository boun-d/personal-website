terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 2.0"
    }
  }

  backend "s3" {
    bucket = "bound-daniel-terraform-state-bucket"
    key    = "state/ecr/terraform_state.tfstate"
    region = "ap-southeast-2"
  }
}

provider "aws" {
  region  = "ap-southeast-2"
}

resource "aws_ecr_repository" "personal_website_ecr" {
  name = "personal-website-ecr"
}