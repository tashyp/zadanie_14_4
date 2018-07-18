var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/lew.jpg'
  },
  {
    id: 3,
    title: 'Terminator 2',
    desc: 'Film cyborgu przeniesionym w przeszłość',
    img: 'images/terminator2.jpg'
  },
  {
    id: 4,
    title: 'Prometheus',
    desc: 'Film o ekspedycji w kosmosie',
    img: 'images/prometheus.jpg'
  },
  {
    id: 5,
    title: 'Back to the future',
    desc: 'Film podróżnikach w czasie',
    img: 'images/backfuture.jpg'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc}),
        React.createElement(MovieImg, {img: this.props.movie.img})
      )
    )
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title);
  }
});
var MovieImg = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('img', {src: this.props.img});
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('desc', {}, this.props.desc);
  }
});

var moviesElements = movies.map(function(movie) {
  return  React.createElement(Movie, {key: movie.id, movie: movie})
})

var element = React.createElement('ul', {}, moviesElements);

ReactDOM.render(element, document.getElementById('app'));
