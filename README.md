# Nuxt Firebase Starter by Staky

## Setup

Follow these steps to get the project up and running :

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev
```

Rename `.env.example` to `.env` and fill in the following fields for the firebase config :

``` bash
# Firebase settings
FIREBASE_API_KEY="<apiKey>"
FIREBASE_AUTH_DOMAIN="<authDomain>"
FIREBASE_DATABASE_URL="<databaseURL>"
FIREBASE_PROJECT_ID="<projectId>"
FIREBASE_STORAGE_BUCKET="<storageBucket>"
FIREBASE_MESSAGING_SENDER_ID="<messagingSenderId>"
FIREBASE_APP_ID="<appId>"
FIREBASE_MEASUREMENT_ID="<measurementId>"
```

## Git

This boilerplate uses Commitlint and Standard Version to enable commit linting based on the Conventional Commit specification and automatic CHANGELOG generation.

Here are some useful commands :

``` bash
# git add . && git commit, with conventional commit helper
$ yarn commit

# git push origin *branch*
$ yarn push *insert branch*

# create a new release
# Patch (1.0.0 to 1.0.1)
# Minor (1.0.0 to 1.1.0)
# Major (1.0.0 to 2.0.0)
$ yarn bump-patch
# or
$ yarn bump-minor
# or
$ yarn bump-major

# Publish release to git
$ yarn release
```

## Optional Commands

These commands provide additional information on the project :

``` bash
# analyze build size
$ yarn analyze
```

## Help

- [Nuxt Documentation](https://nuxtjs.org/api)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
