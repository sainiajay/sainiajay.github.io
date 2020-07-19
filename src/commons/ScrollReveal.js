import React, { Component  } from 'react';
import ScrollReveal from 'scrollreveal';

const withScrollReveal = (Element, option) => class extends Component {
    componentDidMount() {
      const scrollOptions = option || {}
      ScrollReveal().reveal(
        this.target,
        {
          delay: 200,
          origin: 'bottom',
          distance: '50px',
          ...scrollOptions,
          ...this.props.sr
        },
        this.props.interval
      )
    }

    componentWillUnmount() {
      ScrollReveal().clean(this.target)
    }

    render() {
      return (<Element
            ref={c => this.target = c}
            {...this.props}>
            {this.props.children}
        </Element>);
    }
}

export default withScrollReveal;