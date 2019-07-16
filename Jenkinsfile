pipeline{
        agent any
        stages{
                stage('---build---'){
                        steps{
                                sh "sudo docker-compose build server client"
                                sh "sudo docker tag localhost:5000/mpmistry/playground:latest mpmistry/playground:latest"
                                sh "sudo docker tag localhost:5000/mpmistry/react:latest mpmistry/react:latest"
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
                                sh "kubectl patch deployment server -p \"{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +\'%s\'`\"}}}}}\""
                                sh "kubectl patch deployment client -p \"{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +\'%s\'`\"}}}}}\""
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
