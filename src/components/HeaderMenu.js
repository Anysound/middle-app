import React from 'react';

// сделал в виде класса, т.к. смог реализовать переключение классов в элементе через хуки( но все впереди
export default class HeaderMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  toggleClickHandler() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let classes = ['nav'];

    if (this.state.clicked) {
      classes.push('nav--opened');
    }

    return (
      <nav className={classes.join(' ')}>
        <button className="nav__toggle-btn" onClick={this.toggleClickHandler.bind(this)}></button>
        <ul className="menu">
          <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
          <li className="menu__item"><a className="menu__link" href="#">About me</a></li>
          <li className="menu__item"><a className="menu__link" href="#">Portfolio</a></li>
          <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
        </ul>
      </nav>
    )
  }
}
