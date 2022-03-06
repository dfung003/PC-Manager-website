const React = require('react');
const Default = require('../layout/Default.jsx')

class Index extends React.Component {
    render(){
        const { builds } = this.props;
        return (
            <Default>
                <div>
                    <h1>Your Builds</h1>
                    <nav>
                        <a href="/builds/new">Create A New PC Build</a>
                    </nav>
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