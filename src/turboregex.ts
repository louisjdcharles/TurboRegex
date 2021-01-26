class TurboRegex {
    expression : string;

    constructor() { this.expression = ''; }

    getRegExp() : RegExp { return new RegExp(this.expression); }

    str(str : string) : TurboRegex {
        this.expression += str;

        return this;
    }
}

module.exports = TurboRegex;