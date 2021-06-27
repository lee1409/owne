module.exports = ({ env }) => {
  const settings =
    env("NODE_ENV") === "development"
      ? { client: "sqlite", filename: env("DATABASE_FILENAME", ".tmp/data.db") }
      : {
          client: "postgres",
          host: env("DATABASE_HOSTNAME"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME"),
          username: env("DATABASE_USERNAME"),
          password: env("DATABASE_PASSWORD"),
          schema: env("DATABASE_SCHEMA", "public"),
          ssl: env("DATABASE_SSL", false),
        }

  return obj = {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings,
        options: {
          useNullAsDefault: true,
        },
      },
    },
  }
}
