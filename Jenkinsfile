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
    }
}