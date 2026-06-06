#!/bin/bash

echo Copying new React App version to destination location
aws s3 cp ./build s3://hx-cloud-dashboards/artifacts/ --recursive