const React = require("react");
class Edit extends React.Component {
  render() {
    return (
      <div>
        <h2>Edit Captain Log</h2>
        <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
          Title:{" "}
          <input type="text" name="title" defaultValue={this.props.log.title} />
          <br />
          <br />
          Entry:{" "}
          <input type="text" name="entry" defaultValue={this.props.log.entry} />
          <br />
          <br />
          Ship Condition:{" "}
          <input
            type="checkbox"
            name="shipIsBroken"
            defaultValue={this.props.log.shipIsBroken}
          />
          <br />
          <br />
          <input type="submit" name="submit" value="Submit Changes" />
        </form>
      </div>
    );
  }
}
module.exports = Edit;
