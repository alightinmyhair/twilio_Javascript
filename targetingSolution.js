class TargetingSolution {

    constructor(object) {
        this.xcord = object.x;
        this.ycord = object.y;
        this.zcord = object.z;
    };

    target() {
        return `(${this.xcord}, ${this.ycord}, ${this.zcord})`;
    };
    
};

const sln = new TargetingSolution ({
    x: 45,
    y: 12,
    z: -1
});

console.log(sln.target());