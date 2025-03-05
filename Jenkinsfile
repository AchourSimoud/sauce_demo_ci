pipeline {
    agent {
        docker {
            image "cypress/browsers"
            args '--entrypoint=""'
        }
    }

    stages {
        stage('installation') {
            steps {
                sh "npm install"
            }
        }
    }
}