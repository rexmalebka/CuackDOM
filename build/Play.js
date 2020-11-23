var Play = (function () {
    function Play(_a) {
        var _b = _a.loop, loop = _b === void 0 ? true : _b, src = _a.src;
        this.loop = loop;
        this.src = src;
    }
    return Play;
}());
var p1 = new Play({ src: "666" });
console.debug(p1);
