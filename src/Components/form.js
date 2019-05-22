import React from 'react';




const Form = (props)=>{
return(
    <form onSubmit={props.getWeather}>
    <input type="text" name="country" id="country" placeholder="country"/>
    <input type="text" name="city" id="city" placeholder="city"/>
    <button>GetWeather</button>
</form> 
)

}

    export default Form;