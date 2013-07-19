#!/bin/bash
#
# Copies everything rooted in `../trochoid/build/` to the `trochoid/` branch

BUILD=../trochoid/build/*
TARGET=`dirname $0`/../trochoid/.

# Clean up old trochoid files. This makes sure that any files that disappear
# from the trochoid build also disappear here.
#git rm -rf $TARGET || exit

# Copy `../trochoid/build/*` to the target directory. Moving it keeps the gh-pages branch
# from seeing it since it is no longer there.
cp -r $BUILD $TARGET

# Message to the user
echo "IMPORTANT: add and commit the changes then push to master to complete \
the process"
