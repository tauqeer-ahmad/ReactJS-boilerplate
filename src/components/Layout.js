import React, { Component }  from 'react'
import Header from './Header'
export default class Layout extends Component {

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, this.props)
    )

    return (
      <section>
        <Header/>
        { childrenWithProps }
      </section>
    )
  }

}
