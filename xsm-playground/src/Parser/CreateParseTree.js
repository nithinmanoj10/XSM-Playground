const nearley = require("nearley");
const grammar = require("./xsm.js");

function createParseTree(xsmInstructions) {
  // Create a Parser object from our grammar.
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  try {
    parser.feed(`${xsmInstructions}`);

    // parser.results is an array of possible parsings.
    console.log(JSON.stringify(parser.results, null, 4));
  } catch (parseError) {
    console.log("Error at character " + parseError.offset); // "Error at character 9"
  }
}

export default createParseTree;
