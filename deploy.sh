
#! /bin/bash

if git remote add deploy humblebots@157.230.189.125:/var/www/fiddleleaf.art/ ; then
    echo "Added Humblebots server as git remote"
else
    echo "Already configured to deploy to Humblebots server"
fi

echo "Pushing changes to server..."

git push deploy master

echo "Pushing changes to GitHub"

git push