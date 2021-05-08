function NavigationSidebar(props) {
    return (
        <div>
            <button 
                onClick={() => props.setMode('home')}
                className = 
                    { props.mode === "home" ?
                        "nav-button nav-selected" :
                        "nav-button"}
                >
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <i 
                        style={{
                            fontSize: "1.5rem",
                            marginLeft: "5px"}} 
                        class="fal fa-home"
                    /> 
                    <div style={{fontSize: "1rem", marginLeft: "5px"}}>
                        Home
                    </div>
                </div>
                
            </button>

            <button 
                onClick={() => props.setMode('sadje')}
                className = 
                    { props.mode === "sadje" ?
                        "nav-button nav-selected" :
                        "nav-button"}
                >
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <i 
                        style={{
                            fontSize: "1.5rem",
                            marginLeft: "5px"}} 
                        class="fal fa-apple-alt"
                    /> 
                    <div style={{fontSize: "1rem", marginLeft: "5px"}}>
                        Sadje
                    </div>
                </div>
            </button>

            <button 
                onClick={() => props.setMode('trznica')}
                className = 
                    { props.mode === "trznica" ?
                        "nav-button nav-selected" :
                        "nav-button"}
                >
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <i 
                        style={{
                            fontSize: "1.5rem",
                            marginLeft: "5px"}} 
                        class="fal fa-shopping-cart"
                    /> 
                    <div style={{fontSize: "1rem", marginLeft: "5px"}}>
                        Tržnica
                    </div>
                </div>
            </button>

            <button 
                onClick={() => props.setMode('shopping list')}
                style={{borderBottom: "3px solid white"}}
                className = 
                    { props.mode === "shopping list" ?
                        "nav-button nav-selected" :
                        "nav-button"}
                >
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <i 
                        style={{
                            fontSize: "1.5rem",
                            marginLeft: "5px"}} 
                        class="fal fa-axe"
                    /> 
                    <div style={{fontSize: "1rem", marginLeft: "5px"}}>
                        Lorem ipsum
                    </div>
                </div>
            </button>

            <button 
                onClick={() => props.setMode('settings')}
                className = 
                    { props.mode === "settings" ?
                        "nav-button nav-selected" :
                        "nav-button"}
                style={{borderBottom: "3px solid white", borderTop: "3px solid white", marginTop: "312px"}}
                >
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <i 
                        style={{
                            fontSize: "1.5rem",
                            marginLeft: "5px"}} 
                        class="fal fa-sliders-h"
                    /> 
                    <div style={{fontSize: "1rem", marginLeft: "5px"}}>
                        Nastavitve
                    </div>
                </div>
            </button>
        </div>
    );
}
export default NavigationSidebar;