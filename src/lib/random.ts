module.exports = {
    randomNumber: function (min, max): number {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    randomDec: function (min, max, decimals): number {
        return (Math.random() * (max - min) + min).toFixed(decimals || 2);
    },
    randomEntry(collection) {
        return collection[this.randomNumber(0, collection.length)];
    },
    randomPercentage(decimals) {
        return this.randomDec(0, 100, decimals);
    },
    randomStringFromChars(lenght, chars): string {
        let text = "";
        for (var i = 0; i < length; i++) {
            text += chars.charAt(Math.random() * chars.length);
        }
        return text;
    },
    randomString(lenght): string {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return this.randomStringFromChars(lenght, chars);
    },
    randomBoolean(): boolean {
        let i = this.randomNumber(0, 10);
        if (i < 5) return false;
        else if (i > 5) return true;
    },
    randomLowLetter(): string {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        return chars.charAt(Math.random() * chars.length);
    },
    randomUpLetter(): string {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return chars.charAt(Math.random() * chars.length);
    },
    randomCharFromChars(chars) : string {
        return chars.charAt(Math.random() * chars.length);
    }
}