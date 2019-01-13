var Movie = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired,
    },
  
    render: function() {
        return ( 
        React.createElement('li', {},
        React.createElement(MovieTitle, {title:this.props.movie.title}),
        React.createElement(MovieDescription, {description: this.props.movie.desc}),
        React.createElement('img', {src: this.props.movie.image, alt: "dasddas"})
        )
      )
    },
  });


