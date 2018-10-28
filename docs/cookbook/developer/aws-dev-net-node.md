# How to setup a Devnet node with AWS

Here you can find a detailed guide with easy to implement instructions on how to properly setup a Devnet node from a pre-configured AWS EC2 image.

This guide doesn't assume you have very extensive programming knowledge and is aimed at helping delegates and other community members who would like to contribute to the network with a ready-made solution.

:::tip
For free, you can run a Devnet node with the AWS Free Tier plan which lasts for 12 months starting from the moment you sign up with AWS
:::

## Prerequisites

 - Working computer or phone
 - Credit card
 - Callable phone number

### AWS Account
You will need an AWS account to run the EC2 instance, so if you don't have one already you must [sign up with AWS](https://portal.aws.amazon.com/billing/signup#/start).

There's no need to select a professional account type, you can make do with a personnal account type. 

You are able to use an old prepaid credit card for the sign up form.

Once getting through the phone verification step, you will be asked to pick a support plan. This is where you choose the Basic Plan (Free).

After that, you're successfully signed up and can proceed to "Sign in to the Console".

### SSH Client 
You will need to connect to your AWS instance to input a few basic commands that will launch the relay or forger node. For this, you must have an SSH client; they are freely available on all platforms.

##### Windows
Download and install PuTTy from the [official site](https://www.putty.org/).

##### Mac
Comes with the OS, nothing to install.

#### Linux
Generally comes with the OS, otherwise install OpenSSH with your package manager.

## Setup
First and foremore, we are going to create an AWS instance with the correct Amazon Machine Image: one which was specifically crafted to run an Ark Devnet node on it!

To open the EC2 Dashboard, which is the AWS Service we will use, you can search for it in the management console or [follow this link](https://console.aws.amazon.com/ec2/v2/).

In the dashboard, click on the blue "Launch Instance" button; this will take you to the configuration step of your EC2 instance.

1. Choose the 'aws ark node' AMI by searching for ami-00912e2a8e5fbfd30 under 'Community AMIs' and clicking the blue "select" button;

2. Make sure the default 'General Purpose | t2.micro (Free tier eligible)' instance type is selected and click on the blue "Review and Launch" button;

3.  
