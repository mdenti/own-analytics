# Own Analytics

## Purpose of this repo
I want a way to do website analytics that is simple and can be deployed internally; without relying on external companies.

## Prerequisites
1. `docker` and `docker-compose`

## Installation
1. run `npm install`

## Development setup
1. in one terminal run `npm run watch-ts`, this will watch the typescript files and recompile them when they change
2. in a second terminal run `docker-compose up`

## TODO:
1. [x] SETUP backend
2. [x] SETUP elasticsearch integration
3. [x] SETUP bundling of the browser library
4. [ ] Make browser library configurable
5. [ ] Serve browser library from server
6. [ ] Test out whether it actually works. (this should be higher up, I think.. :P )
7. [ ] Decide how to progress from here..