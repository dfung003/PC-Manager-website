const React = require('react');
const Default = require('../layout/Default.jsx')

class Gpu extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>List of Recommended Graphics Cards</h1>
                   <ul>
                       <li>EVGA XC GAMING GeForce RTX 3060 12GB</li>
                   </ul>
                </div>
            </Default>
        )
    }
}

module.exports = Gpu;