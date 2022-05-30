
function grader(marks) {
    if (marks < 50)
        console.log("GRADE: F");
    else if (marks >= 50 && marks < 60)
        console.log("GRADE: D");
    else if (marks >= 60 && marks < 70)
        console.log("GRADE: C");
    else if (marks >= 70 && marks < 80)
        console.log("GRADE: B");
    else if (marks >= 80 && marks < 95)
        console.log("GRADE: A");
    else if (marks >= 95 && marks < 100)
        console.log("GRADE: A+");
    else
        console.error(`MARKS OUT OF BOUNDS (marks: ${marks})`);
}

// let marks = prompt("ENTER YOUR MARKS")
// marks = parseInt(marks)
// if (marks != NaN)
//     grader(marks)
// else
//     alert(`INCORRECT MARKS (marks: ${marks})`)


SYMBOLS =  {
    addition: '+',
    subtraction: '-',
    division: '/',
    multiplication: '*'
}

class ArthOps {
    static expression = '';

    static parseExpression(expr = ''){
        this.expression = expr;
        this.divide();
        this.multiply();
        this.add();
        this.subtract();
        return this.expression;
    }

    static extractPreSymNum(i){
        for (let index = i-1; index >= 0; index--)
        {
            if (index === 0)
                return parseInt(this.expression.substring(0,i))
            if (this.expression[index] in ['+','-','/','*'].values())
                return parseInt(this.expression.substring(index+1,i))
        }
    }

    static extractPostSymNum(i){
        for (let index = i; index < this.expression.length; index++) {
            if (this.expression[index] in ['+','-','/','*'].values())
                return parseInt(this.expression.substring(i+1,index))
            
        }
        return parseInt(this.expression.substring(i+1))
    }

    static add() {
        for (let index = 0; index < this.expression.length; index++) {
            let preSymNum, postSymNum;
            if (this.expression[index] === '+')
                {
                    preSymNum = this.extractPreSymNum(index)
                    postSymNum = this.extractPostSymNum(index)
                    console.log("PRESUM: " + preSymNum);
                    let sum =  preSymNum + postSymNum
                    let sub = preSymNum + '+' + postSymNum
                    this.expression = this.expression.replace(sub, sum.toString())
                    index = 0;
                }       
        }
    }

    static subtract(){
        for (let index = 0; index < this.expression.length; index++) {
            let preSymNum, postSymNum;
            if (this.expression[index] === '-')
                {
                    preSymNum = this.extractPreSymNum(index)
                    postSymNum = this.extractPostSymNum(index)
                    console.log("PRESUM: " + preSymNum);
                    let sum =  preSymNum - postSymNum
                    let sub = preSymNum + '-' + postSymNum
                    this.expression = this.expression.replace(sub, sum.toString())
                    index = 0;
                }       
        }
    }

    static divide(){
        for (let index = 0; index < this.expression.length; index++) {
            let preSymNum, postSymNum;
            if (this.expression[index] === '/')
                {
                    preSymNum = this.extractPreSymNum(index)
                    postSymNum = this.extractPostSymNum(index)
                    console.log("PRESUM: " + preSymNum);
                    let sum =  preSymNum / postSymNum
                    let sub = preSymNum + '/' + postSymNum
                    this.expression = this.expression.replace(sub, sum.toString())
                    index = 0;
                }       
        }
    }

    static multiply(){
        for (let index = 0; index < this.expression.length; index++) {
            let preSymNum, postSymNum;
            if (this.expression[index] === '*')
                {
                    preSymNum = this.extractPreSymNum(index)
                    postSymNum = this.extractPostSymNum(index)
                    console.log("PRESUM: " + preSymNum);
                    let sum =  preSymNum * postSymNum
                    let sub = preSymNum + '*' + postSymNum
                    this.expression = this.expression.replace(sub, sum.toString())
                    index = 0;
                }       
        }
    }
}

console.log(ArthOps.parseExpression("25+25+25+255/5*5"));
