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
                sh 'npm test:coverage'
            }
        }
        stage('Run Sonar Analysis') {
            steps {
                sh 'npm sonar'
            }
        }         
    }
}