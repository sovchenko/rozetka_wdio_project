<h3 align="center">wdio-mocha-selenoid</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center"> Boilerplate project for setting up JS/TS test automation framework
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Running the tests](#tests)


## 🧐 About <a name = "about"></a>

This is the project for the future reference on how to setup basic JS/TS project for the UI automation and run it inside the docker containers using Selenoid. Tools used:
- WebdriverIO
- Mocha
- Allure Report
- Docker + Selenoid


## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Following tools should be installed on the local machine:
- Docker and Docker Compose ([link](https://docs.docker.com/engine/install/ubuntu/) to the installation guide)
- Node.js and npm ([link](https://nodejs.org/uk/download/package-manager/) to the installation guide)
- Make ([link](https://linuxhint.com/install-make-ubuntu/) to the installation guide)

### Installing

1. Clone the project to your local machine

2. Install all the required dependencies by running the following command (should be run from the project dir):

```
npm i
```

3. To build docker image for the project run the following command (docker daemon should be started and running):

```
make local-build
```

This command will basically create docker image of the project with all pre-installed dependecies.

## 🔧 Running the tests <a name = "tests"></a>

To start test run the following command:

```
make local-up
```

### Report generation

To generate allure report - run the following command:

```
npm run report
```

### After test run

Once the testing is finished and you don't need docker containers anymore run following command:

```
make local-down
```


