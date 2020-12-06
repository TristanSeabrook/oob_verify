import React from 'react';

export default class Multibox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let state = this.props.state;
    console.log(JSON.stringify(state));
    return (
      <div>
        <form action = '/file/upload'>
          <input type='text' id='multibox' defaultValue={ state.multiboxMessage }/>
        </form>
      </div>
    );
  }
}
