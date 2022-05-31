pipeline {
  agent any

  tools {nodejs "NodeJSActualizado"}

  stages {

      stage('Install') {
        steps { sh 'npm install' }
      }

      stage('Test') {
        parallel {
          stage('Static code analysis') {
              steps { sh 'npm run-script lint' }
          }
          stage('Unit tests') {
              steps { sh 'npm run-script test' }
          }
        }
      }

      stage('Build') {
        steps { sh 'npm run-script build' }
      }

      stage('Sonarqube') {
      	 steps {
               container('SonarQubeScanner') {
                   withSonarQubeEnv('SonarQube') {
                       sh "/usr/local/sonar-scanner"
                   }
                   timeout(time: 10, unit: 'MINUTES') {
                       waitForQualityGate abortPipeline: true
                   }
               }
           }
      }
      /*stage('Deploy'){
        steps { sh 'pm2 restart all' }
      }*/

    //}
  }

  /*post{
    success{
      sh 'ng serve'
    }
  }*/
}
