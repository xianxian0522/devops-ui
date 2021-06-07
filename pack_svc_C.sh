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

  yum remove -y nodejs
  yum clean all
  curl --silent --location https://rpm.nodesource.com/setup_14.x | sudo bash
  yum install -y nodejs
#  echo "打印安装"
  npm i
#  echo " 编译"
  npm run build --prod

#  mkdir -p  $appName/
#  ls
#  cp -a $srcDir/* $appName/
#  set -e
#  cd "$appName"
  mv dist $appName
  tar -czvf "$appName.tar.gz" $appName/
#  set +e
}
pack_third(){
  thirdDir=$1
  appName=$2
  packageName=$3
  version=$4
  name=$packageName-3rdparty-centos7-$version

  echo "Packaging $thirdDir"
  cd -
  rm -rf $appName
  mkdir $appName
  cp -a $thirdDir/*/*.so* $appName/
  cp -a $thirdDir/log4cxx/log4cxx.properties $appName/

  set -e
  cd "$appName"
  tar -czvf ../"$name.tar.gz" *
  set +e
}
pack_app "$srcDir" "$appName" "$packageName" "$version"
