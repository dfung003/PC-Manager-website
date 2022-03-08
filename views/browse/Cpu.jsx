const React = require('react');
const Default = require('../layout/Default.jsx')

class Cpu extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>List of Recommended Processors</h1>
                   <ul>
                       <li>AMD Ryzen 5 5600X</li>
                   </ul>
                </div>
            </Default>
        )
    }
}

module.exports = Cpu;