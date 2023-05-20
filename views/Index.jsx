const React = require("react");
class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <nav>
          <a href="/logs/new">Create New Captain Log</a>
        </nav>
        <ul>
          {logs.map((item, i) => {
            return (
              <p key={i}>
                Captain Title: <a href={`/logs/${item._id}`}>{item.title}</a>
                <br />
                Log Entry: {item.entry}
                <br />
                {item.shipIsBroken
                  ? "  Ship is Broken !!"
                  : "  Ship is not Broken !!"}
                <br />
                <a href={`/logs/${item._id}/edit`}>Edit</a>
                <br />
                <br />
                <form action={`/logs/${item._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </p>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
