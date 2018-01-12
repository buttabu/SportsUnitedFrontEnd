import React, {Component} from 'react';
import { hasValue } from '../../utils/utilfunctions';

export default class Photo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { className, photoClassName, src, parentsHeight} = this.props; // MAKE SURE PARENTHIGHT IS SET TO NULL IF NO VALUE IS PASSED
    //const styleString = hasValue(parentsHeight) ? `style={{height: ${parentsHeight} + 'px'}}` : ""; //{...styleString}
    const Result = hasValue(parentsHeight) ? 
      (<div className={className} style={{height: parentsHeight + 'px'}} >
        <img className={photoClassName} src={src}/>
      </div>) : 
      (<div className={className} >
        <img className={photoClassName} src={src}/>
      </div>);

    return (
      <div className="photo-component">
        {Result}
      </div>
    );
  }
}
