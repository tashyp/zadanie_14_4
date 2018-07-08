

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

/*
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('image', {}, movie.image)
    );
});
*/

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movies.desc}),
        React.createElement(MovieImg, {img: this.props.movies.img})
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
    return React.createElement('img', {src: this.prop.im});
  }
});

var MoviesDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired;
  },
  render: function() {
    return React.createElement('desc', {}, this.props.desc);
  }
});

var MovieList = React.createClass({
  propTypes: {
    moviesElements: React.PropTypes.array.isRequired,
  },
  render: function() {
    var items = this.props.moviesElements.map(function(movie) {
      raturn (React.createElement(Movies, { key: movie.id, movies:movie}));
    });
    raturn React.createElement('ul', {}, items);
  }
});

var element = React.createElement(MovieList, {moviesElements: movies});

ReactDOM.render(element, document.getElementById('app'));