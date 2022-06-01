pipeline{
  agent any
  tools {
      nodejs "NodeJSActualizado"
  }
  stages{
    stage ('checkout'){
      steps{
        checkout scm
      }
    }
    stage ('Install modules'){
      steps{
        sh '''
          npm install
        '''
      }
    }

    stage ('build') {
      steps{
        sh 'npm run ng build'
      }
    }

    /*stage ('test'){
      steps{
        sh '''
          npm run ng test
        '''
      }
    }*/

    stage('Sonarqube') {

        steps {

          withSonarQubeEnv('SonarQube') {
              def scannerHome = tool 'SonarQube';
              sh "${scannerHome}/bin/sonar-scanner"
          }
          timeout(time: 10, unit: 'MINUTES') {
              waitForQualityGate abortPipeline: true
          }

        }
    }
  }
}
