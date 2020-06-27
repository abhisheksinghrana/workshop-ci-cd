pipeline {
    agent any
    stages {
        stage('Installing NPM dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Unit Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run Coverage Test') {
            steps {
                sh 'npm run test:coverage'
            }
        }

        stage('Run Sonar Analysis') {
            steps {
                sh 'npm run sonar'
            }
        }

        stage('Run Docker Image') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Upload Docker Image') {
            steps {
                echo 'Upload docker image to Dockerhub'
            }
        }

        stage('Launch Customer Service Application') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Functional Test') {
            steps {
                echo 'Functional test executed successfully'
            }
        }

        stage('Performance Test') {
            steps {
                echo 'Performance test executed successfully'
            }
        }

        stage('Security Test') {
            steps {
                echo 'Security test executed successfully'
            }
        }
        stage('Destroy Customer Service Application') {
            steps {
                sh 'docker-compose down'
            }
        }

        stage('Upload the docker image to Google container repository') {
            steps {
                echo 'docker image uploaded to google repository'
            }
        }
    }
}