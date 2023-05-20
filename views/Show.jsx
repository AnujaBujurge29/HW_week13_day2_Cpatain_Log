const React = require("react");
class Show extends React.Component {
  render() {
    return (
      <div>
        <h2>Captain Details</h2>
        <p>
          The Captains Name is{" "}
          {this.props.log.title.charAt(0).toUpperCase() +
            this.props.log.title.slice(1)}{" "}
          and it is entered at {this.props.log.entry} but the ship is{" "}
          {this.props.log.shipIsBroken ? `BROKEN !!!` : `Not BROKEN !!!`}
        </p>
        <nav>
          <a href="/logs">Back to Log Page</a>
        </nav>
      </div>
    );
  }
}
module.exports = Show;
