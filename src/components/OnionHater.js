import React, { Component } from 'react';

class OnionHater extends Component {
  constructor(props) {
      super(props)
    //   this.hater= this.hater.bind(this);
  }


hater (event) {
    const value = event.target.value.toLowerCase();
        if (value.includes('cebolla')) {
            alert('¡ODIO LA CEBOLA!');
    }

}
 render (){
     return (
         <textarea onKeyUp= {this.hater}></textarea>
     );
 }
}


export default OnionHater;

