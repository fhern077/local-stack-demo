# Getting Started

Dependencies:

- python3 : brew install python3
- pip3: brew isntall pip3
- aws cli: pip3 install awscli --user
- docker: [get it here](https://docs.docker.com/docker-for-mac/)

## More info

- Based on https://dev.to/goodidea/how-to-fake-aws-locally-with-localstack-27me
- localstack: https://github.com/localstack/localstack
- tutroials: https://lobster1234.github.io/2017/04/05/working-with-localstack-command-line/

## To get started

```
Docker
docker-compose up -d
Head Over to the manager http://localhost:8055
Then head over to the s3 bucket http://localhost:4572

Bucket Creation
create a bucket
aws --endpoint-url=http://localhost:4572 s3 mb s3://demo-bucket
aws --endpoint-url=http://localhost:4572 s3api put-bucket-acl --bucket demo-bucket --acl public-read
```
