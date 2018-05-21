import React from 'react'

import './styles.css'

class SelectBox extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }

  render() {
    return <div>
      <div
        className="select-box--arrow"
        onClick={this.dropDown}
      >
        <span
          className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}
        />
      </div>
      <div
        style={{display: this.state.showItems ? 'block' : 'none'}}
      >
        {
          this.state.items.map(item => <div>
            { item.value }
          </div>)
        }
      </div>
    </div>
  }
}

export default SelectBox