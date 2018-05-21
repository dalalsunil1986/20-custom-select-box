import React from 'react'

class SelectBox extends React.Component {
  state = {
    items: this.props.items || []
  }
  render() {
    return <div>
      <div>
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