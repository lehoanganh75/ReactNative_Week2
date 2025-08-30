"use strict";
function downloadFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("File downloaded");
            resolve();
        }, 3000);
    });
}
downloadFile();
