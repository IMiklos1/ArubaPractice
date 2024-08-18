import { config } from "dotenv";
import { cleanEnv, port, str } from "envalid";

config();

interface EnvVars {
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_HOST: string;
  POSTGRES_PORT: number;
  POSTGRES_DB: string;
  PORT: number;
}

export const env: EnvVars = cleanEnv(process.env, {
  POSTGRES_USER: "practice_user",
  POSTGRES_PASSWORD: "practice_userpass",
  POSTGRES_HOST: "http://http://localhost:5432",
  POSTGRES_PORT: { default: 5432 },
  POSTGRES_DB: "practice",

  PORT: port({ default: 5000 }),
});

export default env;