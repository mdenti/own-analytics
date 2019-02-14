# Own Analytics

## Purpose of this repo
I want a way to do website analytics that is simple and can be deployed internally; without relying on external companies.

## Prerequisites
1. `node 10` and `npm 6.4`
2. `docker` and `docker-compose`

## Installation
1. run `npm install`

## Development setup
1. in one terminal run `npm run watch-ts`, this will watch the typescript files and recompile them when they change
2. in a second terminal run `docker-compose up`
3. in the browser open `http://localhost` to access the example page and test the library

## TODO:
1. [x] SETUP backend
2. [x] SETUP elasticsearch integration
3. [x] SETUP bundling of the browser library
4. [x] Make browser library configurable
5. [x] Serve browser library from server
6. [x] Test out whether library actually works.
7. [ ] Decide how to progress from here..