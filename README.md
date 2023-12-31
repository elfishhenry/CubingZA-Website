# CubingZA

This is the source code for the CubingZA website which can be found at https://cubingza.org.

[![Tests](https://github.com/AlphaSheep/CubingZA-Website/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/AlphaSheep/CubingZA-Website/actions/workflows/test.yml)

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 20.x.x, npm >= 10.x.x
- (Optional) [Angular CLI](https://github.com/angular/angular-cli)
- (Optional) [Docker](https://www.docker.com/)

### Running locally

There are several independent components that need to be set up and run: the database (MongoDB), the API (Express server), and the website (Angular). In addition to these, the production version runs a MySQL database for WCA results, and includes Python scripts which update the MySQL database and load data from MySQL to MongoDB. The MySQL database and Python scripts are not needed for local development.

1. **MongoDB**. There are two options.
    1. *(Recommended)* Run MongoDB in a docker container: `docker run -p 27017:27017 mongo`. Since the development server wipes and seeds the database from scratch, there is no need to persist a volume.
    2. *Or*, you can install and run [MongoDB Community Server](https://www.mongodb.com/try/download/community).

2. **CubingZA API**:
    1. Change to the `server` directory and then run `npm install` to install server dependencies.
    2. Create the file `server/config/local.env` with app secrets. For local development, you can simply copy the sample file `server/config/local.env.sample`, but you will need to set the Mailgun details to your own. It is recommended to use a sandbox domain. Note that verifications are still charged on a sandbox domain.
    3. Start the API server by running `npm start` while in the `server` directory. You can also run the API server from within the `client` directory by running `npm --prefix ../server start`, or you can run the "Run backend" task from within VS Code with the `client` directory open. The API server can be accessed at `http://localhost:9000`.

3. **CubingZA Website**:
    1. Change to the `client` directory and install dependancies by running `npm install`.
    2. Start the web server by running `ng serve` from within the `client` directory. Navigate to `http://localhost:4200` to view he site. The front end proxies the API, so all API endpoints can be accessed from both `http://localhost:9000` and `http://localhost:4200` The application will automatically reload if you change any of the source files.

### Code scaffolding

Front end components can be generated by running `ng generate component component-name` in the `client` directory. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

To test the website, run `ng test` from within the `client` directory to execute the unit tests via [Karma](https://karma-runner.github.io).

To test the API, run `npm test` from within the `server` directory to execute tests via [Jest](https://jestjs.io).

### Deploying to production

1. Clone this repository.
2. Create the file `server/config/production.env` and set environment variables and secrets. You can start by copying the sample file `server/config/local.env.sample`.
3. Start all of the necessary services with `docker compose up --build`.
4. If necessary, restore the database from a backup.
5. Create cron jobs to run `scripts/getWCAdb.sh` and `scripts/RecordUpdator.py` once a day. Ideally the record update should run about 2 hours after the WCA database update.

## Contributing

We welcome contributions from everyone! For major changes, please open an issue first to discuss what you would like to change. Here are a few guidelines to help you get started.

1. Fork this repository and clone it to your local machine. You can then get up and running by following the Getting Started instructions above.
2. Create a new branch for your changes: `git checkout -b your-branch-name`.
3. Make your changes and ensure all tests pass by running the unit tests for both the website and API. It is recommended that you add any tests needed to cover your changes.
4. Commit your changes with a descriptive commit message: `git commit -am 'Add new feature'`.
5. Push your changes to your forked repository: `git push origin your-branch-name`.
6. Open a pull request against the main branch of the original repository.
7. Be responsive to feedback and be willing to make changes as needed.

### Issues

If you find a bug or have a feature request, please create a new issue on our Github repository. Please include as much detail as possible, including steps to reproduce the issue and any error messages.

## License

This project is licensed under the terms of the MIT license. See LICENSE for more information, or you can visit the [official website](https://opensource.org/license/mit/).
