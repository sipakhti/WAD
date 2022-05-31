class ArthOps {
    static expression = '';

    static isOperator(character) {
        return character === '+' || character === '-' || character === '/' || character === '*' || character === '%'
    }

    static parseExpression(expr = '') {
        this.expression = expr;
        this.divide();
        this.multiply();
        this.mod();
        this.add();
        this.subtract();
        return this.expression;
    }

    static extractPreSymNum(i) {
        let answerInt, answerFloat;
        for (let index = i - 1; index >= 0; index--) {
            if (index === 0) {
                answerInt = parseInt(this.expression.substring(0, i))
                answerFloat = parseFloat(this.expression.substring(0, i))
                if (isNaN(answerFloat)) {
                    this.expression = this.expression.replace(this.expression.substring(0, i), '0')
                    return 0
                }
                return answerFloat === answerInt ? answerInt : answerFloat
            }
            if (this.isOperator(this.expression[index])) {
                answerInt = parseInt(this.expression.substring(index + 1, i + 1))
                answerFloat = parseFloat(this.expression.substring(index + 1, i + 1))
                if (isNaN(answerFloat)) {
                    this.expression = this.expression.replace(this.expression.substring(index + 1, i), '0')
                    return 0
                }
                return answerFloat === answerInt ? answerInt : answerFloat
            }
        }
    }

    static extractPostSymNum(i) {
        let answerInt, answerFloat;
        let index = i + 1;
        for (; index < this.expression.length; index++) {
            if (this.isOperator(this.expression[index])) {
                answerInt = parseInt(this.expression.substring(i + 1, index))
                answerFloat = parseFloat(this.expression.substring(i + 1, index))
                if (isNaN(answerFloat)) {
                    this.expression = this.expression.replace(this.expression.substring(i + 1, index), '0')
                    return 0
                }
                return answerFloat === answerInt ? answerInt : answerFloat
            }

        }
        answerInt = parseInt(this.expression.substring(i + 1, index))
        answerFloat = parseFloat(this.expression.substring(i + 1, index))
        if (isNaN(answerFloat)) {
            this.expression = this.expression.replace(this.expression.substring(i + 1, index), '0')
            return 0
        }
        return answerFloat === answerInt ? answerInt : answerFloat
    }

    static add() {
        let preSymNum, postSymNum;
        for (let index = 0; index < this.expression.length; index++) {
            if (this.expression[index] === '+' && index != 0) {
                preSymNum = this.extractPreSymNum(index)
                postSymNum = this.extractPostSymNum(index)
                let sum = preSymNum + postSymNum
                let sub = preSymNum + '+' + postSymNum
                this.expression = this.expression.replace(sub, sum.toString())
                index = index - sub.length - sum.toString().length
            }
        }
    }

    static subtract() {
        let preSymNum, postSymNum;
        for (let index = 0; index < this.expression.length; index++) {
            if (this.expression[index] === '-' && index != 0) {
                preSymNum = this.extractPreSymNum(index)
                postSymNum = this.extractPostSymNum(index)
                let difference = preSymNum - postSymNum
                let sub = preSymNum + '-' + postSymNum
                this.expression = this.expression.replace(sub, difference.toString())
                index = index - sub.length - difference.toString().length
            }
        }
    }

    static divide() {
        let preSymNum, postSymNum;
        for (let index = 0; index < this.expression.length; index++) {
            if (this.expression[index] === '/' && index != 0) {
                preSymNum = this.extractPreSymNum(index)
                postSymNum = this.extractPostSymNum(index)
                let qoutient = preSymNum / postSymNum
                let sub = preSymNum + '/' + postSymNum
                this.expression = this.expression.replace(sub, qoutient.toString())
                index = index - sub.length - qoutient.toString().length
            }
        }
    }
    // 01234
    // 1+1*5
    // 1+5

    static multiply() {
        let preSymNum, postSymNum;
        for (let index = 0; index < this.expression.length; index++) {
            if (this.expression[index] === '*' && index != 0) {
                preSymNum = this.extractPreSymNum(index)
                postSymNum = this.extractPostSymNum(index)
                let product = preSymNum * postSymNum
                let sub = preSymNum + '*' + postSymNum
                this.expression = this.expression.replace(sub, product.toString())
                index = index - sub.length - product.toString().length
            }
        }
    }

    static mod() {
        let preSymNum, postSymNum;
        for (let index = 0; index < this.expression.length; index++) {
            if (this.expression[index] === '%' && index != 0) {
                preSymNum = this.extractPreSymNum(index)
                postSymNum = this.extractPostSymNum(index)
                let remainder = preSymNum % postSymNum
                let sub = preSymNum + '%' + postSymNum
                this.expression = this.expression.replace(sub, remainder.toString())
                index = index - sub.length - remainder.toString().length
            }
        }
    }
}

console.log(ArthOps.parseExpression("umer+25+25+umer/5*5*5*452/411+4646-54532424"));



let inputField = document.getElementById('input-field')
let outputField = document.getElementById('output-field')
let clearBtn = document.getElementById("clear-btn")
let calculateBtn = document.getElementById('calculate-btn')

clearBtn.addEventListener('click', () => {
    inputField.value = ''
    outputField.value = ''
})
calculateBtn.addEventListener('click', () => outputField.value = ArthOps.parseExpression(inputField.value))


// find the numeric buttons
let numericBtns = document.querySelectorAll("#button-area button")
for (const button of numericBtns) {
    button.value = button.textContent
    if (button.textContent === 'C' || button.textContent === '=')
        continue
    button.addEventListener('click', () => {
        inputField.value += button.value
    })
}

document.getElementById('multiply').textContent = 'x'

document.addEventListener('keydown', event => {
    if (event.key === "Enter")
        outputField.value = ArthOps.parseExpression(inputField.value)
})