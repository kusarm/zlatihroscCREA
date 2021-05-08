import logo from './../files/flooop.png';
import './../css/style.css'


function NavigationTopbar(props) {

    return (
        <div 
            onClick={() => props.setMode('home')}>
            <img 
                className="logo" 
                src={logo}/>
        </div>
    );
}
export default NavigationTopbar;