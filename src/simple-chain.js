let chain = [];

const chainMaker = {
    getLength() {
        chain.length();
    },
    addLink(value) {
        if (value === undefined) {
            value = ' '; 
        }
        chain.push(String(value));
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(position)) {
            chain = [];
            throw new Error('Error');
        }
        chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        chain.reverse();
        return this;
    },
    finishChain() {
        const chainSaw = chain.join(" )~~( ");
        chain.length = 0;
        return '( ' + chainSaw + ' )';
    }
};

module.exports = chainMaker;
