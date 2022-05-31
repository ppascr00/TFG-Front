#!groovy

node {
   // ------------------------------------
   // -- ETAPA: Instalar
   // ------------------------------------
   stage 'Instalar'

   // -- Configura variables
   /*echo 'Configurando variables'
   def mvnHome = tool 'M3'
   env.PATH = "${mvnHome}/bin:${env.PATH}"
   echo "var mvnHome='${mvnHome}'"
   echo "var env.PATH='${env.PATH}'"*/

   // -- Descarga código desde SCM
   echo 'Descargando código de SCM'
   sh 'rm -rf *'
   checkout scm

   // -- Compilando
   echo 'Compilando aplicación'
    def nodejs = tool 'NodeJSActualizado'
    sh "NODEJS -> ${nodejs}"
   sh 'npm install'

    // ------------------------------------
    // -- ETAPA: Compilar
    // ------------------------------------
    stage 'Compilar'
    sh 'ng build test'

   // ------------------------------------
   // -- ETAPA: SonarQube
   // ------------------------------------
   stage 'SonarQube Analysis'
   echo 'Análisis SonarQube'

   def scannerHome = tool 'SonarQube'
   withSonarQubeEnv('SonarQube'){
      sh "${scannerHome}/bin/sonar-scanner"
   }

}


/*pipeline {
  agent any

  tools {nodejs "NodeJSActualizado"}

  stages {

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

      /*stage('Build') {
        steps { sh 'npm run-script build' }
      }

      stage('Sonarqube') {
      	 steps {
           withSonarQubeEnv('SonarQube') {
               def scannerHome = tool 'SonarQube'
               sh "${scannerHome}/bin/sonar-scanner"
           }
           timeout(time: 10, unit: 'MINUTES') {
               waitForQualityGate abortPipeline: true
           }
       }

      }
      /*stage('Deploy'){
        steps { sh 'pm2 restart all' }
      }*/

    //}
  /*}

  /*post{
    success{
      sh 'ng serve'
    }
  }*/
/*}*/
