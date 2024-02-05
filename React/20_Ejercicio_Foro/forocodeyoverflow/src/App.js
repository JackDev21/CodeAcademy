import React from 'react';
import { comments } from './commentData'
import Card from './Card'

const App = () => {
  return (
    <div>
      {
        comments.map(comment =>
          <Card commentObject={comment} />)
      }

    </div>
  )
}

export default App;