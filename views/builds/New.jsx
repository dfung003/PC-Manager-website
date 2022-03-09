const React = require('react');

const Default = require('../layout/Default.jsx');

class New extends React.Component {
    render(){
        return (
            <Default>
                <a href="/builds">Go Back To Saved PC Builds</a>
                <hr />
                <br />
                <form action="/builds" method="POST">
                <fieldset>
                    <legend>Create a Build</legend>
                    <label>
                        Name Of Your Build:<input type="text" name="name" placeholder="enter build name" />
                    </label>
                    <br />
                    <label>
                        Motherboard:<input type="text" name="motherboard" placeholder="enter motherboard model" size="25"/> 
                    </label>
                    <br />
                    <label>
                        Processor:<input type="text" name="processor" placeholder="enter processor model" /> 
                    </label>
                    <br />
                    <label>
                        Graphics Card:<input type="text" name="graphicsCard" placeholder="enter graphics card model" size="25" /> 
                    </label>
                    <br />
                    <label> Is Your Build Up-To-Date?:<input type="checkbox" name="upToDate" /> </label>
                    <br /> 
                    </fieldset>
                    <input type="submit" value="Create Your New PC Build" />
                </form>
            </Default>
        )
    }
}

module.exports = New;