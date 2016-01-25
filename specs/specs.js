describe('Todo', function() {
  it("create a list item", function(){
    var testTodo = new Todo("pick up prescription", "friday", "austin", "high priority", "need my meds")
    expect(testTodo.entry).to.equal("pick up prescription");
    expect(testTodo.deadline).to.equal("friday");
    expect(testTodo.who).to.equal("austin");
    expect(testTodo.priority).to.equal("high priority");
    expect(testTodo.notes).to.equal("need my meds");
  });
});
