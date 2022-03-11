const React = require('react');

const Default = require('../layout/Default.jsx');

class New extends React.Component {
    render(){
        const { session } = this.props
        return (
            <Default session={session}>
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
                        Case:<input type="text" name="case" placeholder="enter case model" size="25" /> 
                    </label>
                    <br />
                    <label>
                        Motherboard:<input type="text" name="motherboard" placeholder="enter motherboard model" size="25"/> 
                    </label>
                    <br />
                    <label>
                        Processor:<input type="text" name="processor" placeholder="enter processor model" size="25" /> 
                    </label>
                    <br />
                    
                    <label>
                        Graphics Card:<input type="text" name="graphicsCard" placeholder="enter graphics card model" size="25" /> 
                    </label>
                    <br />
                    <label>
                        Memory:<input type="text" name="memory" placeholder="enter memory" size="25" /> 
                    </label>
                    <br />
                    <label>
                        CPU Cooler:<input type="text" name="cpuCooler" placeholder="enter cpu cooler" size="25" /> 
                    </label>
                    <br />
                    <label>
                        Power Supply:<input type="text" name="powerSupply" placeholder="enter power supply" size="25" /> 
                    </label>
                    <br />
                    <label>
                        Storage:<input type="text" name="storage" placeholder="enter storage" size="25" /> 
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