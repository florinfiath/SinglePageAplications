import React from 'react'


class IngridInformation extends React.Component{

    render(){
        return (
          <>
            <p>{this.props.age}</p>
            <p>{this.props.favoriteColor}</p>
          </>
        );
    }
}

export default IngridInformation