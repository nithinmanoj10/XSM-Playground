program     ->  statement:*                 

statement   ->  instruction __ action NL    {% ([instructionData, _, actionData]) => {return {nodeType: "NODE_STMT", stmtInstruction: instructionData, stmtAction: actionData}} %}

instruction ->  "MOV"                       {% ([instructionName]) => {return {nodeType: "NODE_MOV_INST"}} %}
            |   "ADD"                       {% ([instructionName]) => {return {nodeType: "NODE_ADD_INST"}} %}
            |   "SUB"                       {% ([instructionName]) => {return {nodeType: "NODE_SUB_INST"}} %}

action      ->  register _ "," _ register   {% (actionData) => {return {leftRegister: actionData[0], rightRegister: actionData[4]}} %}

register    -> "R0"                         {% ([registerData]) => {return {nodeType: "NODE_REGISTER", registerNum: 0}} %}  
            |  "R1"                         {% ([registerData]) => {return {nodeType: "NODE_REGISTER", registerNum: 1}} %}  


_   ->  [ \t]:*
__  ->  [ \t]:+

NL  ->  [\r\n]:*