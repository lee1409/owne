const shell = require('shelljs');

shell(
  `gcloud auth activate-service-account ${process.env.SERVICE_ACC} --key-file=./secret.json --project=${process.env.PROJECT}`
);

shell(`gcloud deploy app.yaml`);
