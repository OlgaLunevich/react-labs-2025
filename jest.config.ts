const config = {
    collectCoverage: true,
    collectCoverageFrom: [
        // '**/src/**/*.{ts,tsx}',
        '**/src/**/OrderPage.{ts,tsx}',
        'src/**/slicers/*.{ts,tsx}',
        '!src/**/slicers/authSlice.{ts,tsx}',
        // '!**/*.d.ts',
        // '!**/node_modules/**',
        // '!src/**/components/**/index{js,jsx,ts,tsx}',
        // '!src/**/components/**/styles.{js,ts}',
        // '!src/**/components/**/__tests__/**/*.{ts,tsx,js,jsx}',
        // '!**/index.{js,ts}',
        // '!**/coverage/**',
        // '!**/src/**/types/**',
        // '!**/src/**/styles/**',
        // '!**/src/**/constants/**'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['json-summary', 'text', 'html', 'lcov'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testMatch: [
        '__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^.+\\svg.$': 'jest-transformer-svg'
    },
    preset: 'ts-jest',
    transformIgnorePatterns: [
        '!node_modules/(?!@src/*)',
        '^.+\\.module\\.(css|less|sass|scss)$'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/setupTests.ts'
    ]
};

export default config;