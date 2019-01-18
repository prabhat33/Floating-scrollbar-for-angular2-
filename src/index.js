import {Category, CategoryLogger, CategoryServiceFactory, CategoryConfiguration, LogLevel} from "typescript-logging";

CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.Info));

let logger = new Category("Logger");

let AppLogger = {};

AppLogger.info = function (message) {
    logger.info(message);
}

AppLogger.debug = function (message) {
    logger.debug(message);
}

AppLogger.error = function (message) {
    logger.error(message);
}

export const LoggerInstance = AppLogger;
