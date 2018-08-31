#!/bin/zsh

echo 'Updating brew...'
brew update
brew upgrade

# Restore with this cmd
cat brew-reqs.txt | xargs brew install
