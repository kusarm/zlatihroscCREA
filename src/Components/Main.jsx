import Trznica from "./Trznica";
import Home from './Home';
import Nastavitve from "./Nastavitve";
import Sadje from "./Sadje";

function Main(props) {
    switch (props.mode) {
        case 'home':
            return (
                <Home
                    setMode={props.setMode}
                />
            );
        case 'sadje':
            return (
                <Sadje/>
            );
        case 'trznica':
            return (
                <Trznica/>
            );
        case 'settings':
            return (
                <Nastavitve/>
            );
    }
    return null;
}
export default Main;
