module.exports = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    // transformIgnorePatterns: [
    //     '/node_modules/',
    //     '\\.(css|less|scss|sass)$',
    // ],
    // collectCoverageFrom: ['src/**/*.tsx'],
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'css', 'node'],
};
