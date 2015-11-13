// lexical scope -> function scope
// block scope -> scope of {} block
function foo() {
  var bar;
  function zip() {
    var quux;
  }
}
