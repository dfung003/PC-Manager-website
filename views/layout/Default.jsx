const React = require('react');

class DefaultLayout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/app.css" /> 
                </head>
                <div>
                    <body>
                        {this.props.children}
                    </body>
                </div>
            </html>
        )
    }
}

module.exports = DefaultLayout;