var Body = React.createClass({
  componentDidMount() {
    $.getJSON('/api/v1/todos', (response) => { this.setState({ todos: response }) });
  },

  getInitialState() {
    return {
      todos: []
    }
  },

  handleSubmit(todo) {
    var newState = this.state.todos.concat(todo);
    this.setState({ todos: newState })
  },

  removeTodoClient(id) {
    var newTodos = this.state.todos.filter((todo) => {
      return todo.id != id;
    });
    this.setState({ todos: newTodos });
  },

  handleDelete(id) {
    var self = this;
    $.ajax({
      url: '/api/v1/todos/' + id,
      type: 'DELETE',
      success(response) {
        self.removeTodoClient(id);
      }
    });
  },

  handleUpdate(todo) {
    var self = this;
    $.ajax({
      url: '/api/v1/todos/' + todo.id,
      type: 'PUT',
      data: { todo: todo },
      success: () => {
        self.updateTodos(todo);
      }
    })
  },

  updateTodos(todo) {
    var todos = this.state.todos.filter((i) => {
      return i.id != todo.id
    });
    todos.push(todo);
    this.setState({todos: todos });
  },


  render() {
    return (
      <div>
        <NewTodo handleSubmit={this.handleSubmit}/>
        <Todos todos={this.state.todos}  handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
      </div>
    )
  }
});