import React from 'react';

class weather extends React.Component{
        render(){
            return(
                <div>
                {this.props.temperature && <p> TEMPERATURE:{this.props.temperature}</p>}    
                     
                 {this.props.humidity && <p>HUMIDITY: {this.props.humidity}</p>}    
                      
                  {this.props.name && <p>CITY: {this.props.name}</p>}  

                  {this.props.error && <p>{this.props.error}</p>}  
                </div>
            )
        }
}

export default weather;