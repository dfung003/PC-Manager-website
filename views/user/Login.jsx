const React = require('react');
const Default = require('../layout/Default.jsx')

class Login extends React.Component {
    render(){
        const { session } = this.props
        return (
            <Default session={session}>
                <div>
                    <form action="/user/login" method="post">
                        <fieldset>
                            <legend>User Login</legend>
                            <label>USERNAME: <input type="text" name="username" required />
                            </label>
                            <label>PASSWORD: <input type="password" name="password" required />
                            </label>
                            <input type="submit" value="Login" />
                        </fieldset>
                    </form>
                    </div>
            </Default>
        )
    }
}

module.exports = Login;