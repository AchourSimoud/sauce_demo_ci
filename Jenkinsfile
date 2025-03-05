pipeline {
    agent {
        docker {
            image "cypress/browsers"
            args '--entrypoint=""'
        }
    }

    parameters { string(name: 'TEST_CASE', defaultValue: '', description: 'tags') 
    string(name: 'BATCH', defaultValue: 'staging', description: 'BATCH')
    }
    
    stages {
        stage('installation') {
            steps {
                sh "npm ci"

            }
        }

        stage('lancer tous les tests') {
            steps {
                script{
                    if(params.TEST_CASE != ''){
                    sh "npx cypress run --env grepTags=@${params.TEST_CASE}"
                    }else{
                        sh "batch/${params.BATCH}.sh"
                    }
                }
                
            }
        }
    }

    post{
        always {
            echo 'Archivage des rapports...'
            junit 'results/**/*.xml'        }
    }
}