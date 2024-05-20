export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
        "^@/(.*)": "<rootDir>/$1"
    },
    setupFilesAfterEnv: ["<rootDir>/test/__mocks__/fileMock.js"],
    rootDir: "src",
};
