pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out the source code from the repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // There's no specific build process for HTML/CSS/JavaScript, so we just echo a message
                echo 'Building the web app...'
            }
        }

        stage('Unit Tests') {
            steps {
                // You can run automated tests here if you have them
                echo 'Running unit tests...'

                // Replace this line with your actual test command if you have one
                // Example: sh 'npm test'
            }
        }
    }

    post {
        success {
            // This block will execute if the pipeline is successful
            echo 'Build and tests passed! Deploy your web app.'
        }
        failure {
            // This block will execute if the pipeline fails
            echo 'Pipeline failed. Please review the logs for details.'
        }
    }
}
