const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Catain Log New Page</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" />
          <br />
          <br />
          Entry: <input type="text" name="entry" />
          <br />
          <br />
          Ship Condition: <input type="checkbox" name="shipIsBroken" />
          <br />
          <br />
          <input type="submit" name="submit" value="Create Ship" />
        </form>
      </div>
    );
  }
}
module.exports = New;
