var Todo = React.createClass({
  getInitialState() {
    return {editable: false}
  },
  handleEdit() {
    if(this.state.editable) {
      var id = this.props.todo.id;
      var name = this.refs.name.value;
      var description = this.refs.description.value;
      var status = this.refs.status.value;
      var todo = {id: id , name: name , description: description, status: status};
      this.props.handleUpdate(todo);
    }
    this.setState({editable: !this.state.editable})
  },
  render() {

    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.todo.name} /> : <h3>Name: {this.props.todo.name}</h3>;
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.todo.description} />: <p>Description: {this.props.todo.description}</p>;
    var status = this.state.editable ? <input type='checkbox' ref='status' defaultValue={this.props.todo.status} />: <p>Status: {this.props.todo.status}</p>;
    return (
      <div>
        {name}
        {description}
        {status}
        <button onClick={this.props.handleDelete} >Delete</button>
        <button onClick={this.handleEdit}>  {this.state.editable ? 'Submit' : 'Edit' } </button>
      </div>
    )
  }
});