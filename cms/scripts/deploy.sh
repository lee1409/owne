#!/bin/sh
gcloud auth activate-service-account $SERVICE_ACC --key-file=./secret.json --project=$PROJECT
gcloud app deploy app.yaml --quiet
