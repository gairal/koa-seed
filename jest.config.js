module.exports = {
  bail: true,
  collectCoverage: true,
  coverageReporters: ["html", "text", "text-summary"],
  errorOnDeprecated: true,
  logHeapUsage: true,
  maxWorkers: "100%",
  moduleFileExtensions: ["ts", "js", "json"],
  moduleNameMapper: {
    "^@api/(.*)$": "<rootDir>/src/api/$1",
    "^@lib/(.*)$": "<rootDir>/src/api/$1",
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1",
  },
  preset: "ts-jest",
  verbose: false,
};
