const React = require('react');

class DefaultLayout extends React.Component {
    render(){
        const { session } = this.props
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    {/* <!-- GitHub Button --> */}
                    <script async defer src="https://buttons.github.io/buttons.js"></script>
                    {/* Font Awesome */}
                    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="/css/app.css" /> 
                </head>
                    <body>
                        <header>
                            <div id="website-name">
                            PCManager
                            </div>
                            <div id="login-div">
                                <nav id="username-form">
                                    {
                                        session.loggedIn ? 
                                        <div>
                                            <p style={{color: 'white', fontSize:"12px"}}>Hello {session.username}</p>
                                            <a href="/user/logout" id="logout">Log Out</a>
                                        </div>
                                        :
                                        <form action="/user/signup" method="POST">
                                            <input name="username" type="text" required placeholder="User Name" />
                                            <input name="password" type="password" required placeholder="Password" />
                                            <button type="Submit">Sign Up</button>
                                            <button type="Submit" formAction="/user/login">Log In</button><br />
                                        </form>
                                    }
                                
                            
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
                        <footer class="text-center">
                            <div class="content">
                                <p class="footer">Created By Damon Fung</p>
                                <span style={{ fontSize: "150%" }}>
                                    <a class="footer-btn" href="https://github.com/dfung003" target="_blank"><i class="fab fa-github-square"></i></a>
                                    <a class="footer-btn" href="https://www.linkedin.com/in/damonfung27/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                </span>
                            </div>
                        </footer>

                    </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;