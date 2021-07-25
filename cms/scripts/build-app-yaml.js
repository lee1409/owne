const YAML = require('yaml');
require('dotenv').config();

function check(ele) {
  if (!process.env[ele]) {
    console.error(
      `Error: Please make sure ${ele} is added into the env!`
        .split('\n ')
        .join('\n')
    );
    process.exit(1);
  }
}

[
  'DATABASE_HOSTNAME',
  'DATABASE_NAME',
  'DATABASE_USERNAME',
  'DATABASE_PASSWORD',
].map(check);

console.log(
  YAML.stringify({
    runtime: 'nodejs12',
    instance_class: 'F1',
    env_variables: {
      HOST: '0.0.0.0',
      NODE_ENV: 'production',
      DATABASE_HOSTNAME: process.env.DATABASE_HOSTNAME,
      DATABASE_NAME: process.env.DATABASE_NAME,
      DATABASE_USERNAME: process.env.DATABASE_USERNAME,
      DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    },
  })
);
