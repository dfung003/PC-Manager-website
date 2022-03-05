const React = require('react');
const Default = require('../layout/Default.jsx')

class Show extends React.Component {
    render(){
        const { build } = this.props;
        return (
            <Default>
              <div>
                <article>
                  <a href="/builds">Go Back To Your PC Builds</a>
                  <br />
                  <h2>
                    Name of Build: {build.name} <br />
                    Motherboard: {build.motherboard} <br />
                    Processor: {build.processor} <br />
                    Graphics Card: {build.graphicsCard} <br />
                  </h2>
                  <p>{build.upToDate ? 'This build is up-to-date' : 'This build is outdated'}</p>

                  <a href={`/builds/${ build._id }/edit`}><button>Edit This Build</button></a>

                  <form action={`/builds/${ build._id }?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />

                  </form>
                  <hr />
                </article>
              </div>
          </Default>
        )
    }
}

module.exports = Show;