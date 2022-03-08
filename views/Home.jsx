const React = require('react');
const Default = require('./layout/Default.jsx')

class Home extends React.Component {
    render() {
        return (
            <Default>
                <div id="build-selection">
                    <div id="big-text-section">
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
                                <form method="GET" action="/motherboards">
                                    <button className="info-button" id="motherboard-btn">MOTHERBOARDS</button>
                                </form>
                                <form method="GET" action="/cpu">
                                    <button className="info-button" id="processor-btn">PROCESSORS</button>
                                </form>
                                <form method="GET" action="/gpu">
                                    <button className="info-button" id="graphics-btn">GRAPHICS CARDS</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Home;