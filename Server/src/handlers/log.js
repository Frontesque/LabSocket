const prefix = "[LabLink] ".magenta;
module.exports = (output) => {
    switch (typeof output) {
        case ('string'):
            console.log(prefix+output);
            break;
        case ('object'):
            console.log(prefix+output.join(" "));
            break;
        default:
            console.log(prefix+"The log function has been called with invalid data:", output)
    }
}