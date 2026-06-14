function launchBrowser(string1){
let browserVersion = string1;
if(browserVersion === "Chrome"){  
    console.log("Current BrowserVersion is " + browserVersion);  
}
else if (browserVersion === "Firefox") {
    console.log("Current BrowserVersion is " + browserVersion);  
} else {
    console.log("Current BrowserVersion is " + browserVersion);  
}
}

launchBrowser("Edge")

function runTests(testType){

    switch (testType) {
        case "smoke":
            console.log("Smoke testing");
            break;
            case "sanity":
                console.log("Sanity testing");
            break;
            case "regression":
                console.log("regression testing");
            break;
    
        default:
            console.log("None of above testing");
            break;
    }
}

runTests("blackbox")