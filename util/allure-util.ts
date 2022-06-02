import allureReporter from "@wdio/allure-reporter";


export function addStep(stepDescription: string){
    allureReporter.addStep(stepDescription);
}

export function addFeature(feature: string){
    allureReporter.addFeature(feature);
}

export function addIssue(issueId: string){
    allureReporter.addIssue(issueId);
}

export function addTestId(testId: string){
    allureReporter.addTestId(testId);
}

export function addDescription(description: string){
    allureReporter.addDescription(description, "text");
}

//TODO create wrapper method for adding attachments
// export function addAttachment(){
//     allureReporter.addAttachment()
// }