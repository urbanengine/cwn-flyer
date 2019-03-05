import Event from "./Event";

const Schedule = props => {
    if ( isEmpty( props.cwn ) ) {
        return (
            <div>
                <h1>{props.message}</h1>
            </div>
        );
    }
    else if ( !isEmpty( props.cwn ) && ( props.cwn.workshops === undefined || props.cwn.workshops.length == 0 ) ) {
        return (
            <div>
                { console.log( `schedule props: ${JSON.stringify( props )}` ) }
                <h1>{props.message}</h1>
            </div>
        );
    }
    else {
        return (
            <div>
                { console.log( `schedule: ${JSON.stringify( props )}` ) }
                
                <h1>Time to start rendering workshops</h1>
            </div>
        );
    }
}


function isEmpty( obj ) {
    for ( var key in obj ) {
        if ( obj.hasOwnProperty( key ) ) {
            return false;
        }

        return true;
    }
}

export default Schedule;
