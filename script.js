var movies = [
    {
        id: '1',
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg/revision/latest?cb=20160704225342&path-prefix=pl'

    },
    {
        id: '2',
        title: 'Auta',
        desc: 'Bajka o gadających autach!',
        image: 'https://eswiatzabawek.pl//pol_pl_Cars-Auta-Zlomek-BHP19-9166_1.jpg'
    },
    {
        id: '3',
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'http://images2.fanpop.com/image/photos/11100000/Mufasa-Sarabi-mufasa-and-sarabi-11167490-258-225.jpg'
    },
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image, alt: "dasddas"})
      
    );
});


var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );


ReactDOM.render(element, document.getElementById('app'));