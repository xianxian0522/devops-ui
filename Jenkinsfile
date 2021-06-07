library 'sslib@0.0.7' //引用此工程，格式为<工程名>@<branchName>。此工程会配置在Jenkins中，sslib为Jenkins中配置的工程名，master为branch或tag名。

def jobInfo = [
    nodeName: "std-docker-slave", //指定在哪个Jenkins节点上执行
    projName: "devops",//项目名称
    name: "devops-ui",//工程名称
    deployInput:"",//可选，空为分步操作，不空为一键操作，仅限salt

/*
    downloadInfo: [ //可选，下载信息，从artifactory下载指定包
    [
    serverName: "artifactory", //可选，artifactory服务器名，jenkins中配置，默认为artifactory
    filePattern: "generic-3rdparty/centos7/*.tar.gz", //需下载的文件,可以使用通配符
    target: "./third_party_linux/centos7/" //下载文件的目标路径，默认为“.”
    ]
    ],
*/
    packageInfo: [ //可选，打包信息
      // packageShell: "pack_svc_C.sh", //可选，打包脚本(如需要)
      // shellOptions: ". devops-ui ${env.BRANCH_NAME}" //可选，打包脚本参数，默认为空
      name: "devops-ui", //可选，默认使用工程名称
      src: "./dist/", //可选，要打包的文件，默认当前文件夹
      archiveFiles: "*.tar.gz", //可选，存档的包文件，可用通配符，默认为*.tar.gz
        appName: "devops-ui", //可选，默认使用应用名称
    ],
    deploysInfo: [ //可选，部署信息
      serverName: "artifactory", //部署目标，必须是在Jenkins中配置好的Artifactory服务器
        packages: [
    [ //部署信息
    fileName: "*.tar.gz", //需要部署的文件名，可以使用通配符
    serverName: "artifactory", //发布目标，必须是在Jenkins中配置好的Artifactory服务器
    ]
        ]
    ],
]

building.BuildCplusArtifact(jobInfo) //根据给定的信息执行Pipeline
