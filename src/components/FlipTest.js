import ReactCardFlip from 'react-card-flip';
import IndividualProject from './IndividualProject';



class Test extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <YOUR_FRONT_COMPONENT key={front}>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_FRONT_COMPONENT>

        <YOUR_BACK_COMPONENT key={back}>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_BACK_COMPONENT>
      </ReactCardFlip>
    )
  }
}

export default Test
