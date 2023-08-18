# My Buildkite Test Analytics
Sandbox for pushing test results.

## Test Analytics Setup

### Packages

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
    "addFileAttribute": "true",
    "includeShortConsoleOutput": "true",
    "reportTestSuiteErrors": "true"
},
```

Install the builkite reporter https://github.com/buildkite/test-collector-javascript
```
npm install --save-dev buildkite-test-collector
```

### Jest Config
Add reporters to jest config:
```
"reporters": [
    "default",
    "jest-junit",
    'buildkite-test-collector/jest/reporter'
],
```

Note, to use a specific reporter only: `jest --reporters=jest-junit`

### Running Tests
The test results are fake. To generate failures:

`TEST_EXPECT=2 jest --env`

Note, there exist a GitHub dispatch workflow. An optional parameter can be set (i.e. `2`) that generates some failures.

To publish results to a Buildkite suite requires the following token to be set:

```
BUILDKITE_ANALYTICS_TOKEN=Kp4hY....e6 jest
```

The token (**API token**) can be found under *Settings* under the `Test Suites` tab.


## Agent Setup
Using a windows agent on my labtop for demonstration purposes.

### Installation

Instructions for Windows installation - https://buildkite.com/docs/agent/v3/windows#manual-installation.

```
c:\buildkite-agent
```

The **Agent** token, found on *Agents/settings* is required to be added to the *c:\buildkite-agent\buildkite-agent.cfg*.

### Testspace
Testspace requires the **TESTSPACE_TOKEN** environment variable to be set. This requires adding a batch file:

```
c:\buildkite-agent\hooks\environment.bat
```

Content example:
```
@ECHO OFF
ECHO "--- :house_with_garden: Setting up the environment"
SET TESTSPACE_TOKEN=45a1dedb94e...3884
SET BUILDKITE_ANALYTICS_TOKEN=ehRsn...PRv2Dz
```

Note, the Test Analytics Suite also requires its token added. Not clear how to handle multiple Suites?

### Running
Using the command shell:

```
cd c:\buildkite-agent
build-agent start
```