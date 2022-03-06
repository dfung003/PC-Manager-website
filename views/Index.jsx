const React = require('react');
const Default = require('./layout/Default.jsx')

class Index extends React.Component {
    render(){
        const { builds } = this.props;
        return (
            <Default>
                <div>
                    <h1>Home Page</h1>
                    <nav>
                        <form action="/user/signup" method="POST">
                            <input name="username" type="text" required placeholder="User Name" />
                            <input name="password" type="password" required placeholder="Password" />
                            <button type="Submit">Sign Up</button>
                        </form>
                    </nav>
                    
                </div>
            </Default>
        )
    }
}

module.exports = Index;