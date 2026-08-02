class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // stackMinEle(){
    //     let min = Infinity;

    //     for(let ele of this.stack){
    //         min= Math.min(min,ele)
    //     }
    //     return min
    // }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // console.log("Push", "this stack", this.stack);
        this.stack.push(val);
        if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        // console.log("Pop", "this stack", this.stack);
        let popEle = this.stack.pop();
        if (popEle === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        // console.log("Top", "this stack", this.stack);

        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        // console.log("Minn", "this stack", this.minStack);

        // return this.stackMinEle();
        return this.minStack[this.minStack.length - 1];
    }
}
