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
                sh "npm ci"

            }
        }

        stage('lancer tous les tests') {
            steps {
                sh "npx cypress run"
            }
        }
    }

     post{
        always {
            echo 'Archivage des rapports...'
            archiveArtifacts artifacts: 'cypress/reports/**/*.*', fingerprint: true
        }
    }
}