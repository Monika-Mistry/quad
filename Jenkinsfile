pipeline{
        agent any
        stages{
                stage('---build-client---'){
                        steps{
                                sh "sudo docker build --tag mpmistry/react:latest -f ./client/Dockerfile ."
                        }
                }
                stage('---build-server---'){
                        steps{
                                sh "sudo docker build --tag mpmistry/playground:latest -f ./server/Dockerfile ."
                        }
                }
                stage('---push-dockerhub---'){
                        steps{
                                sh "sudo docker push mpmistry/playground:latest"
                                sh "sudo docker push mpmistry/react:latest"
                        }
                }
               stage('---patching---'){
                        steps{
                                sh "kubectl patch deployment server -p \"{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}\""
                                sh "kubectl patch deployment client -p \"{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}\""
                        }
                }
                stage('---update---'){
                        steps{
                                sh "kubectl apply -f client/deployment.yaml -f client/service.yaml"
                                sh "kubectl apply -f server/deployment.yaml -f server/service.yaml"
                        }
                }

        }
}
