// lexical scope -> function scope
// block scope -> scope of {} block
function foo() {
  var bar;
  quux = 'hello';
  function zip() {
    var quux = 'xin';
  }
}
