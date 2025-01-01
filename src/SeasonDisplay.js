import React from 'react';

// seasonConfig will work according to the result of getSeason and then it will pass summer or winter object to
// seasonDisplay
const seasonConfig = {
    summer: {
        text: "it is summer, and let's go to beach",
        iconName:"sun"
    },
    winter:{
        text : "Burr it is cold",
        iconName :"snowflake"
    }
}

const getSeason = (lat,month) =>{
    if(month >  2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = props =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return(
       <div>
        {/* in this props.lat lat is state which is passed as prop */}
         <div className='latitude'> passing the state as prop: {props.lat} </div>

         {/* and this season is a string which defined above */}
         <div>This is the season: {season}</div>

        <i className={`${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`${iconName} icon`}></i>
       </div>
    );
}

export default SeasonDisplay;
