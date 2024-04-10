# Qui veux gagner des millions

This is a mobile app to play a question game.

## Requirements

- docker
- docker compose

## Installation

get code

        git clone ***

build image

    docker compose build

build container without volume binding

    docker compose -f docker-compose.yml create

copy node_modules folder from container to local folder

    docker compose cp app:/app/node_modules/ ./app/

## Usage

    docker compose up