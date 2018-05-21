import React, { Component } from 'react'
import SelectBox from './features/select-box'

class App extends Component {
  render() {
    return <div>
      <h1>Custom Select Box using ReactJS</h1>
      <div style={{margin: '16px', position: 'relative'}}>
        <SelectBox
          name="venue[country_id]"
          items={[
            { value: 'United States', id: 1 },
            { value: 'Great Britian', id: 21 },
            { value: 'Mexico', id: 43 },
            { value: 'Canada', id: 2 },
          ]}
        />
      </div>
    </div>
  }
}

export default App
