const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
    serverUrl: 'http://localhost:9000',
    options: {
        'sonar.projectKey': 'express-js-demo',
        'sonar.sources': 'src',
        'sonar.tests': 'test',
        'sonar.exclusions': 'node_modules/**, coverage/**, test/**',
        'sonar.javascript.lcov.reportpaths': 'coverage/lcov.ifo',
        'sonar.textExecutionReportPaths': 'test-report.xml'
    }
}, () => { });