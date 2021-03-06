#!/bin/bash

sdk=../dojo_sdk_1.6.1
ver=`head -1 ../VERSION.txt`

# Path where to find 
# - InitBookmarklet.js
# - dojo/ folder with the compiled bookmarklet
# - css/ folder
## WITHOUT trailing slash (/)
bmpath=https://cdn.rawgit.com/apsdehal/WAFBookmarklet/master/bookmarklet

###########################################
### Dont touch anything below this line ###
###########################################

pwd=`pwd`

echo "Building Pundit ${ver} Bookmarklet in ${pwd}"
echo "Will load itself from ${bmpath}"
echo .

rm -rf ${pwd}/dojo

cd ${sdk}/util/buildscripts
./build.sh action=release profileFile=${pwd}/bookmarklet.profile.js loader=xdomain version=${ver} releaseDir=${pwd} cssOptimize=comments.keepLines optimize=shrinksafe.keepLines
cd ${pwd}
mv dojo foo
mkdir dojo
mv foo/dojo/dojo.xd.js dojo
mv foo/dojo/Bookmarklet.xd.js dojo
mkdir dojo/nls
mv foo/dojo/nls/Bookmarklet*.xd.js dojo/nls
mv foo/dojo/resources dojo
rm -rf foo

echo "Preparing InitBookmarklet.js for ${bmpath}"
sed "s%{bm-abs-path}%${bmpath}%g" InitBookmarklet.js-template > ../src/InitBookmarklet.js
echo .

echo "Preparing examples/bookmarklet.html for ${bmpath}"
sed "s%{bm-abs-path}%${bmpath}%g" ../examples/bookmarklet.html-template > ../examples/bookmarklet.html
echo .

cd ..;
echo "Creating bookmarklet at ${pwd}/bookmarklet";
rm -rf bookmarklet;
mkdir -p bookmarklet;
cd bookmarklet;
mkdir src;
cd ..;

cp src/InitBookmarklet.js bookmarklet/src/;
cp -r bookmarklet_build/dojo bookmarklet/;
cp -r css bookmarklet/;
cp examples/bookmarklet.html bookmarklet/;

echo .
echo "Pundit bookmarklet build is ready at ${pwd}/dojo"