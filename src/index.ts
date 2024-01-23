import * as dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.resolve(__dirname, `../.env`),
});

import logger from "./utils/logger";
import config from "./config";
