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
    stage ('test'){
      steps{
        sh '''
          $(npm bin)/ng test --single-run --browsers Chrome_no_sandbox
        '''
      }
      post {
        always {
          junit "test-results.xml"
        }
      }
    }
    stage ('build') {
      steps{
        sh '$(npm bin)/ng build'
      }
    }
  }
}
