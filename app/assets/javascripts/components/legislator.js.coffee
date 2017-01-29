  @Legislator = React.createClass
    render: ->
      React.DOM.tr null,
        React.DOM.td null, @props.legislator.first_name
        React.DOM.td null, @props.legislator.last_name
        React.DOM.td null, @props.legislator.state
        React.DOM.td null, @props.legislator.party 

