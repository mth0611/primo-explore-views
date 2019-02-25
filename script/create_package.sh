#!/bin/sh -ex

# This script creates package files only for a VIEW that has changed since origin/master.
# All resuls will be copied locally to packages
# All packages are created on the master branch.

# Finds current branch locally or via CIRCLE
export CURRENT_BRANCH=${CIRCLE_BRANCH-$(git rev-parse --abbrev-ref HEAD)}

mkdir -p cypress-results
VIEWS='NYU NYUSH NYUAD CENTRAL_PACKAGE' # to implement: NYSID BHS NYHS HSL
for VIEW in $VIEWS
do
  MATCHES=$(git diff --name-only origin/master | grep -c /${VIEW}/) || true
  if [[ $MATCHES != 0 || $CURRENT_BRANCH == master ]]; then
    export NODE_ENV=$([[ $CURRENT_BRANCH == master ]] && echo "production" || echo "staging")
    VIEW=$VIEW docker-compose run create-package
    docker cp "$(docker ps -q -a -l -f name=create-package)":/app/packages/. packages
  else
    echo "No files changed in $VIEW package. Skipping build."
  fi
done