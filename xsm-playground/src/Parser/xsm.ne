program     ->  statement:*

statement   ->  dataTransferInstruction NL  {% (statementData) => {return statementData[0]} %}
            |   arithmeticInstruction NL


dataTransferInstruction ->  "MOV" __ register _ "," _ register  {% (movData) => {return {instructionType: "data_transfer_instruction", leftOperand: movData[2].join(''), rightOperand: movData[6].join('')}} %}
                        |   "MOV" __ register _ "," _ integer   {% 
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
                                                                %}

arithmeticInstruction   ->  "ADD" __ register _ "," _ register
                        |   "SUB" __ register _ "," _ register
                        |   "MUL" __ register _ "," _ register
                        |   "DIV" __ register _ "," _ register
                        |   "MOD" __ register _ "," _ register
                        |   "ADD" __ register _ "," _ integer
                        |   "SUB" __ register _ "," _ integer
                        |   "MUL" __ register _ "," _ integer
                        |   "DIV" __ register _ "," _ integer
                        |   "MOD" __ register _ "," _ integer
                        |   "INR" __ register
                        |   "DCR" __ register
                        

register    ->  "R" [0-9]
            |   "R" "1" [0-9]

integer     ->  [0-9]:+
            |   "-" [1-9]:+

_   ->  [ \t]:*
__  ->  [ \t]:+
NL  ->  [\r\n]:*