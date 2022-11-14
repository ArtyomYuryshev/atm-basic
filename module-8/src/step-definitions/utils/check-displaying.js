function checkDisplaying(param, displayOption) {
    switch (displayOption) {
        case 'should be':
            return expect(param).toBeDisplayed();
        case 'should not be':
            return expect(param).not.toBeDisplayed();
        default:
            throw Error(`"${displayOption}" provided invalid param!`);
    }
}

module.exports = checkDisplaying;
