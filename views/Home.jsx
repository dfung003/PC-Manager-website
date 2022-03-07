const React = require('react');
const Default = require('./layout/Default.jsx')

class Home extends React.Component {
    render() {
        const { builds } = this.props;
        return (
            <Default>
                <div id="build-selection">
                    <div>
                        <h1>Keep Track Of Your PC Parts. Build The PC Of Your Choosing.</h1>
                    </div>
                    <div>
                        <a href="/builds/new" className="btn btn-primary choose-part">Create Your PC Build</a>
                    </div>
                    <div className="featured-background">
                        <div className="featured-wrapper">
                            <div className="browse-featured">
                                <span>Browse Recommended Parts</span>

                            </div>

                            <hr />
                            <div className="btn-container">
                                <a className="info-button">Motherboards</a>
                                <a className="info-button">Processors</a>
                                <a className="info-button">Graphics Cards</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Home;