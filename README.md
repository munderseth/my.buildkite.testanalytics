# my.buildkite.testanalytics
Sandbox for pushing test results


## Setup

Create initial `package.json` file:
```
npm init -y
```

Install packages:

```
npm install --save-dev jest
```

```
npm install --save-dev jest-junit
```

**Note** requires configuration
Jest junit output - https://help.testspace.com/publish/tools-support-javascript#jest

`.package.json`:
```
"jest-junit": {
    "suiteNameTemplate": "{filepath}",
    "classNameTemplate": "{classname}",
    "titleTemplate": "{title}",
    "includeShortConsoleOutput": "true"
},
```

Install the builkite reporter https://github.com/buildkite/test-collector-javascript
```
npm install --save-dev buildkite-test-collector
```

## Jest Config
Add reporters to jest config:
```
"reporters": [
    "default",
    "jest-junit",
    'buildkite-test-collector/jest/reporter'
],
```

To use a specific reporter: `jest --reporters=jest-junit`

## Running Tests
To generate failures:

`TEST_EXPECT=2 jest --env`

To publish to Buildkite:

```
BUILDKITE_ANALYTICS_TOKEN=Kp4hY....e6 jest
```