const React = require('react');

class DefaultLayout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="/css/app.css" /> 
                </head>
                    <body>
                        <header>
                            <div>
                            PCManager
                            </div>
                            <div id="login-div">
                                <nav id="username-form">
                                <form action="/user/signup" method="POST">
                                    <input name="username" type="text" required placeholder="User Name" />
                                    <input name="password" type="password" required placeholder="Password" />
                                    <button type="Submit">Sign Up</button>
                                    <button type="Submit" formAction="/user/login">Log In</button>
                                </form>
                            <a href="/user/logout" id="logout">Log Out</a>
                            </nav>
                            </div>
                        </header>
                        
                    
                            <div id="nav-bar">
                                <div id="link-container">
                                    <div className="link-background">
                                        <a href="/">Home</a>
                                    </div>
                                        <span>|</span>
                                    <div className="link-background">
                                        <a href="/builds">Saved Builds</a>
                                    </div>
                                        <span>|</span>
                                    <div className="link-background">
                                        <a href="/reviews">Product Reviews</a>
                                    </div>
                                </div>  

                            </div>
                        {this.props.children}
                        <footer>Created By: Damon Fung</footer>

                    </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;