#!/usr/bin/env groovy

// Source: https://stackoverflow.com/questions/54196586/how-can-i-add-git-clone-operation-in-inline-groovy-script
package com.python_project

// Usage: GitManager.clone(this, "https://github.com/jfrogdev/project-examples.git", "*/master", "myGitUserID");
class Python_GitManager
{
    public static void clone(Script scriptRef, String gitURLString, String branchID, String gitUserID)
    {
        // clone repo with integration
        scriptRef.checkout([
            $class: 'GitSCM', 
            branches: [[name: branchID]], 
            doGenerateSubmoduleConfigurations: false, 
            extensions: [[$class: 'CleanCheckout']], 
            submoduleCfg: [], 
            userRemoteConfigs: [[credentialsId: gitUserID, url: gitURLString]]
        ])
        // query for integration directory and call KeepAlive logic to see if object is compliant with infrastructure
        //doKeepAliveviaREST();
        // Do anything needful to achieve the needful...
        //doMagic();
    }
}