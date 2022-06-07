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

    stage('SonarQube') {
      steps {
        script {
          def scannerHome = tool 'SonarQube';
          withSonarQubeEnv("SonarQube") {
            sh """${tool("SonarQube")}/bin/sonar-scanner"""
          }
        }
      }
    }

    stage('Deploy'){
      steps{
        sh '''
          pwd
        '''
        sh '''
          ls dist
        '''
        sh '''
          cp -r dist/ /var/lib/tomcat9/webapps/
        '''
      }
    }
  }
}
