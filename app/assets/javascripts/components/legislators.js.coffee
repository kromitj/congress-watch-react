  @Legislators = React.createClass
    
    getInitialState: ->
      legislators: @props.data
    
    getDefaultProps: ->
      legislators: []
    
    render: ->
      React.DOM.div
        className: 'legislators'
        React.DOM.h2
          className: 'title'
          'Legislators'
        React.DOM.table
          className: 'table table-bordered'
          React.DOM.thead null,
            React.DOM.tr null,
              React.DOM.th null, 'First'
              React.DOM.th null, 'Last'
              React.DOM.th null, 'State'
              React.DOM.th null, 'Party'
          React.DOM.tbody null,
            for legislator in @state.legislators
              React.createElement Legislator, key: legislator.id, legislator: legislator