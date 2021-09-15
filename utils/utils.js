exports.charPad = (num, places, char) => {
    let defaultChar='0';
    if (char) defaultChar=char;
    return String(num).padStart(places, defaultChar);
}