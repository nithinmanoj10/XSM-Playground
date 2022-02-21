// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program$ebnf$1", "symbols": []},
    {"name": "program$ebnf$1", "symbols": ["program$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "program", "symbols": ["program$ebnf$1"]},
    {"name": "statement", "symbols": ["dataTransferInstruction", "NL"], "postprocess": (statementData) => {return statementData[0]}},
    {"name": "statement", "symbols": ["arithmeticInstruction", "NL"]},
    {"name": "dataTransferInstruction$string$1", "symbols": [{"literal":"M"}, {"literal":"O"}, {"literal":"V"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "dataTransferInstruction", "symbols": ["dataTransferInstruction$string$1", "__", "register", "_", {"literal":","}, "_", "register"], "postprocess": (movData) => {return {instructionType: "data_transfer_instruction", leftOperand: movData[2].join(''), rightOperand: movData[6].join('')}}},
    {"name": "dataTransferInstruction$string$2", "symbols": [{"literal":"M"}, {"literal":"O"}, {"literal":"V"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "dataTransferInstruction", "symbols": ["dataTransferInstruction$string$2", "__", "register", "_", {"literal":","}, "_", "integer"], "postprocess":  
        (movData) => {
                        
                        let integerVal;
        
                        // if it's a negative integer
                        if (movData[6][0] == '-') {
                            integerVal = '-' + movData[6][1].join('');
                        }
                        else { 
                            integerVal = movData[6][0].join('');
                        }
        
                        return {instructionType: "data_transfer_instruction", leftOperand: movData[2].join(''), rightOperand: parseInt(integerVal, 10)}
                     } 
                                                                        },
    {"name": "arithmeticInstruction$string$1", "symbols": [{"literal":"A"}, {"literal":"D"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$1", "__", "register", "_", {"literal":","}, "_", "register"]},
    {"name": "arithmeticInstruction$string$2", "symbols": [{"literal":"S"}, {"literal":"U"}, {"literal":"B"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$2", "__", "register", "_", {"literal":","}, "_", "register"]},
    {"name": "arithmeticInstruction$string$3", "symbols": [{"literal":"M"}, {"literal":"U"}, {"literal":"L"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$3", "__", "register", "_", {"literal":","}, "_", "register"]},
    {"name": "arithmeticInstruction$string$4", "symbols": [{"literal":"D"}, {"literal":"I"}, {"literal":"V"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$4", "__", "register", "_", {"literal":","}, "_", "register"]},
    {"name": "arithmeticInstruction$string$5", "symbols": [{"literal":"M"}, {"literal":"O"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$5", "__", "register", "_", {"literal":","}, "_", "register"]},
    {"name": "arithmeticInstruction$string$6", "symbols": [{"literal":"A"}, {"literal":"D"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$6", "__", "register", "_", {"literal":","}, "_", "integer"]},
    {"name": "arithmeticInstruction$string$7", "symbols": [{"literal":"S"}, {"literal":"U"}, {"literal":"B"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$7", "__", "register", "_", {"literal":","}, "_", "integer"]},
    {"name": "arithmeticInstruction$string$8", "symbols": [{"literal":"M"}, {"literal":"U"}, {"literal":"L"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$8", "__", "register", "_", {"literal":","}, "_", "integer"]},
    {"name": "arithmeticInstruction$string$9", "symbols": [{"literal":"D"}, {"literal":"I"}, {"literal":"V"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$9", "__", "register", "_", {"literal":","}, "_", "integer"]},
    {"name": "arithmeticInstruction$string$10", "symbols": [{"literal":"M"}, {"literal":"O"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$10", "__", "register", "_", {"literal":","}, "_", "integer"]},
    {"name": "arithmeticInstruction$string$11", "symbols": [{"literal":"I"}, {"literal":"N"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$11", "__", "register"]},
    {"name": "arithmeticInstruction$string$12", "symbols": [{"literal":"D"}, {"literal":"C"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "arithmeticInstruction", "symbols": ["arithmeticInstruction$string$12", "__", "register"]},
    {"name": "register", "symbols": [{"literal":"R"}, /[0-9]/]},
    {"name": "register", "symbols": [{"literal":"R"}, {"literal":"1"}, /[0-9]/]},
    {"name": "integer$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "integer$ebnf$1", "symbols": ["integer$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "integer", "symbols": ["integer$ebnf$1"]},
    {"name": "integer$ebnf$2", "symbols": [/[1-9]/]},
    {"name": "integer$ebnf$2", "symbols": ["integer$ebnf$2", /[1-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "integer", "symbols": [{"literal":"-"}, "integer$ebnf$2"]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[ \t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [/[ \t]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[ \t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]},
    {"name": "NL$ebnf$1", "symbols": []},
    {"name": "NL$ebnf$1", "symbols": ["NL$ebnf$1", /[\r\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NL", "symbols": ["NL$ebnf$1"]}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
