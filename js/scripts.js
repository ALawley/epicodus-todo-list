function Todo(entry, deadline, assignee, priority, notes) {
  this.entry = entry;
  this.deadline = deadline;
  this.assignee = assignee;
  this.priority = priority;
  this.notes = notes;
}

Todo.prototype.listDisplay = function () {
  return this.entry + " -- " + this.deadline;
}

$(document).ready(function() {
  $("form#new-todo").submit(function(event) {
    event.preventDefault();

    var inputtedEntry = $("input#new-entry").val();
    var inputtedDeadline = $("input#new-deadline").val();
    var inputtedAssignee = $("input#new-assignee").val();
    var inputtedPriority = $("input#new-priority").val();
    var inputtedNotes = $("input#new-notes").val();
    var newTodo = new Todo(inputtedEntry, inputtedDeadline, inputtedAssignee, inputtedPriority, inputtedNotes);

    $("ul#todos").append("<li><span class='todo'>" + newTodo.listDisplay() + "</span></li>");

    $("input#new-entry").val("");
    $("input#new-deadline").val("");
    $("input#new-assignee").val("");
    $("input#new-priority").val("");
    $("input#new-notes").val("");

    $(".todo").last().click(function() {
      $("#show-todo").show();
      $("#show-todo h2").text(newTodo.destination);
      $(".deadline").text(newTodo.deadline);
      $(".assignee").text(newTodo.assignee);
      $(".priority").text(newTodo.priority);
      $(".notes").text(newTodo.notes);
    });
  });
});
