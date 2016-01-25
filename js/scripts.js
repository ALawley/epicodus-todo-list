function Todo(entry, deadline, who, priority, notes) {
  this.entry = entry;
  this.deadline = deadline;
  this.who = who;
  this.priority = priority;
  this.notes = notes;
}

Todo.prototype.listDisplay = function () {
  return this.entry + " -- " + this.deadline;
}
