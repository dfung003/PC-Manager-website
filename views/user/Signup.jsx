const React = require('react');
const Default = require('../layout/Default.jsx')

class Signup extends React.Component {
    render(){
        const { session } = this.props
        return (
            <Default session={session}>
                <div>
                    <form action="/user/signup" method="post">
                        <fieldset>
                        <legend>New User</legend>
                        <label>USERNAME: <input type="text" name="username" required /> </label>
                        <label>PASSWORD: <input type="password" name="password" required />
                        </label>
                        <input type="submit" value="Create Account" />
                        </fieldset>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Signup;