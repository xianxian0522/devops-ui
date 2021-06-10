#!/bin/sh

srcDir=$1
appName=$2
packageName=$3
version=$4
thirdDir=$5

pack_app(){
  srcDir=$1
  appName=$2
  packageName=$3
  version=$4
  name=$packageName-$version

#  echo "打印安装"
  npm i
#  echo " 编译"
  npm run build --prod
#  echo "执行 --prod"

#  mkdir -p  $appName/
#  ls
#  cp -a $srcDir/* $appName/
#  set -e
#  cd "$appName"
  mv dist $appName
  tar -czvf "$appName.tar.gz" $appName/
#  set +e
}
pack_app "$srcDir" "$appName" "$packageName" "$version"
