const React = require('react');
const Default = require('../layout/Default.jsx')

class Index extends React.Component {
    render(){
        const { builds, session } = this.props;
        return (
            <Default session={session}>
                <div id="builds-title">
                    <h1>Saved Builds</h1>
                    <nav>
                        <a href="/builds/new">Create A New PC Build</a>
                    </nav>
                    <hr />
                    <br />
                    {
                        builds.map((build) => (
                            <article className="build">
                                <a href={`/builds/${build._id}`}>
                                    <h2>
                                        {build.name} : {build.upToDate ? 'Up-to-date' : 'Outdated'}
                                    </h2>
                                </a>
                            </article>
                        ))
                    }
                </div>
            </Default>
        )
    }
}

module.exports = Index;