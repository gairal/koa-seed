module.exports = {
  bail: true,
  collectCoverage: true,
  coverageReporters: ["html", "text", "text-summary"],
  errorOnDeprecated: true,
  logHeapUsage: true,
  maxWorkers: "100%",
  moduleFileExtensions: ["ts", "js", "json"],
  preset: "ts-jest",
  verbose: false,
};
