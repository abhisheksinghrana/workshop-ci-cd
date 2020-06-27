pipeline {
    agent any
    stages {
        stage('Installing NPM dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Run Unit Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Run Coverage Test') {
            steps {
                sh 'yarn test:coverage'
            }
        }
        stage('Run Sonar Analysis') {
            steps {
                sh 'yarn sonar'
            }
        }         
    }
}