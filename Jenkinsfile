pipeline {
    agent {
        docker {
            image "cypress/browsers"
            args '--entrypoint=""'
        }
    }

    parameters { string(name: 'TEST_CASE', defaultValue: 'staging', description: 'tags') }
    parameters { string(name: 'TAGS', defaultValue: 'staging', description: 'tags') }
    
    stages {
        stage('installation') {
            steps {
                sh "npm ci"

            }
        }

        stage('lancer tous les tests') {
            steps {
                script{
                    if(params.TEST_CASE != null){
                    sh "npx cypress run --env grepTags=@${params.TEST_CASE}"
                    }else{
                        sh "npx cypress run --env grepTags=@${params.TAGS}"
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