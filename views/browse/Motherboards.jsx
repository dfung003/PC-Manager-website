const React = require('react');
const Default = require('../layout/Default.jsx')

class Motherboard extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>List of Recommended Motherboards</h1>
                   <ul>
                       <li>ASUS TUF GAMING X-570-PLUS (WI-FI)</li>
                   </ul>
                </div>
            </Default>
        )
    }
}

module.exports = Motherboard;