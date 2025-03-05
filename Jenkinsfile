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

        stage('lancer tous les tests') {
            steps {
                sh "npx cypress run"
            }
        }
    }
}