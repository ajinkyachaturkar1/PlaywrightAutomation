pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npm run frameWork1'
            }
        }
    }

    post {
        always {
            echo 'Playwright execution completed'
        }

        success {
            echo 'All tests passed successfully'
        }

        failure {
            echo 'Some tests failed'
        }
    }
}