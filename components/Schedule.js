import Event from "./Event";

const Schedule = props => {
    const errorMessageStyle = {
        textAlign: 'center',
        margin: '3rem auto',
        width: '80%'
    };

    if ( isEmpty( props.cwn ) ) {
        return (
            <div>
                { console.log( `schedule props: ${JSON.stringify( props )}` ) }
                <h3 style={errorMessageStyle} className="error-message">{props.message}</h3>
            </div>
        );
    }
    else if ( !isEmpty( props.cwn ) && ( props.cwn.workshops === undefined || props.cwn.workshops.length == 0 ) ) {
        return (
            <div>
                { console.log( `schedule props: ${JSON.stringify( props )}` ) }
                <h3 style={errorMessageStyle} className="error-message">{props.message}</h3>
            </div>
        );
    }
    else {
        return (
            <div>                
                <h3 style={errorMessageStyle} className="error-message">Time to start rendering workshops</h3>
            </div>
        );
    }
};


function isEmpty( obj ) {
    for ( var key in obj ) {
        if ( obj.hasOwnProperty( key ) ) {
            return false;
        }

        return true;
    }
}

export default Schedule;
