var NewTodo = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var status = this.refs.status.value;

    $.ajax({
      url: '/api/v1/todos',
      type: 'POST',
      data: { todo: { name: name, description: description, status: status } },
      success: (response) => {
        this.props.handleSubmit(response);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter the name of the todo' />
        <input ref='description' placeholder='Enter a description' />
        <input ref='status' type='checkbox'/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
