const React = require('react');

class Index extends React.Component {
    render(){
        const { builds } = this.props;
        return (
            <div>
                {
                    builds.map((build) => (
                        <article>
                            <a href={`/builds/${build._id}`}>
                                <h2>
                                    {build.name} - {build.upToDate ? 'This build is up-to-date' : 'This build is outdated'}
                                </h2>
                            </a>
                        </article>
                    ))
                }
            </div>
        )
    }
}

module.exports = Index;