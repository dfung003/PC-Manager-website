const React = require('react');
const Default = require('../layout/Default.jsx')

class Motherboard extends React.Component {
    render() {
        const { session } = this.props
        return (
            <Default session={session}>
                <div className="browse-text">
                    <h1>List of Recommended Motherboards</h1>
                    <div className="browse-list">
                        <ul>
                            <li>ASUS TUF GAMING X-570-PLUS (WI-FI) ATX AM4 | <a href="https://pcpartpicker.com/product/dmGnTW/asus-tuf-gaming-x570-plus-wi-fi-atx-am4-motherboard-tuf-gaming-x570-plus-wi-fi">PCPartPicker</a></li>
                            <li>ASUS ROG STRIX B550-F GAMING (WI-FI) ATX AM4 | <a href="https://pcpartpicker.com/product/vFhmP6/asus-rog-strix-b550-f-gaming-wi-fi-atx-am4-motherboard-rog-strix-b550-f-gaming-wi-fi">PCPartPicker</a></li>
                            <li>MSI MAG B550 TOMOHAWK ATX AM4 | <a href="https://pcpartpicker.com/product/3Mxbt6/msi-mag-b550-tomahawk-atx-am4-motherboard-mag-b550-tomahawk">PCPartPicker</a></li>
                            <li>MSI B550-A PRO ATX AM4 | <a href="https://pcpartpicker.com/product/7gxbt6/msi-b550-a-pro-atx-am4-motherboard-b550-a-pro">PCPartPicker</a></li>
                            <li>ASUS ROG STRIX Z690-A GAMING WIFI D4 ATX LGA1700 | <a href="https://pcpartpicker.com/product/G4Gbt6/asus-rog-strix-z690-a-gaming-wifi-d4-atx-lga1700-motherboard-rog-strix-z690-a-gaming-wifi-d4">PCPartPicker</a></li>
                            <li>ASUS ROG STRIX B450-F GAMING II ATX AM4 | <a href="https://pcpartpicker.com/product/xYvqqs/asus-rog-strix-b450-f-gaming-ii-atx-am4-motherboard-rog-strix-b450-f-gaming-ii">PCPartPicker</a></li>
                            <li>ASUS ROG STRIX B550-A GAMING ATX AM4 | <a href="https://pcpartpicker.com/product/y96qqs/asus-rog-strix-b550-a-gaming-atx-am4-motherboard-rog-strix-b550-a-gaming">PCPartPicker</a></li>
                            <li>ASUS PRIME Z690-P WIFI D4 ATX LGA 1700 | <a href="https://pcpartpicker.com/product/vxt9TW/asus-prime-z690-p-wifi-d4-atx-lga1700-motherboard-prime-z690-p-wifi-d4">PCPartPicker</a></li>
                            <li>MSI MAG X570 TOMAHAWK WIFI ATX AM4 | <a href="https://pcpartpicker.com/product/WKdrxr/msi-mag-x570-tomahawk-wifi-atx-am4-motherboard-mag-x570-tomahawk-wifi">PCPartPicker</a></li> 
                        </ul>
                   </div>
                </div>
            </Default>
        )
    }
}

module.exports = Motherboard;