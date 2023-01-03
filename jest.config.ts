export default {
  moduleFileExtensions: ["ts","tsx","js","jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: [
     "**/tests/*.test.ts",

    // "**/tests/http.test.test.ts",    
    // "**/tests/superWsTest.test.ts",
    // "**/tests/superWsTestJSON.test.ts",
    // "**/tests/ws.test.ts",
  ],
  testEnvironment: "node",
  collectCoverage: true,
  coverageReporters: ["text","html","lcov"],
  reporters: ["./node_modules/jest-html-reporter"]
};