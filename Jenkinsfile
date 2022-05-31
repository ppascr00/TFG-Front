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
          npm ng test --single-run
        '''
      }
    }
    stage ('build') {
      steps{
        sh 'npm ng build'
      }
    }
  }
}
