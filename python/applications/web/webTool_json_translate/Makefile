# Usage:
# make build REPO=ghcr.io/<OWNER>/<REPO> TAG=latest
REPO ?= ghcr.io/owner/repo
TAG ?= latest

build:
	docker build -t $(REPO):$(TAG) .
	docker push $(REPO):$(TAG)