module.exports = {
    preset: 'ts-jest',
    clearMocks: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    verbose: true,
};

process.env = Object.assign(process.env, {
    NODE_ENV: 'test',
});
