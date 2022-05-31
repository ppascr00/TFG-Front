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
          npm run ng test --single-run --browsers Chrome_no_sandbox
        '''
      }
    }
    stage ('build') {
      steps{
        sh 'npm run ng build'
      }
    }
  }
}
