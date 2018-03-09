node {

    checkout scm

    env.DOCKER_API_VERSION="1.23"
    
    sh "git rev-parse --short HEAD > commit-id"

    tag = readFile('commit-id').replace("\n", "").replace("\r", "")
    appName = "hello-node"
    registryHost = "127.0.0.1:30400/"
    imageName = "${registryHost}${appName}:latest2"
    env.BUILDIMG=imageName

    stage "Build"
    
        sh "docker build -t ${imageName} ."
    
    stage "Push"

        sh "docker push ${imageName}"

    stage "Deploy"

        sh "kubectl apply -f deployment.yaml"
        sh "kubectl rollout status deployment/hello-node-deployment"
}
