pipeline {
  agent any

  tools {nodejs "NodeJSinstaller"}

  stages {
    try{

      stage('Install') {
        steps { sh 'npm install' }
      }

      /*stage('Test') {
        parallel {
          stage('Static code analysis') {
              steps { sh 'npm run-script lint' }
          }
          stage('Unit tests') {
              steps { sh 'npm run-script test' }
          }
        }
      }*/

      stage('Build') {
        steps { sh 'npm run-script build' }
      }

      /*stage('Deploy'){
        steps { sh 'pm2 restart all' }
      }*/

    //}
    }catch (e) {
      // fail the build if an exception is thrown
      currentBuild.result = "FAILED"
      throw e
    } finally {
      // Post build steps here
      /* Success or failure, always run post build steps */
      // send email
      // publish test results etc etc
      sh 'ng serve'
    }
  }
}
