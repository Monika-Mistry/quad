pipeline{
        agent any
        stages{
                stage('---setup---'){
                        steps{
                                sh "tag=$(git rev-parse HEAD)"
                                sh "sed -i "s/{{TAG}}/${tag}/g" ./client/deployment.yaml"
                                sh "sed -i "s/{{TAG}}/${tag}/g" ./server/deployment.yaml"
                        }
                }
                stage('---build-client---'){
                        steps{
                                sh "sudo docker build --tag mpmistry/react:${tag} -f ./client/Dockerfile ."
                        }
                }
                stage('---build-server---'){
                        steps{
                                sh "sudo docker build --tag mpmistry/playground:${tag} -f ./server/Dockerfile ."
                        }
                }
                stage('---push-dockerhub---'){
                        steps{
                                sh "sudo docker push mpmistry/playground:${tag}"
                                sh "sudo docker push mpmistry/react:${tag}"
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
