import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

const title = React.createElement(
    'ul',
    {id: 'title', className: 'header', style: style},
    'Hello World'
)

ReactDOM.render(
    title,
    document.getElementById('root')
)
