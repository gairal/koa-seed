.PHONY: install test build release start debug deploy

install:
	bun i

test:
	bun lint
	bun run test

build:
	bun i
	bun run build

start:
	bun start
