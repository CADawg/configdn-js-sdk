module.exports = function(config) {
    config.set({

        frameworks: ["mocha", "chai", "karma-typescript"],

        files: [
            'src/**/*.ts',
            'test/**/*.ts'
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        coverageReporter: {
            // specify a common output directory
            dir: 'coverage',
            reporters: [
              { type: 'lcov', subdir: 'report-lcov' },
              { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
            ]
          },

        reporters: ["progress", "coverage"],

        browsers: ["ChromeHeadless"],

        singleRun: true

    });
};