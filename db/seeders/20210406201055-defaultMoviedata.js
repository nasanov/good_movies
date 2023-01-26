'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Movies', [
        {
          "title": "El Camino: A Breaking Bad Movie",
          "releaseDate": "2019-10-11T04:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Action",
            "Crime",
            "Drama"
          ],
          "director": "Vince Gilligan",
          "cast": [
            "Aaron Paul",
            "Jonathan Banks",
            "Matt Jones",
            "Charles Baker"
          ],
          "country": "USA",
          "productionCompany": "American Movie Classics",
          "imdbRating": 7.3,
          "awards": "Nominated for 4 Primetime Emmys. Another 4 wins & 20 nominations.",
          "mpaaRating": "TV-MA",
          "plot": "Fugitive Jesse Pinkman runs from his captors, the law, and his past.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg"
        },
        {
          "title": "Knives Out",
          "releaseDate": "2019-11-27T05:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Comedy",
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Rian Johnson",
          "cast": [
            "Daniel Craig",
            "Chris Evans",
            "Ana de Armas",
            "Jamie Lee Curtis"
          ],
          "country": "USA",
          "productionCompany": "FilmNation Entertainment",
          "imdbRating": 7.9,
          "awards": "Nominated for 1 Oscar. Another 47 wins & 107 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A detective investigates the death of a patriarch of an eccentric, combative family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg"
        },
        {
          "title": "Extraction",
          "releaseDate": "2020-04-24T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Sam Hargrave",
          "cast": [
            "Chris Hemsworth",
            "Bryon Lerum",
            "Ryder Lerum",
            "Rudhraksh Jaiswal"
          ],
          "country": "USA",
          "productionCompany": "N/A",
          "imdbRating": 6.7,
          "awards": "1 win & 7 nominations.",
          "mpaaRating": "R",
          "plot": "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Midsommar",
          "releaseDate": "2019-07-03T04:00:00.000Z",
          "runTime": 148,
          "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Ari Aster",
          "cast": [
            "Florence Pugh",
            "Jack Reynor",
            "Vilhelm Blomgren",
            "William Jackson Harper"
          ],
          "country": "USA, Sweden",
          "productionCompany": "Square Peg",
          "imdbRating": 7.1,
          "awards": "25 wins & 68 nominations.",
          "mpaaRating": "R",
          "plot": "A couple travels to Scandinavia to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_SX300.jpg"
        },
        {
          "title": "1917",
          "releaseDate": "2020-01-10T05:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Drama",
            "Thriller",
            "War"
          ],
          "director": "Sam Mendes",
          "cast": [
            "Dean-Charles Chapman",
            "George MacKay",
            "Daniel Mays",
            "Colin Firth"
          ],
          "country": "USA, UK, India, Spain, Canada, China",
          "productionCompany": "Amblin Entertainment",
          "imdbRating": 8.3,
          "awards": "Won 3 Oscars. Another 127 wins & 198 nominations.",
          "mpaaRating": "R",
          "plot": "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg"
        },
        {
          "title": "The Two Popes",
          "releaseDate": "2019-12-20T05:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Biography",
            "Comedy",
            "Drama",
            "History"
          ],
          "director": "Fernando Meirelles",
          "cast": [
            "Anthony Hopkins",
            "Jonathan Pryce",
            "Juan Minujín",
            "Luis Gnecco"
          ],
          "country": "UK, Italy",
          "productionCompany": "Lotus Productions",
          "imdbRating": 7.6,
          "awards": "Nominated for 3 Oscars. Another 12 wins & 55 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Behind Vatican walls, the conservative Pope Benedict XVI and the liberal future Pope Francis must find common ground to forge a new path for the Catholic Church.",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2RiOTc1YmYtMDk0Yy00ZWI4LTgzN2YtYTg2ZDZmOGIwNTA1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Gentlemen",
          "releaseDate": "2020-01-24T05:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Guy Ritchie",
          "cast": [
            "Matthew McConaughey",
            "Charlie Hunnam",
            "Michelle Dockery",
            "Jeremy Strong"
          ],
          "country": "UK, USA",
          "productionCompany": "N/A",
          "imdbRating": 7.8,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
        },
        {
          "title": "The Platform",
          "releaseDate": "2020-03-20T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Galder Gaztelu-Urrutia",
          "cast": [
            "Ivan Massagué",
            "Zorion Eguileor",
            "Antonia San Juan",
            "Emilio Buale"
          ],
          "country": "Spain",
          "productionCompany": "N/A",
          "imdbRating": 7,
          "awards": "12 wins & 24 nominations.",
          "mpaaRating": "TV-MA",
          "plot": "A vertical prison with one cell per level. Two people per cell. Only one food platform and two minutes per day to feed. An endless nightmare trapped in The Hole.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzllNmRjYWItNjlhNS00MjcyLWIyODEtMTg0ZjBiNTNhNzQwXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_SX300.jpg"
        },
        {
          "title": "Dil Bechara",
          "releaseDate": "2020-07-24T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Mukesh Chhabra",
          "cast": [
            "Sushant Singh Rajput",
            "Sanjana Sanghi",
            "Sahil Vaid",
            "Saswata Chatterjee"
          ],
          "country": "India",
          "productionCompany": "N/A",
          "imdbRating": 6.6,
          "awards": "N/A",
          "mpaaRating": "Not Rated",
          "plot": "The emotional journey of two hopelessly in love youngsters, a young girl, Kizie, suffering from cancer, and a boy, Manny, whom she meets at a support group.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNmI0MTliMTAtMmJhNC00NTJmLTllMzQtMDI3NzA1ODMyZWI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "6 Underground",
          "releaseDate": "2019-12-13T05:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Michael Bay",
          "cast": [
            "Ryan Reynolds",
            "Mélanie Laurent",
            "Manuel Garcia-Rulfo",
            "Ben Hardy"
          ],
          "country": "USA",
          "productionCompany": "Bay Films",
          "imdbRating": 6.1,
          "awards": "1 win & 9 nominations.",
          "mpaaRating": "R",
          "plot": "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Yesterday",
          "releaseDate": "2019-06-28T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Comedy",
            "Fantasy",
            "Music",
            "Romance"
          ],
          "director": "Danny Boyle",
          "cast": [
            "Himesh Patel",
            "Lily James",
            "Sophia Di Martino",
            "Ellise Chappell"
          ],
          "country": "UK, China, Japan, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 6.8,
          "awards": "1 win & 18 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A struggling musician realizes he's the only person on Earth who can remember The Beatles after waking up in an alternate timeline where they never existed.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ0NTI0NjkyN15BMl5BanBnXkFtZTgwNzY0MTE0NzM@._V1_SX300.jpg"
        },
        {
          "title": "The Lighthouse",
          "releaseDate": "2019-11-01T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Drama",
            "Fantasy",
            "Horror",
            "Mystery"
          ],
          "director": "Robert Eggers",
          "cast": [
            "Robert Pattinson",
            "Willem Dafoe",
            "Valeriia Karaman",
            "Logan Hawkes"
          ],
          "country": "Canada, USA, Brazil",
          "productionCompany": "Harbor Picture Company",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Oscar. Another 32 wins & 130 nominations.",
          "mpaaRating": "R",
          "plot": "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Jumanji: The Next Level",
          "releaseDate": "2019-12-13T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
          ],
          "director": "Jake Kasdan",
          "cast": [
            "Dwayne Johnson",
            "Kevin Hart",
            "Jack Black",
            "Karen Gillan"
          ],
          "country": "USA",
          "productionCompany": "Matt Tolmach Productions",
          "imdbRating": 6.6,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Mule",
          "releaseDate": "2018-12-14T05:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Clint Eastwood",
          "cast": [
            "Clint Eastwood",
            "Patrick L. Reyes",
            "Cesar De León",
            "Gustavo Muñoz"
          ],
          "country": "USA, Canada",
          "productionCompany": "Malpaso Productions",
          "imdbRating": 7,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "R",
          "plot": "A ninety-year-old horticulturist and Korean War veteran turns drug mule for a Mexican cartel.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc1OTc5NzA4OF5BMl5BanBnXkFtZTgwOTAzMzE2NjM@._V1_SX300.jpg"
        },
        {
          "title": "Enola Holmes",
          "releaseDate": "2020-09-23T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Adventure",
            "Crime",
            "Drama",
            "Mystery"
          ],
          "director": "Harry Bradbeer",
          "cast": [
            "Millie Bobby Brown",
            "Henry Cavill",
            "Sam Claflin",
            "Helena Bonham Carter"
          ],
          "country": "UK",
          "productionCompany": "N/A",
          "imdbRating": 6.6,
          "awards": "1 win & 9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When Enola Holmes-Sherlock's teen sister-discovers her mother missing, she sets off to find her, becoming a super-sleuth in her own right as she outwits her famous brother and unravels a dangerous conspiracy around a mysterious young Lord.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjNkNzk0ZjEtM2M1ZC00MmMxLTlmOWEtNWRlZTc1ZTUyNzY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
        },
        {
          "title": "Ready or Not",
          "releaseDate": "2019-08-21T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Action",
            "Comedy",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Matt Bettinelli-Olpin, Tyler Gillett",
          "cast": [
            "Samara Weaving",
            "Adam Brody",
            "Mark O'Brien",
            "Henry Czerny"
          ],
          "country": "USA, Canada",
          "productionCompany": "Vinson Films",
          "imdbRating": 6.8,
          "awards": "3 wins & 22 nominations.",
          "mpaaRating": "R",
          "plot": "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzBkMzAyMDUtZTFkZS00OWUyLTgwM2ItNGI3MTQ5NzA3NTVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Hereditary",
          "releaseDate": "2018-06-08T04:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Ari Aster",
          "cast": [
            "Alex Wolff",
            "Gabriel Byrne",
            "Toni Collette",
            "Milly Shapiro"
          ],
          "country": "USA",
          "productionCompany": "PalmStar Media",
          "imdbRating": 7.3,
          "awards": "44 wins & 105 nominations.",
          "mpaaRating": "R",
          "plot": "A grieving family is haunted by tragic and disturbing occurrences.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg"
        },
        {
          "title": "Birds of Prey",
          "releaseDate": "2020-02-07T05:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Crime"
          ],
          "director": "Cathy Yan",
          "cast": [
            "Margot Robbie",
            "Rosie Perez",
            "Mary Elizabeth Winstead",
            "Jurnee Smollett"
          ],
          "country": "USA",
          "productionCompany": "DC Entertainment",
          "imdbRating": 6.1,
          "awards": "10 wins & 68 nominations.",
          "mpaaRating": "R",
          "plot": "After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Searching",
          "releaseDate": "2018-08-31T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Aneesh Chaganty",
          "cast": [
            "John Cho",
            "Sara Sohn",
            "Alex Jayne Go",
            "Megan Liu"
          ],
          "country": "USA, Russia",
          "productionCompany": "Bazelevs Production",
          "imdbRating": 7.6,
          "awards": "6 wins & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After his teenage daughter goes missing, a desperate father tries to find clues on her laptop.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIwOTA3NDI3MF5BMl5BanBnXkFtZTgwNzIzMzA5NTM@._V1_SX300.jpg"
        },
        {
          "title": "Marriage Story",
          "releaseDate": "2019-12-06T05:00:00.000Z",
          "runTime": 137,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Noah Baumbach",
          "cast": [
            "Adam Driver",
            "Scarlett Johansson",
            "Julia Greer",
            "Azhy Robertson"
          ],
          "country": "UK, USA",
          "productionCompany": "Heyday Films",
          "imdbRating": 7.9,
          "awards": "Won 1 Oscar. Another 126 wins & 265 nominations.",
          "mpaaRating": "R",
          "plot": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
        },
        {
          "title": "The Old Guard",
          "releaseDate": "2020-07-10T04:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Thriller"
          ],
          "director": "Gina Prince-Bythewood",
          "cast": [
            "Charlize Theron",
            "KiKi Layne",
            "Matthias Schoenaerts",
            "Marwan Kenzari"
          ],
          "country": "USA",
          "productionCompany": "N/A",
          "imdbRating": 6.6,
          "awards": "3 wins & 23 nominations.",
          "mpaaRating": "R",
          "plot": "A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
        },
        {
          "title": "It Chapter Two",
          "releaseDate": "2019-09-06T04:00:00.000Z",
          "runTime": 169,
          "genres": [
            "Drama",
            "Fantasy",
            "Horror"
          ],
          "director": "Andy Muschietti",
          "cast": [
            "Jessica Chastain",
            "James McAvoy",
            "Bill Hader",
            "Isaiah Mustafa"
          ],
          "country": "Canada, USA",
          "productionCompany": "Toma 78",
          "imdbRating": 6.5,
          "awards": "5 wins & 29 nominations.",
          "mpaaRating": "R",
          "plot": "Twenty-seven years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTJlNjlkZTktNjEwOS00NzI5LTlkNDAtZmEwZDFmYmM2MjU2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
        },
        {
          "title": "BlacKkKlansman",
          "releaseDate": "2018-08-10T04:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Biography",
            "Comedy",
            "Crime",
            "Drama"
          ],
          "director": "Spike Lee",
          "cast": [
            "Alec Baldwin",
            "John David Washington",
            "Isiah Whitlock Jr.",
            "Robert John Burke"
          ],
          "country": "USA",
          "productionCompany": "40 Acres &amp; A Mule Filmworks",
          "imdbRating": 7.5,
          "awards": "Won 1 Oscar. Another 42 wins & 210 nominations.",
          "mpaaRating": "R",
          "plot": "Ron Stallworth, an African American police officer from Colorado Springs, CO, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader. Based on actual events.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_SX300.jpg"
        },
        {
          "title": "Joker",
          "releaseDate": "2019-10-04T04:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Todd Phillips",
          "cast": [
            "Joaquin Phoenix",
            "Robert De Niro",
            "Zazie Beetz",
            "Frances Conroy"
          ],
          "country": "USA, Canada",
          "productionCompany": "Bron Studios",
          "imdbRating": 8.4,
          "awards": "Won 2 Oscars. Another 112 wins & 234 nominations.",
          "mpaaRating": "R",
          "plot": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Onward",
          "releaseDate": "2020-03-06T05:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Dan Scanlon",
          "cast": [
            "Tom Holland",
            "Chris Pratt",
            "Julia Louis-Dreyfus",
            "Octavia Spencer"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Golden Globe. Another 3 wins & 59 nominations.",
          "mpaaRating": "PG",
          "plot": "Two elven brothers embark on a quest to bring their father back for one day.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
        },
        {
          "title": "Once Upon a Time... In Hollywood",
          "releaseDate": "2019-07-26T04:00:00.000Z",
          "runTime": 161,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Quentin Tarantino",
          "cast": [
            "Leonardo DiCaprio",
            "Brad Pitt",
            "Margot Robbie",
            "Emile Hirsch"
          ],
          "country": "USA, UK, China",
          "productionCompany": "Columbia Pictures",
          "imdbRating": 7.6,
          "awards": "Won 2 Oscars. Another 134 wins & 372 nominations.",
          "mpaaRating": "R",
          "plot": "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
        },
        {
          "title": "Wonder Woman 1984",
          "releaseDate": "2020-12-25T05:00:00.000Z",
          "runTime": 151,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Patty Jenkins",
          "cast": [
            "Gal Gadot",
            "Chris Pine",
            "Kristen Wiig",
            "Pedro Pascal"
          ],
          "country": "USA, UK, Spain",
          "productionCompany": "DC Comics",
          "imdbRating": 5.4,
          "awards": "5 wins & 32 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg"
        },
        {
          "title": "A Simple Favor",
          "releaseDate": "2018-09-14T04:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Comedy",
            "Crime",
            "Mystery",
            "Thriller"
          ],
          "director": "Paul Feig",
          "cast": [
            "Anna Kendrick",
            "Ian Ho",
            "Joshua Satine",
            "Glenda Braganza"
          ],
          "country": "Canada, USA",
          "productionCompany": "Feigco Entertainment",
          "imdbRating": 6.8,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "Stephanie is a single mother with a parenting vlog who befriends Emily, a secretive upper-class woman who has a child at the same elementary school. When Emily goes missing, Stephanie takes it upon herself to investigate.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjFiMGNiNmItMzNiNi00Mjc1LTg1N2YtNWE2NTE5N2VlZTQ3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Green Book",
          "releaseDate": "2018-11-16T05:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Biography",
            "Comedy",
            "Drama",
            "Music"
          ],
          "director": "Peter Farrelly",
          "cast": [
            "Viggo Mortensen",
            "Mahershala Ali",
            "Linda Cardellini",
            "Sebastian Maniscalco"
          ],
          "country": "USA, China",
          "productionCompany": "Charles B. Wessler Entertainment",
          "imdbRating": 8.2,
          "awards": "Won 3 Oscars. Another 55 wins & 122 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg"
        },
        {
          "title": "Us",
          "releaseDate": "2019-03-22T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Jordan Peele",
          "cast": [
            "Lupita Nyong'o",
            "Winston Duke",
            "Elisabeth Moss",
            "Tim Heidecker"
          ],
          "country": "USA, China, Japan",
          "productionCompany": "Monkeypaw Productions",
          "imdbRating": 6.8,
          "awards": "81 wins & 121 nominations.",
          "mpaaRating": "R",
          "plot": "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
        },
        {
          "title": "Glass",
          "releaseDate": "2019-01-18T05:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "M. Night Shyamalan",
          "cast": [
            "James McAvoy",
            "Bruce Willis",
            "Samuel L. Jackson",
            "Anya Taylor-Joy"
          ],
          "country": "USA, China",
          "productionCompany": "Blinding Edge Pictures",
          "imdbRating": 6.7,
          "awards": "2 wins & 15 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_SX300.jpg"
        },
        {
          "title": "Fast & Furious Presents: Hobbs & Shaw",
          "releaseDate": "2019-08-02T04:00:00.000Z",
          "runTime": 137,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "David Leitch",
          "cast": [
            "Dwayne Johnson",
            "Jason Statham",
            "Idris Elba",
            "Vanessa Kirby"
          ],
          "country": "USA, Japan",
          "productionCompany": "Chris Morgan Productions",
          "imdbRating": 6.4,
          "awards": "1 win & 27 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Lawman Luke Hobbs (Dwayne \"The Rock\" Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Parasite",
          "releaseDate": "2019-11-08T05:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Comedy",
            "Drama",
            "Thriller"
          ],
          "director": "Bong Joon Ho",
          "cast": [
            "Kang-ho Song",
            "Sun-kyun Lee",
            "Yeo-jeong Cho",
            "Woo-sik Choi"
          ],
          "country": "South Korea",
          "productionCompany": "CJ Entertainment",
          "imdbRating": 8.6,
          "awards": "Won 4 Oscars. Another 297 wins & 265 nominations.",
          "mpaaRating": "R",
          "plot": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
        },
        {
          "title": "Tenet",
          "releaseDate": "2020-09-03T04:00:00.000Z",
          "runTime": 150,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Christopher Nolan",
          "cast": [
            "Juhan Ulfsak",
            "Jefferson Hall",
            "Ivo Uukkivi",
            "Andrew Howard"
          ],
          "country": "UK, USA",
          "productionCompany": "Syncopy",
          "imdbRating": 7.5,
          "awards": "Nominated for 2 Oscars. Another 34 wins & 122 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg"
        },
        {
          "title": "A Quiet Place",
          "releaseDate": "2018-04-06T04:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Drama",
            "Horror",
            "Sci-Fi"
          ],
          "director": "John Krasinski",
          "cast": [
            "Emily Blunt",
            "John Krasinski",
            "Millicent Simmonds",
            "Noah Jupe"
          ],
          "country": "USA",
          "productionCompany": "Sunday Night",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Oscar. Another 34 wins & 113 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg"
        },
        {
          "title": "Bad Times at the El Royale",
          "releaseDate": "2018-10-12T04:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Drew Goddard",
          "cast": [
            "Jeff Bridges",
            "Cynthia Erivo",
            "Dakota Johnson",
            "Jon Hamm"
          ],
          "country": "USA",
          "productionCompany": "Goddard Textiles",
          "imdbRating": 7.1,
          "awards": "2 wins & 11 nominations.",
          "mpaaRating": "R",
          "plot": "Early 1970s. Four strangers check in at the El Royale Hotel. The hotel is deserted, staffed by a single desk clerk. Some of the new guests' reasons for being there are less than innocent and some are not who they appear to be.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTk1Nzk1MDc1MF5BMl5BanBnXkFtZTgwNjU2NDExNjM@._V1_SX300.jpg"
        },
        {
          "title": "X-Men: Dark Phoenix",
          "releaseDate": "2019-06-07T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Simon Kinberg",
          "cast": [
            "James McAvoy",
            "Michael Fassbender",
            "Jennifer Lawrence",
            "Nicholas Hoult"
          ],
          "country": "USA, Canada",
          "productionCompany": "TSG Entertainment",
          "imdbRating": 5.7,
          "awards": "13 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix, causing the X-Men to decide if her life is worth more than all of humanity.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg"
        },
        {
          "title": "Upgrade",
          "releaseDate": "2018-06-01T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Leigh Whannell",
          "cast": [
            "Logan Marshall-Green",
            "Melanie Vallejo",
            "Steve Danielsen",
            "Abby Craden"
          ],
          "country": "USA, Australia",
          "productionCompany": "Goalpost Pictures",
          "imdbRating": 7.5,
          "awards": "3 wins & 25 nominations.",
          "mpaaRating": "R",
          "plot": "Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI0NzcyMjM5Ml5BMl5BanBnXkFtZTgwMzk2NzAyNTM@._V1_SX300.jpg"
        },
        {
          "title": "Terminator: Dark Fate",
          "releaseDate": "2019-11-01T04:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Tim Miller",
          "cast": [
            "Linda Hamilton",
            "Arnold Schwarzenegger",
            "Mackenzie Davis",
            "Natalia Reyes"
          ],
          "country": "USA, Spain, Hungary",
          "productionCompany": "Tencent Pictures",
          "imdbRating": 6.2,
          "awards": "1 win & 12 nominations.",
          "mpaaRating": "R",
          "plot": "An augmented human and Sarah Connor must stop an advanced liquid Terminator from hunting down a young girl, whose fate is critical to the human race.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOWExYzVlZDgtY2E1ZS00NTFjLWFmZWItZjI2NWY5ZWJiNTE4XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
        },
        {
          "title": "The Ballad of Buster Scruggs",
          "releaseDate": "2018-11-09T05:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Comedy",
            "Drama",
            "Musical",
            "Mystery",
            "Romance",
            "Western"
          ],
          "director": "Ethan Coen, Joel Coen",
          "cast": [
            "Tim Blake Nelson",
            "Willie Watson",
            "Clancy Brown",
            "Danny McCarthy"
          ],
          "country": "USA",
          "productionCompany": "Netflix",
          "imdbRating": 7.3,
          "awards": "Nominated for 3 Oscars. Another 7 wins & 38 nominations.",
          "mpaaRating": "R",
          "plot": "Six tales of life and violence in the Old West, following a singing gunslinger, a bank robber, a traveling impresario, an elderly prospector, a wagon train, and a perverse pair of bounty hunters.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjRkYTI3M2EtZWQ4Ny00OTA2LWFmMTMtY2E4MTEyZmNjOTMxXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
        },
        {
          "title": "Creed II",
          "releaseDate": "2018-11-21T05:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Drama",
            "Sport"
          ],
          "director": "Steven Caple Jr.",
          "cast": [
            "Michael B. Jordan",
            "Sylvester Stallone",
            "Tessa Thompson",
            "Phylicia Rashad"
          ],
          "country": "USA",
          "productionCompany": "Metro-Goldwyn-Mayer Studios",
          "imdbRating": 7.1,
          "awards": "1 win & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Under the tutelage of Rocky Balboa, newly crowned heavyweight champion Adonis Creed faces off against Viktor Drago, the son of Ivan Drago.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmEyNWZhM2YtZDAyNi00ZjYzLWI2ZWMtOWM4ZmI1MDE0OWNmXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
        },
        {
          "title": "Spider-Man: Far from Home",
          "releaseDate": "2019-07-02T04:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Jon Watts",
          "cast": [
            "Tom Holland",
            "Samuel L. Jackson",
            "Jake Gyllenhaal",
            "Marisa Tomei"
          ],
          "country": "USA",
          "productionCompany": "Columbia Pictures",
          "imdbRating": 7.5,
          "awards": "10 wins & 25 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Post",
          "releaseDate": "2018-01-12T05:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Drama"
          ],
          "director": "Steven Spielberg",
          "cast": [
            "Meryl Streep",
            "Tom Hanks",
            "Sarah Paulson",
            "Bob Odenkirk"
          ],
          "country": "USA, UK",
          "productionCompany": "Participant Media",
          "imdbRating": 7.2,
          "awards": "Nominated for 2 Oscars. Another 20 wins & 110 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A cover-up spanning four U.S. Presidents pushes the country's first female newspaper publisher and her editor to join an unprecedented battle between press and government.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_SX300.jpg"
        },
        {
          "title": "Vice",
          "releaseDate": "2018-12-25T05:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Biography",
            "Comedy",
            "Drama"
          ],
          "director": "Adam McKay",
          "cast": [
            "Christian Bale",
            "Amy Adams",
            "Steve Carell",
            "Sam Rockwell"
          ],
          "country": "USA",
          "productionCompany": "Annapurna Pictures",
          "imdbRating": 7.2,
          "awards": "Won 1 Oscar. Another 34 wins & 137 nominations.",
          "mpaaRating": "R",
          "plot": "The story of Dick Cheney, an unassuming bureaucratic Washington insider, who quietly wielded immense power as Vice President to George W. Bush, reshaping the country and the globe in ways that we still feel today.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY1NjM0MzgxMV5BMl5BanBnXkFtZTgwNDc4NTY0NjM@._V1_SX300.jpg"
        },
        {
          "title": "Roma",
          "releaseDate": "2018-11-21T05:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Drama"
          ],
          "director": "Alfonso Cuarón",
          "cast": [
            "Yalitza Aparicio",
            "Marina de Tavira",
            "Diego Cortina Autrey",
            "Carlos Peralta"
          ],
          "country": "Mexico, USA",
          "productionCompany": "N/A",
          "imdbRating": 7.7,
          "awards": "Won 3 Oscars. Another 242 wins & 212 nominations.",
          "mpaaRating": "R",
          "plot": "A year in the life of a middle-class family's maid in Mexico City in the early 1970s.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_SX300.jpg"
        },
        {
          "title": "John Wick: Chapter 3 - Parabellum",
          "releaseDate": "2019-05-17T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Chad Stahelski",
          "cast": [
            "Keanu Reeves",
            "Halle Berry",
            "Ian McShane",
            "Laurence Fishburne"
          ],
          "country": "USA",
          "productionCompany": "87eleven",
          "imdbRating": 7.4,
          "awards": "16 wins & 26 nominations.",
          "mpaaRating": "R",
          "plot": "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
        },
        {
          "title": "Aladdin",
          "releaseDate": "2019-05-24T04:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy",
            "Musical",
            "Romance"
          ],
          "director": "Guy Ritchie",
          "cast": [
            "Will Smith",
            "Mena Massoud",
            "Naomi Scott",
            "Marwan Kenzari"
          ],
          "country": "UK, USA, Australia",
          "productionCompany": "N/A",
          "imdbRating": 6.9,
          "awards": "8 wins & 38 nominations.",
          "mpaaRating": "PG",
          "plot": "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_SX300.jpg"
        },
        {
          "title": "The Lion King",
          "releaseDate": "2019-07-19T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Animation",
            "Adventure",
            "Drama",
            "Family",
            "Musical"
          ],
          "director": "Jon Favreau",
          "cast": [
            "Chiwetel Ejiofor",
            "John Oliver",
            "James Earl Jones",
            "John Kani"
          ],
          "country": "USA, UK, South Africa",
          "productionCompany": "Fairview Entertainment",
          "imdbRating": 6.9,
          "awards": "Nominated for 1 Oscar. Another 19 wins & 43 nominations.",
          "mpaaRating": "PG",
          "plot": "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
        },
        {
          "title": "Pokémon Detective Pikachu",
          "releaseDate": "2019-05-10T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Family",
            "Mystery",
            "Sci-Fi"
          ],
          "director": "Rob Letterman",
          "cast": [
            "Ryan Reynolds",
            "Justice Smith",
            "Kathryn Newton",
            "Bill Nighy"
          ],
          "country": "USA, Japan, UK, Canada",
          "productionCompany": "Legendary Pictures",
          "imdbRating": 6.6,
          "awards": "9 nominations.",
          "mpaaRating": "PG",
          "plot": "In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg"
        },
        {
          "title": "Ralph Breaks the Internet",
          "releaseDate": "2018-11-21T05:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Phil Johnston, Rich Moore",
          "cast": [
            "John C. Reilly",
            "Sarah Silverman",
            "Gal Gadot",
            "Taraji P. Henson"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Animation Studios",
          "imdbRating": 7,
          "awards": "Nominated for 1 Oscar. Another 3 wins & 66 nominations.",
          "mpaaRating": "PG",
          "plot": "Six years after the events of \"Wreck-It Ralph,\" Ralph and Vanellope, now friends, discover a wi-fi router in their arcade, leading them into a new adventure.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_SX300.jpg"
        },
        {
          "title": "The Nun",
          "releaseDate": "2018-09-07T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Corin Hardy",
          "cast": [
            "Demián Bichir",
            "Taissa Farmiga",
            "Jonas Bloquet",
            "Bonnie Aarons"
          ],
          "country": "USA, Romania",
          "productionCompany": "Atomic Monster",
          "imdbRating": 5.3,
          "awards": "2 wins & 1 nomination.",
          "mpaaRating": "R",
          "plot": "A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_SX300.jpg"
        },
        {
          "title": "The Mountain II",
          "releaseDate": "2016-11-04T04:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Action",
            "Drama",
            "War"
          ],
          "director": "Alper Caglar",
          "cast": [
            "Caglar Ertugrul",
            "Ufuk Bayraktar",
            "Ahu Türkpençe",
            "Murat Serezli"
          ],
          "country": "Turkey",
          "productionCompany": "N/A",
          "imdbRating": 8.8,
          "awards": "2 wins & 2 nominations.",
          "mpaaRating": "N/A",
          "plot": "In a desolate war zone where screams of the innocent echo, seven Maroon Berets will dance with death on the very line between disaster and valor.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2I2NGMzMTItNWI4YS00MWRiLTliZTEtNzhjODE3NDcyZjQwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Phantom Thread",
          "releaseDate": "2018-01-19T05:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Paul Thomas Anderson",
          "cast": [
            "Vicky Krieps",
            "Daniel Day-Lewis",
            "Lesley Manville",
            "Julie Vollono"
          ],
          "country": "USA, UK",
          "productionCompany": "Annapurna Pictures",
          "imdbRating": 7.5,
          "awards": "Won 1 Oscar. Another 54 wins & 121 nominations.",
          "mpaaRating": "R",
          "plot": "Set in 1950s London, Reynolds Woodcock is a renowned dressmaker whose fastidious life is disrupted by a young, strong-willed woman, Alma, who becomes his muse and lover.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
        },
        {
          "title": "Skyscraper",
          "releaseDate": "2018-07-13T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Rawson Marshall Thurber",
          "cast": [
            "Dwayne Johnson",
            "Neve Campbell",
            "Chin Han",
            "Roland Møller"
          ],
          "country": "USA, Hong Kong",
          "productionCompany": "Legendary Pictures",
          "imdbRating": 5.8,
          "awards": "4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A security expert must infiltrate a burning skyscraper, 225 stories above ground, when his family is trapped inside by criminals.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGM3MzQwYzItNDA1Ny00MzIyLTg5Y2QtYTAwMzNmMDU2ZDgxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"
        },
        {
          "title": "You Were Never Really Here",
          "releaseDate": "2018-04-06T04:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Crime",
            "Drama"
          ],
          "director": "Lynne Ramsay",
          "cast": [
            "Joaquin Phoenix",
            "Dante Pereira-Olson",
            "Larry Canady",
            "Vinicius Damasceno"
          ],
          "country": "UK, USA, France",
          "productionCompany": "Why Not Productions",
          "imdbRating": 6.8,
          "awards": "Nominated for 1 BAFTA Film Award. Another 24 wins & 72 nominations.",
          "mpaaRating": "R",
          "plot": "A traumatized veteran, unafraid of violence, tracks down missing girls for a living. When a job spins out of control, Joe's nightmares overtake him as a conspiracy is uncovered leading to what may be his death trip or his awakening.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDkwOTE0ZjMtZmRiYS00M2M3LWE3MzUtNzNmNmExNTNmNjg5XkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_SX300.jpg"
        },
        {
          "title": "Uncut Gems",
          "releaseDate": "2019-12-25T05:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Benny Safdie, Josh Safdie",
          "cast": [
            "Mesfin Lamengo",
            "Sun Zhi Hua-Hilton",
            "Liang Wei-Hui-Duncan",
            "Sunny Wu Jin Zahao"
          ],
          "country": "USA",
          "productionCompany": "Elara Pictures",
          "imdbRating": 7.4,
          "awards": "23 wins & 87 nominations.",
          "mpaaRating": "R",
          "plot": "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hope of staying afloat and alive.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
        },
        {
          "title": "Call Me by Your Name",
          "releaseDate": "2018-01-19T05:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Luca Guadagnino",
          "cast": [
            "Armie Hammer",
            "Timothée Chalamet",
            "Michael Stuhlbarg",
            "Amira Casar"
          ],
          "country": "Italy, France, USA, Brazil",
          "productionCompany": "Frenesy Film",
          "imdbRating": 7.9,
          "awards": "Won 1 Oscar. Another 94 wins & 258 nominations.",
          "mpaaRating": "R",
          "plot": "In 1980s Italy, romance blossoms between a seventeen-year-old student and the older man hired as his father's research assistant.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"
        },
        {
          "title": "The Killing of a Sacred Deer",
          "releaseDate": "2017-11-03T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Yorgos Lanthimos",
          "cast": [
            "Barry G. Bernson",
            "Herb Caillouet",
            "Bill Camp",
            "Raffey Cassidy"
          ],
          "country": "Ireland, UK, USA",
          "productionCompany": "Element Pictures",
          "imdbRating": 7,
          "awards": "6 wins & 54 nominations.",
          "mpaaRating": "R",
          "plot": "Steven, a charismatic surgeon, is forced to make an unthinkable sacrifice after his life starts to fall apart, when the behavior of a teenage boy he has taken under his wing turns sinister.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjU4NDcwOTA2NF5BMl5BanBnXkFtZTgwMjE2OTg4MzI@._V1_SX300.jpg"
        },
        {
          "title": "Train to Busan",
          "releaseDate": "2016-07-20T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Horror",
            "Thriller"
          ],
          "director": "Sang-ho Yeon",
          "cast": [
            "Gong Yoo",
            "Jung Yu-mi",
            "Ma Dong-seok",
            "Su-an Kim"
          ],
          "country": "South Korea",
          "productionCompany": "RedPeter Film",
          "imdbRating": 7.6,
          "awards": "32 wins & 39 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_SX300.jpg"
        },
        {
          "title": "Doctor Sleep",
          "releaseDate": "2019-11-08T05:00:00.000Z",
          "runTime": 152,
          "genres": [
            "Drama",
            "Fantasy",
            "Horror",
            "Thriller"
          ],
          "director": "Mike Flanagan",
          "cast": [
            "Ewan McGregor",
            "Rebecca Ferguson",
            "Kyliegh Curran",
            "Cliff Curtis"
          ],
          "country": "UK, USA",
          "productionCompany": "Intrepid Pictures",
          "imdbRating": 7.3,
          "awards": "7 wins & 37 nominations.",
          "mpaaRating": "R",
          "plot": "Years following the events of The Shining (1980), a now-adult Dan Torrance must protect a young girl with similar powers from a cult known as The True Knot, who prey on children with powers to remain immortal.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_SX300.jpg"
        },
        {
          "title": "The Shape of Water",
          "releaseDate": "2017-12-22T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Romance",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Guillermo del Toro",
          "cast": [
            "Sally Hawkins",
            "Michael Shannon",
            "Richard Jenkins",
            "Octavia Spencer"
          ],
          "country": "USA, Canada, Mexico",
          "productionCompany": "TSG Entertainment",
          "imdbRating": 7.3,
          "awards": "Won 4 Oscars. Another 132 wins & 350 nominations.",
          "mpaaRating": "R",
          "plot": "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
        },
        {
          "title": "I, Tonya",
          "releaseDate": "2018-01-19T05:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Biography",
            "Comedy",
            "Drama",
            "Sport"
          ],
          "director": "Craig Gillespie",
          "cast": [
            "Margot Robbie",
            "Sebastian Stan",
            "Allison Janney",
            "Julianne Nicholson"
          ],
          "country": "USA, UK, Australia, Canada",
          "productionCompany": "IA Films",
          "imdbRating": 7.5,
          "awards": "Won 1 Oscar. Another 44 wins & 123 nominations.",
          "mpaaRating": "R",
          "plot": "Competitive ice skater Tonya Harding rises amongst the ranks at the U.S. Figure Skating Championships, but her future in the activity is thrown into doubt when her ex-husband intervenes.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI5MDY1NjYzMl5BMl5BanBnXkFtZTgwNjIzNDAxNDM@._V1_SX300.jpg"
        },
        {
          "title": "Bright",
          "releaseDate": "2017-12-22T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Action",
            "Fantasy",
            "Thriller"
          ],
          "director": "David Ayer",
          "cast": [
            "Will Smith",
            "Joel Edgerton",
            "Noomi Rapace",
            "Edgar Ramírez"
          ],
          "country": "USA",
          "productionCompany": "Netflix",
          "imdbRating": 6.3,
          "awards": "1 win & 7 nominations.",
          "mpaaRating": "TV-MA",
          "plot": "A detective must work with an Orc to find a powerful wand before evil creatures do.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_SX300.jpg"
        },
        {
          "title": "Deadpool 2",
          "releaseDate": "2018-05-18T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "David Leitch",
          "cast": [
            "Ryan Reynolds",
            "Josh Brolin",
            "Morena Baccarin",
            "Julian Dennison"
          ],
          "country": "Canada, USA",
          "productionCompany": "Kinberg Genre",
          "imdbRating": 7.7,
          "awards": "6 wins & 51 nominations.",
          "mpaaRating": "R",
          "plot": "Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_SX300.jpg"
        },
        {
          "title": "The Big Sick",
          "releaseDate": "2017-07-14T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Michael Showalter",
          "cast": [
            "Kumail Nanjiani",
            "Zoe Kazan",
            "Holly Hunter",
            "Ray Romano"
          ],
          "country": "USA",
          "productionCompany": "Apatow Films",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Oscar. Another 17 wins & 93 nominations.",
          "mpaaRating": "R",
          "plot": "Pakistan-born comedian Kumail Nanjiani and grad student Emily Gardner fall in love but struggle as their cultures clash. When Emily contracts a mysterious illness, Kumail finds himself forced to face her feisty parents, his family's expectations, and his true feelings.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZWM4YzZjOTEtZmU5ZS00ZTRkLWFiNjAtZTEwNzIzMDM5MjdmXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SX300.jpg"
        },
        {
          "title": "Life",
          "releaseDate": "2017-03-24T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Daniel Espinosa",
          "cast": [
            "Hiroyuki Sanada",
            "Ryan Reynolds",
            "Rebecca Ferguson",
            "Jake Gyllenhaal"
          ],
          "country": "UK, USA",
          "productionCompany": "Skydance Productions",
          "imdbRating": 6.6,
          "awards": "7 nominations.",
          "mpaaRating": "R",
          "plot": "A team of scientists aboard the International Space Station discover a rapidly evolving life form that caused extinction on Mars and now threatens all life on Earth.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Logan Lucky",
          "releaseDate": "2017-08-18T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Comedy",
            "Crime",
            "Drama"
          ],
          "director": "Steven Soderbergh",
          "cast": [
            "Farrah Mackenzie",
            "Channing Tatum",
            "Jim O'Heir",
            "Riley Keough"
          ],
          "country": "USA, China",
          "productionCompany": "Trans-Radial Pictures",
          "imdbRating": 7,
          "awards": "2 wins & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two brothers attempt to pull off a heist during a NASCAR race in North Carolina.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYyODg0NDU1OV5BMl5BanBnXkFtZTgwNjcxMzU0MjI@._V1_SX300.jpg"
        },
        {
          "title": "Wind River",
          "releaseDate": "2017-08-18T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Taylor Sheridan",
          "cast": [
            "Kelsey Asbille",
            "Jeremy Renner",
            "Julia Jones",
            "Teo Briones"
          ],
          "country": "UK, Canada, USA",
          "productionCompany": "Synergics Films",
          "imdbRating": 7.7,
          "awards": "14 wins & 26 nominations.",
          "mpaaRating": "R",
          "plot": "A veteran hunter helps an FBI agent investigate the murder of a young woman on a Wyoming Native American reservation.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUyMjU1OTUwM15BMl5BanBnXkFtZTgwMDg1NDQ2MjI@._V1_SX300.jpg"
        },
        {
          "title": "Your Name.",
          "releaseDate": "2017-04-07T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Animation",
            "Drama",
            "Fantasy",
            "Romance"
          ],
          "director": "Makoto Shinkai",
          "cast": [
            "Ryûnosuke Kamiki",
            "Mone Kamishiraishi",
            "Ryô Narita",
            "Aoi Yûki"
          ],
          "country": "Japan",
          "productionCompany": "Toho Company Ltd.",
          "imdbRating": 8.4,
          "awards": "16 wins & 26 nominations.",
          "mpaaRating": "PG",
          "plot": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
          "poster": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SX300.jpg"
        },
        {
          "title": "Happy Death Day",
          "releaseDate": "2017-10-13T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Comedy",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Christopher Landon",
          "cast": [
            "Jessica Rothe",
            "Israel Broussard",
            "Ruby Modine",
            "Charles Aitken"
          ],
          "country": "USA",
          "productionCompany": "Blumhouse Productions",
          "imdbRating": 6.6,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A college student must relive the day of her murder over and over again, in a loop that will end only when she discovers her killer's identity.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzZhY2E5NzQtMWVmNC00YmEzLTgxZDMtNjE2YmQ4ZTZiZGZjXkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_SX300.jpg"
        },
        {
          "title": "Love, Simon",
          "releaseDate": "2018-03-16T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Greg Berlanti",
          "cast": [
            "Nick Robinson",
            "Jennifer Garner",
            "Josh Duhamel",
            "Katherine Langford"
          ],
          "country": "USA",
          "productionCompany": "Temple Hill Entertainment",
          "imdbRating": 7.6,
          "awards": "10 wins & 27 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Simon Spier keeps a huge secret from his family, his friends and all of his classmates: he's gay. When that secret is threatened, Simon must face everyone and come to terms with his identity.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTMyZDdiMzUtZjcxNS00Mjc3LTljY2UtYjI4YmY5NzJlYjc1XkEyXkFqcGdeQXVyMTA5OTkwNTc@._V1_SX300.jpg"
        },
        {
          "title": "Ocean's Eight",
          "releaseDate": "2018-06-08T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "Gary Ross",
          "cast": [
            "Sandra Bullock",
            "Griffin Dunne",
            "Deidre Goodwin",
            "Daniella Rabbani"
          ],
          "country": "USA",
          "productionCompany": "Warner Bros. Pictures",
          "imdbRating": 6.9,
          "awards": "3 wins & 16 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Debbie Ocean gathers an all-female crew to attempt an impossible heist at New York City's yearly Met Gala.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_SX300.jpg"
        },
        {
          "title": "Annabelle: Creation",
          "releaseDate": "2017-08-11T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "David F. Sandberg",
          "cast": [
            "Anthony LaPaglia",
            "Samara Lee",
            "Miranda Otto",
            "Brad Greenquist"
          ],
          "country": "USA",
          "productionCompany": "Safran Company",
          "imdbRating": 6.5,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "R",
          "plot": "Twelve years after the tragic death of their little girl, a doll-maker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they become the target of the doll-maker's possessed creation, Annabelle.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_SX300.jpg"
        },
        {
          "title": "Mother!",
          "releaseDate": "2017-09-15T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Drama",
            "Horror",
            "Mystery"
          ],
          "director": "Darren Aronofsky",
          "cast": [
            "Jennifer Lawrence",
            "Javier Bardem",
            "Ed Harris",
            "Michelle Pfeiffer"
          ],
          "country": "USA",
          "productionCompany": "Paramount Pictures",
          "imdbRating": 6.6,
          "awards": "9 wins & 42 nominations.",
          "mpaaRating": "R",
          "plot": "A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_SX300.jpg"
        },
        {
          "title": "Isle of Dogs",
          "releaseDate": "2018-04-13T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Wes Anderson",
          "cast": [
            "Bryan Cranston",
            "Koyu Rankin",
            "Edward Norton",
            "Bob Balaban"
          ],
          "country": "Germany, Japan, USA, UK",
          "productionCompany": "American Empirical Pictures",
          "imdbRating": 7.9,
          "awards": "Nominated for 2 Oscars. Another 34 wins & 89 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg"
        },
        {
          "title": "Ant-Man and the Wasp",
          "releaseDate": "2018-07-06T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "Peyton Reed",
          "cast": [
            "Paul Rudd",
            "Evangeline Lilly",
            "Michael Peña",
            "Walton Goggins"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7,
          "awards": "1 win & 20 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Favourite",
          "releaseDate": "2018-12-21T05:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Biography",
            "Comedy",
            "Drama",
            "History"
          ],
          "director": "Yorgos Lanthimos",
          "cast": [
            "Olivia Colman",
            "Rachel Weisz",
            "Emma Delves",
            "Faye Daveney"
          ],
          "country": "Ireland, UK, USA",
          "productionCompany": "Film4",
          "imdbRating": 7.5,
          "awards": "Won 1 Oscar. Another 181 wins & 335 nominations.",
          "mpaaRating": "R",
          "plot": "In early 18th-century England, the status quo at the court is upset when a new servant arrives and endears herself to a frail Queen Anne.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg1NzQwMDQxNV5BMl5BanBnXkFtZTgwNDg2NDYyNjM@._V1_SX300.jpg"
        },
        {
          "title": "Dangal",
          "releaseDate": "2016-12-21T05:00:00.000Z",
          "runTime": 161,
          "genres": [
            "Action",
            "Biography",
            "Drama",
            "Sport"
          ],
          "director": "Nitesh Tiwari",
          "cast": [
            "Aamir Khan",
            "Fatima Sana Shaikh",
            "Sanya Malhotra",
            "Sakshi Tanwar"
          ],
          "country": "USA, UK, Australia, Kenya, Namibia, India",
          "productionCompany": "Aamir Khan Productions",
          "imdbRating": 8.4,
          "awards": "23 wins & 6 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg"
        },
        {
          "title": "Sicario: Day of the Soldado",
          "releaseDate": "2018-06-29T04:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Action",
            "Adventure",
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Stefano Sollima",
          "cast": [
            "Benicio Del Toro",
            "Josh Brolin",
            "Isabela Merced",
            "Jeffrey Donovan"
          ],
          "country": "USA, Mexico",
          "productionCompany": "Thunder Road Pictures",
          "imdbRating": 7.1,
          "awards": "1 win & 7 nominations.",
          "mpaaRating": "R",
          "plot": "The drug war on the U.S.-Mexico border has escalated as the cartels have begun trafficking terrorists across the US border. To fight the war, federal agent Matt Graver re-teams with the mercurial Alejandro.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTEzNjM2NTYxMjReQTJeQWpwZ15BbWU4MDU2NzAxNTUz._V1_SX300.jpg"
        },
        {
          "title": "Get Out",
          "releaseDate": "2017-02-24T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Jordan Peele",
          "cast": [
            "Daniel Kaluuya",
            "Allison Williams",
            "Catherine Keener",
            "Bradley Whitford"
          ],
          "country": "USA, Japan",
          "productionCompany": "Universal Pictures",
          "imdbRating": 7.7,
          "awards": "Won 1 Oscar. Another 147 wins & 202 nominations.",
          "mpaaRating": "R",
          "plot": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg"
        },
        {
          "title": "Three Billboards Outside Ebbing, Missouri",
          "releaseDate": "2017-12-01T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Comedy",
            "Crime",
            "Drama"
          ],
          "director": "Martin McDonagh",
          "cast": [
            "Frances McDormand",
            "Caleb Landry Jones",
            "Kerry Condon",
            "Sam Rockwell"
          ],
          "country": "UK, USA",
          "productionCompany": "Fox Searchlight",
          "imdbRating": 8.1,
          "awards": "Won 2 Oscars. Another 128 wins & 228 nominations.",
          "mpaaRating": "R",
          "plot": "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI0ODcxNzM1N15BMl5BanBnXkFtZTgwMzIwMTEwNDI@._V1_SX300.jpg"
        },
        {
          "title": "Hush",
          "releaseDate": "2016-04-08T04:00:00.000Z",
          "runTime": 82,
          "genres": [
            "Horror",
            "Thriller"
          ],
          "director": "Mike Flanagan",
          "cast": [
            "John Gallagher Jr.",
            "Kate Siegel",
            "Michael Trucco",
            "Samantha Sloyan"
          ],
          "country": "USA",
          "productionCompany": "Intrepid Pictures",
          "imdbRating": 6.6,
          "awards": "2 wins & 7 nominations.",
          "mpaaRating": "R",
          "plot": "A deaf and mute writer who retreated into the woods to live a solitary life must fight for her life in silence when a masked killer appears at her window.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOWQ4OTdlODQtMDc3Yy00MGVmLWExYjUtOGI0Yjg4MDQzNDNhXkEyXkFqcGdeQXVyNjIzMzkyMzk@._V1_SX300.jpg"
        },
        {
          "title": "Dunkirk",
          "releaseDate": "2017-07-21T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Action",
            "Drama",
            "History",
            "Thriller",
            "War"
          ],
          "director": "Christopher Nolan",
          "cast": [
            "Fionn Whitehead",
            "Damien Bonnard",
            "Aneurin Barnard",
            "Lee Armstrong"
          ],
          "country": "UK, Netherlands, France, USA",
          "productionCompany": "Warner Bros. Pictures",
          "imdbRating": 7.8,
          "awards": "Won 3 Oscars. Another 60 wins & 229 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
        },
        {
          "title": "Moonlight",
          "releaseDate": "2016-11-18T05:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Drama"
          ],
          "director": "Barry Jenkins",
          "cast": [
            "Mahershala Ali",
            "Shariff Earp",
            "Duan Sanderson",
            "Alex R. Hibbert"
          ],
          "country": "USA",
          "productionCompany": "Plan B Entertainment",
          "imdbRating": 7.4,
          "awards": "Won 3 Oscars. Another 219 wins & 290 nominations.",
          "mpaaRating": "R",
          "plot": "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg"
        },
        {
          "title": "Split",
          "releaseDate": "2017-01-20T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Horror",
            "Thriller"
          ],
          "director": "M. Night Shyamalan",
          "cast": [
            "James McAvoy",
            "Anya Taylor-Joy",
            "Betty Buckley",
            "Haley Lu Richardson"
          ],
          "country": "USA, Japan",
          "productionCompany": "Lightning Entertainment",
          "imdbRating": 7.3,
          "awards": "9 wins & 24 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg"
        },
        {
          "title": "Lady Bird",
          "releaseDate": "2017-12-01T05:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Greta Gerwig",
          "cast": [
            "Saoirse Ronan",
            "Laurie Metcalf",
            "Tracy Letts",
            "Lucas Hedges"
          ],
          "country": "USA",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 7.4,
          "awards": "Nominated for 5 Oscars. Another 117 wins & 220 nominations.",
          "mpaaRating": "R",
          "plot": "In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Mission: Impossible - Fallout",
          "releaseDate": "2018-07-27T04:00:00.000Z",
          "runTime": 147,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Christopher McQuarrie",
          "cast": [
            "Tom Cruise",
            "Henry Cavill",
            "Ving Rhames",
            "Simon Pegg"
          ],
          "country": "USA, China, France, Norway, UK",
          "productionCompany": "Bad Robot",
          "imdbRating": 7.7,
          "awards": "Nominated for 1 BAFTA Film Award. Another 22 wins & 36 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SX300.jpg"
        },
        {
          "title": "Jurassic World: Fallen Kingdom",
          "releaseDate": "2018-06-22T04:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "J.A. Bayona",
          "cast": [
            "Chris Pratt",
            "Bryce Dallas Howard",
            "Rafe Spall",
            "Justice Smith"
          ],
          "country": "USA",
          "productionCompany": "Perfect World Pictures",
          "imdbRating": 6.2,
          "awards": "4 wins & 26 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg"
        },
        {
          "title": "The Invisible Guest",
          "releaseDate": "2017-01-06T05:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Oriol Paulo",
          "cast": [
            "Mario Casas",
            "Ana Wagener",
            "Jose Coronado",
            "Bárbara Lennie"
          ],
          "country": "Spain",
          "productionCompany": "N/A",
          "imdbRating": 8.1,
          "awards": "2 wins & 3 nominations.",
          "mpaaRating": "TV-MA",
          "plot": "A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Hidden Figures",
          "releaseDate": "2017-01-06T05:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Biography",
            "Drama",
            "History"
          ],
          "director": "Theodore Melfi",
          "cast": [
            "Taraji P. Henson",
            "Octavia Spencer",
            "Janelle Monáe",
            "Kevin Costner"
          ],
          "country": "USA",
          "productionCompany": "Chernin Entertainment",
          "imdbRating": 7.8,
          "awards": "Nominated for 3 Oscars. Another 36 wins & 91 nominations.",
          "mpaaRating": "PG",
          "plot": "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_SX300.jpg"
        },
        {
          "title": "Lights Out",
          "releaseDate": "2016-07-22T04:00:00.000Z",
          "runTime": 81,
          "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "David F. Sandberg",
          "cast": [
            "Teresa Palmer",
            "Gabriel Bateman",
            "Alexander DiPersia",
            "Billy Burke"
          ],
          "country": "USA",
          "productionCompany": "Grey Matter",
          "imdbRating": 6.3,
          "awards": "3 wins & 9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Rebecca must unlock the terror behind her little brother's experiences that once tested her sanity, bringing her face to face with a supernatural spirit attached to their mother.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg1OTkxNDgyMV5BMl5BanBnXkFtZTgwMjEzNTc0ODE@._V1_SX300.jpg"
        },
        {
          "title": "The Meg",
          "releaseDate": "2018-08-10T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Jon Turteltaub",
          "cast": [
            "Jason Statham",
            "Bingbing Li",
            "Rainn Wilson",
            "Cliff Curtis"
          ],
          "country": "USA, China",
          "productionCompany": "Maeday Productions",
          "imdbRating": 5.6,
          "awards": "4 wins & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A group of scientists exploring the Marianas Trench encounter the largest marine predator that has ever existed - the Megalodon.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAxMGRmODYtM2NkYS00ZGRlLWE1MWItYjI1MzIwNjQwN2RiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Promise",
          "releaseDate": "2017-04-21T04:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "History",
            "War"
          ],
          "director": "Terry George",
          "cast": [
            "Oscar Isaac",
            "Charlotte Le Bon",
            "Christian Bale",
            "Daniel Giménez Cacho"
          ],
          "country": "Spain, USA",
          "productionCompany": "Survival Pictures",
          "imdbRating": 6.5,
          "awards": "3 wins & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Set during the last days of the Ottoman Empire, The Promise follows a love triangle between Michael, a brilliant medical student, the beautiful and sophisticated Ana, and Chris - a renowned American journalist based in Paris.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTI5NmI0N2UtOWQyOC00MDg2LWI5YWUtNWEwZTgyM2VlYThmXkEyXkFqcGdeQXVyMTk1MDM0OTc@._V1_SX300.jpg"
        },
        {
          "title": "Klaus",
          "releaseDate": "2019-11-15T05:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family"
          ],
          "director": "Sergio Pablos, Carlos Martínez López(co-director)",
          "cast": [
            "Jason Schwartzman",
            "J.K. Simmons",
            "Rashida Jones",
            "Will Sasso"
          ],
          "country": "Spain, UK, USA",
          "productionCompany": "N/A",
          "imdbRating": 8.2,
          "awards": "Nominated for 1 Oscar. Another 10 wins & 24 nominations.",
          "mpaaRating": "PG",
          "plot": "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Bumblebee",
          "releaseDate": "2018-12-21T05:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Travis Knight",
          "cast": [
            "Hailee Steinfeld",
            "Jorge Lendeborg Jr.",
            "John Cena",
            "Jason Drucker"
          ],
          "country": "China, USA",
          "productionCompany": "Tencent Pictures",
          "imdbRating": 6.8,
          "awards": "2 wins & 13 nominations.",
          "mpaaRating": "PG-13",
          "plot": "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small California beach town. On the cusp of turning 18 and trying to find her place in the world, Charlie Watson discovers Bumblebee, battle-scarred and broken.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjUwNjU5NDMyNF5BMl5BanBnXkFtZTgwNzgxNjM2NzM@._V1_SX300.jpg"
        },
        {
          "title": "Hunt for the Wilderpeople",
          "releaseDate": "2016-07-01T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Adventure",
            "Comedy",
            "Drama"
          ],
          "director": "Taika Waititi",
          "cast": [
            "Sam Neill",
            "Julian Dennison",
            "Rima Te Wiata",
            "Rachel House"
          ],
          "country": "New Zealand",
          "productionCompany": "Defender Films",
          "imdbRating": 7.9,
          "awards": "22 wins & 25 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SX300.jpg"
        },
        {
          "title": "Bad Moms",
          "releaseDate": "2016-07-29T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Comedy"
          ],
          "director": "Jon Lucas, Scott Moore",
          "cast": [
            "Mila Kunis",
            "Kathryn Hahn",
            "Kristen Bell",
            "Christina Applegate"
          ],
          "country": "USA",
          "productionCompany": "Lucas &amp; Moore",
          "imdbRating": 6.2,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "When three overworked and under-appreciated moms are pushed beyond their limits, they ditch their conventional responsibilities for a jolt of long overdue freedom, fun and comedic self-indulgence.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIwNzE5MTgwNl5BMl5BanBnXkFtZTgwNjM4OTA0OTE@._V1_SX300.jpg"
        },
        {
          "title": "Kingsman: The Golden Circle",
          "releaseDate": "2017-09-22T04:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "Matthew Vaughn",
          "cast": [
            "Taron Egerton",
            "Edward Holcroft",
            "Gordon Alexander",
            "Mark Strong"
          ],
          "country": "UK, USA",
          "productionCompany": "Cloudy",
          "imdbRating": 6.7,
          "awards": "2 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "After the Kingsman's headquarters are destroyed and the world is held hostage, an allied spy organisation in the United States is discovered. These two elite secret organisations must band together to defeat a common enemy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ3OTgzMzY4NF5BMl5BanBnXkFtZTgwOTc4OTQyMzI@._V1_SX300.jpg"
        },
        {
          "title": "Spider-Man: Into the Spider-Verse",
          "releaseDate": "2018-12-14T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Family",
            "Sci-Fi"
          ],
          "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
          "cast": [
            "Shameik Moore",
            "Jake Johnson",
            "Hailee Steinfeld",
            "Mahershala Ali"
          ],
          "country": "USA",
          "productionCompany": "Sony Pictures Animation",
          "imdbRating": 8.4,
          "awards": "Won 1 Oscar. Another 79 wins & 56 nominations.",
          "mpaaRating": "PG",
          "plot": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
        },
        {
          "title": "The Fate of the Furious",
          "releaseDate": "2017-04-14T04:00:00.000Z",
          "runTime": 136,
          "genres": [
            "Action",
            "Adventure",
            "Crime",
            "Thriller"
          ],
          "director": "F. Gary Gray",
          "cast": [
            "Vin Diesel",
            "Jason Statham",
            "Dwayne Johnson",
            "Michelle Rodriguez"
          ],
          "country": "China, USA, Japan",
          "productionCompany": "Original Film",
          "imdbRating": 6.7,
          "awards": "2 wins & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When a mysterious woman seduces Dominic Toretto into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_SX300.jpg"
        },
        {
          "title": "Mulan",
          "releaseDate": "2020-09-04T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Family",
            "Fantasy"
          ],
          "director": "Niki Caro",
          "cast": [
            "Yifei Liu",
            "Donnie Yen",
            "Li Gong",
            "Jet Li"
          ],
          "country": "USA, Canada, Hong Kong",
          "productionCompany": "Walt Disney Pictures",
          "imdbRating": 5.6,
          "awards": "Nominated for 1 BAFTA Film Award. Another 2 wins & 38 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young Chinese maiden disguises herself as a male warrior in order to save her father.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDliY2E1MjUtNzZkOS00MzJlLTgyOGEtZDg4MTI1NzZkMTBhXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_SX300.jpg"
        },
        {
          "title": "Darkest Hour",
          "releaseDate": "2017-12-22T05:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Biography",
            "Drama",
            "History",
            "War"
          ],
          "director": "Joe Wright",
          "cast": [
            "Gary Oldman",
            "Kristin Scott Thomas",
            "Ben Mendelsohn",
            "Lily James"
          ],
          "country": "UK, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.4,
          "awards": "Won 2 Oscars. Another 51 wins & 77 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In May 1940, the fate of World War II hangs on Winston Churchill, who must decide whether to negotiate with Adolf Hitler, or fight on knowing that it could mean the end of the British Empire.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTU4MjMwOTgyMV5BMl5BanBnXkFtZTgwODQzNjY2NDM@._V1_SX300.jpg"
        },
        {
          "title": "Nocturnal Animals",
          "releaseDate": "2016-12-09T05:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Drama",
            "Thriller"
          ],
          "director": "Tom Ford",
          "cast": [
            "Amy Adams",
            "Jake Gyllenhaal",
            "Michael Shannon",
            "Aaron Taylor-Johnson"
          ],
          "country": "USA",
          "productionCompany": "Focus Features",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Oscar. Another 21 wins & 150 nominations.",
          "mpaaRating": "R",
          "plot": "A wealthy art gallery owner is haunted by her ex-husband's novel, a violent thriller she interprets as a symbolic revenge tale.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYwMzMwMzgxNl5BMl5BanBnXkFtZTgwMTA0MTUzMDI@._V1_SX300.jpg"
        },
        {
          "title": "Frozen II",
          "releaseDate": "2019-11-22T05:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy",
            "Musical"
          ],
          "director": "Chris Buck, Jennifer Lee",
          "cast": [
            "Kristen Bell",
            "Idina Menzel",
            "Josh Gad",
            "Jonathan Groff"
          ],
          "country": "USA, Norway",
          "productionCompany": "Walt Disney Animation",
          "imdbRating": 6.9,
          "awards": "Nominated for 1 Oscar. Another 18 wins & 88 nominations.",
          "mpaaRating": "PG",
          "plot": "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
        },
        {
          "title": "Why Him?",
          "releaseDate": "2016-12-23T05:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Comedy"
          ],
          "director": "John Hamburg",
          "cast": [
            "Zoey Deutch",
            "James Franco",
            "Tangie Ambrose",
            "Cedric the Entertainer"
          ],
          "country": "USA, Cambodia",
          "productionCompany": "21 Laps Entertainment",
          "imdbRating": 6.2,
          "awards": "1 win.",
          "mpaaRating": "R",
          "plot": "A holiday gathering threatens to go off the rails when Ned Fleming realizes that his daughter's Silicon Valley millionaire boyfriend is about to pop the question.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDlkMDQ1NzUtNGE3OC00NmUwLWI0NjAtNDJmODUzY2NhOGIzL2ltYWdlXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SX300.jpg"
        },
        {
          "title": "Maze Runner: The Death Cure",
          "releaseDate": "2018-01-26T05:00:00.000Z",
          "runTime": 143,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Wes Ball",
          "cast": [
            "Dylan O'Brien",
            "Ki Hong Lee",
            "Kaya Scodelario",
            "Thomas Brodie-Sangster"
          ],
          "country": "USA",
          "productionCompany": "Gotham Group",
          "imdbRating": 6.3,
          "awards": "8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Young hero Thomas embarks on a mission to find a cure for a deadly disease known as \"The Flare\".",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYyNzk3MDc2NF5BMl5BanBnXkFtZTgwMDk3OTM1NDM@._V1_SX300.jpg"
        },
        {
          "title": "Gifted",
          "releaseDate": "2017-04-12T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Drama"
          ],
          "director": "Marc Webb",
          "cast": [
            "Chris Evans",
            "Mckenna Grace",
            "Lindsay Duncan",
            "Octavia Spencer"
          ],
          "country": "USA",
          "productionCompany": "FilmNation",
          "imdbRating": 7.6,
          "awards": "6 wins & 7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ2NDU3NDE0M15BMl5BanBnXkFtZTgwMjA3OTg0MDI@._V1_SX300.jpg"
        },
        {
          "title": "Neighbors 2: Sorority Rising",
          "releaseDate": "2016-05-20T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Comedy"
          ],
          "director": "Nicholas Stoller",
          "cast": [
            "Seth Rogen",
            "Zac Efron",
            "Rose Byrne",
            "Chloë Grace Moretz"
          ],
          "country": "USA, China",
          "productionCompany": "Good Universe",
          "imdbRating": 5.7,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "When their new next-door neighbors turn out to be a sorority even more debaucherous than the fraternity previously living there, Mac and Kelly team with their former enemy, Teddy, to bring the girls down.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY0NzUxMDUzN15BMl5BanBnXkFtZTgwNzI2MTY4ODE@._V1_SX300.jpg"
        },
        {
          "title": "John Wick: Chapter 2",
          "releaseDate": "2017-02-10T05:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Chad Stahelski",
          "cast": [
            "Keanu Reeves",
            "Riccardo Scamarcio",
            "Ian McShane",
            "Ruby Rose"
          ],
          "country": "USA, Italy, Hong Kong, Canada",
          "productionCompany": "Thunder Road Pictures",
          "imdbRating": 7.5,
          "awards": "4 wins & 10 nominations.",
          "mpaaRating": "R",
          "plot": "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg"
        },
        {
          "title": "Kubo and the Two Strings",
          "releaseDate": "2016-08-19T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Travis Knight",
          "cast": [
            "Art Parkinson",
            "Charlize Theron",
            "Brenda Vaccaro",
            "Cary-Hiroyuki Tagawa"
          ],
          "country": "USA, Japan",
          "productionCompany": "Laika",
          "imdbRating": 7.8,
          "awards": "Nominated for 2 Oscars. Another 33 wins & 64 nominations.",
          "mpaaRating": "PG",
          "plot": "A young boy named Kubo must locate a magical suit of armour worn by his late father in order to defeat a vengeful spirit from the past.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA2Mzg2NDMzNl5BMl5BanBnXkFtZTgwMjcwODUzOTE@._V1_SX300.jpg"
        },
        {
          "title": "The Founder",
          "releaseDate": "2017-01-20T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "John Lee Hancock",
          "cast": [
            "Michael Keaton",
            "Nick Offerman",
            "John Carroll Lynch",
            "Linda Cardellini"
          ],
          "country": "USA, Greece",
          "productionCompany": "The Weinstein Company",
          "imdbRating": 7.2,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The story of Ray Kroc, a salesman who turned two brothers' innovative fast food eatery, McDonald's, into the biggest restaurant business in the world, with a combination of ambition, persistence, and ruthlessness.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzExNDg0MDk1M15BMl5BanBnXkFtZTgwNzE1Mjg0MDI@._V1_SX300.jpg"
        },
        {
          "title": "The Witch",
          "releaseDate": "2016-02-19T05:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Drama",
            "Horror",
            "Mystery"
          ],
          "director": "Robert Eggers",
          "cast": [
            "Anya Taylor-Joy",
            "Ralph Ineson",
            "Kate Dickie",
            "Harvey Scrimshaw"
          ],
          "country": "Canada, USA",
          "productionCompany": "N/A",
          "imdbRating": 6.9,
          "awards": "43 wins & 67 nominations.",
          "mpaaRating": "R",
          "plot": "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_SX300.jpg"
        },
        {
          "title": "Molly's Game",
          "releaseDate": "2018-01-05T05:00:00.000Z",
          "runTime": 140,
          "genres": [
            "Biography",
            "Crime",
            "Drama"
          ],
          "director": "Aaron Sorkin",
          "cast": [
            "Jessica Chastain",
            "Idris Elba",
            "Kevin Costner",
            "Michael Cera"
          ],
          "country": "China, Canada, USA",
          "productionCompany": "Pascal Pictures",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Oscar. Another 7 wins & 50 nominations.",
          "mpaaRating": "R",
          "plot": "The true story of Molly Bloom, an Olympic-class skier who ran the world's most exclusive high-stakes poker game and became an FBI target.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Jason Bourne",
          "releaseDate": "2016-07-29T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Paul Greengrass",
          "cast": [
            "Matt Damon",
            "Tommy Lee Jones",
            "Alicia Vikander",
            "Vincent Cassel"
          ],
          "country": "USA, China, Spain",
          "productionCompany": "Kennedy/Marshall",
          "imdbRating": 6.6,
          "awards": "3 wins & 20 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The CIA's most dangerous former operative is drawn out of hiding to uncover more explosive truths about his past.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNGJlYjVkMjQtN2NlZC00NTJhLThmZjItMTRlZDczMmE3YmI3XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg"
        },
        {
          "title": "The Gift",
          "releaseDate": "2015-08-07T04:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Joel Edgerton",
          "cast": [
            "Jason Bateman",
            "Rebecca Hall",
            "Joel Edgerton",
            "Allison Tolman"
          ],
          "country": "USA, Australia, China",
          "productionCompany": "Blumhouse",
          "imdbRating": 7,
          "awards": "2 wins & 12 nominations.",
          "mpaaRating": "R",
          "plot": "A married couple, Simon and Robyn, run into Gordo, an old acquaintance. Things take a turn when Gordo begins to drop in unannounced at their house and inundates them with mysterious gifts.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNGFmY2UyMmYtNDY1Yi00NTIwLTk1ZDktOGM2OTQwZDk0NjU5XkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg"
        },
        {
          "title": "13 Hours",
          "releaseDate": "2016-01-15T05:00:00.000Z",
          "runTime": 144,
          "genres": [
            "Action",
            "Drama",
            "History",
            "Thriller",
            "War"
          ],
          "director": "Michael Bay",
          "cast": [
            "John Krasinski",
            "James Badge Dale",
            "Pablo Schreiber",
            "David Denman"
          ],
          "country": "USA, Malta, Morocco",
          "productionCompany": "3 Arts Entertainment",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 Oscar. Another 4 nominations.",
          "mpaaRating": "R",
          "plot": "During an attack on a U.S. compound in Libya, a security team struggles to make sense out of the chaos.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjY0OWVjMGQtNTIzZi00OGU5LWI4N2EtMGU0YzQ4OWM4ZmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Don't Breathe",
          "releaseDate": "2016-08-26T04:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Crime",
            "Horror",
            "Thriller"
          ],
          "director": "Fede Alvarez",
          "cast": [
            "Stephen Lang",
            "Jane Levy",
            "Dylan Minnette",
            "Daniel Zovatto"
          ],
          "country": "USA, Hungary",
          "productionCompany": "Screen Gems",
          "imdbRating": 7.1,
          "awards": "7 wins & 21 nominations.",
          "mpaaRating": "R",
          "plot": "Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isn't as helpless as he seems.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZGI5ZTU2M2YtZWY4MC00ZDFhLTliYTItZTk1NjdlN2NkMzg2XkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg"
        },
        {
          "title": "Avengers: Endgame",
          "releaseDate": "2019-04-26T04:00:00.000Z",
          "runTime": 181,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Sci-Fi"
          ],
          "director": "Anthony Russo, Joe Russo",
          "cast": [
            "Robert Downey Jr.",
            "Chris Evans",
            "Mark Ruffalo",
            "Chris Hemsworth"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 8.4,
          "awards": "Nominated for 1 Oscar. Another 69 wins & 110 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
        {
          "title": "Avengers: Infinity War",
          "releaseDate": "2018-04-27T04:00:00.000Z",
          "runTime": 149,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Anthony Russo, Joe Russo",
          "cast": [
            "Robert Downey Jr.",
            "Chris Hemsworth",
            "Mark Ruffalo",
            "Chris Evans"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 8.4,
          "awards": "Nominated for 1 Oscar. Another 46 wins & 75 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "title": "Captain Marvel",
          "releaseDate": "2019-03-08T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Anna Boden, Ryan Fleck",
          "cast": [
            "Brie Larson",
            "Samuel L. Jackson",
            "Ben Mendelsohn",
            "Jude Law"
          ],
          "country": "USA, Australia",
          "productionCompany": "Marvel Studios",
          "imdbRating": 6.9,
          "awards": "8 wins & 52 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
        },
        {
          "title": "Fantastic Beasts: The Crimes of Grindelwald",
          "releaseDate": "2018-11-16T05:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "David Yates",
          "cast": [
            "Johnny Depp",
            "Kevin Guthrie",
            "Carmen Ejogo",
            "Wolf Roth"
          ],
          "country": "UK, USA",
          "productionCompany": "Heyday Films",
          "imdbRating": 6.6,
          "awards": "Nominated for 2 BAFTA Film Awards. Another 3 wins & 20 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The second installment of the \"Fantastic Beasts\" series featuring the adventures of Magizoologist Newt Scamander.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYWVlMDI5N2UtZTIyMC00NjZkLWI5Y2QtODM5NGE5MzA0NmVjXkEyXkFqcGdeQXVyNzU3NjUxMzE@._V1_SX300.jpg"
        },
        {
          "title": "The Lego Batman Movie",
          "releaseDate": "2017-02-10T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Animation",
            "Action",
            "Comedy",
            "Family"
          ],
          "director": "Chris McKay",
          "cast": [
            "Will Arnett",
            "Michael Cera",
            "Rosario Dawson",
            "Ralph Fiennes"
          ],
          "country": "USA, Denmark, Australia",
          "productionCompany": "Warner Bros. Pictures",
          "imdbRating": 7.3,
          "awards": "13 wins & 68 nominations.",
          "mpaaRating": "PG",
          "plot": "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
        },
        {
          "title": "Green Room",
          "releaseDate": "2016-05-13T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Horror",
            "Thriller"
          ],
          "director": "Jeremy Saulnier",
          "cast": [
            "Anton Yelchin",
            "Joe Cole",
            "Alia Shawkat",
            "Callum Turner"
          ],
          "country": "USA",
          "productionCompany": "Broad Green Pictures",
          "imdbRating": 7,
          "awards": "8 wins & 25 nominations.",
          "mpaaRating": "R",
          "plot": "A punk rock band is forced to fight for survival after witnessing a murder at a neo-Nazi skinhead bar.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjU1ODQ5NzA0N15BMl5BanBnXkFtZTgwMDg5MTA5NzE@._V1_SX300.jpg"
        },
        {
          "title": "The Shallows",
          "releaseDate": "2016-06-24T04:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Action",
            "Drama",
            "Horror",
            "Thriller"
          ],
          "director": "Jaume Collet-Serra",
          "cast": [
            "Blake Lively",
            "Óscar Jaenada",
            "Angelo Josue Lozano Corzo",
            "Joseph Salas"
          ],
          "country": "USA",
          "productionCompany": "Weimaraner Republic Pictures",
          "imdbRating": 6.3,
          "awards": "1 win & 15 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A mere 200 yards from shore, surfer Nancy is attacked by a great white shark, with her short journey to safety becoming the ultimate contest of wills.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA1MTA4MzU4Ml5BMl5BanBnXkFtZTgwNjUxNjczODE@._V1_SX300.jpg"
        },
        {
          "title": "Maze Runner: The Scorch Trials",
          "releaseDate": "2015-09-18T04:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Wes Ball",
          "cast": [
            "Dylan O'Brien",
            "Ki Hong Lee",
            "Kaya Scodelario",
            "Thomas Brodie-Sangster"
          ],
          "country": "USA",
          "productionCompany": "Gotham Group",
          "imdbRating": 6.3,
          "awards": "2 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After having escaped the Maze, the Gladers now face a new set of challenges on the open roads of a desolate landscape filled with unimaginable obstacles.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE3MDU2NzQyMl5BMl5BanBnXkFtZTgwMzQxMDQ3NTE@._V1_SX300.jpg"
        },
        {
          "title": "Swiss Army Man",
          "releaseDate": "2016-07-01T04:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Comedy",
            "Drama",
            "Fantasy",
            "Romance"
          ],
          "director": "Dan Kwan, Daniel Scheinert",
          "cast": [
            "Paul Dano",
            "Daniel Radcliffe",
            "Mary Elizabeth Winstead",
            "Antonia Ribero"
          ],
          "country": "USA, Sweden",
          "productionCompany": "Blackbird Productions",
          "imdbRating": 7,
          "awards": "8 wins & 30 nominations.",
          "mpaaRating": "R",
          "plot": "A hopeless man stranded on a deserted island befriends a dead body, and together they go on a surreal journey to get home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk0OTEyMjM1OF5BMl5BanBnXkFtZTgwMzMzODM4ODE@._V1_SX300.jpg"
        },
        {
          "title": "Manchester by the Sea",
          "releaseDate": "2016-12-16T05:00:00.000Z",
          "runTime": 137,
          "genres": [
            "Drama"
          ],
          "director": "Kenneth Lonergan",
          "cast": [
            "Casey Affleck",
            "Ben O'Brien",
            "Kyle Chandler",
            "Richard Donelly"
          ],
          "country": "USA",
          "productionCompany": "Roadside Attractions",
          "imdbRating": 7.8,
          "awards": "Won 2 Oscars. Another 127 wins & 263 nominations.",
          "mpaaRating": "R",
          "plot": "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Handmaiden",
          "releaseDate": "2016-06-01T04:00:00.000Z",
          "runTime": 145,
          "genres": [
            "Drama",
            "Romance",
            "Thriller"
          ],
          "director": "Chan-wook Park",
          "cast": [
            "Kim Tae-ri",
            "Yong-nyeo Lee",
            "Min-chae Yoo",
            "Dong-hwi Lee"
          ],
          "country": "South Korea",
          "productionCompany": "Moho Film",
          "imdbRating": 8.1,
          "awards": "Won 1 BAFTA Film Award. Another 66 wins & 106 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Okja",
          "releaseDate": "2017-06-28T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Sci-Fi"
          ],
          "director": "Bong Joon Ho",
          "cast": [
            "Tilda Swinton",
            "Sheena Kamal",
            "Michael Mitton",
            "Colm Hill"
          ],
          "country": "South Korea, USA",
          "productionCompany": "Kate Street Picture Company",
          "imdbRating": 7.3,
          "awards": "7 wins & 21 nominations.",
          "mpaaRating": "TV-MA",
          "plot": "A young girl risks everything to prevent a powerful, multinational company from kidnapping her best friend - a fascinating beast named Okja.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQxMTcxNDgxN15BMl5BanBnXkFtZTgwOTczNTIzMjI@._V1_SX300.jpg"
        },
        {
          "title": "Guardians of the Galaxy Vol. 2",
          "releaseDate": "2017-05-05T04:00:00.000Z",
          "runTime": 136,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "James Gunn",
          "cast": [
            "Chris Pratt",
            "Zoe Saldana",
            "Dave Bautista",
            "Vin Diesel"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 15 wins & 57 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        },
        {
          "title": "Baby Driver",
          "releaseDate": "2017-06-28T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Music",
            "Thriller"
          ],
          "director": "Edgar Wright",
          "cast": [
            "Ansel Elgort",
            "Jon Bernthal",
            "Jon Hamm",
            "Eiza González"
          ],
          "country": "UK, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.6,
          "awards": "Nominated for 3 Oscars. Another 42 wins & 62 nominations.",
          "mpaaRating": "R",
          "plot": "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SX300.jpg"
        },
        {
          "title": "The Boss Baby",
          "releaseDate": "2017-03-31T04:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Tom McGrath",
          "cast": [
            "Alec Baldwin",
            "Steve Buscemi",
            "Jimmy Kimmel",
            "Lisa Kudrow"
          ],
          "country": "USA",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 6.3,
          "awards": "Nominated for 1 Oscar. Another 4 wins & 20 nominations.",
          "mpaaRating": "PG",
          "plot": "A suit-wearing, briefcase-carrying baby pairs up with his 7-year old brother to stop the dastardly plot of the CEO of Puppy Co.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_SX300.jpg"
        },
        {
          "title": "The Predator",
          "releaseDate": "2018-09-14T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Shane Black",
          "cast": [
            "Boyd Holbrook",
            "Trevante Rhodes",
            "Jacob Tremblay",
            "Keegan-Michael Key"
          ],
          "country": "USA, Canada",
          "productionCompany": "Davis Entertainment",
          "imdbRating": 5.3,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "R",
          "plot": "When a young boy accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled scientist can prevent the end of the human race.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjZjN2QzNjYtYWZkMi00OWQ4LWFjNDctYjcyMjM2ZDNjOWMyXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
        },
        {
          "title": "The Nice Guys",
          "releaseDate": "2016-05-20T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "Shane Black",
          "cast": [
            "Russell Crowe",
            "Ryan Gosling",
            "Angourie Rice",
            "Matt Bomer"
          ],
          "country": "USA",
          "productionCompany": "Silver Pictures",
          "imdbRating": 7.4,
          "awards": "9 wins & 34 nominations.",
          "mpaaRating": "R",
          "plot": "In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODNlNmU4MGItMzQwZi00NGQyLWEyZWItYjFkNmI0NWI4NjBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "La La Land",
          "releaseDate": "2016-12-25T05:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Comedy",
            "Drama",
            "Music",
            "Musical",
            "Romance"
          ],
          "director": "Damien Chazelle",
          "cast": [
            "Ryan Gosling",
            "Emma Stone",
            "Amiee Conn",
            "Terry Walters"
          ],
          "country": "USA, Hong Kong",
          "productionCompany": "Summit Entertainment",
          "imdbRating": 8,
          "awards": "Won 6 Oscars. Another 235 wins & 287 nominations.",
          "mpaaRating": "PG-13",
          "plot": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg"
        },
        {
          "title": "Solo: A Star Wars Story",
          "releaseDate": "2018-05-25T04:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Ron Howard",
          "cast": [
            "Alden Ehrenreich",
            "Joonas Suotamo",
            "Woody Harrelson",
            "Emilia Clarke"
          ],
          "country": "USA",
          "productionCompany": "Lucasfilm Ltd.",
          "imdbRating": 6.9,
          "awards": "Nominated for 1 Oscar. Another 6 wins & 24 nominations.",
          "mpaaRating": "PG-13",
          "plot": "During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg"
        },
        {
          "title": "Snowden",
          "releaseDate": "2016-09-16T04:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Biography",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Oliver Stone",
          "cast": [
            "Melissa Leo",
            "Zachary Quinto",
            "Joseph Gordon-Levitt",
            "Jaymes Butler"
          ],
          "country": "UK, France, Germany, USA",
          "productionCompany": "Onda Entertainment",
          "imdbRating": 7.3,
          "awards": "4 wins & 7 nominations.",
          "mpaaRating": "R",
          "plot": "The NSA's illegal surveillance techniques are leaked to the public by one of the agency's employees, Edward Snowden, in the form of thousands of classified documents distributed to the press.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzYzNzgzOF5BMl5BanBnXkFtZTgwOTg4NzQ4OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Equalizer 2",
          "releaseDate": "2018-07-20T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Antoine Fuqua",
          "cast": [
            "Denzel Washington",
            "Pedro Pascal",
            "Ashton Sanders",
            "Orson Bean"
          ],
          "country": "USA",
          "productionCompany": "Escape Artists",
          "imdbRating": 6.7,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "R",
          "plot": "Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_SX300.jpg"
        },
        {
          "title": "Rogue One: A Star Wars Story",
          "releaseDate": "2016-12-16T05:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Gareth Edwards",
          "cast": [
            "Felicity Jones",
            "Diego Luna",
            "Alan Tudyk",
            "Donnie Yen"
          ],
          "country": "USA",
          "productionCompany": "Lucasfilm Ltd.",
          "imdbRating": 7.8,
          "awards": "Nominated for 2 Oscars. Another 24 wins & 80 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the plans for the Death Star.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
        },
        {
          "title": "Lion",
          "releaseDate": "2017-01-06T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "Garth Davis",
          "cast": [
            "Sunny Pawar",
            "Abhishek Bharate",
            "Priyanka Bose",
            "Khushi Solanki"
          ],
          "country": "UK, Australia, USA, India",
          "productionCompany": "See-Saw Films",
          "imdbRating": 8,
          "awards": "Nominated for 6 Oscars. Another 58 wins & 103 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A five-year-old Indian boy is adopted by an Australian couple after getting lost hundreds of kilometers from home. 25 years later, he sets out to find his lost family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA3NjkzNjg2MF5BMl5BanBnXkFtZTgwMDkyMzgzMDI@._V1_SX300.jpg"
        },
        {
          "title": "Godzilla: King of the Monsters",
          "releaseDate": "2019-05-31T04:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Michael Dougherty",
          "cast": [
            "Kyle Chandler",
            "Vera Farmiga",
            "Millie Bobby Brown",
            "Ken Watanabe"
          ],
          "country": "USA, Japan, China, Canada",
          "productionCompany": "Warner Bros.",
          "imdbRating": 6,
          "awards": "6 wins & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Kong: Skull Island",
          "releaseDate": "2017-03-10T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Jordan Vogt-Roberts",
          "cast": [
            "Tom Hiddleston",
            "Samuel L. Jackson",
            "Brie Larson",
            "John C. Reilly"
          ],
          "country": "USA, China",
          "productionCompany": "Legendary Pictures",
          "imdbRating": 6.6,
          "awards": "Nominated for 1 Oscar. Another 1 win & 20 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After the Vietnam war, a team of scientists explores an uncharted island in the Pacific, venturing into the domain of the mighty Kong, and must fight to escape a primal Eden.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZDg0OGM1NWEtNDEwOC00OTE2LTliZWEtNzg1MTZkNjFlMmNhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg"
        },
        {
          "title": "Power Rangers",
          "releaseDate": "2017-03-24T04:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Dean Israelite",
          "cast": [
            "Dacre Montgomery",
            "Naomi Scott",
            "RJ Cyler",
            "Ludi Lin"
          ],
          "country": "USA, Hong Kong, Japan, Mexico, Canada, New Zealand",
          "productionCompany": "Saban Brands",
          "imdbRating": 5.9,
          "awards": "6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A group of high-school students, who are infused with unique superpowers, harness their abilities in order to save the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU1MTkxNzc5NF5BMl5BanBnXkFtZTgwOTM2Mzk3MTI@._V1_SX300.jpg"
        },
        {
          "title": "Bridge of Spies",
          "releaseDate": "2015-10-16T04:00:00.000Z",
          "runTime": 142,
          "genres": [
            "Drama",
            "History",
            "Thriller"
          ],
          "director": "Steven Spielberg",
          "cast": [
            "Mark Rylance",
            "Domenick Lombardozzi",
            "Victor Verhaeghe",
            "Mark Fichera"
          ],
          "country": "USA, Germany, India",
          "productionCompany": "Afterworks Limited",
          "imdbRating": 7.6,
          "awards": "Won 1 Oscar. Another 29 wins & 102 nominations.",
          "mpaaRating": "PG-13",
          "plot": "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIxOTI0MjU5NV5BMl5BanBnXkFtZTgwNzM4OTk4NTE@._V1_SX300.jpg"
        },
        {
          "title": "The Martian",
          "releaseDate": "2015-10-02T04:00:00.000Z",
          "runTime": 144,
          "genres": [
            "Adventure",
            "Drama",
            "Sci-Fi"
          ],
          "director": "Ridley Scott",
          "cast": [
            "Matt Damon",
            "Jessica Chastain",
            "Kristen Wiig",
            "Jeff Daniels"
          ],
          "country": "UK, USA, Hungary, Jordan",
          "productionCompany": "20th Century Fox",
          "imdbRating": 8,
          "awards": "Nominated for 7 Oscars. Another 38 wins & 190 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg"
        },
        {
          "title": "Allied",
          "releaseDate": "2016-11-23T05:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Drama",
            "Romance",
            "Thriller",
            "War"
          ],
          "director": "Robert Zemeckis",
          "cast": [
            "Brad Pitt",
            "Vincent Ebrahim",
            "Xavier de Guillebon",
            "Marion Cotillard"
          ],
          "country": "UK, USA",
          "productionCompany": "GK Films",
          "imdbRating": 7.1,
          "awards": "Nominated for 1 Oscar. Another 1 win & 10 nominations.",
          "mpaaRating": "R",
          "plot": "In 1942, a Canadian intelligence officer in North Africa encounters a female French Resistance fighter on a deadly mission behind enemy lines. When they reunite in London, their relationship is tested by the pressures of war.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZWEyMzg4ZWUtYmZhMC00Yjk2LWEyYjktODVmN2M3YTA2ZmNjXkEyXkFqcGdeQXVyNjQ2Mjg3OTI@._V1_SX300.jpg"
        },
        {
          "title": "The Girl on the Train",
          "releaseDate": "2016-10-07T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Tate Taylor",
          "cast": [
            "Emily Blunt",
            "Haley Bennett",
            "Rebecca Ferguson",
            "Justin Theroux"
          ],
          "country": "USA, India",
          "productionCompany": "Sony Classical",
          "imdbRating": 6.5,
          "awards": "Nominated for 1 BAFTA Film Award. Another 4 wins & 12 nominations.",
          "mpaaRating": "R",
          "plot": "A divorcee becomes entangled in a missing persons investigation that promises to send shockwaves throughout her life.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzFlMjA0ZmUtZWI0Mi00ZGJkLTlmMmYtZmE1ODZiMjhjMGM0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Incredibles 2",
          "releaseDate": "2018-06-15T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Comedy",
            "Family",
            "Sci-Fi"
          ],
          "director": "Brad Bird",
          "cast": [
            "Craig T. Nelson",
            "Holly Hunter",
            "Sarah Vowell",
            "Huck Milner"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 12 wins & 75 nominations.",
          "mpaaRating": "PG",
          "plot": "The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg"
        },
        {
          "title": "Legend",
          "releaseDate": "2015-11-20T05:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Biography",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Brian Helgeland",
          "cast": [
            "Paul Anderson",
            "Tom Hardy",
            "Christopher Eccleston",
            "Joshua Hill"
          ],
          "country": "UK, France, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 6.9,
          "awards": "6 wins & 11 nominations.",
          "mpaaRating": "R",
          "plot": "Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE0MjkyODQ3NF5BMl5BanBnXkFtZTgwNDM1OTk1NjE@._V1_SX300.jpg"
        },
        {
          "title": "The Visit",
          "releaseDate": "2015-09-11T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "M. Night Shyamalan",
          "cast": [
            "Olivia DeJonge",
            "Ed Oxenbould",
            "Deanna Dunagan",
            "Peter McRobbie"
          ],
          "country": "USA",
          "productionCompany": "Blinding Edge Pictures",
          "imdbRating": 6.2,
          "awards": "1 win & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two siblings become increasingly frightened by their grandparents' disturbing behavior while visiting them on vacation.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg3OTM2OTc5MV5BMl5BanBnXkFtZTgwMjMxNDM0NTE@._V1_SX300.jpg"
        },
        {
          "title": "Captain Fantastic",
          "releaseDate": "2016-07-29T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Matt Ross",
          "cast": [
            "Viggo Mortensen",
            "George MacKay",
            "Samantha Isler",
            "Annalise Basso"
          ],
          "country": "USA",
          "productionCompany": "Electric City Entertainment",
          "imdbRating": 7.9,
          "awards": "Nominated for 1 Oscar. Another 15 wins & 49 nominations.",
          "mpaaRating": "R",
          "plot": "In the forests of the Pacific Northwest, a father devoted to raising his six kids with a rigorous physical and intellectual education is forced to leave his paradise and enter the world, challenging his idea of what it means to be a parent.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_SX300.jpg"
        },
        {
          "title": "American Made",
          "releaseDate": "2017-09-29T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Drama"
          ],
          "director": "Doug Liman",
          "cast": [
            "Tom Cruise",
            "Domhnall Gleeson",
            "Sarah Wright",
            "Jesse Plemons"
          ],
          "country": "USA, Japan, Colombia",
          "productionCompany": "Hercules Film Fund",
          "imdbRating": 7.2,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "The story of Barry Seal, an American pilot who became a drug-runner for the CIA in the 1980s in a clandestine operation that would be exposed as the Iran-Contra Affair.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUxNzUwMjk1Nl5BMl5BanBnXkFtZTgwNDkwODI1MjI@._V1_SX300.jpg"
        },
        {
          "title": "Nerve",
          "releaseDate": "2016-07-27T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Adventure",
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Henry Joost, Ariel Schulman",
          "cast": [
            "Emma Roberts",
            "Dave Franco",
            "Emily Meade",
            "Miles Heizer"
          ],
          "country": "USA",
          "productionCompany": "Allison Shearmur",
          "imdbRating": 6.5,
          "awards": "5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A high school senior finds herself immersed in an online game of truth or dare, where her every move starts to become manipulated by an anonymous community of \"watchers.\"",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUzOTg1OTM4NV5BMl5BanBnXkFtZTgwMTg2Mjg0OTE@._V1_SX300.jpg"
        },
        {
          "title": "Moana",
          "releaseDate": "2016-11-23T05:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy",
            "Musical"
          ],
          "director": "Ron Clements, John Musker, Don Hall(co-director), Chris Williams(co-director)",
          "cast": [
            "Auli'i Cravalho",
            "Dwayne Johnson",
            "Rachel House",
            "Temuera Morrison"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Animation Studios",
          "imdbRating": 7.6,
          "awards": "Nominated for 2 Oscars. Another 20 wins & 88 nominations.",
          "mpaaRating": "PG",
          "plot": "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg"
        },
        {
          "title": "The Disaster Artist",
          "releaseDate": "2017-12-08T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Biography",
            "Comedy",
            "Drama"
          ],
          "director": "James Franco",
          "cast": [
            "Dave Franco",
            "James Franco",
            "Seth Rogen",
            "Ari Graynor"
          ],
          "country": "USA",
          "productionCompany": "Rabbit Bandini Productions",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Oscar. Another 31 wins & 79 nominations.",
          "mpaaRating": "R",
          "plot": "When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGNkMzliMGMtMDI5Ni00OTZkLTgyMTYtNzk5ZTY1NjVhYjVmXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg"
        },
        {
          "title": "Thor: Ragnarok",
          "releaseDate": "2017-11-03T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Taika Waititi",
          "cast": [
            "Chris Hemsworth",
            "Tom Hiddleston",
            "Cate Blanchett",
            "Idris Elba"
          ],
          "country": "USA, Australia",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7.9,
          "awards": "6 wins & 50 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"
        },
        {
          "title": "Captain America: Civil War",
          "releaseDate": "2016-05-06T04:00:00.000Z",
          "runTime": 147,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Anthony Russo, Joe Russo",
          "cast": [
            "Chris Evans",
            "Robert Downey Jr.",
            "Scarlett Johansson",
            "Sebastian Stan"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7.8,
          "awards": "16 wins & 72 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "title": "The Walk",
          "releaseDate": "2015-10-09T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Adventure",
            "Biography",
            "Drama"
          ],
          "director": "Robert Zemeckis",
          "cast": [
            "Joseph Gordon-Levitt",
            "Guillaume Baillargeon",
            "Émilie Leclerc",
            "Mark Trafford"
          ],
          "country": "USA",
          "productionCompany": "ImageMovers",
          "imdbRating": 7.3,
          "awards": "3 wins & 17 nominations.",
          "mpaaRating": "PG",
          "plot": "In 1974, high-wire artist Philippe Petit recruits a team of people to help him realize his dream: to walk the immense void between the World Trade Center towers.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTY4MzA4Mzc5Nl5BMl5BanBnXkFtZTgwNDIzMzk5NjE@._V1_SX300.jpg"
        },
        {
          "title": "Sing",
          "releaseDate": "2016-12-21T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Animation",
            "Comedy",
            "Family",
            "Musical"
          ],
          "director": "Garth Jennings, Christophe Lourdelet(co-director)",
          "cast": [
            "Matthew McConaughey",
            "Reese Witherspoon",
            "Seth MacFarlane",
            "Scarlett Johansson"
          ],
          "country": "USA, Japan, France",
          "productionCompany": "Chris Meledandri",
          "imdbRating": 7.1,
          "awards": "Nominated for 2 Golden Globes. Another 3 wins & 23 nominations.",
          "mpaaRating": "PG",
          "plot": "In a city of humanoid animals, a hustling theater impresario's attempt to save his theater with a singing competition becomes grander than he anticipates even as its finalists find that their lives will never be the same.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_SX300.jpg"
        },
        {
          "title": "Despicable Me 3",
          "releaseDate": "2017-06-30T04:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Kyle Balda, Pierre Coffin, Eric Guillon(co-director)",
          "cast": [
            "Steve Carell",
            "Kristen Wiig",
            "Trey Parker",
            "Miranda Cosgrove"
          ],
          "country": "USA, France, Japan",
          "productionCompany": "Chris Meledandri",
          "imdbRating": 6.3,
          "awards": "33 nominations.",
          "mpaaRating": "PG",
          "plot": "Gru meets his long-lost, charming, cheerful, and more successful twin brother Dru, who wants to team up with him for one last criminal heist.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjUyNzQ2MTg3Ml5BMl5BanBnXkFtZTgwNzE4NDM3MTI@._V1_SX300.jpg"
        },
        {
          "title": "The Lobster",
          "releaseDate": "2015-10-16T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Yorgos Lanthimos",
          "cast": [
            "Jacqueline Abrahams",
            "Roger Ashton-Griffiths",
            "Jessica Barden",
            "Olivia Colman"
          ],
          "country": "Ireland, UK, Greece, France, Netherlands, USA",
          "productionCompany": "Element Pictures",
          "imdbRating": 7.2,
          "awards": "Nominated for 1 Oscar. Another 34 wins & 82 nominations.",
          "mpaaRating": "R",
          "plot": "In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SX300.jpg"
        },
        {
          "title": "The Hateful Eight",
          "releaseDate": "2015-12-30T05:00:00.000Z",
          "runTime": 168,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller",
            "Western"
          ],
          "director": "Quentin Tarantino",
          "cast": [
            "Samuel L. Jackson",
            "Kurt Russell",
            "Jennifer Jason Leigh",
            "Walton Goggins"
          ],
          "country": "USA",
          "productionCompany": "A Band Apart",
          "imdbRating": 7.8,
          "awards": "Won 1 Oscar. Another 41 wins & 116 nominations.",
          "mpaaRating": "R",
          "plot": "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg"
        },
        {
          "title": "War for the Planet of the Apes",
          "releaseDate": "2017-07-14T04:00:00.000Z",
          "runTime": 140,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Matt Reeves",
          "cast": [
            "Andy Serkis",
            "Woody Harrelson",
            "Steve Zahn",
            "Karin Konoval"
          ],
          "country": "USA, Canada, New Zealand",
          "productionCompany": "20th Century Fox",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Oscar. Another 27 wins & 64 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg"
        },
        {
          "title": "What We Do in the Shadows",
          "releaseDate": "2015-02-13T05:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Comedy",
            "Horror"
          ],
          "director": "Jemaine Clement, Taika Waititi",
          "cast": [
            "Jemaine Clement",
            "Taika Waititi",
            "Jonny Brugh",
            "Cori Gonzalez-Macuer"
          ],
          "country": "New Zealand",
          "productionCompany": "Unison Films",
          "imdbRating": 7.7,
          "awards": "26 wins & 18 nominations.",
          "mpaaRating": "R",
          "plot": "Viago, Deacon and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, trying to get into nightclubs and overcoming flatmate conflicts.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg"
        },
        {
          "title": "Allegiant",
          "releaseDate": "2016-03-18T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Action",
            "Adventure",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Robert Schwentke",
          "cast": [
            "Shailene Woodley",
            "Theo James",
            "Naomi Watts",
            "Octavia Spencer"
          ],
          "country": "USA",
          "productionCompany": "Red Wagon Entertainment",
          "imdbRating": 5.7,
          "awards": "3 wins & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago, to finally discover the shocking truth of the world around them.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjk2OTc5YzQtMjAwMS00YWY4LTk1ZWItOTgyMmRkMGU4ZmY1XkEyXkFqcGdeQXVyMzQ1MzUwMTE@._V1_SX300.jpg"
        },
        {
          "title": "Murder on the Orient Express",
          "releaseDate": "2017-11-10T05:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Crime",
            "Drama",
            "Mystery"
          ],
          "director": "Kenneth Branagh",
          "cast": [
            "Paapa Essiedu",
            "Yassine Zeroual",
            "Asan N'Jie",
            "Michael Rouse"
          ],
          "country": "Malta, USA",
          "productionCompany": "Kinberg Genre",
          "imdbRating": 6.5,
          "awards": "1 win & 24 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When a murder occurs on the train on which he's travelling, celebrated detective Hercule Poirot is recruited to solve the case.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAxNDkxODIyMDZeQTJeQWpwZ15BbWU4MDQ2Mjg4NDIy._V1_SX300.jpg"
        },
        {
          "title": "Sicario",
          "releaseDate": "2015-10-02T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Denis Villeneuve",
          "cast": [
            "Emily Blunt",
            "Benicio Del Toro",
            "Josh Brolin",
            "Victor Garber"
          ],
          "country": "USA, Mexico, Hong Kong",
          "productionCompany": "Black Label Media",
          "imdbRating": 7.6,
          "awards": "Nominated for 3 Oscars. Another 15 wins & 153 nominations.",
          "mpaaRating": "R",
          "plot": "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NjM3NTk1M15BMl5BanBnXkFtZTgwMzg1MzU2NjE@._V1_SX300.jpg"
        },
        {
          "title": "Jack Reacher: Never Go Back",
          "releaseDate": "2016-10-21T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Edward Zwick",
          "cast": [
            "Tom Cruise",
            "Cobie Smulders",
            "Aldis Hodge",
            "Danika Yarosh"
          ],
          "country": "China, USA",
          "productionCompany": "Paramount Pictures",
          "imdbRating": 6.1,
          "awards": "1 win.",
          "mpaaRating": "PG-13",
          "plot": "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name while on the run as a fugitive from the law.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODQ3ODQ3NDI4NV5BMl5BanBnXkFtZTgwMDY1Mzk5OTE@._V1_SX300.jpg"
        },
        {
          "title": "X-Men: Apocalypse",
          "releaseDate": "2016-05-27T04:00:00.000Z",
          "runTime": 144,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Bryan Singer",
          "cast": [
            "James McAvoy",
            "Michael Fassbender",
            "Jennifer Lawrence",
            "Nicholas Hoult"
          ],
          "country": "USA",
          "productionCompany": "Bad Hat Harry",
          "imdbRating": 6.9,
          "awards": "1 win & 19 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In the 1980s the X-Men must defeat an ancient all-powerful mutant, En Sabah Nur, who intends to thrive through bringing destruction to the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg"
        },
        {
          "title": "Transformers: The Last Knight",
          "releaseDate": "2017-06-21T04:00:00.000Z",
          "runTime": 154,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Michael Bay",
          "cast": [
            "Mark Wahlberg",
            "Anthony Hopkins",
            "Josh Duhamel",
            "Laura Haddock"
          ],
          "country": "USA, China, Canada",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 5.2,
          "awards": "4 wins & 19 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A deadly threat from Earth's history reappears and a hunt for a lost artifact takes place between Autobots and Decepticons, while Optimus Prime encounters his creator in space.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_SX300.jpg"
        },
        {
          "title": "Annabelle",
          "releaseDate": "2014-10-03T04:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "John R. Leonetti",
          "cast": [
            "Annabelle Wallis",
            "Ward Horton",
            "Tony Amendola",
            "Alfre Woodard"
          ],
          "country": "USA",
          "productionCompany": "Atomic Monster",
          "imdbRating": 5.4,
          "awards": "3 wins & 7 nominations.",
          "mpaaRating": "R",
          "plot": "A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Still Alice",
          "releaseDate": "2015-02-20T05:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Drama"
          ],
          "director": "Richard Glatzer, Wash Westmoreland",
          "cast": [
            "Julianne Moore",
            "Kate Bosworth",
            "Shane McRae",
            "Hunter Parrish"
          ],
          "country": "USA, UK, France",
          "productionCompany": "Shriver Films",
          "imdbRating": 7.5,
          "awards": "Won 1 Oscar. Another 32 wins & 35 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A linguistics professor and her family find their bonds tested when she is diagnosed with Alzheimer's Disease.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIzNzAxNjY1Nl5BMl5BanBnXkFtZTgwMDg4ODQxMzE@._V1_SX300.jpg"
        },
        {
          "title": "Logan",
          "releaseDate": "2017-03-03T05:00:00.000Z",
          "runTime": 137,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "James Mangold",
          "cast": [
            "Hugh Jackman",
            "Patrick Stewart",
            "Dafne Keen",
            "Boyd Holbrook"
          ],
          "country": "USA",
          "productionCompany": "Marvel Entertainment",
          "imdbRating": 8.1,
          "awards": "Nominated for 1 Oscar. Another 26 wins & 74 nominations.",
          "mpaaRating": "R",
          "plot": "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
        },
        {
          "title": "London Has Fallen",
          "releaseDate": "2016-03-04T05:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Babak Najafi",
          "cast": [
            "Alon Aboutboul",
            "Waleed Zuaiter",
            "Adel Bencherif",
            "Mehdi Dehbi"
          ],
          "country": "UK, Bulgaria, USA",
          "productionCompany": "Millennium Films",
          "imdbRating": 5.9,
          "awards": "1 win & 2 nominations.",
          "mpaaRating": "R",
          "plot": "In London for the Prime Minister's funeral, Mike Banning is caught up in a plot to assassinate all the attending world leaders.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY1ODY2MTgwM15BMl5BanBnXkFtZTgwOTY3Nzc3NzE@._V1_SX300.jpg"
        },
        {
          "title": "The Autopsy of Jane Doe",
          "releaseDate": "2016-12-21T05:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "André Øvredal",
          "cast": [
            "Brian Cox",
            "Emile Hirsch",
            "Ophelia Lovibond",
            "Michael McElhatton"
          ],
          "country": "UK",
          "productionCompany": "Impostor Pictures",
          "imdbRating": 6.8,
          "awards": "8 wins & 10 nominations.",
          "mpaaRating": "R",
          "plot": "A father and son, both coroners, are pulled into a complex mystery while attempting to identify the body of a young woman, who was apparently harboring dark secrets.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA2MTEzMzkzM15BMl5BanBnXkFtZTgwMjM2MTM5MDI@._V1_SX300.jpg"
        },
        {
          "title": "Little Women",
          "releaseDate": "2019-12-25T05:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Greta Gerwig",
          "cast": [
            "Saoirse Ronan",
            "Emma Watson",
            "Florence Pugh",
            "Eliza Scanlen"
          ],
          "country": "USA",
          "productionCompany": "Columbia Pictures",
          "imdbRating": 7.8,
          "awards": "Won 1 Oscar. Another 75 wins & 216 nominations.",
          "mpaaRating": "PG",
          "plot": "Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms.",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Sully",
          "releaseDate": "2016-09-09T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "Clint Eastwood",
          "cast": [
            "Tom Hanks",
            "Aaron Eckhart",
            "Valerie Mahaffey",
            "Delphi Harrington"
          ],
          "country": "USA",
          "productionCompany": "IMAX Corporation",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Oscar. Another 14 wins & 35 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The story of Chesley \"Sully\" Sullenberger (Tom Hanks), an American pilot who became a hero after landing his damaged plane on the Hudson River in order to save the flight's passengers and crew.",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2NmZDAwM2QtZmFiMS00OTJlLTgxMTItZDMyZmVhYjE1MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "It Follows",
          "releaseDate": "2015-03-13T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "David Robert Mitchell",
          "cast": [
            "Bailey Spry",
            "Carollette Phillips",
            "Loren Bass",
            "Keir Gilchrist"
          ],
          "country": "USA",
          "productionCompany": "Northern Lights Films",
          "imdbRating": 6.8,
          "awards": "25 wins & 42 nominations.",
          "mpaaRating": "R",
          "plot": "A young woman is followed by an unknown supernatural force after a sexual encounter.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMmU0MjBlYzYtZWY0MC00MjliLWI3ZmUtMzhlZDVjMWVmYWY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Fantastic Beasts and Where to Find Them",
          "releaseDate": "2016-11-18T05:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "David Yates",
          "cast": [
            "Eddie Redmayne",
            "Sam Redford",
            "Scott Goldman",
            "Tim Bentinck"
          ],
          "country": "UK, USA",
          "productionCompany": "Heyday Films",
          "imdbRating": 7.3,
          "awards": "Won 1 Oscar. Another 14 wins & 54 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_SX300.jpg"
        },
        {
          "title": "Room",
          "releaseDate": "2016-01-22T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Drama",
            "Thriller"
          ],
          "director": "Lenny Abrahamson",
          "cast": [
            "Brie Larson",
            "Jacob Tremblay",
            "Sean Bridgers",
            "Wendy Crewson"
          ],
          "country": "Canada, Ireland, UK, USA",
          "productionCompany": "Element Pictures",
          "imdbRating": 8.1,
          "awards": "Won 1 Oscar. Another 104 wins & 140 nominations.",
          "mpaaRating": "R",
          "plot": "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SX300.jpg"
        },
        {
          "title": "Trainwreck",
          "releaseDate": "2015-07-17T04:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Judd Apatow",
          "cast": [
            "Colin Quinn",
            "Devin Fabry",
            "Carla Oudin",
            "Amy Schumer"
          ],
          "country": "USA, Japan",
          "productionCompany": "Apatow Productions",
          "imdbRating": 6.2,
          "awards": "Nominated for 2 Golden Globes. Another 5 wins & 25 nominations.",
          "mpaaRating": "R",
          "plot": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MjgwNTMyOV5BMl5BanBnXkFtZTgwMTc1MjI0NDE@._V1_SX300.jpg"
        },
        {
          "title": "Now You See Me 2",
          "releaseDate": "2016-06-10T04:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Crime",
            "Mystery",
            "Thriller"
          ],
          "director": "Jon M. Chu",
          "cast": [
            "Jesse Eisenberg",
            "Mark Ruffalo",
            "Woody Harrelson",
            "Dave Franco"
          ],
          "country": "USA, Mexico, France, Hong Kong",
          "productionCompany": "K/O Paper Products",
          "imdbRating": 6.5,
          "awards": "5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The Four Horsemen resurface, and are forcibly recruited by a tech genius to pull off their most impossible heist yet.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjhlNDljNTgtZjc4My00NmZmLTk2YzAtYWE5MDYwYjM4MTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "Crazy Rich Asians",
          "releaseDate": "2018-08-15T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Jon M. Chu",
          "cast": [
            "Constance Wu",
            "Henry Golding",
            "Michelle Yeoh",
            "Gemma Chan"
          ],
          "country": "USA",
          "productionCompany": "Color Force",
          "imdbRating": 6.9,
          "awards": "Nominated for 2 Golden Globes. Another 13 wins & 60 nominations.",
          "mpaaRating": "PG-13",
          "plot": "This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_SX300.jpg"
        },
        {
          "title": "Spy",
          "releaseDate": "2015-06-05T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Action",
            "Comedy"
          ],
          "director": "Paul Feig",
          "cast": [
            "Jude Law",
            "Raad Rawi",
            "Melissa McCarthy",
            "Jessica Chaffin"
          ],
          "country": "USA, UK, France, Hungary, Germany",
          "productionCompany": "Chernin Entertainment",
          "imdbRating": 7,
          "awards": "Nominated for 2 Golden Globes. Another 6 wins & 28 nominations.",
          "mpaaRating": "R",
          "plot": "A desk-bound CIA analyst volunteers to go undercover to infiltrate the world of a deadly arms dealer, and prevent diabolical global disaster.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjI5OTQ0MDQxM15BMl5BanBnXkFtZTgwMzcwNjMyNTE@._V1_SX300.jpg"
        },
        {
          "title": "Creed",
          "releaseDate": "2015-11-25T05:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Drama",
            "Sport"
          ],
          "director": "Ryan Coogler",
          "cast": [
            "Michael B. Jordan",
            "Sylvester Stallone",
            "Tessa Thompson",
            "Phylicia Rashad"
          ],
          "country": "USA",
          "productionCompany": "Chartoff Winkler",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 44 wins & 64 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNmZkYjQzY2QtNjdkNC00YjkzLTk5NjUtY2MyNDNiYTBhN2M2XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
        },
        {
          "title": "The Conjuring 2",
          "releaseDate": "2016-06-10T04:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "James Wan",
          "cast": [
            "Patrick Wilson",
            "Vera Farmiga",
            "Madison Wolfe",
            "Frances O'Connor"
          ],
          "country": "Canada, USA, UK",
          "productionCompany": "Safran Company",
          "imdbRating": 7.3,
          "awards": "4 wins & 13 nominations.",
          "mpaaRating": "R",
          "plot": "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_SX300.jpg"
        },
        {
          "title": "Inferno",
          "releaseDate": "2016-10-28T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Action",
            "Adventure",
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Ron Howard",
          "cast": [
            "Tom Hanks",
            "Felicity Jones",
            "Omar Sy",
            "Irrfan Khan"
          ],
          "country": "USA, Hungary",
          "productionCompany": "Sony Classical",
          "imdbRating": 6.2,
          "awards": "4 wins & 1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "When Robert Langdon wakes up in an Italian hospital with amnesia, he teams up with Dr. Sienna Brooks, and together they must race across Europe against the clock to foil a deadly global plot.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SX300.jpg"
        },
        {
          "title": "The Jungle Book",
          "releaseDate": "2016-04-15T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Adventure",
            "Drama",
            "Family",
            "Fantasy"
          ],
          "director": "Jon Favreau",
          "cast": [
            "Neel Sethi",
            "Bill Murray",
            "Ben Kingsley",
            "Idris Elba"
          ],
          "country": "UK, USA",
          "productionCompany": "Fairview Entertainment",
          "imdbRating": 7.4,
          "awards": "Won 1 Oscar. Another 32 wins & 54 nominations.",
          "mpaaRating": "PG",
          "plot": "After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther Bagheera and free-spirited bear Baloo.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_SX300.jpg"
        },
        {
          "title": "Wild Tales",
          "releaseDate": "2014-08-21T04:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Comedy",
            "Drama",
            "Thriller"
          ],
          "director": "Damián Szifron",
          "cast": [
            "Darío Grandinetti",
            "María Marull",
            "Mónica Villa",
            "Diego Starosta"
          ],
          "country": "Argentina, Spain, France, UK",
          "productionCompany": "Kramer &amp; Sigman Films",
          "imdbRating": 8.1,
          "awards": "Nominated for 1 Oscar. Another 48 wins & 57 nominations.",
          "mpaaRating": "R",
          "plot": "Six short stories that explore the extremities of human behavior involving people in distress.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
        },
        {
          "title": "The Theory of Everything",
          "releaseDate": "2014-11-26T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Biography",
            "Drama",
            "Romance"
          ],
          "director": "James Marsh",
          "cast": [
            "Eddie Redmayne",
            "Felicity Jones",
            "Tom Prior",
            "Sophie Perry"
          ],
          "country": "UK, Japan, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.7,
          "awards": "Won 1 Oscar. Another 24 wins & 124 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg"
        },
        {
          "title": "Batman v Superman: Dawn of Justice",
          "releaseDate": "2016-03-25T04:00:00.000Z",
          "runTime": 152,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Zack Snyder",
          "cast": [
            "Ben Affleck",
            "Henry Cavill",
            "Amy Adams",
            "Jesse Eisenberg"
          ],
          "country": "USA",
          "productionCompany": "Syncopy",
          "imdbRating": 6.4,
          "awards": "14 wins & 33 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "The Purge: Anarchy",
          "releaseDate": "2014-07-18T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Action",
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "James DeMonaco",
          "cast": [
            "Frank Grillo",
            "Carmen Ejogo",
            "Zach Gilford",
            "Kiele Sanchez"
          ],
          "country": "USA, France",
          "productionCompany": "Platinum Dunes",
          "imdbRating": 6.4,
          "awards": "3 wins & 6 nominations.",
          "mpaaRating": "R",
          "plot": "Three groups of people intertwine and are left stranded in the streets on Purge Night, trying to survive the chaos and violence that occurs.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE2ODMxMTk1Nl5BMl5BanBnXkFtZTgwMDEzNjEzMTE@._V1_SX300.jpg"
        },
        {
          "title": "Soul",
          "releaseDate": "2020-12-25T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy",
            "Music"
          ],
          "director": "Pete Docter, Kemp Powers(co-director)",
          "cast": [
            "Jamie Foxx",
            "Tina Fey",
            "Graham Norton",
            "Rachel House"
          ],
          "country": "USA",
          "productionCompany": "N/A",
          "imdbRating": 8.1,
          "awards": "Nominated for 3 Oscars. Another 82 wins & 115 nominations.",
          "mpaaRating": "PG",
          "plot": "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_SX300.jpg"
        },
        {
          "title": "Zootopia",
          "releaseDate": "2016-03-04T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Crime",
            "Family",
            "Mystery"
          ],
          "director": "Byron Howard, Rich Moore, Jared Bush(co-director)",
          "cast": [
            "Ginnifer Goodwin",
            "Jason Bateman",
            "Idris Elba",
            "Jenny Slate"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Animation Studios",
          "imdbRating": 8,
          "awards": "Won 1 Oscar. Another 46 wins & 71 nominations.",
          "mpaaRating": "PG",
          "plot": "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg"
        },
        {
          "title": "Ad Astra",
          "releaseDate": "2019-09-20T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Adventure",
            "Drama",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "James Gray",
          "cast": [
            "Brad Pitt",
            "Tommy Lee Jones",
            "Ruth Negga",
            "Donald Sutherland"
          ],
          "country": "China, USA, Brazil",
          "productionCompany": "20th Century Fox",
          "imdbRating": 6.5,
          "awards": "Nominated for 1 Oscar. Another 15 wins & 71 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZTBmMi00MGQ5LWFjN2MtOGEyZTliNGY1MzFiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
        },
        {
          "title": "John Wick",
          "releaseDate": "2014-10-24T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Chad Stahelski, David Leitch",
          "cast": [
            "Keanu Reeves",
            "Michael Nyqvist",
            "Alfie Allen",
            "Willem Dafoe"
          ],
          "country": "USA, UK, China",
          "productionCompany": "Thunder Road Pictures",
          "imdbRating": 7.4,
          "awards": "5 wins & 10 nominations.",
          "mpaaRating": "R",
          "plot": "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
        },
        {
          "title": "The Divergent Series: Insurgent",
          "releaseDate": "2015-03-20T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Robert Schwentke",
          "cast": [
            "Kate Winslet",
            "Jai Courtney",
            "Mekhi Phifer",
            "Shailene Woodley"
          ],
          "country": "USA, Canada",
          "productionCompany": "Red Wagon Productions",
          "imdbRating": 6.2,
          "awards": "4 wins & 17 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart with the help from others on her side.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTYxMTg3OF5BMl5BanBnXkFtZTgwMDgyMzA2NDE@._V1_SX300.jpg"
        },
        {
          "title": "I Origins",
          "releaseDate": "2014-09-19T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Drama",
            "Mystery",
            "Romance",
            "Sci-Fi"
          ],
          "director": "Mike Cahill",
          "cast": [
            "Michael Pitt",
            "Steven Yeun",
            "Astrid Bergès-Frisbey",
            "Brit Marling"
          ],
          "country": "USA",
          "productionCompany": "Verisimilitude",
          "imdbRating": 7.4,
          "awards": "2 wins & 3 nominations.",
          "mpaaRating": "R",
          "plot": "A molecular biologist and his laboratory partner uncover evidence that may fundamentally change society as we know it.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ0MTAwMDI1OF5BMl5BanBnXkFtZTgwNjUwMTA2MTE@._V1_SX300.jpg"
        },
        {
          "title": "Chef",
          "releaseDate": "2014-05-30T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Adventure",
            "Comedy",
            "Drama"
          ],
          "director": "Jon Favreau",
          "cast": [
            "Jon Favreau",
            "John Leguizamo",
            "Bobby Cannavale",
            "Emjay Anthony"
          ],
          "country": "USA",
          "productionCompany": "Aldamisa Entertainment",
          "imdbRating": 7.3,
          "awards": "2 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "A head chef quits his restaurant job and buys a food truck in an effort to reclaim his creative promise, while piecing back together his estranged family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTQyNDQwMjYtZTY5YS00MGU2LWE5NzctMjM4Y2IyYjkwMjNkXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"
        },
        {
          "title": "Red Sparrow",
          "releaseDate": "2018-03-02T05:00:00.000Z",
          "runTime": 140,
          "genres": [
            "Action",
            "Drama",
            "Thriller"
          ],
          "director": "Francis Lawrence",
          "cast": [
            "Jennifer Lawrence",
            "Joel Edgerton",
            "Matthias Schoenaerts",
            "Charlotte Rampling"
          ],
          "country": "USA",
          "productionCompany": "TSL Entertainment",
          "imdbRating": 6.6,
          "awards": "3 wins & 9 nominations.",
          "mpaaRating": "R",
          "plot": "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SX300.jpg"
        },
        {
          "title": "Lucy",
          "releaseDate": "2014-07-25T04:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Luc Besson",
          "cast": [
            "Scarlett Johansson",
            "Morgan Freeman",
            "Choi Min-sik",
            "Amr Waked"
          ],
          "country": "France, Germany, Taiwan, Canada, USA, UK",
          "productionCompany": "Cine+",
          "imdbRating": 6.4,
          "awards": "1 win & 12 nominations.",
          "mpaaRating": "R",
          "plot": "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_SX300.jpg"
        },
        {
          "title": "Nightcrawler",
          "releaseDate": "2014-10-31T04:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Dan Gilroy",
          "cast": [
            "Jake Gyllenhaal",
            "Michael Papajohn",
            "Marco Rodríguez",
            "Bill Paxton"
          ],
          "country": "USA",
          "productionCompany": "Bold Films",
          "imdbRating": 7.9,
          "awards": "Nominated for 1 Oscar. Another 42 wins & 123 nominations.",
          "mpaaRating": "R",
          "plot": "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2U1YzdhYWMtZWUzMi00OWI1LWFkM2ItNWVjM2YxMGQ2MmNhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "Coherence",
          "releaseDate": "2014-08-06T04:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "James Ward Byrkit",
          "cast": [
            "Emily Baldoni",
            "Maury Sterling",
            "Nicholas Brendon",
            "Lorene Scafaria"
          ],
          "country": "USA, UK",
          "productionCompany": "Bellanova",
          "imdbRating": 7.2,
          "awards": "5 wins & 5 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzQ3ODUzNDY2M15BMl5BanBnXkFtZTgwNzg0ODY2MTE@._V1_SX300.jpg"
        },
        {
          "title": "Tag",
          "releaseDate": "2018-06-15T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Comedy"
          ],
          "director": "Jeff Tomsic",
          "cast": [
            "Ed Helms",
            "Lil Rel Howery",
            "Jon Hamm",
            "Annabelle Wallis"
          ],
          "country": "USA",
          "productionCompany": "Broken Road",
          "imdbRating": 6.5,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzk4NDM3NjkwNF5BMl5BanBnXkFtZTgwNTk5MzkzNTM@._V1_SX300.jpg"
        },
        {
          "title": "Pitch Perfect 2",
          "releaseDate": "2015-05-15T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Comedy",
            "Music"
          ],
          "director": "Elizabeth Banks",
          "cast": [
            "Anna Kendrick",
            "Rebel Wilson",
            "Hailee Steinfeld",
            "Brittany Snow"
          ],
          "country": "USA",
          "productionCompany": "Gold Circle Films",
          "imdbRating": 6.4,
          "awards": "9 wins & 16 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After a humiliating command performance at The Kennedy Center, the Barden Bellas enter an international competition that no American group has ever won in order to regain their status and right to perform.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzk4OTM2NzMzNl5BMl5BanBnXkFtZTgwNTAzNDE0NDE@._V1_SX300.jpg"
        },
        {
          "title": "Furious 7",
          "releaseDate": "2015-04-03T04:00:00.000Z",
          "runTime": 137,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "James Wan",
          "cast": [
            "Vin Diesel",
            "Paul Walker",
            "Jason Statham",
            "Michelle Rodriguez"
          ],
          "country": "USA, China, Japan, Canada, United Arab Emirates",
          "productionCompany": "Original Film",
          "imdbRating": 7.1,
          "awards": "Nominated for 1 Golden Globe. Another 35 wins & 35 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg"
        },
        {
          "title": "Kingsman: The Secret Service",
          "releaseDate": "2015-02-13T05:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Thriller"
          ],
          "director": "Matthew Vaughn",
          "cast": [
            "Adrian Quinton",
            "Colin Firth",
            "Mark Strong",
            "Jonno Davies"
          ],
          "country": "UK, USA",
          "productionCompany": "Marv Films",
          "imdbRating": 7.7,
          "awards": "10 wins & 32 nominations.",
          "mpaaRating": "R",
          "plot": "A spy organisation recruits a promising street kid into the agency's training program, while a global threat emerges from a twisted tech genius.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTM3ZTllNzItNTNmOS00NzJiLTg1MWMtMjMxNDc0NmJhODU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "Annihilation",
          "releaseDate": "2018-02-23T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Adventure",
            "Drama",
            "Horror",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Alex Garland",
          "cast": [
            "Natalie Portman",
            "Benedict Wong",
            "Sonoya Mizuno",
            "David Gyasi"
          ],
          "country": "UK",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 6.8,
          "awards": "16 wins & 57 nominations.",
          "mpaaRating": "R",
          "plot": "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SX300.jpg"
        },
        {
          "title": "The Interview",
          "releaseDate": "2014-12-24T05:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Action",
            "Adventure",
            "Comedy"
          ],
          "director": "Evan Goldberg, Seth Rogen",
          "cast": [
            "James Franco",
            "Seth Rogen",
            "Lizzy Caplan",
            "Randall Park"
          ],
          "country": "USA",
          "productionCompany": "Point Grey",
          "imdbRating": 6.5,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "R",
          "plot": "Dave Skylark and his producer Aaron Rapaport run the celebrity tabloid show \"Skylark Tonight\". When they land an interview with a surprise fan, North Korean dictator Jong-Un Kim, they are recruited by the CIA to assassinate him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQzMTcwMzgyMV5BMl5BanBnXkFtZTgwMzAyMzQ2MzE@._V1_SX300.jpg"
        },
        {
          "title": "Beauty and the Beast",
          "releaseDate": "2017-03-17T04:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Family",
            "Fantasy",
            "Musical",
            "Romance"
          ],
          "director": "Bill Condon",
          "cast": [
            "Emma Watson",
            "Dan Stevens",
            "Luke Evans",
            "Josh Gad"
          ],
          "country": "USA",
          "productionCompany": "Mandeville Films",
          "imdbRating": 7.1,
          "awards": "Nominated for 2 Oscars. Another 15 wins & 71 nominations.",
          "mpaaRating": "PG",
          "plot": "A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_SX300.jpg"
        },
        {
          "title": "T2 Trainspotting",
          "releaseDate": "2017-03-31T04:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Drama"
          ],
          "director": "Danny Boyle",
          "cast": [
            "Ewan McGregor",
            "Logan Gillies",
            "Ben Skelton",
            "Aiden Haggarty"
          ],
          "country": "UK",
          "productionCompany": "Creative Scotland",
          "imdbRating": 7.2,
          "awards": "6 wins & 7 nominations.",
          "mpaaRating": "R",
          "plot": "After 20 years abroad, Mark Renton returns to Scotland and reunites with his old friends Sick Boy, Spud, and Begbie.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI0MTE1ODkzMl5BMl5BanBnXkFtZTgwMTQ1MTg5MDI@._V1_SX300.jpg"
        },
        {
          "title": "Bird Box",
          "releaseDate": "2018-12-21T05:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Horror",
            "Sci-Fi"
          ],
          "director": "Susanne Bier",
          "cast": [
            "Sandra Bullock",
            "Trevante Rhodes",
            "John Malkovich",
            "Sarah Paulson"
          ],
          "country": "USA",
          "productionCompany": "Netflix",
          "imdbRating": 6.6,
          "awards": "5 wins & 9 nominations.",
          "mpaaRating": "R",
          "plot": "Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SX300.jpg"
        },
        {
          "title": "Everest",
          "releaseDate": "2015-09-25T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Action",
            "Adventure",
            "Biography",
            "Drama",
            "Thriller"
          ],
          "director": "Baltasar Kormákur",
          "cast": [
            "Jason Clarke",
            "Ang Phula Sherpa",
            "Thomas M. Wright",
            "Martin Henderson"
          ],
          "country": "UK, USA, Iceland",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.1,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The story of New Zealand's Robert \"Rob\" Edwin Hall, who on May 10, 1996, together with Scott Fischer, teamed up on a joint expedition to ascend Mount Everest.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTNmMzM0ZTktZWY3Yy00ODViLTllZDgtODcwM2QyM2E2YTU2L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "Fury",
          "releaseDate": "2014-10-17T04:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Action",
            "Drama",
            "War"
          ],
          "director": "David Ayer",
          "cast": [
            "Brad Pitt",
            "Shia LaBeouf",
            "Logan Lerman",
            "Michael Peña"
          ],
          "country": "USA, China, UK",
          "productionCompany": "QED International",
          "imdbRating": 7.6,
          "awards": "5 wins & 23 nominations.",
          "mpaaRating": "R",
          "plot": "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg"
        },
        {
          "title": "The Secret Life of Pets",
          "releaseDate": "2016-07-08T04:00:00.000Z",
          "runTime": 87,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family"
          ],
          "director": "Chris Renaud, Yarrow Cheney(co-director)",
          "cast": [
            "Louis C.K.",
            "Eric Stonestreet",
            "Kevin Hart",
            "Jenny Slate"
          ],
          "country": "USA, France, Japan",
          "productionCompany": "Chris Meledandri",
          "imdbRating": 6.5,
          "awards": "4 wins & 15 nominations.",
          "mpaaRating": "PG",
          "plot": "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_SX300.jpg"
        },
        {
          "title": "Game Night",
          "releaseDate": "2018-02-23T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "John Francis Daley, Jonathan Goldstein",
          "cast": [
            "Jason Bateman",
            "Rachel McAdams",
            "Kyle Chandler",
            "Sharon Horgan"
          ],
          "country": "USA",
          "productionCompany": "New Line Cinema",
          "imdbRating": 6.9,
          "awards": "4 wins & 20 nominations.",
          "mpaaRating": "R",
          "plot": "A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_SX300.jpg"
        },
        {
          "title": "Locke",
          "releaseDate": "2014-04-18T04:00:00.000Z",
          "runTime": 85,
          "genres": [
            "Drama"
          ],
          "director": "Steven Knight",
          "cast": [
            "Tom Hardy",
            "Olivia Colman",
            "Ruth Wilson",
            "Andrew Scott"
          ],
          "country": "UK, USA",
          "productionCompany": "IM Global",
          "imdbRating": 7.1,
          "awards": "7 wins & 33 nominations.",
          "mpaaRating": "R",
          "plot": "Ivan Locke, a dedicated family man and successful construction manager, receives a phone call on the eve of the biggest challenge of his career that sets in motion a series of events that threaten his carefully cultivated existence.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MjE5MzU2M15BMl5BanBnXkFtZTgwNzE4OTMzMTE@._V1_SX300.jpg"
        },
        {
          "title": "Night at the Museum: Secret of the Tomb",
          "releaseDate": "2014-12-19T05:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Shawn Levy",
          "cast": [
            "Ben Stiller",
            "Robin Williams",
            "Owen Wilson",
            "Steve Coogan"
          ],
          "country": "UK, USA",
          "productionCompany": "21 Laps Entertainment",
          "imdbRating": 6.2,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "PG",
          "plot": "Larry spans the globe, uniting favorite and new characters while embarking on an epic quest to save the magic before it is gone forever.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI1MzM2ODEyMV5BMl5BanBnXkFtZTgwNTIzODAwMzE@._V1_SX300.jpg"
        },
        {
          "title": "Me Before You",
          "releaseDate": "2016-06-03T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Thea Sharrock",
          "cast": [
            "Sam Claflin",
            "Vanessa Kirby",
            "Emilia Clarke",
            "Eileen Dunwoodie"
          ],
          "country": "UK, USA",
          "productionCompany": "New Line Cinema",
          "imdbRating": 7.4,
          "awards": "6 wins & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_SX300.jpg"
        },
        {
          "title": "Star Trek Beyond",
          "releaseDate": "2016-07-22T04:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Justin Lin",
          "cast": [
            "Chris Pine",
            "Zachary Quinto",
            "Karl Urban",
            "Zoe Saldana"
          ],
          "country": "USA, China, United Arab Emirates, Canada",
          "productionCompany": "Sneaky Shark",
          "imdbRating": 7.1,
          "awards": "Nominated for 1 Oscar. Another 3 wins & 28 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The crew of the USS Enterprise explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy, who puts them, and everything the Federation stands for, to the test.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODgzMTZmMGMtNTM4Ni00ZjIxLWIyYmUtZjcxMDEwMjkxMzQyXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
        },
        {
          "title": "Ted 2",
          "releaseDate": "2015-06-26T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Comedy"
          ],
          "director": "Seth MacFarlane",
          "cast": [
            "Mark Wahlberg",
            "Seth MacFarlane",
            "Amanda Seyfried",
            "Jessica Barth"
          ],
          "country": "USA",
          "productionCompany": "Universal Pictures",
          "imdbRating": 6.3,
          "awards": "3 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEwMDg3MDk1NF5BMl5BanBnXkFtZTgwNjYyODA1NTE@._V1_SX300.jpg"
        },
        {
          "title": "Baahubali: The Beginning",
          "releaseDate": "2015-07-09T04:00:00.000Z",
          "runTime": 159,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Musical"
          ],
          "director": "S.S. Rajamouli",
          "cast": [
            "Prabhas",
            "Rana Daggubati",
            "Ramya Krishnan",
            "Sathyaraj"
          ],
          "country": "India",
          "productionCompany": "Arka Mediaworks",
          "imdbRating": 8,
          "awards": "35 wins & 16 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg"
        },
        {
          "title": "Jojo Rabbit",
          "releaseDate": "2019-11-08T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Comedy",
            "Drama",
            "War"
          ],
          "director": "Taika Waititi",
          "cast": [
            "Roman Griffin Davis",
            "Thomasin McKenzie",
            "Scarlett Johansson",
            "Taika Waititi"
          ],
          "country": "New Zealand, Czech Republic, USA",
          "productionCompany": "Unison Films",
          "imdbRating": 7.9,
          "awards": "Won 1 Oscar. Another 43 wins & 189 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
        },
        {
          "title": "The Fault in Our Stars",
          "releaseDate": "2014-06-06T04:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Josh Boone",
          "cast": [
            "Shailene Woodley",
            "Ansel Elgort",
            "Nat Wolff",
            "Laura Dern"
          ],
          "country": "USA",
          "productionCompany": "Temple Hill",
          "imdbRating": 7.7,
          "awards": "21 wins & 17 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "Whiplash",
          "releaseDate": "2014-10-15T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Drama",
            "Music"
          ],
          "director": "Damien Chazelle",
          "cast": [
            "Miles Teller",
            "J.K. Simmons",
            "Paul Reiser",
            "Melissa Benoist"
          ],
          "country": "USA",
          "productionCompany": "Bold Films",
          "imdbRating": 8.5,
          "awards": "Won 3 Oscars. Another 91 wins & 144 nominations.",
          "mpaaRating": "R",
          "plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Hell or High Water",
          "releaseDate": "2016-08-26T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller",
            "Western"
          ],
          "director": "David Mackenzie",
          "cast": [
            "Dale Dickey",
            "Ben Foster",
            "Chris Pine",
            "William Sterchi"
          ],
          "country": "USA",
          "productionCompany": "Odd Lot Entertainment",
          "imdbRating": 7.6,
          "awards": "Nominated for 4 Oscars. Another 46 wins & 167 nominations.",
          "mpaaRating": "R",
          "plot": "A divorced father and his ex-con older brother resort to a desperate scheme in order to save their family's ranch in West Texas.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg4NDA1OTA5NF5BMl5BanBnXkFtZTgwMDQ2MDM5ODE@._V1_SX300.jpg"
        },
        {
          "title": "Me and Earl and the Dying Girl",
          "releaseDate": "2015-07-01T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Alfonso Gomez-Rejon",
          "cast": [
            "Thomas Mann",
            "RJ Cyler",
            "Olivia Cooke",
            "Nick Offerman"
          ],
          "country": "USA",
          "productionCompany": "Rhode Island Avenue",
          "imdbRating": 7.7,
          "awards": "17 wins & 29 nominations.",
          "mpaaRating": "PG-13",
          "plot": "High schooler Greg, who spends most of his time making parodies of classic movies with his co-worker Earl, finds his outlook forever altered after befriending a classmate who has just been diagnosed with cancer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTA1NzUzNjY4MV5BMl5BanBnXkFtZTgwNDU0MDI0NTE@._V1_SX300.jpg"
        },
        {
          "title": "Birdman or (The Unexpected Virtue of Ignorance)",
          "releaseDate": "2014-11-14T05:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Alejandro G. Iñárritu",
          "cast": [
            "Michael Keaton",
            "Emma Stone",
            "Kenny Chin",
            "Jamahl Garrison-Lowe"
          ],
          "country": "USA",
          "productionCompany": "New Regency Pictures",
          "imdbRating": 7.7,
          "awards": "Won 4 Oscars. Another 188 wins & 291 nominations.",
          "mpaaRating": "R",
          "plot": "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg"
        },
        {
          "title": "Get Hard",
          "releaseDate": "2015-03-27T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Comedy",
            "Crime"
          ],
          "director": "Etan Cohen",
          "cast": [
            "Will Ferrell",
            "Kevin Hart",
            "Craig T. Nelson",
            "Alison Brie"
          ],
          "country": "USA",
          "productionCompany": "Gary Sanchez Productions",
          "imdbRating": 6,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "When millionaire James King is jailed for fraud and bound for San Quentin, he turns to Darnell Lewis to prep him to go behind bars.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc3OTc1NjM0M15BMl5BanBnXkFtZTgwNjAyMzE1MzE@._V1_SX300.jpg"
        },
        {
          "title": "A Million Ways to Die in the West",
          "releaseDate": "2014-05-30T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Comedy",
            "Western"
          ],
          "director": "Seth MacFarlane",
          "cast": [
            "Seth MacFarlane",
            "Charlize Theron",
            "Amanda Seyfried",
            "Liam Neeson"
          ],
          "country": "USA",
          "productionCompany": "Fuzzy Door Productions",
          "imdbRating": 6.1,
          "awards": "6 nominations.",
          "mpaaRating": "R",
          "plot": "As a cowardly farmer begins to fall for the mysterious new woman in town, he must put his newly found courage to the test when her husband, a notorious gun-slinger, announces his arrival.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ0NDcyNjg0MV5BMl5BanBnXkFtZTgwMzk4NTA4MTE@._V1_SX300.jpg"
        },
        {
          "title": "Pacific Rim: Uprising",
          "releaseDate": "2018-03-23T04:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Steven S. DeKnight",
          "cast": [
            "John Boyega",
            "Scott Eastwood",
            "Cailee Spaeny",
            "Burn Gorman"
          ],
          "country": "UK, China, Japan, USA, Mexico",
          "productionCompany": "Legendary Pictures",
          "imdbRating": 5.6,
          "awards": "6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to lead a new generation of Jaeger pilots, including rival Lambert and 15-year-old hacker Amara, against a new Kaiju threat.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI3Nzg0MTM5NF5BMl5BanBnXkFtZTgwOTE2MTgwNTM@._V1_SX300.jpg"
        },
        {
          "title": "Crimson Peak",
          "releaseDate": "2015-10-16T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Drama",
            "Fantasy",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Guillermo del Toro",
          "cast": [
            "Mia Wasikowska",
            "Jessica Chastain",
            "Tom Hiddleston",
            "Charlie Hunnam"
          ],
          "country": "Canada, USA, Mexico",
          "productionCompany": "Legendary Pictures",
          "imdbRating": 6.5,
          "awards": "6 wins & 42 nominations.",
          "mpaaRating": "R",
          "plot": "In the aftermath of a family tragedy, an aspiring author is torn between love for her childhood friend and the temptation of a mysterious outsider. Trying to escape the ghosts of her past, she is swept away to a house that breathes, bleeds - and remembers.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZmNkYzk3YjItOTMwYy00ZWViLWIxMTUtZDJiZmY0ZWExYjVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Wonder",
          "releaseDate": "2017-11-17T05:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Drama",
            "Family"
          ],
          "director": "Stephen Chbosky",
          "cast": [
            "Jacob Tremblay",
            "Owen Wilson",
            "Izabela Vidovic",
            "Julia Roberts"
          ],
          "country": "USA, Hong Kong, Canada",
          "productionCompany": "Walden Media",
          "imdbRating": 8,
          "awards": "Nominated for 1 Oscar. Another 4 wins & 29 nominations.",
          "mpaaRating": "PG",
          "plot": "Based on the New York Times bestseller, this movie tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters the fifth grade, attending a mainstream elementary school for the first time.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"
        },
        {
          "title": "Arrival",
          "releaseDate": "2016-11-11T05:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Drama",
            "Sci-Fi"
          ],
          "director": "Denis Villeneuve",
          "cast": [
            "Amy Adams",
            "Jeremy Renner",
            "Forest Whitaker",
            "Michael Stuhlbarg"
          ],
          "country": "USA, Canada",
          "productionCompany": "21 Laps Entertainment",
          "imdbRating": 7.9,
          "awards": "Won 1 Oscar. Another 63 wins & 261 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg"
        },
        {
          "title": "Star Wars: Episode IX - The Rise of Skywalker",
          "releaseDate": "2019-12-20T05:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "J.J. Abrams",
          "cast": [
            "Carrie Fisher",
            "Mark Hamill",
            "Adam Driver",
            "Daisy Ridley"
          ],
          "country": "USA",
          "productionCompany": "Lucasfilm Ltd.",
          "imdbRating": 6.6,
          "awards": "Nominated for 3 Oscars. Another 9 wins & 39 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
        },
        {
          "title": "Star Wars: Episode VIII - The Last Jedi",
          "releaseDate": "2017-12-15T05:00:00.000Z",
          "runTime": 152,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Rian Johnson",
          "cast": [
            "Mark Hamill",
            "Carrie Fisher",
            "Adam Driver",
            "Daisy Ridley"
          ],
          "country": "USA",
          "productionCompany": "Lucasfilm Ltd.",
          "imdbRating": 7,
          "awards": "Nominated for 4 Oscars. Another 26 wins & 98 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
        },
        {
          "title": "Hotel Transylvania 2",
          "releaseDate": "2015-09-25T04:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Animation",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Genndy Tartakovsky",
          "cast": [
            "Adam Sandler",
            "Andy Samberg",
            "Selena Gomez",
            "Kevin James"
          ],
          "country": "USA, Canada, South Korea",
          "productionCompany": "Sony Pictures Animation",
          "imdbRating": 6.7,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "PG",
          "plot": "Dracula and his friends try to bring out the monster in his half human, half vampire grandson in order to keep Mavis from leaving the hotel.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNThkYmNmYzAtOGI2Ny00ODI4LTgwY2MtZmY3YWMxYTUyYjVjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Burnt",
          "releaseDate": "2015-10-30T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "John Wells",
          "cast": [
            "Bradley Cooper",
            "Sienna Miller",
            "Daniel Brühl",
            "Riccardo Scamarcio"
          ],
          "country": "USA, UK",
          "productionCompany": "3 Arts Entertainment",
          "imdbRating": 6.6,
          "awards": "6 wins & 1 nomination.",
          "mpaaRating": "R",
          "plot": "Adam Jones (Bradley Cooper) is a chef who destroyed his career with drugs and diva behavior. He cleans up and returns to London, determined to redeem himself by spearheading a top restaurant that can gain three Michelin stars.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjEzNTk2OTEwNF5BMl5BanBnXkFtZTgwNzExMTg0NjE@._V1_SX300.jpg"
        },
        {
          "title": "Star Wars: Episode VII - The Force Awakens",
          "releaseDate": "2015-12-18T05:00:00.000Z",
          "runTime": 138,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "J.J. Abrams",
          "cast": [
            "Harrison Ford",
            "Mark Hamill",
            "Carrie Fisher",
            "Adam Driver"
          ],
          "country": "USA",
          "productionCompany": "Lucasfilm Ltd.",
          "imdbRating": 7.9,
          "awards": "Nominated for 5 Oscars. Another 62 wins & 130 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        },
        {
          "title": "Joy",
          "releaseDate": "2015-12-25T05:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "David O. Russell",
          "cast": [
            "Jennifer Lawrence",
            "Robert De Niro",
            "Bradley Cooper",
            "Edgar Ramírez"
          ],
          "country": "USA",
          "productionCompany": "Davis Entertainment",
          "imdbRating": 6.6,
          "awards": "Nominated for 1 Oscar. Another 8 wins & 22 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Joy is the story of the title character, who rose to become founder and matriarch of a powerful family business dynasty.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzRiOWZmMzUtZTJiOC00MjQ1LTkwMjgtNzhlYzBmODAzYTA0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Taken 3",
          "releaseDate": "2015-01-09T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Olivier Megaton",
          "cast": [
            "Liam Neeson",
            "Forest Whitaker",
            "Famke Janssen",
            "Maggie Grace"
          ],
          "country": "France, USA, Spain",
          "productionCompany": "EuropaCorp",
          "imdbRating": 6,
          "awards": "3 wins & 2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Accused of a ruthless murder he never committed or witnessed, Bryan Mills goes on the run and brings out his particular set of skills to find the true killer and clear his name.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjM5MDU3NTY0M15BMl5BanBnXkFtZTgwOTk2ODU2MzE@._V1_SX300.jpg"
        },
        {
          "title": "Atomic Blonde",
          "releaseDate": "2017-07-28T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "David Leitch",
          "cast": [
            "Charlize Theron",
            "James McAvoy",
            "Eddie Marsan",
            "John Goodman"
          ],
          "country": "USA, Germany, Sweden, Hungary",
          "productionCompany": "Denver and Delilah Productions",
          "imdbRating": 6.7,
          "awards": "10 wins & 19 nominations.",
          "mpaaRating": "R",
          "plot": "An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM5NDYzMzg5N15BMl5BanBnXkFtZTgwOTM2NDU1MjI@._V1_SX300.jpg"
        },
        {
          "title": "The Heat",
          "releaseDate": "2013-06-28T04:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Paul Feig",
          "cast": [
            "Sandra Bullock",
            "Melissa McCarthy",
            "Demián Bichir",
            "Marlon Wayans"
          ],
          "country": "USA",
          "productionCompany": "Chernin Entertainment",
          "imdbRating": 6.6,
          "awards": "7 wins & 16 nominations.",
          "mpaaRating": "R",
          "plot": "An uptight FBI Special Agent is paired with a foul-mouthed Boston cop to take down a ruthless drug lord.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA2MDQ2ODM3MV5BMl5BanBnXkFtZTcwNDUzMTQ3OQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Magnificent Seven",
          "releaseDate": "2016-09-23T04:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Adventure",
            "Western"
          ],
          "director": "Antoine Fuqua",
          "cast": [
            "Denzel Washington",
            "Chris Pratt",
            "Ethan Hawke",
            "Vincent D'Onofrio"
          ],
          "country": "USA, Australia",
          "productionCompany": "LStar Capital",
          "imdbRating": 6.9,
          "awards": "5 wins & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUzNTc0NTAyM15BMl5BanBnXkFtZTgwMTk1ODA5OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Family",
          "releaseDate": "2013-09-13T04:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "Luc Besson",
          "cast": [
            "Robert De Niro",
            "Michelle Pfeiffer",
            "Dianna Agron",
            "John D'Leo"
          ],
          "country": "France, UK, USA",
          "productionCompany": "Grive Productions",
          "imdbRating": 6.3,
          "awards": "1 nomination.",
          "mpaaRating": "R",
          "plot": "The Manzoni family, a notorious mafia clan, is relocated to Normandy, France under the Witness Protection Program, where fitting in soon becomes challenging, as their old habits die hard.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE2MzI0MzkyNV5BMl5BanBnXkFtZTcwMjQ2MDM2OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Gods of Egypt",
          "releaseDate": "2016-02-26T05:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Alex Proyas",
          "cast": [
            "Brenton Thwaites",
            "John Samaha",
            "Courtney Eaton",
            "Nikolaj Coster-Waldau"
          ],
          "country": "USA, Australia, China, Hong Kong",
          "productionCompany": "Thunder Road Pictures",
          "imdbRating": 5.4,
          "awards": "2 wins & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Mortal hero Bek teams with the god Horus in an alliance against Set, the merciless god of darkness, who has usurped Egypt's throne, plunging the once peaceful and prosperous empire into chaos and conflict.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjExODg3MDUzNl5BMl5BanBnXkFtZTgwNjExMjE3NzE@._V1_SX300.jpg"
        },
        {
          "title": "Carol",
          "releaseDate": "2016-01-15T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Todd Haynes",
          "cast": [
            "Cate Blanchett",
            "Rooney Mara",
            "Kyle Chandler",
            "Sarah Paulson"
          ],
          "country": "UK, USA, Australia",
          "productionCompany": "Number 9 Films",
          "imdbRating": 7.2,
          "awards": "Nominated for 6 Oscars. Another 77 wins & 244 nominations.",
          "mpaaRating": "R",
          "plot": "An aspiring photographer develops an intimate relationship with an older woman in 1950s New York.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTczNTQ4OTEyNV5BMl5BanBnXkFtZTgwNDgyMDI3NjE@._V1_SX300.jpg"
        },
        {
          "title": "Predestination",
          "releaseDate": "2015-01-09T05:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Michael Spierig, Peter Spierig",
          "cast": [
            "Ethan Hawke",
            "Sarah Snook",
            "Christopher Kirby",
            "Christopher Sommers"
          ],
          "country": "Australia, USA",
          "productionCompany": "Screen Australia",
          "imdbRating": 7.5,
          "awards": "12 wins & 19 nominations.",
          "mpaaRating": "R",
          "plot": "For his final assignment, a top temporal agent must pursue the one criminal that has eluded him throughout time. The chase turns into a unique, surprising and mind-bending exploration of love, fate, identity and time travel taboos.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_SX300.jpg"
        },
        {
          "title": "Avengers: Age of Ultron",
          "releaseDate": "2015-05-01T04:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Joss Whedon",
          "cast": [
            "Robert Downey Jr.",
            "Chris Hemsworth",
            "Mark Ruffalo",
            "Chris Evans"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7.3,
          "awards": "8 wins & 49 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
        },
        {
          "title": "Oculus",
          "releaseDate": "2014-04-11T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Horror",
            "Mystery"
          ],
          "director": "Mike Flanagan",
          "cast": [
            "Karen Gillan",
            "Brenton Thwaites",
            "Katee Sackhoff",
            "Rory Cochrane"
          ],
          "country": "USA",
          "productionCompany": "Intrepid Pictures",
          "imdbRating": 6.5,
          "awards": "3 wins & 17 nominations.",
          "mpaaRating": "R",
          "plot": "A woman tries to exonerate her brother, who was convicted of murder, by proving that the crime was committed by a supernatural phenomenon.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzE1NzM4MjEyNV5BMl5BanBnXkFtZTgwMjYzMjMzMTE@._V1_SX300.jpg"
        },
        {
          "title": "How to Train Your Dragon: The Hidden World",
          "releaseDate": "2019-02-22T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Dean DeBlois",
          "cast": [
            "Jay Baruchel",
            "America Ferrera",
            "F. Murray Abraham",
            "Cate Blanchett"
          ],
          "country": "USA, Japan",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Oscar. Another 5 wins & 63 nominations.",
          "mpaaRating": "PG",
          "plot": "When Hiccup discovers Toothless isn't the only Night Fury, he must seek \"The Hidden World\", a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SX300.jpg"
        },
        {
          "title": "Focus",
          "releaseDate": "2015-02-27T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Comedy",
            "Crime",
            "Drama",
            "Romance"
          ],
          "director": "Glenn Ficarra, John Requa",
          "cast": [
            "Will Smith",
            "Margot Robbie",
            "Adrian Martinez",
            "Gerald McRaney"
          ],
          "country": "USA, Argentina",
          "productionCompany": "N/A",
          "imdbRating": 6.6,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "In the midst of veteran con man Nicky's latest scheme, a woman from his past - now an accomplished femme fatale - shows up and throws his plans for a loop.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUwODg2OTA4OF5BMl5BanBnXkFtZTgwOTE5MTE4MzE@._V1_SX300.jpg"
        },
        {
          "title": "Mission: Impossible - Rogue Nation",
          "releaseDate": "2015-07-31T04:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Christopher McQuarrie",
          "cast": [
            "Tom Cruise",
            "Jeremy Renner",
            "Simon Pegg",
            "Rebecca Ferguson"
          ],
          "country": "USA, China, Hong Kong, Austria, UK, Morocco",
          "productionCompany": "Skydance Productions",
          "imdbRating": 7.4,
          "awards": "6 wins & 26 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Ethan and his team take on their most impossible mission yet when they have to eradicate an international rogue organization as highly skilled as they are and committed to destroying the IMF.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg"
        },
        {
          "title": "Brooklyn",
          "releaseDate": "2015-11-25T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "John Crowley",
          "cast": [
            "Saoirse Ronan",
            "Hugh Gormley",
            "Brid Brennan",
            "Maeve McGrath"
          ],
          "country": "UK, Canada, Ireland",
          "productionCompany": "Item 7",
          "imdbRating": 7.5,
          "awards": "Nominated for 3 Oscars. Another 38 wins & 157 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An Irish immigrant lands in 1950s Brooklyn, where she quickly falls into a romance with a local. When her past catches up with her, however, she must choose between two countries and the lives that exist within.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzE4MDk5NzEyOV5BMl5BanBnXkFtZTgwNDM4NDA3NjE@._V1_SX300.jpg"
        },
        {
          "title": "Coco",
          "releaseDate": "2017-11-22T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Animation",
            "Adventure",
            "Family",
            "Fantasy",
            "Music",
            "Mystery"
          ],
          "director": "Lee Unkrich, Adrian Molina(co-director)",
          "cast": [
            "Anthony Gonzalez",
            "Gael García Bernal",
            "Benjamin Bratt",
            "Alanna Ubach"
          ],
          "country": "USA, Mexico",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 8.4,
          "awards": "Won 2 Oscars. Another 109 wins & 39 nominations.",
          "mpaaRating": "PG",
          "plot": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg"
        },
        {
          "title": "Spectre",
          "releaseDate": "2015-11-06T05:00:00.000Z",
          "runTime": 148,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Sam Mendes",
          "cast": [
            "Daniel Craig",
            "Christoph Waltz",
            "Léa Seydoux",
            "Ralph Fiennes"
          ],
          "country": "UK, USA, Austria, Mexico, Italy, Morocco",
          "productionCompany": "Danjaq Productions",
          "imdbRating": 6.8,
          "awards": "Won 1 Oscar. Another 7 wins & 36 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A cryptic message from James Bond's past sends him on a trail to uncover the existence of a sinister organisation named SPECTRE. With a new threat dawning, Bond learns the terrible truth about the author of all his pain in his most recent missions.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
          "title": "Need for Speed",
          "releaseDate": "2014-03-14T04:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Scott Waugh",
          "cast": [
            "Aaron Paul",
            "Dominic Cooper",
            "Imogen Poots",
            "Kid Cudi"
          ],
          "country": "USA, India",
          "productionCompany": "John Gatins",
          "imdbRating": 6.4,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Fresh from prison, a street racer who was framed by a wealthy business associate joins a cross-country race with revenge in mind. His ex-partner, learning of the plan, places a massive bounty on his head as the race begins.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ3ODY4NzYzOF5BMl5BanBnXkFtZTgwNjI3OTE4MDE@._V1_SX300.jpg"
        },
        {
          "title": "The Intern",
          "releaseDate": "2015-09-25T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Nancy Meyers",
          "cast": [
            "Robert De Niro",
            "Anne Hathaway",
            "Rene Russo",
            "Anders Holm"
          ],
          "country": "USA",
          "productionCompany": "Waverly Films",
          "imdbRating": 7.1,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Seventy-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. Seizing an opportunity to get back in the game, he becomes a senior intern at an online fashion site, founded and run by Jules Ostin.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_SX300.jpg"
        },
        {
          "title": "The Mummy",
          "releaseDate": "2017-06-09T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Thriller"
          ],
          "director": "Alex Kurtzman",
          "cast": [
            "Tom Cruise",
            "Russell Crowe",
            "Annabelle Wallis",
            "Sofia Boutella"
          ],
          "country": "USA, China, Japan",
          "productionCompany": "Conspiracy Factory",
          "imdbRating": 5.4,
          "awards": "6 wins & 17 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An ancient Egyptian princess is awakened from her crypt beneath the desert, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkwMTgwODAxMl5BMl5BanBnXkFtZTgwNTEwNTQ3MDI@._V1_SX300.jpg"
        },
        {
          "title": "PK",
          "releaseDate": "2014-12-19T05:00:00.000Z",
          "runTime": 153,
          "genres": [
            "Comedy",
            "Drama",
            "Musical",
            "Sci-Fi"
          ],
          "director": "Rajkumar Hirani",
          "cast": [
            "Aamir Khan",
            "Rajinder Sharma Nanu",
            "Anushka Sharma",
            "Sushant Singh Rajput"
          ],
          "country": "India",
          "productionCompany": "Vinod Chopra Productions",
          "imdbRating": 8.1,
          "awards": "20 wins & 15 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg"
        },
        {
          "title": "White House Down",
          "releaseDate": "2013-06-28T04:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Action",
            "Drama",
            "Thriller"
          ],
          "director": "Roland Emmerich",
          "cast": [
            "Channing Tatum",
            "Jamie Foxx",
            "Maggie Gyllenhaal",
            "Jason Clarke"
          ],
          "country": "USA",
          "productionCompany": "Mythology Entertainment",
          "imdbRating": 6.4,
          "awards": "3 wins & 9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "While on a tour of the White House with his young daughter, a Capitol policeman springs into action to save his child and protect the president from a heavily armed group of paramilitary invaders.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmI5ZGIxOGMtMjcwMS00Yzk3LWE0YWUtMzc5YTFhNGQ4OWZmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Blue Jasmine",
          "releaseDate": "2013-08-23T04:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Drama"
          ],
          "director": "Woody Allen",
          "cast": [
            "Cate Blanchett",
            "Joy Carlin",
            "Richard Conti",
            "Glen Caspillo"
          ],
          "country": "USA",
          "productionCompany": "Perdido Productions",
          "imdbRating": 7.3,
          "awards": "Won 1 Oscar. Another 55 wins & 81 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A New York socialite, deeply troubled and in denial, arrives in San Francisco to impose upon her sister. She looks a million, but isn't bringing money, peace, or love...",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc0ODk5MzEyMV5BMl5BanBnXkFtZTcwMzI0MDY1OQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Expendables 3",
          "releaseDate": "2014-08-15T04:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Patrick Hughes",
          "cast": [
            "Sylvester Stallone",
            "Jason Statham",
            "Harrison Ford",
            "Arnold Schwarzenegger"
          ],
          "country": "USA, France, Germany, Bulgaria",
          "productionCompany": "Nu Image",
          "imdbRating": 6.1,
          "awards": "2 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Barney augments his team with new blood for a personal battle: to take down Conrad Stonebanks, the Expendables co-founder and notorious arms trader who is hell bent on wiping out Barney and every single one of his associates.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODU5ODMyMzg2MV5BMl5BanBnXkFtZTgwMTA2MTcxMjE@._V1_SX300.jpg"
        },
        {
          "title": "Fifty Shades of Grey",
          "releaseDate": "2015-02-13T05:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Drama",
            "Romance",
            "Thriller"
          ],
          "director": "Sam Taylor-Johnson",
          "cast": [
            "Dakota Johnson",
            "Jamie Dornan",
            "Jennifer Ehle",
            "Eloise Mumford"
          ],
          "country": "USA",
          "productionCompany": "Michael De Luca",
          "imdbRating": 4.1,
          "awards": "Nominated for 1 Oscar. Another 9 wins & 26 nominations.",
          "mpaaRating": "R",
          "plot": "Literature student Anastasia Steele's life changes forever when she meets handsome, yet tormented, billionaire Christian Grey.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_SX300.jpg"
        },
        {
          "title": "The Babadook",
          "releaseDate": "2014-11-28T05:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Jennifer Kent",
          "cast": [
            "Essie Davis",
            "Noah Wiseman",
            "Hayley McElhinney",
            "Daniel Henshall"
          ],
          "country": "Australia, Canada",
          "productionCompany": "Causeway Films",
          "imdbRating": 6.8,
          "awards": "56 wins & 64 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "A single mother and her child fall into a deep well of paranoia when an eerie children's book titled \"Mister Babadook\" manifests in their home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_SX300.jpg"
        },
        {
          "title": "Enemy",
          "releaseDate": "2014-02-06T05:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Denis Villeneuve",
          "cast": [
            "Jake Gyllenhaal",
            "Mélanie Laurent",
            "Sarah Gadon",
            "Isabella Rossellini"
          ],
          "country": "Canada, Spain, France",
          "productionCompany": "N/A",
          "imdbRating": 6.9,
          "awards": "17 wins & 23 nominations.",
          "mpaaRating": "R",
          "plot": "A man seeks out his exact look-alike after spotting him in a movie.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NzA5NjE4N15BMl5BanBnXkFtZTgwMjQ4NzMxMTE@._V1_SX300.jpg"
        },
        {
          "title": "Alien: Covenant",
          "releaseDate": "2017-05-19T04:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Ridley Scott",
          "cast": [
            "Michael Fassbender",
            "Katherine Waterston",
            "Billy Crudup",
            "Danny McBride"
          ],
          "country": "USA, UK",
          "productionCompany": "Brandywine Productions",
          "imdbRating": 6.4,
          "awards": "2 wins & 13 nominations.",
          "mpaaRating": "R",
          "plot": "The crew of a colony ship, bound for a remote planet, discover an uncharted paradise with a threat beyond their imagination, and must attempt a harrowing escape.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzVkMjRhNzctOGQxMC00OGE2LWJhN2EtNmYyODRiMDNlM2ZmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Homefront",
          "releaseDate": "2013-11-27T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Gary Fleder",
          "cast": [
            "Jason Statham",
            "James Franco",
            "Izabela Vidovic",
            "Kate Bosworth"
          ],
          "country": "USA",
          "productionCompany": "Endgame Entertainment",
          "imdbRating": 6.5,
          "awards": "1 nomination.",
          "mpaaRating": "R",
          "plot": "A former DEA agent moves his family to a quiet town, where he soon tangles with a local meth druglord.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUwOTAzNzAwMl5BMl5BanBnXkFtZTgwOTc1NDIyMDE@._V1_SX300.jpg"
        },
        {
          "title": "The Hobbit: The Battle of the Five Armies",
          "releaseDate": "2014-12-17T05:00:00.000Z",
          "runTime": 144,
          "genres": [
            "Adventure",
            "Fantasy"
          ],
          "director": "Peter Jackson",
          "cast": [
            "Ian McKellen",
            "Martin Freeman",
            "Richard Armitage",
            "Ken Stott"
          ],
          "country": "New Zealand, USA",
          "productionCompany": "WingNut Films",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Oscar. Another 8 wins & 54 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_SX300.jpg"
        },
        {
          "title": "Wild",
          "releaseDate": "2014-12-19T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Adventure",
            "Biography",
            "Drama"
          ],
          "director": "Jean-Marc Vallée",
          "cast": [
            "Reese Witherspoon",
            "Laura Dern",
            "Thomas Sadoski",
            "Keene McRae"
          ],
          "country": "USA",
          "productionCompany": "Pacific Standard",
          "imdbRating": 7.1,
          "awards": "Nominated for 2 Oscars. Another 13 wins & 67 nominations.",
          "mpaaRating": "R",
          "plot": "A chronicle of one woman's one thousand one hundred mile solo hike undertaken as a way to recover from a recent personal tragedy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMGMzZmYzYmUtNTJiYi00MjZjLTkyZmMtZGJhYWRlMDBkMDIyXkEyXkFqcGdeQXVyNjA5MDIyMzU@._V1_SX300.jpg"
        },
        {
          "title": "The 5th Wave",
          "releaseDate": "2016-01-22T05:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "J Blakeson",
          "cast": [
            "Chloë Grace Moretz",
            "Matthew Zuk",
            "Gabriela Lopez",
            "Bailey Anne Borders"
          ],
          "country": "USA, UK",
          "productionCompany": "Material Pictures",
          "imdbRating": 5.2,
          "awards": "1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "Four waves of increasingly deadly alien attacks have left most of Earth in ruin. Cassie is on the run, desperately trying to save her younger brother.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"
        },
        {
          "title": "Olympus Has Fallen",
          "releaseDate": "2013-03-22T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Antoine Fuqua",
          "cast": [
            "Gerard Butler",
            "Aaron Eckhart",
            "Finley Jacobsen",
            "Dylan McDermott"
          ],
          "country": "USA",
          "productionCompany": "Millennium Films",
          "imdbRating": 6.5,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "R",
          "plot": "Secret Service agent Mike Banning finds himself trapped inside the White House in the wake of a terrorist attack and works with national security to rescue the President from his kidnappers.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTU0NmY4MWYtNzRlMS00MDkxLWJkODYtOTM3NGI2ZDc1NTJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "Frozen",
          "releaseDate": "2013-11-27T05:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy",
            "Musical"
          ],
          "director": "Chris Buck, Jennifer Lee",
          "cast": [
            "Kristen Bell",
            "Idina Menzel",
            "Jonathan Groff",
            "Josh Gad"
          ],
          "country": "USA, Norway",
          "productionCompany": "Walt Disney Animation",
          "imdbRating": 7.4,
          "awards": "Won 2 Oscars. Another 79 wins & 60 nominations.",
          "mpaaRating": "PG",
          "plot": "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"
        },
        {
          "title": "22 Jump Street",
          "releaseDate": "2014-06-13T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Phil Lord, Christopher Miller",
          "cast": [
            "Jonah Hill",
            "Channing Tatum",
            "Peter Stormare",
            "Wyatt Russell"
          ],
          "country": "USA",
          "productionCompany": "Original Film",
          "imdbRating": 7,
          "awards": "7 wins & 25 nominations.",
          "mpaaRating": "R",
          "plot": "After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcwNzAxMDU1M15BMl5BanBnXkFtZTgwNDE2NTU1MTE@._V1_SX300.jpg"
        },
        {
          "title": "Minions",
          "releaseDate": "2015-07-10T04:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Sci-Fi"
          ],
          "director": "Kyle Balda, Pierre Coffin",
          "cast": [
            "Sandra Bullock",
            "Jon Hamm",
            "Michael Keaton",
            "Allison Janney"
          ],
          "country": "USA, Japan, France",
          "productionCompany": "Illumination Entertainment",
          "imdbRating": 6.4,
          "awards": "Nominated for 1 BAFTA Film Award. Another 4 wins & 26 nominations.",
          "mpaaRating": "PG",
          "plot": "Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SX300.jpg"
        },
        {
          "title": "Jumanji: Welcome to the Jungle",
          "releaseDate": "2017-12-20T05:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
          ],
          "director": "Jake Kasdan",
          "cast": [
            "Dwayne Johnson",
            "Kevin Hart",
            "Jack Black",
            "Karen Gillan"
          ],
          "country": "USA, India, Canada, UK, Australia, Germany",
          "productionCompany": "Seven Bucks Productions",
          "imdbRating": 6.9,
          "awards": "6 wins & 19 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Men in Black: International",
          "releaseDate": "2019-06-14T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "F. Gary Gray",
          "cast": [
            "Chris Hemsworth",
            "Tessa Thompson",
            "Kumail Nanjiani",
            "Rebecca Ferguson"
          ],
          "country": "China, USA",
          "productionCompany": "Amblin Entertainment",
          "imdbRating": 5.6,
          "awards": "9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest threat to date: a mole in the Men in Black organization.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
        },
        {
          "title": "Blue Is the Warmest Colour",
          "releaseDate": "2013-10-09T04:00:00.000Z",
          "runTime": 180,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Abdellatif Kechiche",
          "cast": [
            "Léa Seydoux",
            "Adèle Exarchopoulos",
            "Salim Kechiouche",
            "Aurélien Recoing"
          ],
          "country": "France, Belgium, Spain",
          "productionCompany": "France Télévision",
          "imdbRating": 7.7,
          "awards": "Nominated for 1 Golden Globe. Another 86 wins & 103 nominations.",
          "mpaaRating": "NC-17",
          "plot": "Adèle's life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire and to assert herself as a woman and as an adult. In front of others, Adèle grows, seeks herself, loses herself, and ultimately finds herself through love and loss.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ5NTg5ODk4OV5BMl5BanBnXkFtZTgwODc4MTMzMDE@._V1_SX300.jpg"
        },
        {
          "title": "The Grand Budapest Hotel",
          "releaseDate": "2014-03-28T04:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Adventure",
            "Comedy",
            "Crime"
          ],
          "director": "Wes Anderson",
          "cast": [
            "Ralph Fiennes",
            "F. Murray Abraham",
            "Mathieu Amalric",
            "Adrien Brody"
          ],
          "country": "Germany, USA",
          "productionCompany": "American Empirical Pictures",
          "imdbRating": 8.1,
          "awards": "Won 4 Oscars. Another 130 wins & 226 nominations.",
          "mpaaRating": "R",
          "plot": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg"
        },
        {
          "title": "Finding Dory",
          "releaseDate": "2016-06-17T04:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family"
          ],
          "director": "Andrew Stanton, Angus MacLane(co-director)",
          "cast": [
            "Ellen DeGeneres",
            "Albert Brooks",
            "Ed O'Neill",
            "Kaitlin Olson"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 BAFTA Film Award. Another 17 wins & 45 nominations.",
          "mpaaRating": "PG",
          "plot": "Friendly but forgetful blue tang Dory begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_SX300.jpg"
        },
        {
          "title": "Gone Girl",
          "releaseDate": "2014-10-03T04:00:00.000Z",
          "runTime": 149,
          "genres": [
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "David Fincher",
          "cast": [
            "Ben Affleck",
            "Rosamund Pike",
            "Neil Patrick Harris",
            "Tyler Perry"
          ],
          "country": "USA",
          "productionCompany": "TSG Entertainment",
          "imdbRating": 8.1,
          "awards": "Nominated for 1 Oscar. Another 64 wins & 187 nominations.",
          "mpaaRating": "R",
          "plot": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg"
        },
        {
          "title": "Kung Fu Panda 3",
          "releaseDate": "2016-01-29T05:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Alessandro Carloni, Jennifer Yuh Nelson",
          "cast": [
            "Jack Black",
            "Bryan Cranston",
            "Dustin Hoffman",
            "Angelina Jolie"
          ],
          "country": "USA, China",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 7.1,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "PG",
          "plot": "Continuing his \"legendary adventures of awesomeness\", Po must face two hugely epic, but different threats: one supernatural and the other a little closer to home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_SX300.jpg"
        },
        {
          "title": "The Raid 2",
          "releaseDate": "2014-04-11T04:00:00.000Z",
          "runTime": 150,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Gareth Evans",
          "cast": [
            "Iko Uwais",
            "Arifin Putra",
            "Tio Pakusadewo",
            "Oka Antara"
          ],
          "country": "Indonesia, USA",
          "productionCompany": "XYZ Films",
          "imdbRating": 8,
          "awards": "5 wins & 10 nominations.",
          "mpaaRating": "R",
          "plot": "Only a short time after the first raid, Rama goes undercover with the thugs of Jakarta and plans to bring down the syndicate and uncover the corruption within his police force.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg5MTE2NjA4OV5BMl5BanBnXkFtZTgwMTUyMjczMTE@._V1_SX300.jpg"
        },
        {
          "title": "Spider-Man: Homecoming",
          "releaseDate": "2017-07-07T04:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Jon Watts",
          "cast": [
            "Tom Holland",
            "Michael Keaton",
            "Robert Downey Jr.",
            "Marisa Tomei"
          ],
          "country": "USA",
          "productionCompany": "Columbia Pictures",
          "imdbRating": 7.4,
          "awards": "7 wins & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
        },
        {
          "title": "Big Hero 6",
          "releaseDate": "2014-11-07T05:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Family",
            "Sci-Fi"
          ],
          "director": "Don Hall, Chris Williams",
          "cast": [
            "Scott Adsit",
            "Ryan Potter",
            "Daniel Henney",
            "T.J. Miller"
          ],
          "country": "USA, Japan",
          "productionCompany": "Walt Disney Animation",
          "imdbRating": 7.8,
          "awards": "Won 1 Oscar. Another 16 wins & 58 nominations.",
          "mpaaRating": "PG",
          "plot": "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg"
        },
        {
          "title": "Valerian and the City of a Thousand Planets",
          "releaseDate": "2017-07-21T04:00:00.000Z",
          "runTime": 136,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Luc Besson",
          "cast": [
            "Dane DeHaan",
            "Cara Delevingne",
            "Clive Owen",
            "Rihanna"
          ],
          "country": "France, China, Belgium, Germany, United Arab Emirates, USA, Canada, New Zealand, Singapore, UK, Thailand",
          "productionCompany": "Fundamental Films",
          "imdbRating": 6.5,
          "awards": "10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A dark force threatens Alpha, a vast metropolis and home to species from a thousand planets. Special operatives Valerian and Laureline must race to identify the marauding menace and safeguard not just Alpha, but the future of the universe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkxMDAxNDUyNV5BMl5BanBnXkFtZTgwOTc3MzcxMjI@._V1_SX300.jpg"
        },
        {
          "title": "The Internship",
          "releaseDate": "2013-06-07T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Comedy"
          ],
          "director": "Shawn Levy",
          "cast": [
            "Vince Vaughn",
            "Owen Wilson",
            "Rose Byrne",
            "Aasif Mandvi"
          ],
          "country": "USA",
          "productionCompany": "Wild West Picture Show",
          "imdbRating": 6.3,
          "awards": "2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two salesmen whose careers have been torpedoed by the digital age find their way into a coveted internship at Google, where they must compete with a group of young, tech-savvy geniuses for a shot at employment.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM1MzczMDgwOV5BMl5BanBnXkFtZTcwMDM4NjM2OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Rampage",
          "releaseDate": "2018-04-13T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Brad Peyton",
          "cast": [
            "Dwayne Johnson",
            "Naomie Harris",
            "Malin Akerman",
            "Jeffrey Dean Morgan"
          ],
          "country": "USA",
          "productionCompany": "Wrigley Pictures",
          "imdbRating": 6.1,
          "awards": "7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDA1NjA3ODU3OV5BMl5BanBnXkFtZTgwOTg3MTIwNTM@._V1_SX300.jpg"
        },
        {
          "title": "Don Jon",
          "releaseDate": "2013-09-27T04:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Joseph Gordon-Levitt",
          "cast": [
            "Joseph Gordon-Levitt",
            "Scarlett Johansson",
            "Julianne Moore",
            "Tony Danza"
          ],
          "country": "USA",
          "productionCompany": "HitRecord Films",
          "imdbRating": 6.5,
          "awards": "2 wins & 27 nominations.",
          "mpaaRating": "R",
          "plot": "A New Jersey guy dedicated to his family, friends, and church, develops unrealistic expectations from watching porn and works to find happiness and intimacy with his potential true love.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2ZhY2IzMWQtMGU4MC00ODg2LThkNWMtNWMzYmM2OTc5ZDMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Insidious: Chapter 2",
          "releaseDate": "2013-09-13T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "James Wan",
          "cast": [
            "Patrick Wilson",
            "Rose Byrne",
            "Ty Simpkins",
            "Lin Shaye"
          ],
          "country": "USA, Canada",
          "productionCompany": "Blumhouse",
          "imdbRating": 6.6,
          "awards": "16 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The Lamberts believe that they have defeated the spirits that have haunted their family, but they soon discover that evil is not beaten so easily.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg0OTA5ODIxNF5BMl5BanBnXkFtZTcwNTUzNDg4OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Transcendence",
          "releaseDate": "2014-04-18T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Wally Pfister",
          "cast": [
            "Johnny Depp",
            "Rebecca Hall",
            "Paul Bettany",
            "Cillian Murphy"
          ],
          "country": "UK, China, USA",
          "productionCompany": "Straight Up Films",
          "imdbRating": 6.3,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A scientist's drive for artificial intelligence takes on dangerous implications when his own consciousness is uploaded into one such program.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc1MjQ3ODAyOV5BMl5BanBnXkFtZTgwNjI1NDQ0MTE@._V1_SX300.jpg"
        },
        {
          "title": "Before Midnight",
          "releaseDate": "2013-06-14T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Richard Linklater",
          "cast": [
            "Ethan Hawke",
            "Julie Delpy",
            "Seamus Davey-Fitzpatrick",
            "Jennifer Prior"
          ],
          "country": "USA, Greece",
          "productionCompany": "Faliro House",
          "imdbRating": 7.9,
          "awards": "Nominated for 1 Oscar. Another 20 wins & 62 nominations.",
          "mpaaRating": "R",
          "plot": "We meet Jesse and Celine nine years on in Greece. Almost two decades have passed since their first meeting on that train bound for Vienna.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Other Woman",
          "releaseDate": "2014-04-25T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Nick Cassavetes",
          "cast": [
            "Cameron Diaz",
            "Leslie Mann",
            "Nikolaj Coster-Waldau",
            "Don Johnson"
          ],
          "country": "USA",
          "productionCompany": "LBI Productions",
          "imdbRating": 6,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After discovering her boyfriend is married, Carly soon meets the wife he's been betraying. And when yet another love affair is discovered, all three women team up to plot revenge on the three-timing S.O.B.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc0ODE4ODY1OF5BMl5BanBnXkFtZTgwMDA5NjkzMTE@._V1_SX300.jpg"
        },
        {
          "title": "Run All Night",
          "releaseDate": "2015-03-13T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Jaume Collet-Serra",
          "cast": [
            "Liam Neeson",
            "Ed Harris",
            "Joel Kinnaman",
            "Boyd Holbrook"
          ],
          "country": "USA",
          "productionCompany": "Vertigo",
          "imdbRating": 6.6,
          "awards": "N/A",
          "mpaaRating": "R",
          "plot": "Mobster and hit man Jimmy Conlon has one night to figure out where his loyalties lie: with his estranged son, Mike, whose life is in danger, or his longtime best friend, mob boss Shawn Maguire, who wants Mike to pay for the death of his own son.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2ODI3ODEyOV5BMl5BanBnXkFtZTgwMTM3NTQzNDE@._V1_SX300.jpg"
        },
        {
          "title": "About Time",
          "releaseDate": "2013-11-08T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Comedy",
            "Drama",
            "Fantasy",
            "Romance",
            "Sci-Fi"
          ],
          "director": "Richard Curtis",
          "cast": [
            "Domhnall Gleeson",
            "Rachel McAdams",
            "Bill Nighy",
            "Lydia Wilson"
          ],
          "country": "UK",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.8,
          "awards": "3 wins & 9 nominations.",
          "mpaaRating": "R",
          "plot": "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_SX300.jpg"
        },
        {
          "title": "Grown Ups 2",
          "releaseDate": "2013-07-12T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Comedy"
          ],
          "director": "Dennis Dugan",
          "cast": [
            "Adam Sandler",
            "Kevin James",
            "Chris Rock",
            "David Spade"
          ],
          "country": "USA",
          "productionCompany": "Happy Madison Productions",
          "imdbRating": 5.4,
          "awards": "5 wins & 15 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After moving his family back to his hometown to be with his friends and their kids, Lenny finds out that between old bullies, new bullies, schizo bus drivers, drunk cops on skis, and four hundred costumed party crashers sometimes crazy follows you.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTZkZDhjZTEtZjA5MC00MDU2LTk3NDItNzA2YzQ4Y2Q5NjZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "The Purge",
          "releaseDate": "2013-06-07T04:00:00.000Z",
          "runTime": 85,
          "genres": [
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "James DeMonaco",
          "cast": [
            "Ethan Hawke",
            "Lena Headey",
            "Max Burkholder",
            "Adelaide Kane"
          ],
          "country": "USA, France",
          "productionCompany": "Platinum Dunes",
          "imdbRating": 5.7,
          "awards": "2 wins & 6 nominations.",
          "mpaaRating": "R",
          "plot": "A wealthy family is held hostage for harboring the target of a murderous syndicate during the Purge, a 12-hour period in which any and all crime is legal.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQzNTcwODEyM15BMl5BanBnXkFtZTcwMjM1MDI0OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Into the Woods",
          "releaseDate": "2014-12-25T05:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Musical"
          ],
          "director": "Rob Marshall",
          "cast": [
            "Anna Kendrick",
            "Daniel Huttlestone",
            "James Corden",
            "Emily Blunt"
          ],
          "country": "USA",
          "productionCompany": "Lucamar",
          "imdbRating": 5.9,
          "awards": "Nominated for 3 Oscars. Another 10 wins & 71 nominations.",
          "mpaaRating": "PG",
          "plot": "A witch tasks a childless baker and his wife with procuring magical items from classic fairy tales to reverse the curse put on their family tree.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY4MzQ4OTY3NF5BMl5BanBnXkFtZTgwNjM5MDI3MjE@._V1_SX300.jpg"
        },
        {
          "title": "American Sniper",
          "releaseDate": "2015-01-16T05:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Action",
            "Biography",
            "Drama",
            "War"
          ],
          "director": "Clint Eastwood",
          "cast": [
            "Bradley Cooper",
            "Kyle Gallner",
            "Cole Konis",
            "Ben Reed"
          ],
          "country": "USA",
          "productionCompany": "Mad Chance",
          "imdbRating": 7.3,
          "awards": "Won 1 Oscar. Another 23 wins & 43 nominations.",
          "mpaaRating": "R",
          "plot": "Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home with his family after four tours of duty, however, Chris finds that it is the war he can't leave behind.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_SX300.jpg"
        },
        {
          "title": "The Monuments Men",
          "releaseDate": "2014-02-07T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Comedy",
            "Drama",
            "History",
            "War"
          ],
          "director": "George Clooney",
          "cast": [
            "George Clooney",
            "Matt Damon",
            "Bill Murray",
            "Cate Blanchett"
          ],
          "country": "USA, Germany",
          "productionCompany": "Smoke House",
          "imdbRating": 6.1,
          "awards": "3 wins & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An unlikely World War II platoon is tasked to rescue art masterpieces from Nazi thieves and return them to their owners.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMxMjk4NTM1M15BMl5BanBnXkFtZTgwNjg0MjQ3MDE@._V1_SX300.jpg"
        },
        {
          "title": "Horrible Bosses 2",
          "releaseDate": "2014-11-26T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Comedy",
            "Crime"
          ],
          "director": "Sean Anders",
          "cast": [
            "Jason Bateman",
            "Jason Sudeikis",
            "Charlie Day",
            "Jennifer Aniston"
          ],
          "country": "USA",
          "productionCompany": "Benderspink",
          "imdbRating": 6.3,
          "awards": "1 win & 3 nominations.",
          "mpaaRating": "R",
          "plot": "Dale, Kurt and Nick decide to start their own business but things don't go as planned because of a slick investor, prompting the trio to pull off a harebrained and misguided kidnapping scheme.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzFjYWVhYzYtMDZjNi00ZTc5LTk1MWQtNTBlZTA1MDFhMzY3XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
        },
        {
          "title": "The Accountant",
          "releaseDate": "2016-10-14T04:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Gavin O'Connor",
          "cast": [
            "Ben Affleck",
            "Anna Kendrick",
            "J.K. Simmons",
            "Jon Bernthal"
          ],
          "country": "USA",
          "productionCompany": "Warner Bros. Pictures",
          "imdbRating": 7.3,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "As a math savant uncooks the books for a new client, the Treasury Department closes in on his activities, and the body count starts to rise.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDc5Mzg2NTYxNV5BMl5BanBnXkFtZTgwMjQ2ODAwOTE@._V1_SX300.jpg"
        },
        {
          "title": "Saving Mr. Banks",
          "releaseDate": "2013-12-20T05:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Biography",
            "Comedy",
            "Drama"
          ],
          "director": "John Lee Hancock",
          "cast": [
            "Emma Thompson",
            "Tom Hanks",
            "Annie Rose Buckley",
            "Colin Farrell"
          ],
          "country": "USA, UK, Australia",
          "productionCompany": "Ruby Films",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Oscar. Another 13 wins & 73 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Author P.L. Travers reflects on her childhood after reluctantly meeting with Walt Disney, who seeks to adapt her Mary Poppins books for the big screen.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc0MTQ3NzE4Nl5BMl5BanBnXkFtZTcwMzA4NDM5OQ@@._V1_SX300.jpg"
        },
        {
          "title": "San Andreas",
          "releaseDate": "2015-05-29T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Brad Peyton",
          "cast": [
            "Dwayne Johnson",
            "Carla Gugino",
            "Alexandra Daddario",
            "Ioan Gruffudd"
          ],
          "country": "USA",
          "productionCompany": "Village Roadshow Pictures",
          "imdbRating": 6.1,
          "awards": "2 wins & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey with his ex-wife across the state in order to rescue his daughter.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzZhYmQ2NGMtZmRmYi00NzgzLTllNmUtNDQwZDAxMmE3NzI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "Pixels",
          "releaseDate": "2015-07-24T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Action",
            "Comedy",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Chris Columbus",
          "cast": [
            "Adam Sandler",
            "Kevin James",
            "Michelle Monaghan",
            "Peter Dinklage"
          ],
          "country": "USA, China, Canada",
          "productionCompany": "Columbia Pictures",
          "imdbRating": 5.5,
          "awards": "4 wins & 9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When aliens misinterpret video feeds of classic arcade games as a declaration of war, they attack the Earth in the form of the video games.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYxMzM4NDY5N15BMl5BanBnXkFtZTgwNzg1NTI3MzE@._V1_SX300.jpg"
        },
        {
          "title": "Hacksaw Ridge",
          "releaseDate": "2016-11-04T04:00:00.000Z",
          "runTime": 139,
          "genres": [
            "Biography",
            "Drama",
            "History",
            "War"
          ],
          "director": "Mel Gibson",
          "cast": [
            "Andrew Garfield",
            "Richard Pyros",
            "Jacob Warner",
            "Milo Gibson"
          ],
          "country": "Australia, USA",
          "productionCompany": "Tunnel Post",
          "imdbRating": 8.1,
          "awards": "Won 2 Oscars. Another 51 wins & 115 nominations.",
          "mpaaRating": "R",
          "plot": "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg"
        },
        {
          "title": "Transformers: Age of Extinction",
          "releaseDate": "2014-06-27T04:00:00.000Z",
          "runTime": 165,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Michael Bay",
          "cast": [
            "Mark Wahlberg",
            "Stanley Tucci",
            "Kelsey Grammer",
            "Nicola Peltz"
          ],
          "country": "USA, China, Hong Kong",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 5.6,
          "awards": "5 wins & 23 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When humanity allies with a bounty hunter in pursuit of Optimus Prime, the Autobots turn to a mechanic and his family for help.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_SX300.jpg"
        },
        {
          "title": "The Hunt",
          "releaseDate": "2013-01-10T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Drama"
          ],
          "director": "Thomas Vinterberg",
          "cast": [
            "Mads Mikkelsen",
            "Thomas Bo Larsen",
            "Annika Wedderkopp",
            "Lasse Fogelstrøm"
          ],
          "country": "Denmark, Sweden",
          "productionCompany": "Zentropa Entertainments",
          "imdbRating": 8.3,
          "awards": "Nominated for 1 Oscar. Another 37 wins & 69 nominations.",
          "mpaaRating": "R",
          "plot": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Dawn of the Planet of the Apes",
          "releaseDate": "2014-07-11T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Sci-Fi"
          ],
          "director": "Matt Reeves",
          "cast": [
            "Andy Serkis",
            "Jason Clarke",
            "Gary Oldman",
            "Keri Russell"
          ],
          "country": "USA, UK, Canada",
          "productionCompany": "Chernin Entertainment",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 17 wins & 47 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors of the devastating virus unleashed a decade earlier.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgwODk3NDc1N15BMl5BanBnXkFtZTgwNTc1NjQwMjE@._V1_SX300.jpg"
        },
        {
          "title": "Spring Breakers",
          "releaseDate": "2013-03-22T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Crime",
            "Drama"
          ],
          "director": "Harmony Korine",
          "cast": [
            "James Franco",
            "Selena Gomez",
            "Vanessa Hudgens",
            "Ashley Benson"
          ],
          "country": "USA, France",
          "productionCompany": "Muse Productions",
          "imdbRating": 5.3,
          "awards": "10 wins & 36 nominations.",
          "mpaaRating": "R",
          "plot": "Four college girls hold up a restaurant in order to fund their spring break vacation. While partying, drinking, and taking drugs, they are arrested, only to be bailed out by a drug and arms dealer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDBmYjU3NzAtZGVkNS00N2E3LWEyNTgtMjIwMTczYTE0M2Y4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Inside Out",
          "releaseDate": "2015-06-19T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Drama",
            "Family",
            "Fantasy"
          ],
          "director": "Pete Docter, Ronnie Del Carmen(co-director)",
          "cast": [
            "Amy Poehler",
            "Phyllis Smith",
            "Richard Kind",
            "Bill Hader"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 8.1,
          "awards": "Won 1 Oscar. Another 99 wins & 115 nominations.",
          "mpaaRating": "PG",
          "plot": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg"
        },
        {
          "title": "Dumb and Dumber To",
          "releaseDate": "2014-11-14T05:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Comedy"
          ],
          "director": "Bobby Farrelly, Peter Farrelly",
          "cast": [
            "Jim Carrey",
            "Jeff Daniels",
            "Rob Riggle",
            "Laurie Holden"
          ],
          "country": "USA",
          "productionCompany": "Joey McFarland",
          "imdbRating": 5.6,
          "awards": "1 win & 7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "20 years since their first adventure, Lloyd and Harry go on a road trip to find Harry's newly discovered daughter, who was given up for adoption.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYxMzA0MzAyMF5BMl5BanBnXkFtZTgwMjMyNjcwMjE@._V1_SX300.jpg"
        },
        {
          "title": "Assassin's Creed",
          "releaseDate": "2016-12-21T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Justin Kurzel",
          "cast": [
            "Michael Fassbender",
            "Marion Cotillard",
            "Jeremy Irons",
            "Brendan Gleeson"
          ],
          "country": "USA, France, UK, Hong Kong, Taiwan, Malta, Spain, Canada",
          "productionCompany": "Regency Enterprises",
          "imdbRating": 5.7,
          "awards": "2 wins & 1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "Callum Lynch explores the memories of his ancestor Aguilar de Nerha and gains the skills of a Master Assassin, before taking on the secret Templar society.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzE1OTczNTc1OF5BMl5BanBnXkFtZTgwMzgyMDI3MDI@._V1_SX300.jpg"
        },
        {
          "title": "The Imitation Game",
          "releaseDate": "2014-12-25T05:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Biography",
            "Drama",
            "Thriller",
            "War"
          ],
          "director": "Morten Tyldum",
          "cast": [
            "Benedict Cumberbatch",
            "Keira Knightley",
            "Matthew Goode",
            "Rory Kinnear"
          ],
          "country": "UK, USA",
          "productionCompany": "Black Bear Pictures",
          "imdbRating": 8,
          "awards": "Won 1 Oscar. Another 48 wins & 162 nominations.",
          "mpaaRating": "PG-13",
          "plot": "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX300.jpg"
        },
        {
          "title": "Steve Jobs",
          "releaseDate": "2015-10-23T04:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "Danny Boyle",
          "cast": [
            "Michael Fassbender",
            "Kate Winslet",
            "Seth Rogen",
            "Jeff Daniels"
          ],
          "country": "UK, USA",
          "productionCompany": "Decibel Films",
          "imdbRating": 7.2,
          "awards": "Nominated for 2 Oscars. Another 28 wins & 110 nominations.",
          "mpaaRating": "R",
          "plot": "Steve Jobs takes us behind the scenes of the digital revolution, to paint a portrait of the man at its epicenter. The story unfolds backstage at three iconic product launches, ending in 1998 with the unveiling of the iMac.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE0NTA2MTEwOV5BMl5BanBnXkFtZTgwNzg4NzU2NjE@._V1_SX300.jpg"
        },
        {
          "title": "Rocketman",
          "releaseDate": "2019-05-31T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Biography",
            "Drama",
            "Music",
            "Musical"
          ],
          "director": "Dexter Fletcher",
          "cast": [
            "Taron Egerton",
            "Jamie Bell",
            "Richard Madden",
            "Bryce Dallas Howard"
          ],
          "country": "UK, USA, Canada",
          "productionCompany": "Rocket Pictures",
          "imdbRating": 7.3,
          "awards": "Won 1 Oscar. Another 20 wins & 76 nominations.",
          "mpaaRating": "R",
          "plot": "A musical fantasy about the fantastical human story of Elton John's breakthrough years.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmIzNjUxZGQtYjg0OS00MmE0LTgwZDAtMzVmODQ2MGI5MTQ5XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
        },
        {
          "title": "Side Effects",
          "releaseDate": "2013-02-08T05:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Steven Soderbergh",
          "cast": [
            "Rooney Mara",
            "Carmen Pelaez",
            "Marin Ireland",
            "Channing Tatum"
          ],
          "country": "USA",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 7.1,
          "awards": "5 nominations.",
          "mpaaRating": "R",
          "plot": "A young woman's world unravels when a drug prescribed by her psychiatrist has unexpected side effects.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc2MzY0NDAwOF5BMl5BanBnXkFtZTcwMTE1Mzc4OA@@._V1_SX300.jpg"
        },
        {
          "title": "Inside Llewyn Davis",
          "releaseDate": "2014-01-10T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Comedy",
            "Drama",
            "Music"
          ],
          "director": "Ethan Coen, Joel Coen",
          "cast": [
            "Oscar Isaac",
            "Carey Mulligan",
            "Justin Timberlake",
            "Ethan Phillips"
          ],
          "country": "USA, UK, France",
          "productionCompany": "StudioCanal",
          "imdbRating": 7.5,
          "awards": "Nominated for 2 Oscars. Another 46 wins & 172 nominations.",
          "mpaaRating": "R",
          "plot": "A week in the life of a young singer as he navigates the Greenwich Village folk scene of 1961.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAxNjcyNDQxM15BMl5BanBnXkFtZTgwNzU2NDA0MDE@._V1_SX300.jpg"
        },
        {
          "title": "The Great Wall",
          "releaseDate": "2017-02-17T05:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Thriller"
          ],
          "director": "Yimou Zhang",
          "cast": [
            "Matt Damon",
            "Tian Jing",
            "Willem Dafoe",
            "Andy Lau"
          ],
          "country": "USA, China, Hong Kong, Australia, Canada",
          "productionCompany": "Legendary Pictures",
          "imdbRating": 5.9,
          "awards": "3 wins & 2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In ancient China, a group of European mercenaries encounters a secret army that maintains and defends the Great Wall of China against a horde of monstrous creatures.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA3MjAzOTQxNF5BMl5BanBnXkFtZTgwOTc5OTY1OTE@._V1_SX300.jpg"
        },
        {
          "title": "12 Years a Slave",
          "releaseDate": "2013-11-08T05:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Biography",
            "Drama",
            "History"
          ],
          "director": "Steve McQueen",
          "cast": [
            "Chiwetel Ejiofor",
            "Dwight Henry",
            "Dickie Gravois",
            "Bryan Batt"
          ],
          "country": "USA, UK",
          "productionCompany": "River Road",
          "imdbRating": 8.1,
          "awards": "Won 3 Oscars. Another 240 wins & 335 nominations.",
          "mpaaRating": "R",
          "plot": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Non-Stop",
          "releaseDate": "2014-02-28T05:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Action",
            "Mystery",
            "Thriller"
          ],
          "director": "Jaume Collet-Serra",
          "cast": [
            "Liam Neeson",
            "Julianne Moore",
            "Scoot McNairy",
            "Michelle Dockery"
          ],
          "country": "UK, France, USA, Canada",
          "productionCompany": "Silver Pictures",
          "imdbRating": 6.9,
          "awards": "1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "An air marshal springs into action during a transatlantic flight after receiving a series of text messages demanding $150 million into an off-shore account, or someone will die every 20 minutes.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTI3NzcxMjkzMl5BMl5BanBnXkFtZTgwMDY0NTQ0MDE@._V1_SX300.jpg"
        },
        {
          "title": "Identity Thief",
          "releaseDate": "2013-02-08T05:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Comedy",
            "Crime",
            "Drama"
          ],
          "director": "Seth Gordon",
          "cast": [
            "Jason Bateman",
            "Melissa McCarthy",
            "Jon Favreau",
            "Amanda Peet"
          ],
          "country": "USA",
          "productionCompany": "Bluegrass Films",
          "imdbRating": 5.7,
          "awards": "1 win & 9 nominations.",
          "mpaaRating": "R",
          "plot": "Mild mannered businessman Sandy Patterson travels from Denver to Florida to confront the deceptively harmless looking woman who has been living it up after stealing Sandy's identity.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY3NzM5MTk2Nl5BMl5BanBnXkFtZTcwMDQ4MjQ3OA@@._V1_SX300.jpg"
        },
        {
          "title": "Mama",
          "releaseDate": "2013-01-18T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Fantasy",
            "Horror",
            "Thriller"
          ],
          "director": "Andy Muschietti",
          "cast": [
            "Jessica Chastain",
            "Nikolaj Coster-Waldau",
            "Megan Charpentier",
            "Isabelle Nélisse"
          ],
          "country": "Canada, Spain, Mexico",
          "productionCompany": "De Milo",
          "imdbRating": 6.2,
          "awards": "11 wins & 19 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After a young couple take in their two nieces, they suspect that a supernatural spirit named Mama has latched onto their family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM5MjIwNDAwMl5BMl5BanBnXkFtZTcwNzQyOTY0OA@@._V1_SX300.jpg"
        },
        {
          "title": "Guardians of the Galaxy",
          "releaseDate": "2014-08-01T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "James Gunn",
          "cast": [
            "Chris Pratt",
            "Zoe Saldana",
            "Dave Bautista",
            "Vin Diesel"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 8,
          "awards": "Nominated for 2 Oscars. Another 52 wins & 100 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"
        },
        {
          "title": "War Dogs",
          "releaseDate": "2016-08-19T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Biography",
            "Comedy",
            "Crime",
            "Drama",
            "War"
          ],
          "director": "Todd Phillips",
          "cast": [
            "Miles Teller",
            "Steve Lantz",
            "Gregg Weiner",
            "David Packouz"
          ],
          "country": "USA, Cambodia, Romania",
          "productionCompany": "Warner Bros. Pictures",
          "imdbRating": 7.1,
          "awards": "Nominated for 1 Golden Globe. Another 2 nominations.",
          "mpaaRating": "R",
          "plot": "Loosely based on the true story of two young men, David Packouz and Efraim Diveroli, who won a three hundred million dollar contract from the Pentagon to arm America's allies in Afghanistan.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg"
        },
        {
          "title": "Neighbors",
          "releaseDate": "2014-05-09T04:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Comedy"
          ],
          "director": "Nicholas Stoller",
          "cast": [
            "Seth Rogen",
            "Rose Byrne",
            "Elise Vargas",
            "Zoey Vargas"
          ],
          "country": "USA",
          "productionCompany": "Good Universe",
          "imdbRating": 6.3,
          "awards": "7 wins & 12 nominations.",
          "mpaaRating": "R",
          "plot": "After they are forced to live next to a fraternity house, a couple with a newborn baby do whatever they can to take them down.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTQ0OTkzODgyNF5BMl5BanBnXkFtZTgwOTA3OTE4MDE@._V1_SX300.jpg"
        },
        {
          "title": "Pitch Perfect",
          "releaseDate": "2012-10-05T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Comedy",
            "Music",
            "Romance"
          ],
          "director": "Jason Moore",
          "cast": [
            "Anna Kendrick",
            "Skylar Astin",
            "Ben Platt",
            "Brittany Snow"
          ],
          "country": "USA",
          "productionCompany": "Gold Circle Films",
          "imdbRating": 7.1,
          "awards": "7 wins & 20 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Beca, a freshman at Barden University, is cajoled into joining The Bellas, her school's all-girls singing group. Injecting some much needed energy into their repertoire, The Bellas take on their male rivals in a campus competition.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcyMTMzNzE5N15BMl5BanBnXkFtZTcwNzg5NjM5Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Thor: The Dark World",
          "releaseDate": "2013-11-08T05:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Alan Taylor",
          "cast": [
            "Chris Hemsworth",
            "Natalie Portman",
            "Tom Hiddleston",
            "Anthony Hopkins"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 6.9,
          "awards": "4 wins & 21 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Begin Again",
          "releaseDate": "2014-07-11T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Comedy",
            "Drama",
            "Music",
            "Romance"
          ],
          "director": "John Carney",
          "cast": [
            "James Corden",
            "Keira Knightley",
            "Mark Ruffalo",
            "Hailee Steinfeld"
          ],
          "country": "USA",
          "productionCompany": "Exclusive Media",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Oscar. Another 5 wins & 17 nominations.",
          "mpaaRating": "R",
          "plot": "A chance encounter between a down-and-out music-business executive and a young singer-songwriter, new to Manhattan, turns into a promising collaboration between the two talents.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjAxMTI4MTgzMV5BMl5BanBnXkFtZTgwOTAwODEwMjE@._V1_SX300.jpg"
        },
        {
          "title": "Pain & Gain",
          "releaseDate": "2013-04-26T04:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Drama"
          ],
          "director": "Michael Bay",
          "cast": [
            "Mark Wahlberg",
            "Dwayne Johnson",
            "Anthony Mackie",
            "Tony Shalhoub"
          ],
          "country": "USA",
          "productionCompany": "De Line Pictures",
          "imdbRating": 6.4,
          "awards": "4 nominations.",
          "mpaaRating": "R",
          "plot": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU0NDE5NTU0OV5BMl5BanBnXkFtZTcwMzI1OTMzOQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Good Dinosaur",
          "releaseDate": "2015-11-25T05:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Drama",
            "Family",
            "Fantasy"
          ],
          "director": "Peter Sohn",
          "cast": [
            "Jeffrey Wright",
            "Frances McDormand",
            "Maleah Nipay-Padilla",
            "Ryan Teeple"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 6.7,
          "awards": "Nominated for 1 Golden Globe. Another 9 wins & 40 nominations.",
          "mpaaRating": "PG",
          "plot": "In a world where dinosaurs and humans live side-by-side, an Apatosaurus named Arlo makes an unlikely human friend.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MTg2NjQ4MV5BMl5BanBnXkFtZTgwNzcxOTY5NjE@._V1_SX300.jpg"
        },
        {
          "title": "Toy Story 4",
          "releaseDate": "2019-06-21T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Josh Cooley",
          "cast": [
            "Tom Hanks",
            "Tim Allen",
            "Annie Potts",
            "Tony Hale"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 7.8,
          "awards": "Won 1 Oscar. Another 55 wins & 62 nominations.",
          "mpaaRating": "G",
          "plot": "When a new toy called \"Forky\" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg"
        },
        {
          "title": "Rush",
          "releaseDate": "2013-09-27T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Biography",
            "Drama",
            "Sport"
          ],
          "director": "Ron Howard",
          "cast": [
            "Chris Hemsworth",
            "Daniel Brühl",
            "Olivia Wilde",
            "Alexandra Maria Lara"
          ],
          "country": "UK, Germany, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 8.1,
          "awards": "Nominated for 2 Golden Globes. Another 6 wins & 63 nominations.",
          "mpaaRating": "R",
          "plot": "The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "King Arthur: Legend of the Sword",
          "releaseDate": "2017-05-12T04:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
          ],
          "director": "Guy Ritchie",
          "cast": [
            "Charlie Hunnam",
            "Astrid Bergès-Frisbey",
            "Jude Law",
            "Djimon Hounsou"
          ],
          "country": "UK, USA, Australia",
          "productionCompany": "Weed Road",
          "imdbRating": 6.7,
          "awards": "10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Robbed of his birthright, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword from the stone, he is forced to acknowledge his true legacy - whether he likes it or not.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM3ODY3Njc5Ml5BMl5BanBnXkFtZTgwMjQ5NjM5MTI@._V1_SX300.jpg"
        },
        {
          "title": "Tomorrowland",
          "releaseDate": "2015-05-22T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Action",
            "Adventure",
            "Family",
            "Fantasy",
            "Mystery",
            "Sci-Fi"
          ],
          "director": "Brad Bird",
          "cast": [
            "George Clooney",
            "Hugh Laurie",
            "Britt Robertson",
            "Raffey Cassidy"
          ],
          "country": "USA, Spain, France, Canada, UK",
          "productionCompany": "Walt Disney Pictures",
          "imdbRating": 6.4,
          "awards": "2 wins & 19 nominations.",
          "mpaaRating": "PG",
          "plot": "Bound by a shared destiny, a teen bursting with scientific curiosity and a former boy-genius inventor embark on a mission to unearth the secrets of a place somewhere in time and space that exists in their collective memory.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4OTgzNTkwNF5BMl5BanBnXkFtZTgwMzI3MDE3NDE@._V1_SX300.jpg"
        },
        {
          "title": "The Hitman's Bodyguard",
          "releaseDate": "2017-08-18T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "Patrick Hughes",
          "cast": [
            "Elodie Yung",
            "Ryan Reynolds",
            "Tsuwayuki Saotome",
            "Roy Hill"
          ],
          "country": "USA, Hong Kong, Bulgaria, Netherlands, Canada, UK, France",
          "productionCompany": "Nu Boyana Film Studios",
          "imdbRating": 6.9,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "R",
          "plot": "The world's top bodyguard gets a new client, a hitman who must testify at the International Criminal Court. They must put their differences aside and work together to make it to the trial on time.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ5NjA2NDg1MV5BMl5BanBnXkFtZTgwMDAzNDc4MjI@._V1_SX300.jpg"
        },
        {
          "title": "Noah",
          "releaseDate": "2014-03-28T04:00:00.000Z",
          "runTime": 138,
          "genres": [
            "Action",
            "Adventure",
            "Drama"
          ],
          "director": "Darren Aronofsky",
          "cast": [
            "Russell Crowe",
            "Jennifer Connelly",
            "Ray Winstone",
            "Anthony Hopkins"
          ],
          "country": "USA",
          "productionCompany": "Disruption Entertainment",
          "imdbRating": 5.7,
          "awards": "Nominated for 1 Golden Globe. Another 1 win & 18 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Noah is chosen by God to undertake a momentous mission before an apocalyptic flood cleanses the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI2OTgyNTc0Ml5BMl5BanBnXkFtZTgwNDM1NTQxMTE@._V1_SX300.jpg"
        },
        {
          "title": "Sex Tape",
          "releaseDate": "2014-07-18T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Jake Kasdan",
          "cast": [
            "Cameron Diaz",
            "Jason Segel",
            "Rob Corddry",
            "Ellie Kemper"
          ],
          "country": "USA",
          "productionCompany": "Escape Artists",
          "imdbRating": 5.1,
          "awards": "2 wins & 3 nominations.",
          "mpaaRating": "R",
          "plot": "A married couple wake up to discover that the sex tape they made the evening before has gone missing, leading to a frantic search for its whereabouts.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDYzMzg5OTA0Ml5BMl5BanBnXkFtZTgwNjQzNzExMjE@._V1_SX300.jpg"
        },
        {
          "title": "The Hunger Games: Mockingjay - Part 2",
          "releaseDate": "2015-11-20T05:00:00.000Z",
          "runTime": 137,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Francis Lawrence",
          "cast": [
            "Jennifer Lawrence",
            "Josh Hutcherson",
            "Liam Hemsworth",
            "Woody Harrelson"
          ],
          "country": "USA, Germany, Canada, France",
          "productionCompany": "Color Force",
          "imdbRating": 6.6,
          "awards": "16 wins & 34 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Katniss and a team of rebels from District 13 prepare for the final battle that will decide the fate of Panem.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_SX300.jpg"
        },
        {
          "title": "The Hunger Games: Mockingjay - Part 1",
          "releaseDate": "2014-11-21T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Francis Lawrence",
          "cast": [
            "Jennifer Lawrence",
            "Josh Hutcherson",
            "Liam Hemsworth",
            "Woody Harrelson"
          ],
          "country": "USA, Canada, France",
          "productionCompany": "Color Force",
          "imdbRating": 6.6,
          "awards": "Nominated for 1 Golden Globe. Another 21 wins & 31 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Katniss Everdeen is in District 13 after she shatters the games forever. Under the leadership of President Coin and the advice of her trusted friends, Katniss spreads her wings as she fights to save Peeta and a nation moved by her courage.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_SX300.jpg"
        },
        {
          "title": "The Hunger Games: Catching Fire",
          "releaseDate": "2013-11-22T05:00:00.000Z",
          "runTime": 146,
          "genres": [
            "Action",
            "Adventure",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Francis Lawrence",
          "cast": [
            "Jennifer Lawrence",
            "Liam Hemsworth",
            "Jack Quaid",
            "Taylor St. Clair"
          ],
          "country": "USA",
          "productionCompany": "Color Force",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Golden Globe. Another 22 wins & 67 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_SX300.jpg"
        },
        {
          "title": "The Hangover Part III",
          "releaseDate": "2013-05-23T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Comedy",
            "Crime"
          ],
          "director": "Todd Phillips",
          "cast": [
            "Bradley Cooper",
            "Ed Helms",
            "Zach Galifianakis",
            "Justin Bartha"
          ],
          "country": "USA",
          "productionCompany": "Green Hat Films",
          "imdbRating": 5.8,
          "awards": "2 wins & 8 nominations.",
          "mpaaRating": "R",
          "plot": "When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down Mr. Chow, who has escaped from prison and is on the run.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTA0NjE1MzMzODheQTJeQWpwZ15BbWU3MDY4MTQ3Mzk@._V1_SX300.jpg"
        },
        {
          "title": "Ford v Ferrari",
          "releaseDate": "2019-11-15T05:00:00.000Z",
          "runTime": 152,
          "genres": [
            "Action",
            "Biography",
            "Drama",
            "Sport"
          ],
          "director": "James Mangold",
          "cast": [
            "Matt Damon",
            "Christian Bale",
            "Jon Bernthal",
            "Caitriona Balfe"
          ],
          "country": "USA",
          "productionCompany": "Chernin Entertainment",
          "imdbRating": 8.1,
          "awards": "Won 2 Oscars. Another 22 wins & 87 nominations.",
          "mpaaRating": "PG-13",
          "plot": "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
          "poster": "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg"
        },
        {
          "title": "Carrie",
          "releaseDate": "2013-10-18T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Drama",
            "Horror"
          ],
          "director": "Kimberly Peirce",
          "cast": [
            "Julianne Moore",
            "Chloë Grace Moretz",
            "Gabriella Wilde",
            "Portia Doubleday"
          ],
          "country": "USA, Canada",
          "productionCompany": "Misher Films",
          "imdbRating": 5.9,
          "awards": "6 wins & 7 nominations.",
          "mpaaRating": "R",
          "plot": "A shy girl, outcasted by her peers and sheltered by her religious mother, unleashes telekinetic terror on her small town after being pushed too far at her senior prom.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODg2MDU2MjYxNl5BMl5BanBnXkFtZTcwMDQ5MzU0OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Nymphomaniac: Vol. I",
          "releaseDate": "2014-03-06T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Drama"
          ],
          "director": "Lars von Trier",
          "cast": [
            "Charlotte Gainsbourg",
            "Stellan Skarsgård",
            "Stacy Martin",
            "Shia LaBeouf"
          ],
          "country": "Denmark, Germany, Belgium, UK, France, Sweden, USA",
          "productionCompany": "N/A",
          "imdbRating": 6.9,
          "awards": "14 wins & 30 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "A self-diagnosed nymphomaniac recounts her erotic experiences to the man who saved her after a beating.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA3Njc5MjI5Ml5BMl5BanBnXkFtZTgwNTY3Mjg3MDE@._V1_SX300.jpg"
        },
        {
          "title": "Miss Peregrine's Home for Peculiar Children",
          "releaseDate": "2016-09-30T04:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Adventure",
            "Drama",
            "Family",
            "Fantasy",
            "Thriller"
          ],
          "director": "Tim Burton",
          "cast": [
            "Eva Green",
            "Asa Butterfield",
            "Samuel L. Jackson",
            "Judi Dench"
          ],
          "country": "USA, UK, Belgium, Canada",
          "productionCompany": "20th Century Fox",
          "imdbRating": 6.7,
          "awards": "2 wins & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When Jacob (Asa Butterfield) discovers clues to a mystery that stretches across time, he finds Miss Peregrine's Home for Peculiar Children. But the danger deepens after he gets to know the residents and learns about their special powers.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU0Nzc5NzI5NV5BMl5BanBnXkFtZTgwNTk1MDE4MDI@._V1_SX300.jpg"
        },
        {
          "title": "Mud",
          "releaseDate": "2013-05-10T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Drama"
          ],
          "director": "Jeff Nichols",
          "cast": [
            "Matthew McConaughey",
            "Reese Witherspoon",
            "Tye Sheridan",
            "Jacob Lofland"
          ],
          "country": "USA",
          "productionCompany": "FilmNation",
          "imdbRating": 7.4,
          "awards": "15 wins & 39 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two young boys encounter a fugitive and form a pact to help him evade the vigilantes that are on his trail and to reunite him with his true love.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2MzcyODgyNV5BMl5BanBnXkFtZTcwNTc4MDYwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Seven Psychopaths",
          "releaseDate": "2012-10-12T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Comedy",
            "Crime"
          ],
          "director": "Martin McDonagh",
          "cast": [
            "Michael Pitt",
            "Michael Stuhlbarg",
            "Sam Rockwell",
            "Colin Farrell"
          ],
          "country": "UK, USA",
          "productionCompany": "Blueprint Productions",
          "imdbRating": 7.2,
          "awards": "3 wins & 21 nominations.",
          "mpaaRating": "R",
          "plot": "A struggling screenwriter inadvertently becomes entangled in the Los Angeles criminal underworld after his oddball friends kidnap a gangster's beloved Shih Tzu.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgwMzUxMjc0M15BMl5BanBnXkFtZTcwMzQ2MjYyOA@@._V1_SX300.jpg"
        },
        {
          "title": "Let's Be Cops",
          "releaseDate": "2014-08-13T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Luke Greenfield",
          "cast": [
            "Jake Johnson",
            "Damon Wayans Jr.",
            "Rob Riggle",
            "Nina Dobrev"
          ],
          "country": "USA",
          "productionCompany": "Luke Greenfield",
          "imdbRating": 6.4,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "Two struggling pals dress as police officers for a costume party and become neighborhood sensations. But when these newly-minted \"heroes\" get tangled in a real life web of mobsters and dirty detectives, they must put their fake badges on the line.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI3MDY2ODQwNF5BMl5BanBnXkFtZTgwNjUzNjE4MTE@._V1_SX300.jpg"
        },
        {
          "title": "Trance",
          "releaseDate": "2013-03-27T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Danny Boyle",
          "cast": [
            "James McAvoy",
            "Vincent Cassel",
            "Rosario Dawson",
            "Danny Sapani"
          ],
          "country": "UK, USA, France",
          "productionCompany": "Cloud Eight",
          "imdbRating": 6.9,
          "awards": "3 wins & 3 nominations.",
          "mpaaRating": "R",
          "plot": "An art auctioneer becomes mixed up with a group of criminals partners with a hypnotherapist in order to recover a lost painting.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMzNjU1MTg5NF5BMl5BanBnXkFtZTcwMTExMTcwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Best Offer",
          "releaseDate": "2014-01-01T05:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Romance"
          ],
          "director": "Giuseppe Tornatore",
          "cast": [
            "Geoffrey Rush",
            "Jim Sturgess",
            "Sylvia Hoeks",
            "Donald Sutherland"
          ],
          "country": "Italy",
          "productionCompany": "Warner Bros.",
          "imdbRating": 7.8,
          "awards": "25 wins & 26 nominations.",
          "mpaaRating": "R",
          "plot": "A lonely art expert working for a mysterious and reclusive heiress finds not only her art worth examining.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQ3NjA0N15BMl5BanBnXkFtZTgwODQyNjQ4MDE@._V1_SX300.jpg"
        },
        {
          "title": "Sinister",
          "releaseDate": "2012-10-12T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Scott Derrickson",
          "cast": [
            "Ethan Hawke",
            "Juliet Rylance",
            "Fred Thompson",
            "James Ransone"
          ],
          "country": "USA, UK, Canada",
          "productionCompany": "Blumhouse",
          "imdbRating": 6.8,
          "awards": "3 wins & 13 nominations.",
          "mpaaRating": "R",
          "plot": "Washed-up true crime writer Ellison Oswalt finds a box of super 8 home movies in his new home that suggest the murder that he is currently researching is the work of a serial killer whose work dates back to the 1960s.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Pompeii",
          "releaseDate": "2014-02-21T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "History",
            "Romance"
          ],
          "director": "Paul W.S. Anderson",
          "cast": [
            "Dylan Schombing",
            "Jean-Francois Lachapelle",
            "Rebecca Roberts",
            "Kiefer Sutherland"
          ],
          "country": "Canada, Germany, USA, UK",
          "productionCompany": "Constantin Film",
          "imdbRating": 5.5,
          "awards": "9 wins & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A slave-turned-gladiator finds himself in a race against time to save his true love, who has been betrothed to a corrupt Roman Senator. As Mount Vesuvius erupts, he must fight to save his beloved as Pompeii crumbles around him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjJkMzhjZWItNzVjMS00N2Y0LWE5YWMtY2Q5NGIzOWZmOTEzXkEyXkFqcGdeQXVyMTAwMzUyMzUy._V1_SX300.jpg"
        },
        {
          "title": "Magic Mike",
          "releaseDate": "2012-06-29T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Steven Soderbergh",
          "cast": [
            "Matthew McConaughey",
            "Channing Tatum",
            "Olivia Munn",
            "Alex Pettyfer"
          ],
          "country": "USA",
          "productionCompany": "Extension 765",
          "imdbRating": 6.1,
          "awards": "9 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "A male stripper teaches a younger performer how to party, pick up women, and make easy money.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQzMDMzOTA5M15BMl5BanBnXkFtZTcwMjc4MTg4Nw@@._V1_SX300.jpg"
        },
        {
          "title": "The Call",
          "releaseDate": "2013-03-15T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Crime",
            "Drama",
            "Horror",
            "Thriller"
          ],
          "director": "Brad Anderson",
          "cast": [
            "Halle Berry",
            "Abigail Breslin",
            "Morris Chestnut",
            "Michael Eklund"
          ],
          "country": "USA",
          "productionCompany": "Troika Pictures",
          "imdbRating": 6.7,
          "awards": "1 win & 11 nominations.",
          "mpaaRating": "R",
          "plot": "When a veteran 911 operator takes a life-altering call from a teenage girl who has just been abducted, she realizes that she must confront a killer from her past in order to save the girl's life.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjExNDkzNjAwOV5BMl5BanBnXkFtZTcwMDMzMzQwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Flight",
          "releaseDate": "2012-11-02T04:00:00.000Z",
          "runTime": 138,
          "genres": [
            "Drama",
            "Thriller"
          ],
          "director": "Robert Zemeckis",
          "cast": [
            "Nadine Velazquez",
            "Denzel Washington",
            "Carter Cabassa",
            "Adam C. Edwards"
          ],
          "country": "USA, United Arab Emirates",
          "productionCompany": "ImageMovers",
          "imdbRating": 7.3,
          "awards": "Nominated for 2 Oscars. Another 15 wins & 43 nominations.",
          "mpaaRating": "R",
          "plot": "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg"
        },
        {
          "title": "Fast & Furious 6",
          "releaseDate": "2013-05-24T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Justin Lin",
          "cast": [
            "Vin Diesel",
            "Paul Walker",
            "Dwayne Johnson",
            "Jordana Brewster"
          ],
          "country": "USA, Japan, Spain, UK",
          "productionCompany": "Original Film",
          "imdbRating": 7,
          "awards": "10 wins & 22 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Parker",
          "releaseDate": "2013-01-25T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Taylor Hackford",
          "cast": [
            "Jason Statham",
            "Jennifer Lopez",
            "Michael Chiklis",
            "Wendell Pierce"
          ],
          "country": "USA",
          "productionCompany": "Sierra/Affinity",
          "imdbRating": 6.2,
          "awards": "1 nomination.",
          "mpaaRating": "R",
          "plot": "A thief with a unique code of professional ethics is double-crossed by his crew and left for dead. Assuming a new disguise and forming an unlikely alliance with a woman on the inside, he looks to hijack the score of the crew's latest heist.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk4MzM2NTQ1Nl5BMl5BanBnXkFtZTcwODIyODY1OA@@._V1_SX300.jpg"
        },
        {
          "title": "The Raid: Redemption",
          "releaseDate": "2012-04-13T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Gareth Evans",
          "cast": [
            "Iko Uwais",
            "Joe Taslim",
            "Donny Alamsyah",
            "Yayan Ruhian"
          ],
          "country": "Indonesia, France, USA",
          "productionCompany": "Celluloid Dreams",
          "imdbRating": 7.6,
          "awards": "8 wins & 13 nominations.",
          "mpaaRating": "R",
          "plot": "A S.W.A.T. team becomes trapped in a tenement run by a ruthless mobster and his army of killers and thugs.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZGIxODNjM2YtZjA5Mi00MjA5LTk2YjItODE0OWI5NThjNTBmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg"
        },
        {
          "title": "Spotlight",
          "releaseDate": "2015-11-20T05:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Biography",
            "Crime",
            "Drama"
          ],
          "director": "Tom McCarthy",
          "cast": [
            "Mark Ruffalo",
            "Michael Keaton",
            "Rachel McAdams",
            "Liev Schreiber"
          ],
          "country": "USA",
          "productionCompany": "Anonymous Content",
          "imdbRating": 8.1,
          "awards": "Won 2 Oscars. Another 122 wins & 143 nominations.",
          "mpaaRating": "R",
          "plot": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg"
        },
        {
          "title": "The Edge of Seventeen",
          "releaseDate": "2016-11-18T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Kelly Fremon Craig",
          "cast": [
            "Hailee Steinfeld",
            "Haley Lu Richardson",
            "Blake Jenner",
            "Kyra Sedgwick"
          ],
          "country": "USA, China",
          "productionCompany": "STX Entertainment",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 Golden Globe. Another 8 wins & 28 nominations.",
          "mpaaRating": "R",
          "plot": "High-school life gets even more unbearable for Nadine when her best friend, Krista, starts dating her older brother.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODE2NjE4NjYyMV5BMl5BanBnXkFtZTgwNzk3MjQ0OTE@._V1_SX300.jpg"
        },
        {
          "title": "X-Men: Days of Future Past",
          "releaseDate": "2014-05-23T04:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Bryan Singer",
          "cast": [
            "Hugh Jackman",
            "James McAvoy",
            "Michael Fassbender",
            "Jennifer Lawrence"
          ],
          "country": "USA, UK, Canada",
          "productionCompany": "Bad Hat Harry",
          "imdbRating": 7.9,
          "awards": "Nominated for 1 Oscar. Another 16 wins & 47 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "The Judge",
          "releaseDate": "2014-10-10T04:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Crime",
            "Drama"
          ],
          "director": "David Dobkin",
          "cast": [
            "Robert Downey Jr.",
            "Robert Duvall",
            "Vera Farmiga",
            "Billy Bob Thornton"
          ],
          "country": "USA",
          "productionCompany": "Big Kid Pictures",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Oscar. Another 3 wins & 8 nominations.",
          "mpaaRating": "R",
          "plot": "Big-city lawyer Hank Palmer returns to his childhood home where his father, the town's judge, is suspected of murder. Hank sets out to discover the truth and, along the way, reconnects with his estranged family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcyNzIxOTIwMV5BMl5BanBnXkFtZTgwMzE0NjQwMjE@._V1_SX300.jpg"
        },
        {
          "title": "The Amazing Spider-Man 2",
          "releaseDate": "2014-05-02T04:00:00.000Z",
          "runTime": 142,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Marc Webb",
          "cast": [
            "Andrew Garfield",
            "Emma Stone",
            "Jamie Foxx",
            "Dane DeHaan"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 6.6,
          "awards": "4 wins & 30 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg"
        },
        {
          "title": "Safety Not Guaranteed",
          "releaseDate": "2012-06-15T04:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Colin Trevorrow",
          "cast": [
            "Aubrey Plaza",
            "Lauren Carlos",
            "Basil Harris",
            "Mary Lynn Rajskub"
          ],
          "country": "USA",
          "productionCompany": "Big Beach",
          "imdbRating": 7,
          "awards": "8 wins & 18 nominations.",
          "mpaaRating": "R",
          "plot": "Three magazine employees head out on an assignment to interview a guy who placed a classified advertisement seeking a companion for time travel.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOWU3ZDJmMTQtZjRiZi00MjQ5LWFlZjctYzhjMjRlZGJmMTY3XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
        },
        {
          "title": "Deepwater Horizon",
          "releaseDate": "2016-09-30T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Drama",
            "History",
            "Thriller"
          ],
          "director": "Peter Berg",
          "cast": [
            "Mark Wahlberg",
            "Kurt Russell",
            "Douglas M. Griffin",
            "James DuMont"
          ],
          "country": "USA, Hong Kong, China",
          "productionCompany": "Participant Media",
          "imdbRating": 7.1,
          "awards": "Nominated for 2 Oscars. Another 3 wins & 13 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A dramatization of the disaster in April 2010, when the offshore drilling rig called the Deepwater Horizon exploded, resulting in the worst oil spill in American history.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTEzNDU0OTgxM15BMl5BanBnXkFtZTgwNjA0ODM2OTE@._V1_SX300.jpg"
        },
        {
          "title": "Dirty Grandpa",
          "releaseDate": "2016-01-22T05:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Comedy"
          ],
          "director": "Dan Mazer",
          "cast": [
            "Robert De Niro",
            "Zac Efron",
            "Zoey Deutch",
            "Aubrey Plaza"
          ],
          "country": "USA, UK",
          "productionCompany": "Bill Block Media",
          "imdbRating": 5.9,
          "awards": "2 wins & 11 nominations.",
          "mpaaRating": "R",
          "plot": "Right before his wedding, an uptight guy is tricked into driving his grandfather, a lecherous former Army Lieutenant Colonel, to Florida for Spring Break.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzk0NzkyNDk2M15BMl5BanBnXkFtZTgwNDczOTU3NzE@._V1_SX300.jpg"
        },
        {
          "title": "Blade Runner 2049",
          "releaseDate": "2017-10-06T04:00:00.000Z",
          "runTime": 164,
          "genres": [
            "Action",
            "Drama",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Denis Villeneuve",
          "cast": [
            "Ryan Gosling",
            "Dave Bautista",
            "Robin Wright",
            "Mark Arnold"
          ],
          "country": "USA, UK, Canada, Hungary, Spain, Mexico",
          "productionCompany": "Torridon Films",
          "imdbRating": 8,
          "awards": "Won 2 Oscars. Another 97 wins & 156 nominations.",
          "mpaaRating": "R",
          "plot": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
        },
        {
          "title": "Resident Evil: Retribution",
          "releaseDate": "2012-09-14T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Action",
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Paul W.S. Anderson",
          "cast": [
            "Milla Jovovich",
            "Sienna Guillory",
            "Michelle Rodriguez",
            "Aryana Engineer"
          ],
          "country": "Germany, Canada, USA, France, UK",
          "productionCompany": "Davis Films",
          "imdbRating": 5.4,
          "awards": "2 wins & 6 nominations.",
          "mpaaRating": "R",
          "plot": "Alice fights alongside a resistance movement to regain her freedom from an Umbrella Corporation testing facility.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmY0NjcwMWMtN2MyNC00ZmZjLWEwZTAtM2ExYWE1NDUwNWQyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "End of Watch",
          "releaseDate": "2012-09-21T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "David Ayer",
          "cast": [
            "Jake Gyllenhaal",
            "Michael Peña",
            "Natalie Martinez",
            "Anna Kendrick"
          ],
          "country": "USA",
          "productionCompany": "Le Grisbi",
          "imdbRating": 7.6,
          "awards": "3 wins & 10 nominations.",
          "mpaaRating": "R",
          "plot": "Shot documentary-style, this film follows the daily grind of two young police officers in LA who are partners and friends, and what happens when they meet criminal forces greater than themselves.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjU0ODU5Ml5BMl5BanBnXkFtZTcwNjI4MzAyOA@@._V1_SX300.jpg"
        },
        {
          "title": "Percy Jackson: Sea of Monsters",
          "releaseDate": "2013-08-07T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy",
            "Thriller"
          ],
          "director": "Thor Freudenthal",
          "cast": [
            "Logan Lerman",
            "Alexandra Daddario",
            "Douglas Smith",
            "Leven Rambin"
          ],
          "country": "USA",
          "productionCompany": "Sunswept Entertainment",
          "imdbRating": 5.8,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "PG",
          "plot": "In order to restore their dying safe haven, the son of Poseidon and his friends embark on a quest to the Sea of Monsters, to find the mythical Golden Fleece, all the while trying to stop an ancient evil from rising.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmE4MThmY2UtNDYxOC00YmFkLTg1NGEtMTQ3YTFmZjdhZmRiXkEyXkFqcGdeQXVyNjA3MDQ1NzY@._V1_SX300.jpg"
        },
        {
          "title": "Django Unchained",
          "releaseDate": "2012-12-25T05:00:00.000Z",
          "runTime": 165,
          "genres": [
            "Drama",
            "Western"
          ],
          "director": "Quentin Tarantino",
          "cast": [
            "Jamie Foxx",
            "Christoph Waltz",
            "Leonardo DiCaprio",
            "Kerry Washington"
          ],
          "country": "USA",
          "productionCompany": "A Band Apart",
          "imdbRating": 8.4,
          "awards": "Won 2 Oscars. Another 55 wins & 158 nominations.",
          "mpaaRating": "R",
          "plot": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg"
        },
        {
          "title": "Captain America: The Winter Soldier",
          "releaseDate": "2014-04-04T04:00:00.000Z",
          "runTime": 136,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Anthony Russo, Joe Russo",
          "cast": [
            "Chris Evans",
            "Samuel L. Jackson",
            "Scarlett Johansson",
            "Robert Redford"
          ],
          "country": "USA",
          "productionCompany": "Marvel Enterprises",
          "imdbRating": 7.7,
          "awards": "Nominated for 1 Oscar. Another 5 wins & 50 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg"
        },
        {
          "title": "Divergent",
          "releaseDate": "2014-03-21T04:00:00.000Z",
          "runTime": 139,
          "genres": [
            "Action",
            "Adventure",
            "Mystery",
            "Sci-Fi"
          ],
          "director": "Neil Burger",
          "cast": [
            "Shailene Woodley",
            "Theo James",
            "Ashley Judd",
            "Jai Courtney"
          ],
          "country": "USA",
          "productionCompany": "Red Wagon Entertainment",
          "imdbRating": 6.6,
          "awards": "7 wins & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In a world divided by factions based on virtues, Tris learns she's Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's too late.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYxMzYwODE4OV5BMl5BanBnXkFtZTgwNDE5MzE2MDE@._V1_SX300.jpg"
        },
        {
          "title": "A Separation",
          "releaseDate": "2011-03-16T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Drama"
          ],
          "director": "Asghar Farhadi",
          "cast": [
            "Payman Maadi",
            "Leila Hatami",
            "Sareh Bayat",
            "Shahab Hosseini"
          ],
          "country": "Iran, France, Australia",
          "productionCompany": "Asghar Farhadi",
          "imdbRating": 8.3,
          "awards": "Won 1 Oscar. Another 88 wins & 49 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2JmMjViMjMtZTM5Mi00ZGZkLTk5YzctZDg5MjFjZDE4NjNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Black Panther",
          "releaseDate": "2018-02-16T05:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Ryan Coogler",
          "cast": [
            "Chadwick Boseman",
            "Michael B. Jordan",
            "Lupita Nyong'o",
            "Danai Gurira"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Pictures",
          "imdbRating": 7.3,
          "awards": "Won 3 Oscars. Another 109 wins & 272 nominations.",
          "mpaaRating": "PG-13",
          "plot": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"
        },
        {
          "title": "Chappie",
          "releaseDate": "2015-03-06T05:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Neill Blomkamp",
          "cast": [
            "Sharlto Copley",
            "Dev Patel",
            "Ninja",
            "Yo-Landi Visser"
          ],
          "country": "South Africa, USA",
          "productionCompany": "Kinberg Genre",
          "imdbRating": 6.8,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "In the near future, crime is patrolled by a mechanized police force. When one police droid, Chappie, is stolen and given new programming, he becomes the first robot with the ability to think and feel for himself.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUyNTI4NTIwNl5BMl5BanBnXkFtZTgwMjQ4MTI0NDE@._V1_SX300.jpg"
        },
        {
          "title": "RED 2",
          "releaseDate": "2013-07-19T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "Dean Parisot",
          "cast": [
            "Bruce Willis",
            "John Malkovich",
            "Mary-Louise Parker",
            "Helen Mirren"
          ],
          "country": "USA, France, Canada, Russia",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 6.6,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Retired CIA agent Frank Moses reunites his unlikely team of elite operatives for a global quest to track down a missing portable nuclear device.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI2ODQ4ODY3Nl5BMl5BanBnXkFtZTcwNTc2NzE1OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Nebraska",
          "releaseDate": "2014-01-24T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Adventure",
            "Comedy",
            "Drama"
          ],
          "director": "Alexander Payne",
          "cast": [
            "Bruce Dern",
            "Will Forte",
            "June Squibb",
            "Bob Odenkirk"
          ],
          "country": "USA",
          "productionCompany": "Blue Lake Media Fund",
          "imdbRating": 7.7,
          "awards": "Nominated for 6 Oscars. Another 28 wins & 162 nominations.",
          "mpaaRating": "R",
          "plot": "An aging, booze-addled father makes the trip from Montana to Nebraska with his estranged son in order to claim a million-dollar Mega Sweepstakes Marketing prize.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGQzODdlMDktNzU4ZC00N2M3LWFkYTAtYTM1NTE0ZWI5YTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
        },
        {
          "title": "The Place Beyond the Pines",
          "releaseDate": "2013-04-19T04:00:00.000Z",
          "runTime": 140,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Derek Cianfrance",
          "cast": [
            "Ryan Gosling",
            "Craig Van Hook",
            "Eva Mendes",
            "Olga Merediz"
          ],
          "country": "USA",
          "productionCompany": "Sidney Kimmel Entertainment",
          "imdbRating": 7.3,
          "awards": "5 wins & 22 nominations.",
          "mpaaRating": "R",
          "plot": "A motorcycle stunt rider turns to robbing banks as a way to provide for his lover and their newborn child, a decision that puts him on a collision course with an ambitious rookie cop navigating a department ruled by a corrupt detective.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjc1OTEwNjU4N15BMl5BanBnXkFtZTcwNzUzNDIwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "After Earth",
          "releaseDate": "2013-05-31T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "M. Night Shyamalan",
          "cast": [
            "Jaden Smith",
            "Will Smith",
            "Sophie Okonedo",
            "Zoë Kravitz"
          ],
          "country": "USA",
          "productionCompany": "Overbrook Entertainment",
          "imdbRating": 4.8,
          "awards": "3 wins & 8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A crash landing leaves Kitai Raige and his father Cypher stranded on Earth, a millennium after events forced humanity's escape. With Cypher injured, Kitai must embark on a perilous journey to signal for help.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MzQyMjkwMl5BMl5BanBnXkFtZTcwMDk2OTE0OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Unbroken",
          "releaseDate": "2014-12-25T05:00:00.000Z",
          "runTime": 137,
          "genres": [
            "Action",
            "Biography",
            "Drama",
            "Sport",
            "War"
          ],
          "director": "Angelina Jolie",
          "cast": [
            "Jack O'Connell",
            "Domhnall Gleeson",
            "Garrett Hedlund",
            "Miyavi"
          ],
          "country": "USA",
          "productionCompany": "Jolie Pas",
          "imdbRating": 7.2,
          "awards": "Nominated for 3 Oscars. Another 16 wins & 29 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After a near-fatal plane crash in WWII, Olympian Louis Zamperini spends a harrowing 47 days in a raft with two fellow crewmen before he's caught by the Japanese navy and sent to a prisoner-of-war camp.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY3ODg2OTgyOF5BMl5BanBnXkFtZTgwODk1OTAwMzE@._V1_SX300.jpg"
        },
        {
          "title": "American Hustle",
          "releaseDate": "2013-12-20T05:00:00.000Z",
          "runTime": 138,
          "genres": [
            "Crime",
            "Drama"
          ],
          "director": "David O. Russell",
          "cast": [
            "Christian Bale",
            "Bradley Cooper",
            "Amy Adams",
            "Jeremy Renner"
          ],
          "country": "USA, China",
          "productionCompany": "Atlas Entertainment",
          "imdbRating": 7.2,
          "awards": "Nominated for 10 Oscars. Another 69 wins & 217 nominations.",
          "mpaaRating": "R",
          "plot": "A con man, Irving Rosenfeld, along with his seductive partner Sydney Prosser, is forced to work for a wild F.B.I. Agent, Richie DiMaso, who pushes them into a world of Jersey powerbrokers and the Mafia.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMmM4YzJjZGMtNjQxMy00NjdlLWJjYTItZWZkYzdhOTdhNzFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Her",
          "releaseDate": "2014-01-10T05:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Drama",
            "Romance",
            "Sci-Fi"
          ],
          "director": "Spike Jonze",
          "cast": [
            "Joaquin Phoenix",
            "Lynn Adrianna Freedman",
            "Lisa Renee Pitts",
            "Gabe Gomez"
          ],
          "country": "USA",
          "productionCompany": "Annapurna Pictures",
          "imdbRating": 8,
          "awards": "Won 1 Oscar. Another 82 wins & 186 nominations.",
          "mpaaRating": "R",
          "plot": "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg"
        },
        {
          "title": "Southpaw",
          "releaseDate": "2015-07-24T04:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Drama",
            "Sport"
          ],
          "director": "Antoine Fuqua",
          "cast": [
            "Jake Gyllenhaal",
            "Rachel McAdams",
            "Forest Whitaker",
            "Oona Laurence"
          ],
          "country": "Hong Kong, USA",
          "productionCompany": "Riche Productions",
          "imdbRating": 7.4,
          "awards": "11 nominations.",
          "mpaaRating": "R",
          "plot": "After a fatal incident sends him on a rampant path of destruction, a champion boxer fights to get custody of his daughter and revive his professional career.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI1MTcwODk0MV5BMl5BanBnXkFtZTgwMTgwMDM5NTE@._V1_SX300.jpg"
        },
        {
          "title": "The Campaign",
          "releaseDate": "2012-08-10T04:00:00.000Z",
          "runTime": 85,
          "genres": [
            "Comedy"
          ],
          "director": "Jay Roach",
          "cast": [
            "Will Ferrell",
            "Zach Galifianakis",
            "Jason Sudeikis",
            "Dylan McDermott"
          ],
          "country": "USA",
          "productionCompany": "Gary Sanchez Productions",
          "imdbRating": 6.1,
          "awards": "2 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "An incumbent Representative embroiled in personal scandal faces a no-holds-barred challenge from a naive newcomer funded by two unscrupulous billionaire lobbyist brothers.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY0NjI3MzM2Nl5BMl5BanBnXkFtZTcwNDgxNjA5Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Zero Dark Thirty",
          "releaseDate": "2013-01-11T05:00:00.000Z",
          "runTime": 157,
          "genres": [
            "Drama",
            "History",
            "Thriller",
            "War"
          ],
          "director": "Kathryn Bigelow",
          "cast": [
            "Jason Clarke",
            "Reda Kateb",
            "Jessica Chastain",
            "Kyle Chandler"
          ],
          "country": "USA, United Arab Emirates",
          "productionCompany": "Mark Boal",
          "imdbRating": 7.4,
          "awards": "Won 1 Oscar. Another 84 wins & 173 nominations.",
          "mpaaRating": "R",
          "plot": "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L.s Team 6 in May 2011.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4OTUyNzcwN15BMl5BanBnXkFtZTcwMTQ1NDE3OA@@._V1_SX300.jpg"
        },
        {
          "title": "The Maze Runner",
          "releaseDate": "2014-09-19T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Wes Ball",
          "cast": [
            "Dylan O'Brien",
            "Aml Ameen",
            "Ki Hong Lee",
            "Blake Cooper"
          ],
          "country": "USA, UK",
          "productionCompany": "Temple Hill",
          "imdbRating": 6.8,
          "awards": "4 wins & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow \"runners\" for a shot at escape.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg"
        },
        {
          "title": "Pirates of the Caribbean: Dead Men Tell No Tales",
          "releaseDate": "2017-05-26T04:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Joachim Rønning, Espen Sandberg",
          "cast": [
            "Johnny Depp",
            "Javier Bardem",
            "Geoffrey Rush",
            "Brenton Thwaites"
          ],
          "country": "USA, Australia, UK, Canada",
          "productionCompany": "Jerry Bruckheimer Films",
          "imdbRating": 6.5,
          "awards": "1 win & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Captain Jack Sparrow is pursued by old rival Captain Salazar and a crew of deadly ghosts who have escaped from the Devil's Triangle. They're determined to kill every pirate at sea...notably Jack.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SX300.jpg"
        },
        {
          "title": "Wreck-It Ralph",
          "releaseDate": "2012-11-02T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Rich Moore",
          "cast": [
            "John C. Reilly",
            "Sarah Silverman",
            "Jack McBrayer",
            "Jane Lynch"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Animation",
          "imdbRating": 7.7,
          "awards": "Nominated for 1 Oscar. Another 33 wins & 41 nominations.",
          "mpaaRating": "PG",
          "plot": "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_SX300.jpg"
        },
        {
          "title": "The Expendables 2",
          "releaseDate": "2012-08-17T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Simon West",
          "cast": [
            "Sylvester Stallone",
            "Jason Statham",
            "Jet Li",
            "Dolph Lundgren"
          ],
          "country": "USA, Germany, Bulgaria, China",
          "productionCompany": "Nu Image",
          "imdbRating": 6.6,
          "awards": "4 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDg1YWRhNmQtMGI5Ny00MTI3LTg2OTItZWEzZGE3OGZjZDNhXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg"
        },
        {
          "title": "Killing Them Softly",
          "releaseDate": "2012-11-30T05:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Andrew Dominik",
          "cast": [
            "Brad Pitt",
            "Scoot McNairy",
            "Ben Mendelsohn",
            "James Gandolfini"
          ],
          "country": "USA",
          "productionCompany": "Plan B Entertainment",
          "imdbRating": 6.2,
          "awards": "3 wins & 9 nominations.",
          "mpaaRating": "R",
          "plot": "Jackie Cogan is an enforcer hired to restore order after three dumb guys rob a Mob protected card game, causing the local criminal economy to collapse.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODk3MDg2NDk5M15BMl5BanBnXkFtZTcwMjcxMjMzOA@@._V1_SX300.jpg"
        },
        {
          "title": "This Is 40",
          "releaseDate": "2012-12-21T05:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Judd Apatow",
          "cast": [
            "Paul Rudd",
            "Leslie Mann",
            "Maude Apatow",
            "Iris Apatow"
          ],
          "country": "USA",
          "productionCompany": "Apatow Company",
          "imdbRating": 6.2,
          "awards": "2 wins & 11 nominations.",
          "mpaaRating": "R",
          "plot": "Pete and Debbie are both about to turn 40, their kids hate each other, both of their businesses are failing, they're on the verge of losing their house, and their relationship is threatening to fall apart.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzQxMDQ1NjA4N15BMl5BanBnXkFtZTcwNTE5MjQ3OA@@._V1_SX300.jpg"
        },
        {
          "title": "Moonrise Kingdom",
          "releaseDate": "2012-06-29T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Wes Anderson",
          "cast": [
            "Bruce Willis",
            "Edward Norton",
            "Bill Murray",
            "Frances McDormand"
          ],
          "country": "USA",
          "productionCompany": "Indian Paintbrush",
          "imdbRating": 7.8,
          "awards": "Nominated for 1 Oscar. Another 37 wins & 120 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzllMWI1ZDQtMmFhNS00NzJkLThmMTMtNzFmMmMyYjU3ZGVjXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"
        },
        {
          "title": "Snow White and the Huntsman",
          "releaseDate": "2012-06-01T04:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
          ],
          "director": "Rupert Sanders",
          "cast": [
            "Kristen Stewart",
            "Chris Hemsworth",
            "Charlize Theron",
            "Sam Claflin"
          ],
          "country": "USA, UK",
          "productionCompany": "Roth Films",
          "imdbRating": 6.1,
          "awards": "Nominated for 2 Oscars. Another 13 wins & 31 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In a twist to the fairy tale, the Huntsman ordered to take Snow White into the woods to be killed winds up becoming her protector and mentor in a quest to vanquish the Evil Queen.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGQ5MWNjZGQtOWM2ZC00MjEyLWEwODAtN2JmN2U0OWQ0YzI3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Ender's Game",
          "releaseDate": "2013-11-01T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Gavin Hood",
          "cast": [
            "Asa Butterfield",
            "Harrison Ford",
            "Hailee Steinfeld",
            "Abigail Breslin"
          ],
          "country": "USA",
          "productionCompany": "Chartoff Productions",
          "imdbRating": 6.6,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Young Ender Wiggin is recruited by the International Military to lead the fight against the Formics, an insectoid alien race who had previously tried to invade Earth and had inflicted heavy losses on humankind.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg"
        },
        {
          "title": "Bohemian Rhapsody",
          "releaseDate": "2018-11-02T04:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Biography",
            "Drama",
            "Music"
          ],
          "director": "Bryan Singer",
          "cast": [
            "Rami Malek",
            "Lucy Boynton",
            "Gwilym Lee",
            "Ben Hardy"
          ],
          "country": "UK, USA",
          "productionCompany": "Queen Films",
          "imdbRating": 8,
          "awards": "Won 4 Oscars. Another 41 wins & 77 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SX300.jpg"
        },
        {
          "title": "The Way Way Back",
          "releaseDate": "2013-07-26T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Nat Faxon, Jim Rash",
          "cast": [
            "Steve Carell",
            "Toni Collette",
            "Allison Janney",
            "AnnaSophia Robb"
          ],
          "country": "USA",
          "productionCompany": "Sycamore Pictures",
          "imdbRating": 7.4,
          "awards": "5 wins & 30 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Shy 14-year-old Duncan goes on summer vacation with his mother, her overbearing boyfriend, and her boyfriend's daughter. Having a rough time fitting in, Duncan finds an unexpected friend in Owen, manager of the Water Wizz water park.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTU5ODk5NDg0Nl5BMl5BanBnXkFtZTcwNzQwMjI1OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Shame",
          "releaseDate": "2012-01-13T05:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Drama"
          ],
          "director": "Steve McQueen",
          "cast": [
            "Michael Fassbender",
            "Lucy Walters",
            "Mari-Ange Ramirez",
            "James Badge Dale"
          ],
          "country": "UK, Canada, USA",
          "productionCompany": "See-Saw Films",
          "imdbRating": 7.2,
          "awards": "Nominated for 1 Golden Globe. Another 50 wins & 93 nominations.",
          "mpaaRating": "NC-17",
          "plot": "A sex addict's carefully cultivated private life falls apart after his sister arrives for an indefinite stay.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGU4Mjc0ZWMtNGQ0OS00ZWQ4LThkNDUtOTE1Y2EzYjgzMDU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "We're the Millers",
          "releaseDate": "2013-08-07T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Comedy",
            "Crime"
          ],
          "director": "Rawson Marshall Thurber",
          "cast": [
            "Jennifer Aniston",
            "Jason Sudeikis",
            "Emma Roberts",
            "Will Poulter"
          ],
          "country": "USA, UK",
          "productionCompany": "Slap Happy Productions",
          "imdbRating": 7,
          "awards": "4 wins & 17 nominations.",
          "mpaaRating": "R",
          "plot": "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njc0NDUxNV5BMl5BanBnXkFtZTcwMjYzNzU1OQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Spectacular Now",
          "releaseDate": "2013-09-13T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "James Ponsoldt",
          "cast": [
            "Miles Teller",
            "Shailene Woodley",
            "Brie Larson",
            "Masam Holden"
          ],
          "country": "USA",
          "productionCompany": "Andrew Lauren Productions",
          "imdbRating": 7.1,
          "awards": "9 wins & 32 nominations.",
          "mpaaRating": "R",
          "plot": "A hard-partying high school senior's philosophy on life changes when he meets the not-so-typical \"nice girl.\"",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5MTc0NTkzM15BMl5BanBnXkFtZTcwODEwNjE3OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Les Misérables",
          "releaseDate": "2012-12-25T05:00:00.000Z",
          "runTime": 158,
          "genres": [
            "Drama",
            "History",
            "Musical",
            "Romance",
            "War"
          ],
          "director": "Tom Hooper",
          "cast": [
            "Hugh Jackman",
            "Russell Crowe",
            "Anne Hathaway",
            "Amanda Seyfried"
          ],
          "country": "UK, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.6,
          "awards": "Won 3 Oscars. Another 82 wins & 176 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_SX300.jpg"
        },
        {
          "title": "Snowpiercer",
          "releaseDate": "2014-07-11T04:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi"
          ],
          "director": "Bong Joon Ho",
          "cast": [
            "Chris Evans",
            "Kang-ho Song",
            "Ed Harris",
            "John Hurt"
          ],
          "country": "South Korea, Czech Republic",
          "productionCompany": "Opus",
          "imdbRating": 7.1,
          "awards": "34 wins & 105 nominations.",
          "mpaaRating": "R",
          "plot": "In a future where a failed climate-change experiment has killed all life except for the lucky few who boarded the Snowpiercer, a train that travels around the globe, a new class system emerges.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ3NzA1MTY3MV5BMl5BanBnXkFtZTgwNzE2Mzg5MTE@._V1_SX300.jpg"
        },
        {
          "title": "Chronicle",
          "releaseDate": "2012-02-03T05:00:00.000Z",
          "runTime": 84,
          "genres": [
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Josh Trank",
          "cast": [
            "Dane DeHaan",
            "Alex Russell",
            "Michael B. Jordan",
            "Michael Kelly"
          ],
          "country": "USA",
          "productionCompany": "Dune",
          "imdbRating": 7,
          "awards": "2 wins & 7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Three high school friends gain superpowers after making an incredible discovery underground. Soon they find their lives spinning out of control and their bond tested as they embrace their darker sides.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmRkY2RhM2QtMjQwNC00NDVjLTk4MTQtZGNiMjYxMmJmODVhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Safe Haven",
          "releaseDate": "2013-02-14T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Drama",
            "Romance",
            "Thriller"
          ],
          "director": "Lasse Hallström",
          "cast": [
            "Julianne Hough",
            "Irene Ziegler",
            "Jon Kohler",
            "Tim Parati"
          ],
          "country": "USA",
          "productionCompany": "Nicholas Sparks Productions",
          "imdbRating": 6.7,
          "awards": "3 wins & 7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young woman with a mysterious past lands in Southport, North Carolina where her bond with a widower forces her to confront the dark secret that haunts her.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg4MzcxODA3OV5BMl5BanBnXkFtZTcwMTYzNDkwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Sausage Party",
          "releaseDate": "2016-08-12T04:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Fantasy"
          ],
          "director": "Greg Tiernan, Conrad Vernon",
          "cast": [
            "Alistair Abell",
            "Iris Apatow",
            "Sugar Lyn Beard",
            "Michael Cera"
          ],
          "country": "USA, Canada",
          "productionCompany": "Sony Music",
          "imdbRating": 6.1,
          "awards": "1 win & 26 nominations.",
          "mpaaRating": "R",
          "plot": "A sausage strives to discover the truth about his existence.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjkxOTk1MzY4MF5BMl5BanBnXkFtZTgwODQzOTU5ODE@._V1_SX300.jpg"
        },
        {
          "title": "Carnage",
          "releaseDate": "2011-11-18T05:00:00.000Z",
          "runTime": 80,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Roman Polanski",
          "cast": [
            "Jodie Foster",
            "Kate Winslet",
            "Christoph Waltz",
            "John C. Reilly"
          ],
          "country": "France, Germany, Poland, Spain, USA",
          "productionCompany": "Constantin Film",
          "imdbRating": 7.2,
          "awards": "Nominated for 2 Golden Globes. Another 7 wins & 18 nominations.",
          "mpaaRating": "R",
          "plot": "Two pairs of parents hold a cordial meeting after their sons are involved in a fight, though as their time together progresses, increasingly childish behavior throws the discussion into chaos.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGE3ZWZkMTAtMjc4Ny00YTgyLTliZTQtOGVlNzNhZjU5NTkzXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg"
        },
        {
          "title": "Despicable Me 2",
          "releaseDate": "2013-07-03T04:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Crime",
            "Family",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Pierre Coffin, Chris Renaud",
          "cast": [
            "Steve Carell",
            "Kristen Wiig",
            "Benjamin Bratt",
            "Miranda Cosgrove"
          ],
          "country": "USA, France, Japan",
          "productionCompany": "Chris Meledandri",
          "imdbRating": 7.3,
          "awards": "Nominated for 2 Oscars. Another 12 wins & 64 nominations.",
          "mpaaRating": "PG",
          "plot": "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SX300.jpg"
        },
        {
          "title": "Stoker",
          "releaseDate": "2013-03-01T05:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Chan-wook Park",
          "cast": [
            "Mia Wasikowska",
            "Nicole Kidman",
            "David Alford",
            "Matthew Goode"
          ],
          "country": "UK, USA",
          "productionCompany": "Indian Paintbrush",
          "imdbRating": 6.8,
          "awards": "4 wins & 45 nominations.",
          "mpaaRating": "R",
          "plot": "After India's father dies, her Uncle Charlie, whom she never knew existed, comes to live with her and her unstable mother. She comes to suspect this mysterious, charming man has ulterior motives and becomes increasingly infatuated with him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI3MTM5ODI5MV5BMl5BanBnXkFtZTcwMjE1Mzc4OA@@._V1_SX300.jpg"
        },
        {
          "title": "Ready Player One",
          "releaseDate": "2018-03-29T04:00:00.000Z",
          "runTime": 140,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Steven Spielberg",
          "cast": [
            "Tye Sheridan",
            "Olivia Cooke",
            "Ben Mendelsohn",
            "Lena Waithe"
          ],
          "country": "USA, India",
          "productionCompany": "RatPac-Dune Entertainment",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Oscar. Another 11 wins & 55 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
        },
        {
          "title": "The Intouchables",
          "releaseDate": "2011-11-02T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Biography",
            "Comedy",
            "Drama"
          ],
          "director": "Olivier Nakache, Éric Toledano",
          "cast": [
            "François Cluzet",
            "Omar Sy",
            "Anne Le Ny",
            "Audrey Fleurot"
          ],
          "country": "France",
          "productionCompany": "Chaocorp",
          "imdbRating": 8.5,
          "awards": "Nominated for 1 Golden Globe. Another 38 wins & 39 nominations.",
          "mpaaRating": "R",
          "plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"
        },
        {
          "title": "The Twilight Saga: Breaking Dawn - Part 2",
          "releaseDate": "2012-11-16T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Romance"
          ],
          "director": "Bill Condon",
          "cast": [
            "Kristen Stewart",
            "Robert Pattinson",
            "Taylor Lautner",
            "Peter Facinelli"
          ],
          "country": "USA",
          "productionCompany": "Temple Hill",
          "imdbRating": 5.5,
          "awards": "21 wins & 16 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After the birth of Renesmee/Nessie, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcyMzUyMzY1OF5BMl5BanBnXkFtZTcwNDQ4ODk1OA@@._V1_SX300.jpg"
        },
        {
          "title": "Now You See Me",
          "releaseDate": "2013-05-31T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Crime",
            "Mystery",
            "Thriller"
          ],
          "director": "Louis Leterrier",
          "cast": [
            "Jesse Eisenberg",
            "Mark Ruffalo",
            "Woody Harrelson",
            "Isla Fisher"
          ],
          "country": "USA, France",
          "productionCompany": "K/O Paper Products",
          "imdbRating": 7.3,
          "awards": "1 win & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Ice Age: Continental Drift",
          "releaseDate": "2012-07-13T04:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Steve Martino, Mike Thurmeier",
          "cast": [
            "Aziz Ansari",
            "Joy Behar",
            "Christopher Campbell",
            "Alain Chabat"
          ],
          "country": "USA, Australia, UK",
          "productionCompany": "Blue Sky Studios",
          "imdbRating": 6.5,
          "awards": "2 wins & 11 nominations.",
          "mpaaRating": "PG",
          "plot": "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM3NDM5MzY5Ml5BMl5BanBnXkFtZTcwNjExMDUwOA@@._V1_SX300.jpg"
        },
        {
          "title": "Pacific Rim",
          "releaseDate": "2013-07-12T04:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Guillermo del Toro",
          "cast": [
            "Charlie Hunnam",
            "Diego Klattenhoff",
            "Idris Elba",
            "Rinko Kikuchi"
          ],
          "country": "USA, Mexico, Hong Kong",
          "productionCompany": "Legendary Pictures",
          "imdbRating": 6.9,
          "awards": "Nominated for 1 BAFTA Film Award. Another 7 wins & 48 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Revenant",
          "releaseDate": "2016-01-08T05:00:00.000Z",
          "runTime": 156,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "History",
            "Western"
          ],
          "director": "Alejandro G. Iñárritu",
          "cast": [
            "Leonardo DiCaprio",
            "Tom Hardy",
            "Domhnall Gleeson",
            "Will Poulter"
          ],
          "country": "USA, Hong Kong, Taiwan",
          "productionCompany": "Appian Way",
          "imdbRating": 8,
          "awards": "Won 3 Oscars. Another 87 wins & 187 nominations.",
          "mpaaRating": "R",
          "plot": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "Cinderella",
          "releaseDate": "2015-03-13T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Drama",
            "Family",
            "Fantasy",
            "Romance"
          ],
          "director": "Kenneth Branagh",
          "cast": [
            "Cate Blanchett",
            "Lily James",
            "Richard Madden",
            "Helena Bonham Carter"
          ],
          "country": "USA, UK",
          "productionCompany": "Allison Shearmur",
          "imdbRating": 6.9,
          "awards": "Nominated for 1 Oscar. Another 8 wins & 36 nominations.",
          "mpaaRating": "PG",
          "plot": "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMxODYyODEzN15BMl5BanBnXkFtZTgwMDk4OTU0MzE@._V1_SX300.jpg"
        },
        {
          "title": "The Perks of Being a Wallflower",
          "releaseDate": "2012-10-12T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Stephen Chbosky",
          "cast": [
            "Logan Lerman",
            "Dylan McDermott",
            "Kate Walsh",
            "Patrick de Ledebur"
          ],
          "country": "USA",
          "productionCompany": "Mr. Mudd",
          "imdbRating": 8,
          "awards": "19 wins & 50 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An introvert freshman is taken under the wings of two seniors who welcome him to the real world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZThjMmQ5YjktMTUyMC00MjljLWJmMTAtOWIzNDIzY2VhNzQ0XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg"
        },
        {
          "title": "Safe",
          "releaseDate": "2012-04-27T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Boaz Yakin",
          "cast": [
            "Jason Statham",
            "Catherine Chan",
            "Robert John Burke",
            "James Hong"
          ],
          "country": "USA",
          "productionCompany": "Lawrence Bender Productions",
          "imdbRating": 6.5,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "Mei, a young girl whose memory holds a priceless numerical code, finds herself pursued by the Triads, the Russian mob, and corrupt NYC cops. Coming to her aid is an ex-cage fighter whose life was destroyed by the gangsters on Mei's trail.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcxNDI0NzUxMF5BMl5BanBnXkFtZTcwOTIzMjkyNw@@._V1_SX300.jpg"
        },
        {
          "title": "The Artist",
          "releaseDate": "2012-01-20T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Michel Hazanavicius",
          "cast": [
            "Jean Dujardin",
            "Bérénice Bejo",
            "John Goodman",
            "James Cromwell"
          ],
          "country": "France, Belgium, USA",
          "productionCompany": "uFilm",
          "imdbRating": 7.9,
          "awards": "Won 5 Oscars. Another 156 wins & 204 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywood's silent era.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDUyZWU5N2UtOWFlMy00MTI0LTk0ZDYtMzFhNjljODBhZDA5XkEyXkFqcGdeQXVyNzA4ODc3ODU@._V1_SX300.jpg"
        },
        {
          "title": "The Age of Adaline",
          "releaseDate": "2015-04-24T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Drama",
            "Fantasy",
            "Romance"
          ],
          "director": "Lee Toland Krieger",
          "cast": [
            "Blake Lively",
            "Michiel Huisman",
            "Harrison Ford",
            "Ellen Burstyn"
          ],
          "country": "USA, Canada",
          "productionCompany": "Sidney Kimmel Entertainment",
          "imdbRating": 7.2,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young woman, born at the turn of the 20th century, is rendered ageless after an accident. After many solitary years, she meets a man who complicates the eternal life she has settled into.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAzMTQzMTA2MjheQTJeQWpwZ15BbWU4MDk2MTg2MzUx._V1_SX300.jpg"
        },
        {
          "title": "Kick-Ass 2",
          "releaseDate": "2013-08-16T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "Jeff Wadlow",
          "cast": [
            "Aaron Taylor-Johnson",
            "Chloë Grace Moretz",
            "Morris Chestnut",
            "Claudia Lee"
          ],
          "country": "UK, USA, Japan",
          "productionCompany": "Matthew Vaughn",
          "imdbRating": 6.5,
          "awards": "1 win & 9 nominations.",
          "mpaaRating": "R",
          "plot": "Following Kick-Ass' heroics, other citizens are inspired to become masked crusaders. But Red Mist leads his own group of evil supervillains to get revenge, kill Kick-Ass and destroy everything he stands for.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4OTQxNzc0N15BMl5BanBnXkFtZTcwOTQxOTU5OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Super 8",
          "releaseDate": "2011-06-10T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "J.J. Abrams",
          "cast": [
            "Joel Courtney",
            "Jessica Tuck",
            "Joel McKinnon Miller",
            "Ryan Lee"
          ],
          "country": "USA",
          "productionCompany": "Amblin Entertainment",
          "imdbRating": 7,
          "awards": "11 wins & 70 nominations.",
          "mpaaRating": "PG-13",
          "plot": "During the summer of 1979, a group of friends witness a train crash and investigate subsequent unexplained events in their small town.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIzNjEyMzcwOF5BMl5BanBnXkFtZTcwMTkyMjE0NQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Impossible",
          "releaseDate": "2013-01-04T05:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Drama",
            "History",
            "Thriller"
          ],
          "director": "J.A. Bayona",
          "cast": [
            "Naomi Watts",
            "Ewan McGregor",
            "Tom Holland",
            "Samuel Joslin"
          ],
          "country": "Spain, Thailand, USA",
          "productionCompany": "Apaches Entertainment",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 28 wins & 68 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg"
        },
        {
          "title": "The Dark Tower",
          "releaseDate": "2017-08-04T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Horror",
            "Sci-Fi",
            "Western"
          ],
          "director": "Nikolaj Arcel",
          "cast": [
            "Matthew McConaughey",
            "Idris Elba",
            "Tom Taylor",
            "Dennis Haysbert"
          ],
          "country": "USA",
          "productionCompany": "Sony Pictures Entertainment",
          "imdbRating": 5.6,
          "awards": "4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A boy haunted by visions of a dark tower from a parallel reality teams up with the tower's disillusioned guardian to stop an evil warlock known as the Man in Black who plans to use the boy to destroy the tower and open the gates of Hell.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU3MjUwMzQ3MF5BMl5BanBnXkFtZTgwMjcwNjkxMjI@._V1_SX300.jpg"
        },
        {
          "title": "Wrath of the Titans",
          "releaseDate": "2012-03-30T04:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Jonathan Liebesman",
          "cast": [
            "Sam Worthington",
            "Liam Neeson",
            "Ralph Fiennes",
            "Edgar Ramírez"
          ],
          "country": "USA, Spain",
          "productionCompany": "Thunder Road Film",
          "imdbRating": 5.7,
          "awards": "2 wins & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Perseus braves the treacherous underworld to rescue his father, Zeus, captured by his son, Ares, and brother Hades who unleash the ancient Titans upon the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMyMzk1Nzg3OF5BMl5BanBnXkFtZTcwOTQ2NjcxNw@@._V1_SX300.jpg"
        },
        {
          "title": "How to Train Your Dragon 2",
          "releaseDate": "2014-06-13T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Dean DeBlois",
          "cast": [
            "Jay Baruchel",
            "Cate Blanchett",
            "Gerard Butler",
            "Craig Ferguson"
          ],
          "country": "USA",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 7.8,
          "awards": "Nominated for 1 Oscar. Another 15 wins & 60 nominations.",
          "mpaaRating": "PG",
          "plot": "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg"
        },
        {
          "title": "The Dictator",
          "releaseDate": "2012-05-16T04:00:00.000Z",
          "runTime": 83,
          "genres": [
            "Comedy"
          ],
          "director": "Larry Charles",
          "cast": [
            "Sacha Baron Cohen",
            "Sayed Badreya",
            "Rocky Citron",
            "Liam Campora"
          ],
          "country": "USA",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 6.4,
          "awards": "1 win & 1 nomination.",
          "mpaaRating": "R",
          "plot": "The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTlkOWYzZDYtNzQ1MS00YTNkLTkyYTItMjBmNjgyMDBlMjI4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "The Man from U.N.C.L.E.",
          "releaseDate": "2015-08-14T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Adventure",
            "Comedy"
          ],
          "director": "Guy Ritchie",
          "cast": [
            "Henry Cavill",
            "Armie Hammer",
            "Alicia Vikander",
            "Elizabeth Debicki"
          ],
          "country": "USA, UK",
          "productionCompany": "Ritchie/Wigram",
          "imdbRating": 7.3,
          "awards": "7 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTZmMWFhYmQtZDE5YS00YzBlLWJlOGEtYzAwNGU1YzVlYjZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
          "title": "Love, Rosie",
          "releaseDate": "2014-10-22T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Christian Ditter",
          "cast": [
            "Lily Collins",
            "Sam Claflin",
            "Christian Cooke",
            "Jaime Winstone"
          ],
          "country": "Germany, UK",
          "productionCompany": "Constantin Film",
          "imdbRating": 7.2,
          "awards": "N/A",
          "mpaaRating": "R",
          "plot": "Rosie and Alex have been best friends since they were 5, so they couldn't possibly be right for one another...or could they? When it comes to love, life and making the right choices, these two are their own worst enemies.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_SX300.jpg"
        },
        {
          "title": "Ted",
          "releaseDate": "2012-06-29T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Comedy"
          ],
          "director": "Seth MacFarlane",
          "cast": [
            "Mark Wahlberg",
            "Mila Kunis",
            "Seth MacFarlane",
            "Joel McHale"
          ],
          "country": "USA",
          "productionCompany": "Smart Entertainment",
          "imdbRating": 6.9,
          "awards": "Nominated for 1 Oscar. Another 13 wins & 27 nominations.",
          "mpaaRating": "R",
          "plot": "John Bennett, a man whose childhood wish of bringing his teddy bear to life came true, now must decide between keeping the relationship with the bear, Ted or his girlfriend, Lori.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_SX300.jpg"
        },
        {
          "title": "In Time",
          "releaseDate": "2011-10-28T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Andrew Niccol",
          "cast": [
            "Justin Timberlake",
            "Olivia Wilde",
            "Shyloh Oostwald",
            "Johnny Galecki"
          ],
          "country": "USA",
          "productionCompany": "New Regency Pictures",
          "imdbRating": 6.7,
          "awards": "2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In a future where people stop aging at 25, but are engineered to live only one more year, having the means to buy your way out of the situation is a shot at immortal youth. Here, Will Salas finds himself accused of murder and on the run with a hostage - a connection that becomes an important part of the way against the system.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA3NzI1ODc1MV5BMl5BanBnXkFtZTcwMzI5NjQwNg@@._V1_SX300.jpg"
        },
        {
          "title": "Project X",
          "releaseDate": "2012-03-02T05:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Comedy"
          ],
          "director": "Nima Nourizadeh",
          "cast": [
            "Thomas Mann",
            "Oliver Cooper",
            "Jonathan Daniel Brown",
            "Dax Flame"
          ],
          "country": "USA",
          "productionCompany": "Silver Pictures",
          "imdbRating": 6.6,
          "awards": "5 nominations.",
          "mpaaRating": "R",
          "plot": "3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc1MTk0Njg4OF5BMl5BanBnXkFtZTcwODc0ODkyNw@@._V1_SX300.jpg"
        },
        {
          "title": "Johnny English Reborn",
          "releaseDate": "2011-10-21T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Action",
            "Adventure",
            "Comedy"
          ],
          "director": "Oliver Parker",
          "cast": [
            "Roger Barclay",
            "Eric Carte",
            "Rowan Atkinson",
            "Togo Igawa"
          ],
          "country": "UK, France, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 6.3,
          "awards": "4 nominations.",
          "mpaaRating": "PG",
          "plot": "Johnny English goes up against international assassins hunting down Chinese Premier Xiang Ping.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEzODY2MjU1Nl5BMl5BanBnXkFtZTcwMzc1ODUzNg@@._V1_SX300.jpg"
        },
        {
          "title": "Friends with Benefits",
          "releaseDate": "2011-07-22T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Will Gluck",
          "cast": [
            "Justin Timberlake",
            "Mila Kunis",
            "Patricia Clarkson",
            "Jenna Elfman"
          ],
          "country": "USA",
          "productionCompany": "Castle Rock Entertainment",
          "imdbRating": 6.5,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "R",
          "plot": "A young man and woman decide to take their friendship to the next level without becoming a couple, but soon discover that adding sex only leads to complications.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MzQ0NTk4N15BMl5BanBnXkFtZTcwMDc2NDYzNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Edge of Tomorrow",
          "releaseDate": "2014-06-06T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Doug Liman",
          "cast": [
            "Tom Cruise",
            "Emily Blunt",
            "Brendan Gleeson",
            "Bill Paxton"
          ],
          "country": "USA, Canada",
          "productionCompany": "3 Arts Entertainment",
          "imdbRating": 7.9,
          "awards": "11 wins & 38 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_SX300.jpg"
        },
        {
          "title": "Independence Day: Resurgence",
          "releaseDate": "2016-06-24T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Roland Emmerich",
          "cast": [
            "Liam Hemsworth",
            "Jeff Goldblum",
            "Jessie T. Usher",
            "Bill Pullman"
          ],
          "country": "USA",
          "productionCompany": "20th Century Fox",
          "imdbRating": 5.2,
          "awards": "3 wins & 17 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two decades after the first Independence Day invasion, Earth is faced with a new extra-Solar threat. But will mankind's new space defenses be enough?",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIyMTg5MTg4OV5BMl5BanBnXkFtZTgwMzkzMjY5NzE@._V1_SX300.jpg"
        },
        {
          "title": "Oz the Great and Powerful",
          "releaseDate": "2013-03-08T05:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Sam Raimi",
          "cast": [
            "James Franco",
            "Mila Kunis",
            "Rachel Weisz",
            "Michelle Williams"
          ],
          "country": "USA",
          "productionCompany": "Roth Films",
          "imdbRating": 6.3,
          "awards": "6 wins & 32 nominations.",
          "mpaaRating": "PG",
          "plot": "A frustrated circus magician from Kansas is transported to a magical land called Oz, where he will have to fulfill a prophecy to become the king, and release the land from the Wicked Witches using his great (but fake) powers.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMyMzQ1ODM1MF5BMl5BanBnXkFtZTcwMjE2MTQxOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Final Destination 5",
          "releaseDate": "2011-08-12T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Action",
            "Fantasy",
            "Horror",
            "Thriller"
          ],
          "director": "Steven Quale",
          "cast": [
            "Nicholas D'Agosto",
            "Emma Bell",
            "Miles Fisher",
            "Ellen Wroe"
          ],
          "country": "USA, Canada",
          "productionCompany": "Practical Pictures",
          "imdbRating": 5.8,
          "awards": "2 wins & 6 nominations.",
          "mpaaRating": "R",
          "plot": "Death returns to claim the lucky survivors of a deadly bridge collapse in this fifth frightening installment in the series.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgyOTExNDc1M15BMl5BanBnXkFtZTcwMDA0MTA4NQ@@._V1_SX300.jpg"
        },
        {
          "title": "Murder Mystery",
          "releaseDate": "2019-06-14T04:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Mystery",
            "Romance"
          ],
          "director": "Kyle Newacheck",
          "cast": [
            "Adam Sandler",
            "Jennifer Aniston",
            "Luke Evans",
            "Terence Stamp"
          ],
          "country": "USA",
          "productionCompany": "N/A",
          "imdbRating": 6,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage, but end up getting framed and on the run for the death of an elderly billionaire.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTA2YTI5YjUtZWI4Zi00NWQ5LWFiYmEtOTBmNTUyNDAwNjllXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_SX300.jpg"
        },
        {
          "title": "Jupiter Ascending",
          "releaseDate": "2015-02-06T05:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Lana Wachowski, Lilly Wachowski",
          "cast": [
            "Mila Kunis",
            "Channing Tatum",
            "Sean Bean",
            "Eddie Redmayne"
          ],
          "country": "USA, Australia",
          "productionCompany": "Anarchos Productions Inc.",
          "imdbRating": 5.3,
          "awards": "4 wins & 16 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young woman discovers her destiny as an heiress of intergalactic nobility and must fight to protect the inhabitants of Earth from an ancient and destructive industry.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQyNzk2MjA2NF5BMl5BanBnXkFtZTgwMjEwNzk3MjE@._V1_SX300.jpg"
        },
        {
          "title": "J. Edgar",
          "releaseDate": "2011-11-11T05:00:00.000Z",
          "runTime": 137,
          "genres": [
            "Biography",
            "Drama",
            "Romance"
          ],
          "director": "Clint Eastwood",
          "cast": [
            "Leonardo DiCaprio",
            "Josh Hamilton",
            "Geoff Pierson",
            "Cheryl Lawson"
          ],
          "country": "USA",
          "productionCompany": "Malpaso Company",
          "imdbRating": 6.5,
          "awards": "Nominated for 1 Golden Globe. Another 5 wins & 16 nominations.",
          "mpaaRating": "R",
          "plot": "J. Edgar Hoover, powerful head of the F.B.I. for nearly fifty years, looks back on his professional and personal life.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc0NDM4ODU2Nl5BMl5BanBnXkFtZTcwNzQ0NTg4Ng@@._V1_SX300.jpg"
        },
        {
          "title": "The Foreigner",
          "releaseDate": "2017-10-13T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Martin Campbell",
          "cast": [
            "Katie Leung",
            "Jackie Chan",
            "Rufus Jones",
            "Mark Tandy"
          ],
          "country": "UK, China, USA, India",
          "productionCompany": "The Fyzz Facility",
          "imdbRating": 7,
          "awards": "1 nomination.",
          "mpaaRating": "R",
          "plot": "A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict ensues with a government official, whose past may hold clues to the killers' identities.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZWMwZGQzOWItYjM5Ny00MGQ5LTkzYjgtOGJmNjE3ODg4OTQxXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg"
        },
        {
          "title": "Margin Call",
          "releaseDate": "2011-09-29T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Drama",
            "Thriller"
          ],
          "director": "J.C. Chandor",
          "cast": [
            "Kevin Spacey",
            "Paul Bettany",
            "Jeremy Irons",
            "Zachary Quinto"
          ],
          "country": "USA",
          "productionCompany": "Before the Door",
          "imdbRating": 7.1,
          "awards": "Nominated for 1 Oscar. Another 8 wins & 23 nominations.",
          "mpaaRating": "R",
          "plot": "Follows the key people at an investment bank, over a 24-hour period, during the early stages of the 2008 financial crisis.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE5NzkyNDI2Nl5BMl5BanBnXkFtZTcwMTYzNDc2Ng@@._V1_SX300.jpg"
        },
        {
          "title": "Savages",
          "releaseDate": "2012-07-06T04:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Crime",
            "Thriller"
          ],
          "director": "Oliver Stone",
          "cast": [
            "Blake Lively",
            "Taylor Kitsch",
            "Aaron Taylor-Johnson",
            "Jana Banker"
          ],
          "country": "USA",
          "productionCompany": "Moritz Borman",
          "imdbRating": 6.5,
          "awards": "7 nominations.",
          "mpaaRating": "R",
          "plot": "Pot growers Ben and Chon face off against the Mexican drug cartel who kidnapped their shared girlfriend.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk0ODIyNDAyMF5BMl5BanBnXkFtZTcwMTQ5Nzg3Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Abraham Lincoln: Vampire Hunter",
          "releaseDate": "2012-06-22T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Action",
            "Fantasy",
            "Horror"
          ],
          "director": "Timur Bekmambetov",
          "cast": [
            "Benjamin Walker",
            "Dominic Cooper",
            "Anthony Mackie",
            "Mary Elizabeth Winstead"
          ],
          "country": "USA, Russia",
          "productionCompany": "Burton/Bekmambetov/Lemley",
          "imdbRating": 5.9,
          "awards": "1 nomination.",
          "mpaaRating": "R",
          "plot": "Abraham Lincoln, the 16th President of the United States, discovers vampires are planning to take over the United States. He makes it his mission to eliminate them.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjY2Mzc0MDA4NV5BMl5BanBnXkFtZTcwOTg5OTcxNw@@._V1_SX300.jpg"
        },
        {
          "title": "The Vow",
          "releaseDate": "2012-02-10T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Michael Sucsy",
          "cast": [
            "Rachel McAdams",
            "Channing Tatum",
            "Jessica Lange",
            "Sam Neill"
          ],
          "country": "USA, Canada",
          "productionCompany": "Birnbaum/Barber",
          "imdbRating": 6.8,
          "awards": "3 wins & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A car accident puts Paige in a coma, and when she wakes up with severe memory loss, her husband Leo works to win her heart again.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_SX300.jpg"
        },
        {
          "title": "A Good Day to Die Hard",
          "releaseDate": "2013-02-14T05:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "John Moore",
          "cast": [
            "Bruce Willis",
            "Jai Courtney",
            "Sebastian Koch",
            "Mary Elizabeth Winstead"
          ],
          "country": "USA, UK, Hungary",
          "productionCompany": "Giant Pictures",
          "imdbRating": 5.3,
          "awards": "5 wins & 8 nominations.",
          "mpaaRating": "R",
          "plot": "John McClane travels to Russia to help out his seemingly wayward son, Jack, only to discover that Jack is a CIA operative working undercover, causing the father and son to team up against underworld forces.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcwNzgyNzUzOV5BMl5BanBnXkFtZTcwMzAwOTA5OA@@._V1_SX300.jpg"
        },
        {
          "title": "Midnight in Paris",
          "releaseDate": "2011-06-10T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Comedy",
            "Fantasy",
            "Romance"
          ],
          "director": "Woody Allen",
          "cast": [
            "Owen Wilson",
            "Rachel McAdams",
            "Kurt Fuller",
            "Mimi Kennedy"
          ],
          "country": "Spain, USA, France",
          "productionCompany": "Pontchartrain",
          "imdbRating": 7.7,
          "awards": "Won 1 Oscar. Another 25 wins & 102 nominations.",
          "mpaaRating": "PG-13",
          "plot": "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s every day at midnight.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_SX300.jpg"
        },
        {
          "title": "American Reunion",
          "releaseDate": "2012-04-06T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Comedy"
          ],
          "director": "Jon Hurwitz, Hayden Schlossberg",
          "cast": [
            "Jason Biggs",
            "Alyson Hannigan",
            "Chris Klein",
            "Thomas Ian Nicholas"
          ],
          "country": "USA",
          "productionCompany": "Practical Pictures",
          "imdbRating": 6.7,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "R",
          "plot": "Jim, Michelle, Stifler, and their friends reunite in East Great Falls, Michigan for their high school reunion.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTEyMzU1N15BMl5BanBnXkFtZTcwNDQ0NTc1Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Only God Forgives",
          "releaseDate": "2013-05-22T04:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Action",
            "Crime",
            "Drama"
          ],
          "director": "Nicolas Winding Refn",
          "cast": [
            "Ryan Gosling",
            "Kristin Scott Thomas",
            "Vithaya Pansringarm",
            "Gordon Brown"
          ],
          "country": "Denmark, France, USA, Sweden, Belgium",
          "productionCompany": "A Grand Elephant",
          "imdbRating": 5.7,
          "awards": "14 wins & 20 nominations.",
          "mpaaRating": "R",
          "plot": "Julian, a drug-smuggler thriving in Bangkok's criminal underworld, sees his life get even more complicated when his mother compels him to find and kill whoever is responsible for his brother's recent death.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzE5NzcxMTk5NF5BMl5BanBnXkFtZTcwNjE2MDg2OQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Grey",
          "releaseDate": "2012-01-27T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Thriller"
          ],
          "director": "Joe Carnahan",
          "cast": [
            "Liam Neeson",
            "Frank Grillo",
            "Dermot Mulroney",
            "Dallas Roberts"
          ],
          "country": "USA",
          "productionCompany": "Scott Free Productions",
          "imdbRating": 6.8,
          "awards": "2 wins & 8 nominations.",
          "mpaaRating": "R",
          "plot": "After their plane crashes in Alaska, six oil workers are led by a skilled huntsman to survival, but a pack of merciless wolves haunts their every step.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDY4MTQwMzc1MV5BMl5BanBnXkFtZTcwNzcwNTM5Ng@@._V1_SX300.jpg"
        },
        {
          "title": "The Drop",
          "releaseDate": "2014-09-12T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Michaël R. Roskam",
          "cast": [
            "Tom Hardy",
            "Noomi Rapace",
            "James Gandolfini",
            "Matthias Schoenaerts"
          ],
          "country": "USA",
          "productionCompany": "Chernin Entertainment",
          "imdbRating": 7.1,
          "awards": "4 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "Bob Saginowski finds himself at the center of a robbery gone awry and entwined in an investigation that digs deep into the neighborhood's past where friends, families, and foes all work together to make a living - no matter the cost.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkyNjMzODUzNV5BMl5BanBnXkFtZTgwNjIxNDI1MTE@._V1_SX300.jpg"
        },
        {
          "title": "Safe House",
          "releaseDate": "2012-02-10T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Daniel Espinosa",
          "cast": [
            "Denzel Washington",
            "Ryan Reynolds",
            "Vera Farmiga",
            "Brendan Gleeson"
          ],
          "country": "South Africa, USA, Japan",
          "productionCompany": "Bluegrass Films",
          "imdbRating": 6.7,
          "awards": "1 win & 7 nominations.",
          "mpaaRating": "R",
          "plot": "A young CIA agent is tasked with looking after a fugitive in a safe house. But when the safe house is attacked, he finds himself on the run with his charge.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI5ODkyMjA2Nl5BMl5BanBnXkFtZTcwNTcyNTgzNw@@._V1_SX300.jpg"
        },
        {
          "title": "Contagion",
          "releaseDate": "2011-09-09T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Drama",
            "Thriller"
          ],
          "director": "Steven Soderbergh",
          "cast": [
            "Gwyneth Paltrow",
            "Tien You Chui",
            "Josie Ho",
            "Daria Strokous"
          ],
          "country": "United Arab Emirates, USA, Hong Kong",
          "productionCompany": "Double Feature Films",
          "imdbRating": 6.7,
          "awards": "2 wins & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Healthcare professionals, government officials and everyday people find themselves in the midst of a pandemic as the CDC works to find a cure.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MDk5MDc3OV5BMl5BanBnXkFtZTcwNzAyNTg0Ng@@._V1_SX300.jpg"
        },
        {
          "title": "The Woman in Black",
          "releaseDate": "2012-02-03T05:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Drama",
            "Fantasy",
            "Horror",
            "Thriller"
          ],
          "director": "James Watkins",
          "cast": [
            "Emma Shorey",
            "Molly Harmon",
            "Ellisa Walker-Reid",
            "Sophie Stuckey"
          ],
          "country": "UK, Canada, USA, Sweden",
          "productionCompany": "Exclusive Media",
          "imdbRating": 6.4,
          "awards": "5 wins & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young solicitor travels to a remote village where he discovers the vengeful ghost of a scorned woman is terrorizing the locals.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzIxOTg3N15BMl5BanBnXkFtZTcwMjI4ODUzNw@@._V1_SX300.jpg"
        },
        {
          "title": "The Big Short",
          "releaseDate": "2015-12-23T05:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Biography",
            "Comedy",
            "Drama",
            "History"
          ],
          "director": "Adam McKay",
          "cast": [
            "Ryan Gosling",
            "Rudy Eisenzopf",
            "Casey Groves",
            "Charlie Talbert"
          ],
          "country": "USA",
          "productionCompany": "Plan B Entertainment",
          "imdbRating": 7.8,
          "awards": "Won 1 Oscar. Another 36 wins & 81 nominations.",
          "mpaaRating": "R",
          "plot": "In 2006-2007 a group of investors bet against the US mortgage market. In their research they discover how flawed and corrupt the market is.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
          "title": "This Means War",
          "releaseDate": "2012-02-17T05:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Action",
            "Comedy",
            "Romance"
          ],
          "director": "McG",
          "cast": [
            "Reese Witherspoon",
            "Chris Pine",
            "Tom Hardy",
            "Til Schweiger"
          ],
          "country": "USA",
          "productionCompany": "Overbrook Entertainment",
          "imdbRating": 6.3,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "C.I.A. operatives wage an epic battle on each other when they discover they are dating the same woman.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg"
        },
        {
          "title": "Fast Five",
          "releaseDate": "2011-04-29T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Action",
            "Adventure",
            "Crime",
            "Thriller"
          ],
          "director": "Justin Lin",
          "cast": [
            "Vin Diesel",
            "Paul Walker",
            "Jordana Brewster",
            "Tyrese Gibson"
          ],
          "country": "USA, Brazil, Japan",
          "productionCompany": "Original Film",
          "imdbRating": 7.3,
          "awards": "9 wins & 21 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
        },
        {
          "title": "Insidious",
          "releaseDate": "2011-04-01T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "James Wan",
          "cast": [
            "Patrick Wilson",
            "Rose Byrne",
            "Ty Simpkins",
            "Lin Shaye"
          ],
          "country": "USA, Canada",
          "productionCompany": "Alliance",
          "imdbRating": 6.8,
          "awards": "8 wins & 15 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_SX300.jpg"
        },
        {
          "title": "The Commuter",
          "releaseDate": "2018-01-12T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Action",
            "Mystery",
            "Thriller"
          ],
          "director": "Jaume Collet-Serra",
          "cast": [
            "Liam Neeson",
            "Vera Farmiga",
            "Patrick Wilson",
            "Jonathan Banks"
          ],
          "country": "USA, UK, France, China, Canada, Spain",
          "productionCompany": "The Picture Company",
          "imdbRating": 6.3,
          "awards": "2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An action-thriller in which an insurance salesman/ex-cop is caught up in a life-threatening conspiracy during his daily commute home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc0NDg1MjI4OV5BMl5BanBnXkFtZTgwMDIwMTEwNDI@._V1_SX300.jpg"
        },
        {
          "title": "Warm Bodies",
          "releaseDate": "2013-02-01T05:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Comedy",
            "Horror",
            "Romance"
          ],
          "director": "Jonathan Levine",
          "cast": [
            "Nicholas Hoult",
            "Teresa Palmer",
            "Analeigh Tipton",
            "Rob Corddry"
          ],
          "country": "USA, Canada",
          "productionCompany": "Make Movies",
          "imdbRating": 6.8,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After a highly unusual zombie saves a still-living girl from an attack, the two form a relationship that sets in motion events that might transform the entire lifeless world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTc5ZjFhMDItYmViMi00YjI5LTgzNzctZjcxMDYzMWU2NTk2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "I Saw the Devil",
          "releaseDate": "2010-08-12T04:00:00.000Z",
          "runTime": 144,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Horror",
            "Thriller"
          ],
          "director": "Jee-woon Kim",
          "cast": [
            "Lee Byung-Hun",
            "Choi Min-sik",
            "Jeon Gook-Hwan",
            "Ho-jin Chun"
          ],
          "country": "South Korea",
          "productionCompany": "Showbox/Mediaplex",
          "imdbRating": 7.8,
          "awards": "17 wins & 19 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "A secret agent exacts revenge on a serial killer through a series of captures and releases.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjRmNjc5MTYtYjc3My00ZjNiLTg4YjUtMTQ0ZTFkZmMxMDUzXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_SX300.jpg"
        },
        {
          "title": "Maleficent",
          "releaseDate": "2014-05-30T04:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Action",
            "Adventure",
            "Family",
            "Fantasy",
            "Romance"
          ],
          "director": "Robert Stromberg",
          "cast": [
            "Angelina Jolie",
            "Elle Fanning",
            "Sharlto Copley",
            "Lesley Manville"
          ],
          "country": "USA, UK",
          "productionCompany": "Walt Disney Pictures",
          "imdbRating": 7,
          "awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
          "mpaaRating": "PG",
          "plot": "A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_SX300.jpg"
        },
        {
          "title": "G.I. Joe: Retaliation",
          "releaseDate": "2013-03-28T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Jon M. Chu",
          "cast": [
            "Dwayne Johnson",
            "Jonathan Pryce",
            "Lee Byung-Hun",
            "Elodie Yung"
          ],
          "country": "USA",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 5.8,
          "awards": "1 win & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The G.I. Joes are not only fighting their mortal enemy Cobra; they are forced to contend with threats from within the government that jeopardize their very existence.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzk5ODM0OTQ0N15BMl5BanBnXkFtZTcwODg2ODE4OA@@._V1_SX300.jpg"
        },
        {
          "title": "Mortal Engines",
          "releaseDate": "2018-12-14T05:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Christian Rivers",
          "cast": [
            "Hera Hilmar",
            "Robert Sheehan",
            "Hugo Weaving",
            "Jihae"
          ],
          "country": "USA, New Zealand, Japan",
          "productionCompany": "WingNut Films",
          "imdbRating": 6.1,
          "awards": "3 wins & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_SX300.jpg"
        },
        {
          "title": "Crazy, Stupid, Love.",
          "releaseDate": "2011-07-29T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Glenn Ficarra, John Requa",
          "cast": [
            "Steve Carell",
            "Ryan Gosling",
            "Julianne Moore",
            "Emma Stone"
          ],
          "country": "USA",
          "productionCompany": "Carousel",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Golden Globe. Another 4 wins & 22 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A middle-aged husband's life changes dramatically when his wife asks him for a divorce. He seeks to rediscover his manhood with the help of a newfound friend, Jacob, learning to pick up girls at bars.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
        },
        {
          "title": "War Horse",
          "releaseDate": "2011-12-25T05:00:00.000Z",
          "runTime": 146,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "History",
            "War"
          ],
          "director": "Steven Spielberg",
          "cast": [
            "Jeremy Irvine",
            "Peter Mullan",
            "Emily Watson",
            "Niels Arestrup"
          ],
          "country": "USA, India",
          "productionCompany": "Amblin Entertainment",
          "imdbRating": 7.2,
          "awards": "Nominated for 6 Oscars. Another 15 wins & 71 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Young Albert enlists to serve in World War I after his beloved horse is sold to the cavalry. Albert's hopeful journey takes him out of England and to the front lines as the war rages on.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg"
        },
        {
          "title": "The Girl with the Dragon Tattoo",
          "releaseDate": "2011-12-21T05:00:00.000Z",
          "runTime": 158,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "David Fincher",
          "cast": [
            "Daniel Craig",
            "Rooney Mara",
            "Christopher Plummer",
            "Stellan Skarsgård"
          ],
          "country": "USA, Sweden, Norway",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 7.8,
          "awards": "Won 1 Oscar. Another 26 wins & 91 nominations.",
          "mpaaRating": "R",
          "plot": "Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg"
        },
        {
          "title": "Man on a Ledge",
          "releaseDate": "2012-01-27T05:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Asger Leth",
          "cast": [
            "Sam Worthington",
            "Mandy Gonzalez",
            "William Sadler",
            "Barbara Marineau"
          ],
          "country": "USA",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 6.6,
          "awards": "1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "As a police psychologist works to talk down an ex-con who is threatening to jump from a Manhattan hotel rooftop, the biggest diamond heist ever committed is in motion.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MTE4MzY2N15BMl5BanBnXkFtZTcwNjMwNDc3Ng@@._V1_SX300.jpg"
        },
        {
          "title": "Get the Gringo",
          "releaseDate": "2012-06-22T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Action",
            "Crime",
            "Drama"
          ],
          "director": "Adrian Grunberg",
          "cast": [
            "Mel Gibson",
            "Kevin Balmore",
            "Daniel Giménez Cacho",
            "Jesús Ochoa"
          ],
          "country": "USA, Mexico",
          "productionCompany": "Icon Productions",
          "imdbRating": 7,
          "awards": "N/A",
          "mpaaRating": "R",
          "plot": "A career criminal nabbed by Mexican authorities is placed in a tough prison where he learns to survive with the help of a young boy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2I4ZDcxMDctZTkwZC00YWFmLTkxZDQtZGNkYTQ5YTlmZWI0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Just Go with It",
          "releaseDate": "2011-02-11T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Dennis Dugan",
          "cast": [
            "Adam Sandler",
            "Jennifer Aniston",
            "Nicole Kidman",
            "Nick Swardson"
          ],
          "country": "USA",
          "productionCompany": "Happy Madison Productions",
          "imdbRating": 6.4,
          "awards": "5 wins & 13 nominations.",
          "mpaaRating": "PG-13",
          "plot": "On a weekend trip to Hawaii, a plastic surgeon convinces his loyal assistant to pose as his soon-to-be-divorced wife in order to cover up a careless lie he told to his much-younger girlfriend.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM3MzM3NDE5MV5BMl5BanBnXkFtZTcwNDE5MTUxNA@@._V1_SX300.jpg"
        },
        {
          "title": "One Day",
          "releaseDate": "2011-08-19T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Lone Scherfig",
          "cast": [
            "Anne Hathaway",
            "Jim Sturgess",
            "Tom Mison",
            "Jodie Whittaker"
          ],
          "country": "USA, UK",
          "productionCompany": "Color Force",
          "imdbRating": 7,
          "awards": "1 win & 2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After spending the night together on the night of their college graduation Dexter and Emma are shown each year on the same date to see where they are in their lives. They are sometimes together, sometimes not, on that day.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ3NTg2MDI3NF5BMl5BanBnXkFtZTcwMjc5MTA1NA@@._V1_SX300.jpg"
        },
        {
          "title": "The Master",
          "releaseDate": "2012-09-21T04:00:00.000Z",
          "runTime": 138,
          "genres": [
            "Drama"
          ],
          "director": "Paul Thomas Anderson",
          "cast": [
            "Joaquin Phoenix",
            "Price Carson",
            "Mike Howard",
            "Sarah Shoshana David"
          ],
          "country": "USA",
          "productionCompany": "Joanne Sellar",
          "imdbRating": 7.2,
          "awards": "Nominated for 3 Oscars. Another 75 wins & 184 nominations.",
          "mpaaRating": "R",
          "plot": "A Naval veteran arrives home from war unsettled and uncertain of his future - until he is tantalized by the Cause and its charismatic leader.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NjQ5MzMwMF5BMl5BanBnXkFtZTcwMjczNTAzOA@@._V1_SX300.jpg"
        },
        {
          "title": "Zombieland: Double Tap",
          "releaseDate": "2019-10-18T04:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Horror"
          ],
          "director": "Ruben Fleischer",
          "cast": [
            "Woody Harrelson",
            "Jesse Eisenberg",
            "Emma Stone",
            "Abigail Breslin"
          ],
          "country": "USA",
          "productionCompany": "Columbia Pictures",
          "imdbRating": 6.7,
          "awards": "6 nominations.",
          "mpaaRating": "R",
          "plot": "Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjcwNjZhNGYtOGNlNy00NGI3LTlmODMtMGZlMjA3YjA0Njg0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Last Stand",
          "releaseDate": "2013-01-18T05:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Jee-woon Kim",
          "cast": [
            "Arron Shiver",
            "Arnold Schwarzenegger",
            "Titos Menchaca",
            "Richard Dillard"
          ],
          "country": "USA",
          "productionCompany": "Lionsgate Films",
          "imdbRating": 6.3,
          "awards": "1 win & 2 nominations.",
          "mpaaRating": "R",
          "plot": "The leader of a drug cartel busts out of a courthouse and speeds to the Mexican border, where the only thing in his path is a sheriff and his inexperienced staff.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODc4NjI0OTYwNl5BMl5BanBnXkFtZTcwOTYwODQ3OA@@._V1_SX300.jpg"
        },
        {
          "title": "Premium Rush",
          "releaseDate": "2012-08-24T04:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "David Koepp",
          "cast": [
            "Joseph Gordon-Levitt",
            "Dania Ramirez",
            "Sean Kennedy",
            "Kym Perfetto"
          ],
          "country": "USA",
          "productionCompany": "Pariah Films",
          "imdbRating": 6.5,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In Manhattan, a bike messenger picks up an envelope that attracts the interest of a dirty cop, who pursues the cyclist throughout the city.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzkxNjAwMDkwOF5BMl5BanBnXkFtZTcwMTQ1NDkwOA@@._V1_SX300.jpg"
        },
        {
          "title": "127 Hours",
          "releaseDate": "2011-01-28T05:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "Danny Boyle",
          "cast": [
            "James Franco",
            "Kate Mara",
            "Amber Tamblyn",
            "Sean Bott"
          ],
          "country": "USA, UK, France",
          "productionCompany": "Cloud Eight",
          "imdbRating": 7.5,
          "awards": "Nominated for 6 Oscars. Another 23 wins & 144 nominations.",
          "mpaaRating": "R",
          "plot": "A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE0OTc5Mw@@._V1_SX300.jpg"
        },
        {
          "title": "The Mortal Instruments: City of Bones",
          "releaseDate": "2013-08-21T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Horror",
            "Mystery",
            "Romance"
          ],
          "director": "Harald Zwart",
          "cast": [
            "Lily Collins",
            "Jamie Campbell Bower",
            "Kevin Zegers",
            "Jemima West"
          ],
          "country": "USA, Germany, Canada, UK",
          "productionCompany": "Constantin Film International",
          "imdbRating": 5.9,
          "awards": "6 wins & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When her mother disappears, Clary Fray learns that she descends from a line of warriors who protect our world from demons. She joins forces with others like her and heads into a dangerous alternate New York called the Shadow World.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NzAyOTQyNF5BMl5BanBnXkFtZTcwNzQ1MDc4OQ@@._V1_SX300.jpg"
        },
        {
          "title": "What Happened to Monday",
          "releaseDate": "2017-08-18T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Adventure",
            "Crime",
            "Fantasy",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Tommy Wirkola",
          "cast": [
            "Noomi Rapace",
            "Glenn Close",
            "Willem Dafoe",
            "Marwan Kenzari"
          ],
          "country": "UK, France, USA, Belgium",
          "productionCompany": "N/A",
          "imdbRating": 6.9,
          "awards": "1 nomination.",
          "mpaaRating": "TV-MA",
          "plot": "In a world where families are limited to one child due to overpopulation, a set of identical septuplets must avoid being put to a long sleep by the government and dangerous infighting while investigating the disappearance of one of their own.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE4MDQxMDg3MF5BMl5BanBnXkFtZTgwNjQ0MTcwMzI@._V1_SX300.jpg"
        },
        {
          "title": "Captain Phillips",
          "releaseDate": "2013-10-11T04:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Adventure",
            "Biography",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Paul Greengrass",
          "cast": [
            "Tom Hanks",
            "Catherine Keener",
            "Barkhad Abdi",
            "Barkhad Abdirahman"
          ],
          "country": "USA",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 7.8,
          "awards": "Nominated for 6 Oscars. Another 16 wins & 147 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The true story of Captain Richard Phillips and the 2009 hijacking by Somali pirates of the U.S.-flagged MV Maersk Alabama, the first American cargo ship to be hijacked in two hundred years.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODhiZWRhMjctNDUyMS00NmUwLTgwYmItMjJhOWNkZWQ3ZTQxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Elysium",
          "releaseDate": "2013-08-09T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi"
          ],
          "director": "Neill Blomkamp",
          "cast": [
            "Matt Damon",
            "Jodie Foster",
            "Sharlto Copley",
            "Alice Braga"
          ],
          "country": "USA, Mexico, Canada",
          "productionCompany": "QED International",
          "imdbRating": 6.6,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "R",
          "plot": "In the year 2154, the very wealthy live on a man-made space station while the rest of the population resides on a ruined Earth. A man takes on a mission that could bring equality to the polarized worlds.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDc2NjU0MTcwNV5BMl5BanBnXkFtZTcwMjg4MDg2OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Daddy's Home",
          "releaseDate": "2015-12-25T05:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Comedy",
            "Family"
          ],
          "director": "Sean Anders",
          "cast": [
            "Will Ferrell",
            "Mark Wahlberg",
            "Linda Cardellini",
            "Thomas Haden Church"
          ],
          "country": "USA",
          "productionCompany": "Gary Sanchez Productions",
          "imdbRating": 6.2,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Brad Whitaker is a radio host trying to get his stepchildren to love him and call him Dad. But his plans turn upside down when their biological father, Dusty Mayron, returns.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ0OTE1MTk4N15BMl5BanBnXkFtZTgwMDM5OTk5NjE@._V1_SX300.jpg"
        },
        {
          "title": "Exodus: Gods and Kings",
          "releaseDate": "2014-12-12T05:00:00.000Z",
          "runTime": 150,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
          ],
          "director": "Ridley Scott",
          "cast": [
            "Christian Bale",
            "Joel Edgerton",
            "John Turturro",
            "Aaron Paul"
          ],
          "country": "UK, Spain, USA",
          "productionCompany": "Scott Free Productions",
          "imdbRating": 6,
          "awards": "5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The defiant leader Moses rises up against Egyptian Pharaoh Ramses II, setting six hundred thousand slaves on a monumental journey of escape from Egypt and its terrifying cycle of deadly plagues.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI3MDY0NjkxNl5BMl5BanBnXkFtZTgwNTM3NTA0MzE@._V1_SX300.jpg"
        },
        {
          "title": "Melancholia",
          "releaseDate": "2011-05-26T04:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Drama",
            "Sci-Fi"
          ],
          "director": "Lars von Trier",
          "cast": [
            "Kirsten Dunst",
            "Charlotte Gainsbourg",
            "Alexander Skarsgård",
            "Brady Corbet"
          ],
          "country": "Denmark, Sweden, France, Germany",
          "productionCompany": "Zentropa Entertainments",
          "imdbRating": 7.2,
          "awards": "35 wins & 95 nominations.",
          "mpaaRating": "R",
          "plot": "Two sisters find their already strained relationship challenged as a mysterious new planet threatens to collide with Earth.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk4NjM0MjI3MV5BMl5BanBnXkFtZTcwNjcxMDYzNg@@._V1_SX300.jpg"
        },
        {
          "title": "Vacation",
          "releaseDate": "2015-07-29T04:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Adventure",
            "Comedy"
          ],
          "director": "John Francis Daley, Jonathan Goldstein",
          "cast": [
            "Ed Helms",
            "Christina Applegate",
            "Skyler Gisondo",
            "Steele Stebbins"
          ],
          "country": "USA",
          "productionCompany": "Benderspink",
          "imdbRating": 6.1,
          "awards": "1 win & 3 nominations.",
          "mpaaRating": "R",
          "plot": "Rusty Griswold takes his own family on a road trip to \"Walley World\" in order to spice things up with his wife and reconnect with his sons.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTliYWU3ZGEtNjkwYi00ZWQ3LTlhOTgtNTQ4YzhmMjVjY2EwXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
        },
        {
          "title": "Contraband",
          "releaseDate": "2012-01-13T05:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Baltasar Kormákur",
          "cast": [
            "Robert Wahlberg",
            "Caleb Landry Jones",
            "Jason Mitchell",
            "Paul LeBlanc"
          ],
          "country": "USA, UK, France",
          "productionCompany": "Closest to the Hole",
          "imdbRating": 6.5,
          "awards": "1 win.",
          "mpaaRating": "R",
          "plot": "To protect his brother-in-law from a drug lord, a former smuggler heads to Panama to score millions of dollars in counterfeit bills.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE3NzY5NTg0OF5BMl5BanBnXkFtZTcwODk4MzgxNw@@._V1_SX300.jpg"
        },
        {
          "title": "A Star Is Born",
          "releaseDate": "2018-10-05T04:00:00.000Z",
          "runTime": 136,
          "genres": [
            "Drama",
            "Music",
            "Romance"
          ],
          "director": "Bradley Cooper",
          "cast": [
            "Lady Gaga",
            "Bradley Cooper",
            "Sam Elliott",
            "Andrew Dice Clay"
          ],
          "country": "USA",
          "productionCompany": "Jon Peters/Bill Gerber/Joint Effort Production",
          "imdbRating": 7.6,
          "awards": "Won 1 Oscar. Another 93 wins & 275 nominations.",
          "mpaaRating": "R",
          "plot": "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Host",
          "releaseDate": "2013-03-29T04:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Romance",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Andrew Niccol",
          "cast": [
            "Rachel Roberts",
            "Shyaam Karra",
            "Brent Wendell Williams",
            "Jhil McEntyre"
          ],
          "country": "USA, Switzerland, UK",
          "productionCompany": "Nick Wechsler",
          "imdbRating": 5.9,
          "awards": "1 win & 2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When an unseen enemy threatens mankind by taking over their bodies and erasing their memories, Melanie Stryder risks everything to protect the people she cares about.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDg1MTAzNV5BMl5BanBnXkFtZTcwNTk5ODI3OA@@._V1_SX300.jpg"
        },
        {
          "title": "Sherlock Holmes: A Game of Shadows",
          "releaseDate": "2011-12-16T05:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Action",
            "Adventure",
            "Mystery"
          ],
          "director": "Guy Ritchie",
          "cast": [
            "Robert Downey Jr.",
            "Jude Law",
            "Noomi Rapace",
            "Rachel McAdams"
          ],
          "country": "USA, UK",
          "productionCompany": "Silver Pictures",
          "imdbRating": 7.5,
          "awards": "3 wins & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Detective Sherlock Holmes is on the trail of criminal mastermind Professor Moriarty, who is carrying out a string of random crimes across Europe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg"
        },
        {
          "title": "The Three Musketeers",
          "releaseDate": "2011-10-21T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "History",
            "Romance",
            "Thriller"
          ],
          "director": "Paul W.S. Anderson",
          "cast": [
            "Matthew Macfadyen",
            "Milla Jovovich",
            "Helen George",
            "Christian Oliver"
          ],
          "country": "USA, Germany, France, UK",
          "productionCompany": "Constantin Film",
          "imdbRating": 5.7,
          "awards": "5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The hot-headed young D'Artagnan along with three former legendary but now down on their luck Musketeers must unite and defeat a beautiful double agent and her villainous employer from seizing the French throne and engulfing Europe in war.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM3OTc2OTM2OF5BMl5BanBnXkFtZTcwMDM1MjU1NQ@@._V1_SX300.jpg"
        },
        {
          "title": "The King's Speech",
          "releaseDate": "2010-12-25T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Biography",
            "Drama",
            "History"
          ],
          "director": "Tom Hooper",
          "cast": [
            "Colin Firth",
            "Helena Bonham Carter",
            "Derek Jacobi",
            "Robert Portal"
          ],
          "country": "UK, USA, Australia",
          "productionCompany": "See-Saw Films",
          "imdbRating": 8,
          "awards": "Won 4 Oscars. Another 104 wins & 206 nominations.",
          "mpaaRating": "R",
          "plot": "The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_SX300.jpg"
        },
        {
          "title": "Fantastic Four",
          "releaseDate": "2015-08-07T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Josh Trank, Stephen E. Rivkin",
          "cast": [
            "Miles Teller",
            "Michael B. Jordan",
            "Kate Mara",
            "Jamie Bell"
          ],
          "country": "USA, Germany, UK",
          "productionCompany": "Kinberg Genre",
          "imdbRating": 4.3,
          "awards": "8 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk0OTMyMDA0OF5BMl5BanBnXkFtZTgwMzY5NTkzNTE@._V1_SX300.jpg"
        },
        {
          "title": "Halloween",
          "releaseDate": "2018-10-19T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Crime",
            "Horror",
            "Thriller"
          ],
          "director": "David Gordon Green",
          "cast": [
            "Jamie Lee Curtis",
            "Judy Greer",
            "Andi Matichak",
            "James Jude Courtney"
          ],
          "country": "USA, UK",
          "productionCompany": "Malek Akkad",
          "imdbRating": 6.5,
          "awards": "3 wins & 25 nominations.",
          "mpaaRating": "R",
          "plot": "Laurie Strode confronts her long-time foe Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_SX300.jpg"
        },
        {
          "title": "Bad Boys for Life",
          "releaseDate": "2020-01-17T05:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "Adil El Arbi, Bilall Fallah",
          "cast": [
            "Will Smith",
            "Martin Lawrence",
            "Vanessa Hudgens",
            "Alexander Ludwig"
          ],
          "country": "USA, Mexico",
          "productionCompany": "2.0 Entertainment",
          "imdbRating": 6.6,
          "awards": "2 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Horrible Bosses",
          "releaseDate": "2011-07-08T04:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Comedy",
            "Crime"
          ],
          "director": "Seth Gordon",
          "cast": [
            "Jason Bateman",
            "Steve Wiebe",
            "Kevin Spacey",
            "Charlie Day"
          ],
          "country": "USA",
          "productionCompany": "Rat Entertainment",
          "imdbRating": 6.9,
          "awards": "3 wins & 13 nominations.",
          "mpaaRating": "R",
          "plot": "Three friends conspire to murder their awful bosses when they realize they are standing in the way of their happiness.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzYxNDI5Njc5NF5BMl5BanBnXkFtZTcwMDUxODE1NQ@@._V1_SX300.jpg"
        },
        {
          "title": "Underworld: Awakening",
          "releaseDate": "2012-01-20T05:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Action",
            "Fantasy",
            "Horror",
            "Sci-Fi"
          ],
          "director": "Måns Mårlind, Björn Stein",
          "cast": [
            "Kate Beckinsale",
            "Stephen Rea",
            "Michael Ealy",
            "Theo James"
          ],
          "country": "USA, Canada",
          "productionCompany": "Lakeshore Entertainment",
          "imdbRating": 6.4,
          "awards": "1 win.",
          "mpaaRating": "R",
          "plot": "When human forces discover the existence of the Vampire and Lycan clans, a war to eradicate both species commences. The vampire warrior Selene leads the battle against humankind.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMjc0ODk0OF5BMl5BanBnXkFtZTcwMTc5NDQwNw@@._V1_SX300.jpg"
        },
        {
          "title": "The Lego Movie",
          "releaseDate": "2014-02-07T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Christopher Miller, Phil Lord",
          "cast": [
            "Will Arnett",
            "Elizabeth Banks",
            "Craig Berry",
            "Alison Brie"
          ],
          "country": "USA, Denmark, Australia",
          "productionCompany": "LEGO System A/S",
          "imdbRating": 7.7,
          "awards": "Nominated for 1 Oscar. Another 72 wins & 66 nominations.",
          "mpaaRating": "PG",
          "plot": "An ordinary LEGO construction worker, thought to be the prophesied as \"special\", is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
        },
        {
          "title": "Central Intelligence",
          "releaseDate": "2016-06-17T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Rawson Marshall Thurber",
          "cast": [
            "Dwayne Johnson",
            "Kevin Hart",
            "Amy Ryan",
            "Danielle Nicolet"
          ],
          "country": "USA, China",
          "productionCompany": "RatPac-Dune Entertainment",
          "imdbRating": 6.3,
          "awards": "2 wins & 8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After he reconnects with an awkward pal from high school through Facebook, a mild-mannered accountant is lured into the world of international espionage.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@._V1_SX300.jpg"
        },
        {
          "title": "Triple Frontier",
          "releaseDate": "2019-03-13T04:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Action",
            "Adventure",
            "Crime",
            "Thriller"
          ],
          "director": "J.C. Chandor",
          "cast": [
            "Ben Affleck",
            "Oscar Isaac",
            "Charlie Hunnam",
            "Garrett Hedlund"
          ],
          "country": "USA",
          "productionCompany": "Atlas Entertainment",
          "imdbRating": 6.4,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "Loyalties are tested when five friends and former special forces operatives reunite to take down a South American drug lord, unleashing a chain of unintended consequences.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODU4MzM2MDAxMl5BMl5BanBnXkFtZTgwNDEzNjM0NzM@._V1_SX300.jpg"
        },
        {
          "title": "The Change-Up",
          "releaseDate": "2011-08-05T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Comedy",
            "Fantasy"
          ],
          "director": "David Dobkin",
          "cast": [
            "Ryan Reynolds",
            "Jason Bateman",
            "Leslie Mann",
            "Olivia Wilde"
          ],
          "country": "USA",
          "productionCompany": "Original Film",
          "imdbRating": 6.3,
          "awards": "1 nomination.",
          "mpaaRating": "R",
          "plot": "Dave is a married man with three kids and a loving wife, and Mitch is a single man who is at the prime of his sexual life. One fateful night while Mitch and Dave are peeing in a fountain, lightning strikes and they switch bodies.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk3NTM4NDg3OF5BMl5BanBnXkFtZTcwNDk3MzEwNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Red Riding Hood",
          "releaseDate": "2011-03-11T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Fantasy",
            "Horror",
            "Mystery",
            "Romance",
            "Thriller"
          ],
          "director": "Catherine Hardwicke",
          "cast": [
            "Amanda Seyfried",
            "Gary Oldman",
            "Billy Burke",
            "Shiloh Fernandez"
          ],
          "country": "USA, Canada",
          "productionCompany": "Appian Way",
          "imdbRating": 5.5,
          "awards": "5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Set in a medieval village that is haunted by a werewolf, a young girl falls for an orphaned woodcutter, much to her family's displeasure.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc4NjYyMzQ5MV5BMl5BanBnXkFtZTcwNjE5Mjc3NA@@._V1_SX300.jpg"
        },
        {
          "title": "The Greatest Showman",
          "releaseDate": "2017-12-20T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Biography",
            "Drama",
            "Musical"
          ],
          "director": "Michael Gracey",
          "cast": [
            "Hugh Jackman",
            "Michelle Williams",
            "Zac Efron",
            "Zendaya"
          ],
          "country": "USA",
          "productionCompany": "Chernin Entertainment",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 18 wins & 34 nominations.",
          "mpaaRating": "PG",
          "plot": "Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_SX300.jpg"
        },
        {
          "title": "Oblivion",
          "releaseDate": "2013-04-19T04:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Joseph Kosinski",
          "cast": [
            "Tom Cruise",
            "Morgan Freeman",
            "Olga Kurylenko",
            "Andrea Riseborough"
          ],
          "country": "USA",
          "productionCompany": "Chernin Entertainment",
          "imdbRating": 7,
          "awards": "1 win & 17 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Attack the Block",
          "releaseDate": "2011-05-13T04:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Joe Cornish",
          "cast": [
            "Jodie Whittaker",
            "John Boyega",
            "Alex Esmail",
            "Leeon Jones"
          ],
          "country": "UK",
          "productionCompany": "Big Talk",
          "imdbRating": 6.6,
          "awards": "Nominated for 1 BAFTA Film Award. Another 19 wins & 38 nominations.",
          "mpaaRating": "R",
          "plot": "A teen gang in South London defend their block from an alien invasion.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAzNjc1MjgzOF5BMl5BanBnXkFtZTcwMzE3Njk5NQ@@._V1_SX300.jpg"
        },
        {
          "title": "Bridesmaids",
          "releaseDate": "2011-05-13T04:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Paul Feig",
          "cast": [
            "Kristen Wiig",
            "Terry Crews",
            "Maya Rudolph",
            "Tom Yi"
          ],
          "country": "USA",
          "productionCompany": "Apatow Productions",
          "imdbRating": 6.8,
          "awards": "Nominated for 2 Oscars. Another 25 wins & 70 nominations.",
          "mpaaRating": "R",
          "plot": "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_SX300.jpg"
        },
        {
          "title": "Aquaman",
          "releaseDate": "2018-12-21T05:00:00.000Z",
          "runTime": 143,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "James Wan",
          "cast": [
            "Jason Momoa",
            "Amber Heard",
            "Willem Dafoe",
            "Patrick Wilson"
          ],
          "country": "USA, Australia",
          "productionCompany": "Peter Safran",
          "imdbRating": 6.9,
          "awards": "2 wins & 39 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg"
        },
        {
          "title": "Baywatch",
          "releaseDate": "2017-05-25T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Seth Gordon",
          "cast": [
            "Dwayne Johnson",
            "Zac Efron",
            "Priyanka Chopra",
            "Alexandra Daddario"
          ],
          "country": "UK, China, USA",
          "productionCompany": "Cold Spring Pictures",
          "imdbRating": 5.5,
          "awards": "5 wins & 11 nominations.",
          "mpaaRating": "R",
          "plot": "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit, as they uncover a criminal plot that threatens the future of the bay.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTA4MjQ0ODQzNF5BMl5BanBnXkFtZTgwNzA5NjYzMjI@._V1_SX300.jpg"
        },
        {
          "title": "Tucker and Dale vs Evil",
          "releaseDate": "2010-12-09T05:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Comedy",
            "Horror"
          ],
          "director": "Eli Craig",
          "cast": [
            "Tyler Labine",
            "Alan Tudyk",
            "Katrina Bowden",
            "Jesse Moss"
          ],
          "country": "Canada",
          "productionCompany": "Kintop Pictures",
          "imdbRating": 7.5,
          "awards": "10 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "Affable hillbillies Tucker and Dale are on vacation at their dilapidated mountain cabin when they are mistaken for murderers by a group of preppy college students.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODQ5NDQ0MjkwMF5BMl5BanBnXkFtZTcwNDg1OTU4NQ@@._V1_SX300.jpg"
        },
        {
          "title": "I Am Number Four",
          "releaseDate": "2011-02-18T05:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "D.J. Caruso",
          "cast": [
            "Alex Pettyfer",
            "Timothy Olyphant",
            "Teresa Palmer",
            "Dianna Agron"
          ],
          "country": "USA, India",
          "productionCompany": "Bay Films",
          "imdbRating": 6.1,
          "awards": "1 win & 1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "Aliens and their Guardians are hiding on Earth from intergalactic bounty hunters. They can only be killed in numerical order, and Number Four is next on the list. This is his story.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI0NDI1MTMyM15BMl5BanBnXkFtZTcwMDMzMTcyNA@@._V1_SX300.jpg"
        },
        {
          "title": "Buried",
          "releaseDate": "2010-10-15T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Rodrigo Cortés",
          "cast": [
            "Ryan Reynolds",
            "José Luis García Pérez",
            "Robert Paterson",
            "Stephen Tobolowsky"
          ],
          "country": "Spain, UK, USA, France",
          "productionCompany": "Versus Entertainment S.L.",
          "imdbRating": 7,
          "awards": "16 wins & 33 nominations.",
          "mpaaRating": "R",
          "plot": "Paul is a U.S. truck driver working in Iraq. After an attack by a group of Iraqis he wakes to find he is buried alive inside a coffin. With only a lighter and a cell phone it's a race against time to escape this claustrophobic death trap.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZTRmZmIxMDktZjVmMS00NmFiLWExNmMtMzg0MTIyZDYwNWZjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "The Next Three Days",
          "releaseDate": "2010-11-19T05:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Romance",
            "Thriller"
          ],
          "director": "Paul Haggis",
          "cast": [
            "Russell Crowe",
            "Elizabeth Banks",
            "Michael Buie",
            "Moran Atias"
          ],
          "country": "USA, France",
          "productionCompany": "Hwy 61 Films",
          "imdbRating": 7.3,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A married couple's life is turned upside down when the wife is accused of a murder.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA3NTY5ODI4OV5BMl5BanBnXkFtZTcwMjcxNzQ5Mw@@._V1_SX300.jpg"
        },
        {
          "title": "The Conjuring",
          "releaseDate": "2013-07-19T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "James Wan",
          "cast": [
            "Vera Farmiga",
            "Patrick Wilson",
            "Lili Taylor",
            "Ron Livingston"
          ],
          "country": "USA",
          "productionCompany": "Safran Company",
          "imdbRating": 7.5,
          "awards": "15 wins & 23 nominations.",
          "mpaaRating": "R",
          "plot": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Gravity",
          "releaseDate": "2013-10-04T04:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Alfonso Cuarón",
          "cast": [
            "Sandra Bullock",
            "George Clooney",
            "Ed Harris",
            "Orto Ignatiussen"
          ],
          "country": "UK, USA, Mexico",
          "productionCompany": "Heyday Films",
          "imdbRating": 7.7,
          "awards": "Won 7 Oscars. Another 230 wins & 186 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two astronauts work together to survive after an accident leaves them stranded in space.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Help",
          "releaseDate": "2011-08-10T04:00:00.000Z",
          "runTime": 146,
          "genres": [
            "Drama"
          ],
          "director": "Tate Taylor",
          "cast": [
            "Emma Stone",
            "Viola Davis",
            "Bryce Dallas Howard",
            "Octavia Spencer"
          ],
          "country": "USA",
          "productionCompany": "1492 Pictures",
          "imdbRating": 8,
          "awards": "Won 1 Oscar. Another 78 wins & 121 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work, and the hardships they go through on a daily basis.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Monsters University",
          "releaseDate": "2013-06-21T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Dan Scanlon",
          "cast": [
            "Billy Crystal",
            "John Goodman",
            "Steve Buscemi",
            "Helen Mirren"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 BAFTA Film Award. Another 9 wins & 57 nominations.",
          "mpaaRating": "G",
          "plot": "A look at the relationship between Mike Wazowski (Billy Crystal) and James P. \"Sully\" Sullivan (John Goodman) during their days at Monsters University, when they weren't necessarily the best of friends.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUyODgwMDU3M15BMl5BanBnXkFtZTcwOTM4MjcxOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Filth",
          "releaseDate": "2014-04-24T04:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Comedy",
            "Crime",
            "Drama"
          ],
          "director": "Jon S. Baird",
          "cast": [
            "James McAvoy",
            "Jamie Bell",
            "Eddie Marsan",
            "Imogen Poots"
          ],
          "country": "UK, Germany, Sweden, Belgium, USA",
          "productionCompany": "Logie Pictures",
          "imdbRating": 7.1,
          "awards": "9 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "A corrupt, junkie cop with bipolar disorder attempts to manipulate his way through a promotion in order to win back his wife and daughter while also fighting his own inner demons.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE2NTgyMzM0NV5BMl5BanBnXkFtZTgwNzkwNDE1MzE@._V1_SX300.jpg"
        },
        {
          "title": "Killer Elite",
          "releaseDate": "2011-09-23T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Gary McKendry",
          "cast": [
            "Jason Statham",
            "Clive Owen",
            "Robert De Niro",
            "Dominic Purcell"
          ],
          "country": "UK, Australia",
          "productionCompany": "Film Victoria",
          "imdbRating": 6.4,
          "awards": "2 wins & 8 nominations.",
          "mpaaRating": "R",
          "plot": "When his mentor is taken captive by a disgraced Arab sheik, a killer-for-hire is forced into action. His mission: kill three members of Britain's elite Special Air Service responsible for the death of his sons.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc4MDAxMjAzNV5BMl5BanBnXkFtZTcwNTY3ODg3NQ@@._V1_SX300.jpg"
        },
        {
          "title": "Prometheus",
          "releaseDate": "2012-06-08T04:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Adventure",
            "Mystery",
            "Sci-Fi"
          ],
          "director": "Ridley Scott",
          "cast": [
            "Noomi Rapace",
            "Michael Fassbender",
            "Charlize Theron",
            "Idris Elba"
          ],
          "country": "USA, UK",
          "productionCompany": "Scott Free Productions",
          "imdbRating": 7,
          "awards": "Nominated for 1 Oscar. Another 6 wins & 46 nominations.",
          "mpaaRating": "R",
          "plot": "Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Rise of the Guardians",
          "releaseDate": "2012-11-21T05:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Peter Ramsey",
          "cast": [
            "Chris Pine",
            "Alec Baldwin",
            "Jude Law",
            "Isla Fisher"
          ],
          "country": "USA",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 Golden Globe. Another 14 wins & 31 nominations.",
          "mpaaRating": "PG",
          "plot": "When the evil spirit Pitch launches an assault on Earth, the Immortal Guardians team up to protect the innocence of children all around the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_SX300.jpg"
        },
        {
          "title": "Under the Skin",
          "releaseDate": "2014-03-14T04:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Drama",
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Jonathan Glazer",
          "cast": [
            "Scarlett Johansson",
            "Jeremy McWilliams",
            "Lynsey Taylor Mackay",
            "Dougie McConnell"
          ],
          "country": "UK, Switzerland",
          "productionCompany": "N/A",
          "imdbRating": 6.3,
          "awards": "Nominated for 1 BAFTA Film Award. Another 23 wins & 110 nominations.",
          "mpaaRating": "R",
          "plot": "A mysterious young woman seduces lonely men in the evening hours in Scotland. However, events lead her to begin a process of self-discovery.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU1MDEwMDg4Nl5BMl5BanBnXkFtZTgwOTk3NTcxMTE@._V1_SX300.jpg"
        },
        {
          "title": "Battleship",
          "releaseDate": "2012-05-18T04:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Peter Berg",
          "cast": [
            "Taylor Kitsch",
            "Alexander Skarsgård",
            "Rihanna",
            "Brooklyn Decker"
          ],
          "country": "USA, Japan, Hong Kong",
          "productionCompany": "Bluegrass Films",
          "imdbRating": 5.8,
          "awards": "4 wins & 16 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A fleet of ships is forced to do battle with an armada of unknown origins in order to discover and thwart their destructive goals.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI5NTM5MDA2N15BMl5BanBnXkFtZTcwNjkwMzQxNw@@._V1_SX300.jpg"
        },
        {
          "title": "Fright Night",
          "releaseDate": "2011-08-19T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Comedy",
            "Horror"
          ],
          "director": "Craig Gillespie",
          "cast": [
            "Anton Yelchin",
            "Colin Farrell",
            "Toni Collette",
            "David Tennant"
          ],
          "country": "USA",
          "productionCompany": "Michael De Luca",
          "imdbRating": 6.4,
          "awards": "2 wins & 8 nominations.",
          "mpaaRating": "R",
          "plot": "When a nice new neighbor moves in next door, Charley discovers that he is an ancient vampire who preys on the community. Can he save his neighborhood from the creature with the help of the famous \"vampire killer\", Peter Vincent?",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2MDc0NDY0M15BMl5BanBnXkFtZTcwOTgzMTYyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Rio",
          "releaseDate": "2011-04-15T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Crime",
            "Family",
            "Musical"
          ],
          "director": "Carlos Saldanha",
          "cast": [
            "Karen Disher",
            "Jason Fricchione",
            "Sofia Scarpa Saldanha",
            "Leslie Mann"
          ],
          "country": "USA, Brazil",
          "productionCompany": "Blue Sky Studios",
          "imdbRating": 6.9,
          "awards": "Nominated for 1 Oscar. Another 3 wins & 30 nominations.",
          "mpaaRating": "G",
          "plot": "When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely independent Jewel, he takes off on an adventure to Rio de Janeiro with the bird of his dreams.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2MDY3MzAzMl5BMl5BanBnXkFtZTcwMTg0NjM5NA@@._V1_SX300.jpg"
        },
        {
          "title": "Faster",
          "releaseDate": "2010-11-24T05:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "George Tillman Jr.",
          "cast": [
            "Dwayne Johnson",
            "Mauricio Lopez",
            "Jim Gaines",
            "Tom Berenger"
          ],
          "country": "USA",
          "productionCompany": "Castle Rock Entertainment",
          "imdbRating": 6.4,
          "awards": "5 nominations.",
          "mpaaRating": "R",
          "plot": "An ex-con gets on a series of apparently unrelated killings. He gets tracked by a veteran cop with secrets of his own and an egocentric hit man.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMyOTQ5MTAxOF5BMl5BanBnXkFtZTcwOTYzMDg5Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Deadpool",
          "releaseDate": "2016-02-12T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "Tim Miller",
          "cast": [
            "Ryan Reynolds",
            "Karan Soni",
            "Ed Skrein",
            "Michael Benyaer"
          ],
          "country": "USA",
          "productionCompany": "Kinberg Genre",
          "imdbRating": 8,
          "awards": "Nominated for 2 Golden Globes. Another 28 wins & 76 nominations.",
          "mpaaRating": "R",
          "plot": "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "The Wolverine",
          "releaseDate": "2013-07-26T04:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Action",
            "Sci-Fi"
          ],
          "director": "James Mangold",
          "cast": [
            "Hugh Jackman",
            "Tao Okamoto",
            "Rila Fukushima",
            "Hiroyuki Sanada"
          ],
          "country": "USA, UK",
          "productionCompany": "Donners&#39; Company",
          "imdbRating": 6.7,
          "awards": "2 wins & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Wolverine comes to Japan to meet an old friend whose life he saved years ago, and gets embroiled in a conspiracy involving yakuza and mutants.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzg1MDQxMTQ2OF5BMl5BanBnXkFtZTcwMTk3MjAzOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Hansel & Gretel: Witch Hunters",
          "releaseDate": "2013-01-25T05:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Action",
            "Fantasy",
            "Horror"
          ],
          "director": "Tommy Wirkola",
          "cast": [
            "Jeremy Renner",
            "Gemma Arterton",
            "Famke Janssen",
            "Pihla Viitala"
          ],
          "country": "USA, Germany",
          "productionCompany": "Gary Sanchez Productions",
          "imdbRating": 6.1,
          "awards": "3 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "Brother-sister duo Hansel and Gretel are professional witch hunters who help innocent villagers. But they soon stumble upon a case that could hold the key to their past.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA4MDQwODg2NV5BMl5BanBnXkFtZTcwNTc5ODc2OA@@._V1_SX300.jpg"
        },
        {
          "title": "Predators",
          "releaseDate": "2010-07-09T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Nimród Antal",
          "cast": [
            "Adrien Brody",
            "Topher Grace",
            "Alice Braga",
            "Walton Goggins"
          ],
          "country": "USA",
          "productionCompany": "Troublemaker Studios",
          "imdbRating": 6.4,
          "awards": "2 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "A group of elite warriors parachute into an unfamiliar jungle and are hunted by members of a merciless alien race.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjFmNDNlMGItMDQxMS00ZWMxLTg4MmQtMTBiNWU3ZDU1Nzk1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "The Hangover Part II",
          "releaseDate": "2011-05-26T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Comedy"
          ],
          "director": "Todd Phillips",
          "cast": [
            "Bradley Cooper",
            "Ed Helms",
            "Zach Galifianakis",
            "Justin Bartha"
          ],
          "country": "USA, Thailand",
          "productionCompany": "Green Hat Films",
          "imdbRating": 6.5,
          "awards": "5 wins & 18 nominations.",
          "mpaaRating": "R",
          "plot": "Two years after the bachelor party in Las Vegas, Phil, Stu, Alan, and Doug jet to Thailand for Stu's wedding. Stu's plan for a subdued pre-wedding brunch, however, goes seriously awry.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM2MTM4MzY2OV5BMl5BanBnXkFtZTcwNjQ3NzI4NA@@._V1_SX300.jpg"
        },
        {
          "title": "Riddick",
          "releaseDate": "2013-09-06T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "David Twohy",
          "cast": [
            "Vin Diesel",
            "Jordi Mollà",
            "Matt Nable",
            "Katee Sackhoff"
          ],
          "country": "Canada, USA",
          "productionCompany": "One Race Productions",
          "imdbRating": 6.4,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "Left for dead on a sun-scorched planet, Riddick finds himself up against an alien race of predators. Activating an emergency beacon alerts two ships: one carrying a new breed of mercenary, the other captained by a man from Riddick's past.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk5NzYwMzQ4MV5BMl5BanBnXkFtZTcwMjE5MTI1OQ@@._V1_SX300.jpg"
        },
        {
          "title": "No Strings Attached",
          "releaseDate": "2011-01-21T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Ivan Reitman",
          "cast": [
            "Natalie Portman",
            "Ashton Kutcher",
            "Kevin Kline",
            "Cary Elwes"
          ],
          "country": "USA, UK",
          "productionCompany": "Montecito Picture Company",
          "imdbRating": 6.2,
          "awards": "2 wins & 6 nominations.",
          "mpaaRating": "R",
          "plot": "A guy and girl try to keep their relationship strictly physical, but it's not long before they learn that they want something more.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MDQ1NTEzNl5BMl5BanBnXkFtZTcwOTgxNTMyNA@@._V1_SX300.jpg"
        },
        {
          "title": "Men in Black 3",
          "releaseDate": "2012-05-25T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "Barry Sonnenfeld",
          "cast": [
            "Will Smith",
            "Tommy Lee Jones",
            "Josh Brolin",
            "Jemaine Clement"
          ],
          "country": "USA, United Arab Emirates",
          "productionCompany": "Amblin Entertainment",
          "imdbRating": 6.8,
          "awards": "1 win & 13 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Agent J travels in time to M.I.B.'s early days in 1969 to stop an alien from assassinating his friend Agent K and changing history.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Ride Along",
          "releaseDate": "2014-01-17T05:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Tim Story",
          "cast": [
            "Ice Cube",
            "Kevin Hart",
            "John Leguizamo",
            "Bruce McGill"
          ],
          "country": "USA",
          "productionCompany": "Cubevision",
          "imdbRating": 6.2,
          "awards": "1 win & 7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Security guard Ben must prove himself to his girlfriend's brother, top police officer James. He rides along James on a 24-hour patrol of Atlanta.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjU4NzYzOTY1MF5BMl5BanBnXkFtZTgwMTAyNTc1MDE@._V1_SX300.jpg"
        },
        {
          "title": "Star Trek Into Darkness",
          "releaseDate": "2013-05-16T04:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "J.J. Abrams",
          "cast": [
            "Chris Pine",
            "Zachary Quinto",
            "Zoe Saldana",
            "Karl Urban"
          ],
          "country": "USA",
          "productionCompany": "Bad Robot",
          "imdbRating": 7.7,
          "awards": "Nominated for 1 Oscar. Another 8 wins & 58 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Remember Me",
          "releaseDate": "2010-03-12T05:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Allen Coulter",
          "cast": [
            "Caitlyn Rund",
            "Moisés Acevedo",
            "Noel Rodriguez",
            "Kevin P. McCarthy"
          ],
          "country": "USA",
          "productionCompany": "Underground Films",
          "imdbRating": 7.1,
          "awards": "4 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A romantic drama centered on two new lovers: Tyler, whose parents have split in the wake of his brother's suicide, and Ally, who lives each day to the fullest since witnessing her mother's murder.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTA4MTg1ODkwNF5BMl5BanBnXkFtZTcwMzE5ODAxMw@@._V1_SX300.jpg"
        },
        {
          "title": "True Grit",
          "releaseDate": "2010-12-22T05:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Drama",
            "Western"
          ],
          "director": "Ethan Coen, Joel Coen",
          "cast": [
            "Jeff Bridges",
            "Hailee Steinfeld",
            "Matt Damon",
            "Josh Brolin"
          ],
          "country": "USA",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 7.6,
          "awards": "Nominated for 10 Oscars. Another 37 wins & 159 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A stubborn teenager enlists the help of a tough U.S. Marshal to track down her father's murderer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODhkZDIzNjgtOTA5ZS00MmMzLWFkNjYtM2Y2MzFjN2FkNjAzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Unknown",
          "releaseDate": "2011-02-18T05:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Mystery",
            "Thriller"
          ],
          "director": "Jaume Collet-Serra",
          "cast": [
            "Liam Neeson",
            "Diane Kruger",
            "January Jones",
            "Aidan Quinn"
          ],
          "country": "UK, Germany, France, USA",
          "productionCompany": "Panda",
          "imdbRating": 6.8,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When a man awakens from a coma only to discover that someone has taken on his identity, he teams up with a young woman to prove who he is.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODA4NTk3MTQwN15BMl5BanBnXkFtZTcwNjUwMTMxNA@@._V1_SX300.jpg"
        },
        {
          "title": "Winter's Bone",
          "releaseDate": "2010-07-16T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Adventure",
            "Drama",
            "Mystery"
          ],
          "director": "Debra Granik",
          "cast": [
            "Jennifer Lawrence",
            "Isaiah Stone",
            "Ashlee Thompson",
            "Valerie Richards"
          ],
          "country": "USA",
          "productionCompany": "Anonymous Content",
          "imdbRating": 7.1,
          "awards": "Nominated for 4 Oscars. Another 63 wins & 127 nominations.",
          "mpaaRating": "R",
          "plot": "An unflinching Ozark Mountain girl hacks through dangerous social terrain as she hunts down her drug-dealing father while trying to keep her family intact.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA0OTM3MDMxNF5BMl5BanBnXkFtZTcwMDY1MjI0Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Transformers: Dark of the Moon",
          "releaseDate": "2011-06-29T04:00:00.000Z",
          "runTime": 154,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Michael Bay",
          "cast": [
            "Shia LaBeouf",
            "Rosie Huntington-Whiteley",
            "Josh Duhamel",
            "John Turturro"
          ],
          "country": "USA",
          "productionCompany": "Don Murphy/Tom DeSanto",
          "imdbRating": 6.2,
          "awards": "Nominated for 3 Oscars. Another 10 wins & 39 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The Autobots learn of a Cybertronian spacecraft hidden on the moon, and race against the Decepticons to reach it and to learn its secrets.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"
        },
        {
          "title": "Straight Outta Compton",
          "releaseDate": "2015-08-14T04:00:00.000Z",
          "runTime": 147,
          "genres": [
            "Biography",
            "Drama",
            "History",
            "Music"
          ],
          "director": "F. Gary Gray",
          "cast": [
            "O'Shea Jackson Jr.",
            "Corey Hawkins",
            "Jason Mitchell",
            "Neil Brown Jr."
          ],
          "country": "USA",
          "productionCompany": "New Line Cinema",
          "imdbRating": 7.8,
          "awards": "Nominated for 1 Oscar. Another 29 wins & 39 nominations.",
          "mpaaRating": "R",
          "plot": "The rap group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTA5MzkyMzIxNjJeQTJeQWpwZ15BbWU4MDU0MDk0OTUx._V1_SX300.jpg"
        },
        {
          "title": "Taken 2",
          "releaseDate": "2012-10-05T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Olivier Megaton",
          "cast": [
            "Liam Neeson",
            "Maggie Grace",
            "Famke Janssen",
            "Leland Orser"
          ],
          "country": "France, USA, Turkey, UK",
          "productionCompany": "EuropaCorp",
          "imdbRating": 6.3,
          "awards": "1 win & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkwNTQ0ODExOV5BMl5BanBnXkFtZTcwNjU3NDQwOA@@._V1_SX300.jpg"
        },
        {
          "title": "It",
          "releaseDate": "2017-09-08T04:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Horror"
          ],
          "director": "Andy Muschietti",
          "cast": [
            "Jaeden Martell",
            "Jeremy Ray Taylor",
            "Sophia Lillis",
            "Finn Wolfhard"
          ],
          "country": "USA, Canada",
          "productionCompany": "Vertigo Entertainment",
          "imdbRating": 7.3,
          "awards": "9 wins & 49 nominations.",
          "mpaaRating": "R",
          "plot": "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg"
        },
        {
          "title": "Prisoners",
          "releaseDate": "2013-09-20T04:00:00.000Z",
          "runTime": 153,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Denis Villeneuve",
          "cast": [
            "Hugh Jackman",
            "Jake Gyllenhaal",
            "Viola Davis",
            "Maria Bello"
          ],
          "country": "USA",
          "productionCompany": "8:38 Productions",
          "imdbRating": 8.1,
          "awards": "Nominated for 1 Oscar. Another 10 wins & 37 nominations.",
          "mpaaRating": "R",
          "plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Mad Max: Fury Road",
          "releaseDate": "2015-05-15T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "George Miller",
          "cast": [
            "Tom Hardy",
            "Charlize Theron",
            "Nicholas Hoult",
            "Hugh Keays-Byrne"
          ],
          "country": "Australia, South Africa",
          "productionCompany": "Kennedy Miller Mitchell",
          "imdbRating": 8.1,
          "awards": "Won 6 Oscars. Another 235 wins & 231 nominations.",
          "mpaaRating": "R",
          "plot": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Hunger Games",
          "releaseDate": "2012-03-23T04:00:00.000Z",
          "runTime": 142,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Gary Ross",
          "cast": [
            "Stanley Tucci",
            "Wes Bentley",
            "Jennifer Lawrence",
            "Willow Shields"
          ],
          "country": "USA",
          "productionCompany": "Color Force",
          "imdbRating": 7.2,
          "awards": "Nominated for 1 Golden Globe. Another 33 wins & 47 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg"
        },
        {
          "title": "In the Heart of the Sea",
          "releaseDate": "2015-12-11T05:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Action",
            "Adventure",
            "Biography",
            "Drama",
            "History"
          ],
          "director": "Ron Howard",
          "cast": [
            "Chris Hemsworth",
            "Benjamin Walker",
            "Cillian Murphy",
            "Brendan Gleeson"
          ],
          "country": "USA, Australia, Spain",
          "productionCompany": "Imagine Entertainment",
          "imdbRating": 6.9,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A recounting of a New England whaling ship's sinking by a giant whale in 1820, an experience that later inspired the great novel Moby-Dick.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzUwODExM15BMl5BanBnXkFtZTgwNjM0MzE4NjE@._V1_SX300.jpg"
        },
        {
          "title": "We Bought a Zoo",
          "releaseDate": "2011-12-23T05:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Comedy",
            "Drama",
            "Family"
          ],
          "director": "Cameron Crowe",
          "cast": [
            "Matt Damon",
            "Scarlett Johansson",
            "Thomas Haden Church",
            "Colin Ford"
          ],
          "country": "USA",
          "productionCompany": "Twentieth Century Fox",
          "imdbRating": 7.1,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "PG",
          "plot": "Set in Southern California, a father moves his young family to the countryside to renovate and re-open a struggling zoo.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ0MTE3OTUwMl5BMl5BanBnXkFtZTcwODg5NjgwNw@@._V1_SX300.jpg"
        },
        {
          "title": "Downsizing",
          "releaseDate": "2017-12-22T05:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Drama",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Alexander Payne",
          "cast": [
            "Matt Damon",
            "Christoph Waltz",
            "Hong Chau",
            "Kristen Wiig"
          ],
          "country": "USA, Norway",
          "productionCompany": "Paramount Pictures",
          "imdbRating": 5.7,
          "awards": "Nominated for 1 Golden Globe. Another 1 win & 15 nominations.",
          "mpaaRating": "R",
          "plot": "A social satire in which a man realizes he would have a better life if he were to shrink himself to five inches tall, allowing him to live in wealth and splendor.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNDQ5OTYxOV5BMl5BanBnXkFtZTgwOTcyODkxNDM@._V1_SX300.jpg"
        },
        {
          "title": "Total Recall",
          "releaseDate": "2012-08-03T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Len Wiseman",
          "cast": [
            "Colin Farrell",
            "Kate Beckinsale",
            "Jessica Biel",
            "Bryan Cranston"
          ],
          "country": "USA, Canada",
          "productionCompany": "Original Film",
          "imdbRating": 6.3,
          "awards": "2 wins & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A factory worker, Douglas Quaid, begins to suspect that he is a spy after visiting Rekall - a company that provides its clients with implanted fake memories of a life they would like to have led - goes wrong and he finds himself on the run.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2ZiMDMzYWItNDllZC00ZmRmLWI1YzktM2M5M2ZmZDg1OGNlXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"
        },
        {
          "title": "Suicide Squad",
          "releaseDate": "2016-08-05T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "David Ayer",
          "cast": [
            "Will Smith",
            "Jaime FitzSimons",
            "Ike Barinholtz",
            "Margot Robbie"
          ],
          "country": "USA",
          "productionCompany": "Atlas Entertainment",
          "imdbRating": 6,
          "awards": "Won 1 Oscar. Another 16 wins & 40 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_SX300.jpg"
        },
        {
          "title": "The Other Guys",
          "releaseDate": "2010-08-06T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Adam McKay",
          "cast": [
            "Will Ferrell",
            "Derek Jeter",
            "Mark Wahlberg",
            "Eva Mendes"
          ],
          "country": "USA",
          "productionCompany": "Mosaic",
          "imdbRating": 6.7,
          "awards": "3 wins & 15 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two mismatched New York City detectives seize an opportunity to step up like the city's top cops, whom they idolize, only things don't quite go as planned.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDlhZDQ5NDUtNDcwMi00MTQ5LTk1Y2UtYjNmMjgzNzNhNzU3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Adjustment Bureau",
          "releaseDate": "2011-03-04T05:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Romance",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "George Nolfi",
          "cast": [
            "Matt Damon",
            "Emily Blunt",
            "Lisa Thoreson",
            "Florence Kastriner"
          ],
          "country": "USA",
          "productionCompany": "Gambit Pictures",
          "imdbRating": 7,
          "awards": "1 win & 9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The affair between a politician and a contemporary dancer is affected by mysterious forces keeping the lovers apart.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzc0ZDcwZTYtOWUzZi00NDE4LWI4NjgtMWVjZTUyYTA2ZTNhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Grown Ups",
          "releaseDate": "2010-06-25T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Comedy"
          ],
          "director": "Dennis Dugan",
          "cast": [
            "Adam Sandler",
            "Kevin James",
            "Chris Rock",
            "David Spade"
          ],
          "country": "USA",
          "productionCompany": "Happy Madison Productions",
          "imdbRating": 5.9,
          "awards": "3 wins & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After their high school basketball coach passes away, five good friends and former teammates reunite for a Fourth of July holiday weekend.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA0ODYwNzU5Nl5BMl5BanBnXkFtZTcwNTI1MTgxMw@@._V1_SX300.jpg"
        },
        {
          "title": "Inception",
          "releaseDate": "2010-07-16T04:00:00.000Z",
          "runTime": 148,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Christopher Nolan",
          "cast": [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt",
            "Elliot Page",
            "Tom Hardy"
          ],
          "country": "USA, UK",
          "productionCompany": "Warner Bros.",
          "imdbRating": 8.8,
          "awards": "Won 4 Oscars. Another 151 wins & 219 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Cloud Atlas",
          "releaseDate": "2012-10-26T04:00:00.000Z",
          "runTime": 172,
          "genres": [
            "Action",
            "Drama",
            "Mystery",
            "Sci-Fi"
          ],
          "director": "Tom Tykwer, Lana Wachowski, Lilly Wachowski",
          "cast": [
            "Tom Hanks",
            "Halle Berry",
            "Jim Broadbent",
            "Hugo Weaving"
          ],
          "country": "USA, Germany, Hong Kong, Singapore, China",
          "productionCompany": "Cloud Atlas Production",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Golden Globe. Another 15 wins & 78 nominations.",
          "mpaaRating": "R",
          "plot": "An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg"
        },
        {
          "title": "Tomb Raider",
          "releaseDate": "2018-03-16T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Thriller"
          ],
          "director": "Roar Uthaug",
          "cast": [
            "Alicia Vikander",
            "Dominic West",
            "Walton Goggins",
            "Daniel Wu"
          ],
          "country": "UK, USA",
          "productionCompany": "Square Enix",
          "imdbRating": 6.3,
          "awards": "8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Lara Croft (Alicia Vikander), the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she discovers the island where her father, Lord Richard Croft (Dominic West) disappeared.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg"
        },
        {
          "title": "Black Mass",
          "releaseDate": "2015-09-18T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Biography",
            "Crime",
            "Drama"
          ],
          "director": "Scott Cooper",
          "cast": [
            "Johnny Depp",
            "Joel Edgerton",
            "Benedict Cumberbatch",
            "Dakota Johnson"
          ],
          "country": "USA, UK",
          "productionCompany": "Head Gear Films",
          "imdbRating": 6.9,
          "awards": "6 wins & 24 nominations.",
          "mpaaRating": "R",
          "plot": "The true story of Whitey Bulger, the brother of a state senator and the most infamous violent criminal in the history of South Boston, who became an FBI informant to take down a Mafia family invading his turf.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzg0ODI3NDQxNF5BMl5BanBnXkFtZTgwMzgzNDA0NjE@._V1_SX300.jpg"
        },
        {
          "title": "Passengers",
          "releaseDate": "2016-12-21T05:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Drama",
            "Romance",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Morten Tyldum",
          "cast": [
            "Jennifer Lawrence",
            "Chris Pratt",
            "Michael Sheen",
            "Laurence Fishburne"
          ],
          "country": "USA, Australia",
          "productionCompany": "Start Motion Pictures",
          "imdbRating": 7,
          "awards": "Nominated for 2 Oscars. Another 1 win & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjk4ZTMwMTYtOTk1NC00OTA0LWFhMGYtZTBjMzViMDY2YWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "If I Stay",
          "releaseDate": "2014-08-22T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Drama",
            "Fantasy",
            "Music",
            "Romance",
            "Sci-Fi"
          ],
          "director": "R.J. Cutler",
          "cast": [
            "Chloë Grace Moretz",
            "Mireille Enos",
            "Jamie Blackley",
            "Joshua Leonard"
          ],
          "country": "USA",
          "productionCompany": "DiNovi Pictures",
          "imdbRating": 6.7,
          "awards": "3 wins & 1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "Life changes in an instant for young Mia Hall after a car accident puts her in a coma. During an out-of-body experience, she must decide whether to wake up and live a life far different than she had imagined. The choice is hers if she can go on.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI4NjkxODMyMF5BMl5BanBnXkFtZTgwODYwODQ5MTE@._V1_SX300.jpg"
        },
        {
          "title": "Jack the Giant Slayer",
          "releaseDate": "2013-03-01T05:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Bryan Singer",
          "cast": [
            "Nicholas Hoult",
            "Eleanor Tomlinson",
            "Ewan McGregor",
            "Stanley Tucci"
          ],
          "country": "UK, USA",
          "productionCompany": "Original Film",
          "imdbRating": 6.2,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The ancient war between humans and a race of giants is reignited when Jack, a young farmhand fighting for a kingdom and the love of a princess, opens a gateway between the two worlds.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE1NDMxMjI0OV5BMl5BanBnXkFtZTcwMjQyMDExOQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Dark Knight Rises",
          "releaseDate": "2012-07-20T04:00:00.000Z",
          "runTime": 164,
          "genres": [
            "Action",
            "Adventure"
          ],
          "director": "Christopher Nolan",
          "cast": [
            "Christian Bale",
            "Gary Oldman",
            "Tom Hardy",
            "Joseph Gordon-Levitt"
          ],
          "country": "UK, USA",
          "productionCompany": "Syncopy",
          "imdbRating": 8.4,
          "awards": "Nominated for 1 BAFTA Film Award. Another 38 wins & 102 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Dredd",
          "releaseDate": "2012-09-21T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Action",
            "Crime",
            "Sci-Fi"
          ],
          "director": "Pete Travis",
          "cast": [
            "Karl Urban",
            "Rachel Wood",
            "Andile Mngadi",
            "Porteus Xandau"
          ],
          "country": "UK, South Africa, USA, India",
          "productionCompany": "DNA Films",
          "imdbRating": 7.1,
          "awards": "2 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "In a violent, futuristic city where the police have the authority to act as judge, jury and executioner, a cop teams with a trainee to take down a gang that deals the reality-altering drug, SLO-MO.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODkyNDQzMzUzOF5BMl5BanBnXkFtZTcwODYyMDEyOA@@._V1_SX300.jpg"
        },
        {
          "title": "The Great Gatsby",
          "releaseDate": "2013-05-10T04:00:00.000Z",
          "runTime": 143,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Baz Luhrmann",
          "cast": [
            "Lisa Adam",
            "Frank Aldridge",
            "Amitabh Bachchan",
            "Steve Bisley"
          ],
          "country": "Australia, USA",
          "productionCompany": "Bazmark Films",
          "imdbRating": 7.2,
          "awards": "Won 2 Oscars. Another 48 wins & 86 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Tinker Tailor Soldier Spy",
          "releaseDate": "2012-01-06T05:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Tomas Alfredson",
          "cast": [
            "Mark Strong",
            "John Hurt",
            "Zoltán Mucsi",
            "Péter Kálloy Molnár"
          ],
          "country": "UK, France, Germany",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.1,
          "awards": "Nominated for 3 Oscars. Another 35 wins & 97 nominations.",
          "mpaaRating": "R",
          "plot": "In the bleak days of the Cold War, espionage veteran George Smiley is forced from semi-retirement to uncover a Soviet Agent within MI6.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2OTkwNzMyM15BMl5BanBnXkFtZTcwOTI4ODg2Ng@@._V1_SX300.jpg"
        },
        {
          "title": "Terminator Genisys",
          "releaseDate": "2015-07-01T04:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Alan Taylor",
          "cast": [
            "Arnold Schwarzenegger",
            "Jason Clarke",
            "Emilia Clarke",
            "Jai Courtney"
          ],
          "country": "USA, Canada",
          "productionCompany": "Skydance Productions",
          "imdbRating": 6.3,
          "awards": "9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When John Connor, leader of the human resistance, sends Sgt. Kyle Reese back to 1984 to protect Sarah Connor and safeguard the future, an unexpected turn of events creates a fractured timeline.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg"
        },
        {
          "title": "47 Ronin",
          "releaseDate": "2013-12-25T05:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Action",
            "Drama",
            "Fantasy"
          ],
          "director": "Carl Rinsch",
          "cast": [
            "Keanu Reeves",
            "Hiroyuki Sanada",
            "Ko Shibasaki",
            "Tadanobu Asano"
          ],
          "country": "USA, UK, Japan, Hungary",
          "productionCompany": "Universal Pictures",
          "imdbRating": 6.3,
          "awards": "5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A band of samurai set out to avenge the death and dishonor of their master at the hands of a ruthless shogun.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc0MjE2NzE0OV5BMl5BanBnXkFtZTgwNTU5MjE1MDE@._V1_SX300.jpg"
        },
        {
          "title": "Never Let Me Go",
          "releaseDate": "2010-10-15T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Drama",
            "Romance",
            "Sci-Fi"
          ],
          "director": "Mark Romanek",
          "cast": [
            "Carey Mulligan",
            "Andrew Garfield",
            "Izzy Meikle-Small",
            "Charlie Rowe"
          ],
          "country": "UK",
          "productionCompany": "DNA Films",
          "imdbRating": 7.1,
          "awards": "8 wins & 27 nominations.",
          "mpaaRating": "R",
          "plot": "The lives of three friends, from their early school days into young adulthood, when the reality of the world they live in comes knocking.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM3NDQ1MjE2OF5BMl5BanBnXkFtZTcwNDIxNTk2Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Lee Daniels' The Butler",
          "releaseDate": "2013-08-16T04:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "Lee Daniels",
          "cast": [
            "Forest Whitaker",
            "David Banner",
            "Michael Rainey Jr.",
            "LaJessie Smith"
          ],
          "country": "USA",
          "productionCompany": "Laura Ziskin Productions",
          "imdbRating": 7.2,
          "awards": "Nominated for 2 BAFTA Film Awards. Another 16 wins & 52 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As Cecil Gaines serves eight presidents during his tenure as a butler at the White House, the civil rights movement, Vietnam, and other major events affect this man's life, family, and American society.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM2NDY3MjkyMF5BMl5BanBnXkFtZTcwMDM5Nzg5OQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Lucky One",
          "releaseDate": "2012-04-20T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Drama",
            "Mystery",
            "Romance",
            "War"
          ],
          "director": "Scott Hicks",
          "cast": [
            "Zac Efron",
            "Taylor Schilling",
            "Blythe Danner",
            "Riley Thomas Stewart"
          ],
          "country": "USA",
          "productionCompany": "DiNovi Pictures",
          "imdbRating": 6.5,
          "awards": "5 wins & 7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A Marine travels to Louisiana after serving three tours in Iraq and searches for the unknown woman he believes was his good luck charm during the war.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg5NDk3MjAzMF5BMl5BanBnXkFtZTcwMjUyNzExNw@@._V1_SX300.jpg"
        },
        {
          "title": "The Twilight Saga: Eclipse",
          "releaseDate": "2010-06-30T04:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Romance",
            "Thriller"
          ],
          "director": "David Slade",
          "cast": [
            "Xavier Samuel",
            "Kristen Stewart",
            "Robert Pattinson",
            "Billy Burke"
          ],
          "country": "USA",
          "productionCompany": "Temple Hill",
          "imdbRating": 5,
          "awards": "22 wins & 34 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As a string of mysterious killings grips Seattle, Bella, whose high school graduation is fast approaching, is forced to choose between her love for vampire Edward and her friendship with werewolf Jacob.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_SX300.jpg"
        },
        {
          "title": "The Twilight Saga: Breaking Dawn - Part 1",
          "releaseDate": "2011-11-18T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Romance",
            "Thriller"
          ],
          "director": "Bill Condon",
          "cast": [
            "Taylor Lautner",
            "Gil Birmingham",
            "Billy Burke",
            "Sarah Clarke"
          ],
          "country": "USA",
          "productionCompany": "Temple Hill",
          "imdbRating": 4.9,
          "awards": "11 wins & 22 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The Quileutes close in on expecting parents Edward and Bella, whose unborn child poses a threat to the Wolf Pack and the towns people of Forks.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODgxNDE0OTAzOF5BMl5BanBnXkFtZTcwNzcwODE2Ng@@._V1_SX300.jpg"
        },
        {
          "title": "Despicable Me",
          "releaseDate": "2010-07-09T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Animation",
            "Comedy",
            "Crime",
            "Family",
            "Fantasy"
          ],
          "director": "Pierre Coffin, Chris Renaud",
          "cast": [
            "Steve Carell",
            "Jason Segel",
            "Russell Brand",
            "Julie Andrews"
          ],
          "country": "USA, France, Japan",
          "productionCompany": "Illumination Films",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Golden Globe. Another 3 wins & 40 nominations.",
          "mpaaRating": "PG",
          "plot": "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Gangster Squad",
          "releaseDate": "2013-01-11T05:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Ruben Fleischer",
          "cast": [
            "Sean Penn",
            "Holt McCallany",
            "Wade Williams",
            "James Landry Hébert"
          ],
          "country": "USA",
          "productionCompany": "Lin Pictures",
          "imdbRating": 6.7,
          "awards": "5 nominations.",
          "mpaaRating": "R",
          "plot": "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcwMjAyMTUzMl5BMl5BanBnXkFtZTcwODgxNzk1OA@@._V1_SX300.jpg"
        },
        {
          "title": "The Expendables",
          "releaseDate": "2010-08-13T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Sylvester Stallone",
          "cast": [
            "Sylvester Stallone",
            "Jason Statham",
            "Jet Li",
            "Dolph Lundgren"
          ],
          "country": "USA, Bulgaria, Spain, Germany",
          "productionCompany": "Nu Image",
          "imdbRating": 6.5,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "A CIA operative hires a team of mercenaries to eliminate a Latin dictator and a renegade CIA agent.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTUwODQyNjM0NF5BMl5BanBnXkFtZTcwNDMwMTU1Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Rise of the Planet of the Apes",
          "releaseDate": "2011-08-05T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Rupert Wyatt",
          "cast": [
            "Andy Serkis",
            "Karin Konoval",
            "Terry Notary",
            "Richard Ridings"
          ],
          "country": "USA, UK, Canada",
          "productionCompany": "Chernin Entertainment",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 21 wins & 42 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A substance designed to help the brain repair itself gives advanced intelligence to a chimpanzee who leads an ape uprising.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzE3ZmNlZTctMDdmNy00MjMzLWFmZmYtN2M5N2YyYTQ1ZDJjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "A Single Man",
          "releaseDate": "2010-02-05T05:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Tom Ford",
          "cast": [
            "Colin Firth",
            "Julianne Moore",
            "Nicholas Hoult",
            "Matthew Goode"
          ],
          "country": "USA",
          "productionCompany": "Fade to Black Productions",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 39 wins & 57 nominations.",
          "mpaaRating": "R",
          "plot": "An English professor, one year after the sudden death of his boyfriend, is unable to cope with his typical days in 1960s Los Angeles.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzU5MTk4MjQ2M15BMl5BanBnXkFtZTcwNDU0MzEwMw@@._V1_SX300.jpg"
        },
        {
          "title": "Devil",
          "releaseDate": "2010-09-17T04:00:00.000Z",
          "runTime": 80,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "John Erick Dowdle",
          "cast": [
            "Chris Messina",
            "Logan Marshall-Green",
            "Jenny O'Hara",
            "Bojana Novakovic"
          ],
          "country": "USA",
          "productionCompany": "Universal Pictures",
          "imdbRating": 6.2,
          "awards": "2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A group of people are trapped in an elevator and the Devil is mysteriously amongst them.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZDVmZGExMTEtNjk5OS00MTFkLWI0ZDMtNzg4YWFmNGY3NjRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Borat Subsequent Moviefilm",
          "releaseDate": "2020-10-23T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Comedy"
          ],
          "director": "Jason Woliner",
          "cast": [
            "Sacha Baron Cohen",
            "Maria Bakalova",
            "Tom Hanks",
            "Dani Popescu"
          ],
          "country": "UK, USA",
          "productionCompany": "N/A",
          "imdbRating": 6.7,
          "awards": "Nominated for 2 Oscars. Another 32 wins & 55 nominations.",
          "mpaaRating": "R",
          "plot": "Borat returns from Kazakhstan to America and this time he reveals more about the American culture, the COVID-19 pandemic and the political elections.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNmY3OTdkOWEtNjc2ZC00OTZmLWI5OWItMjdjYjRkNTExNDNhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
        },
        {
          "title": "Seeking a Friend for the End of the World",
          "releaseDate": "2012-06-22T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Adventure",
            "Comedy",
            "Drama",
            "Romance",
            "Sci-Fi"
          ],
          "director": "Lorene Scafaria",
          "cast": [
            "Steve Carell",
            "Keira Knightley",
            "Adam Brody",
            "Connie Britton"
          ],
          "country": "USA",
          "productionCompany": "Anonymous Content",
          "imdbRating": 6.7,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "As an asteroid nears Earth, a man finds himself alone after his wife leaves in a panic. He decides to take a road trip to reunite with his high school sweetheart. Accompanying him is a neighbor who inadvertently puts a wrench in his plan.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk4MDQ1NzE3N15BMl5BanBnXkFtZTcwMjA0MDkzNw@@._V1_SX300.jpg"
        },
        {
          "title": "50/50",
          "releaseDate": "2011-09-30T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Jonathan Levine",
          "cast": [
            "Joseph Gordon-Levitt",
            "Seth Rogen",
            "Anna Kendrick",
            "Bryce Dallas Howard"
          ],
          "country": "USA",
          "productionCompany": "Point Grey",
          "imdbRating": 7.6,
          "awards": "Nominated for 2 Golden Globes. Another 12 wins & 26 nominations.",
          "mpaaRating": "R",
          "plot": "Inspired by a true story, a comedy centered on a 27-year-old guy who learns of his cancer diagnosis and his subsequent struggle to beat the disease.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjg3ODQyNTIyN15BMl5BanBnXkFtZTcwMjUzNzM5NQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Secret in Their Eyes",
          "releaseDate": "2010-05-21T04:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Drama",
            "Mystery",
            "Romance",
            "Thriller"
          ],
          "director": "Juan José Campanella",
          "cast": [
            "Soledad Villamil",
            "Ricardo Darín",
            "Carla Quevedo",
            "Pablo Rago"
          ],
          "country": "Argentina, Spain",
          "productionCompany": "Tornasol Films S.A.",
          "imdbRating": 8.2,
          "awards": "Won 1 Oscar. Another 52 wins & 43 nominations.",
          "mpaaRating": "R",
          "plot": "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Kung Fu Panda 2",
          "releaseDate": "2011-05-26T04:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Jennifer Yuh Nelson",
          "cast": [
            "Jack Black",
            "Angelina Jolie",
            "Dustin Hoffman",
            "Gary Oldman"
          ],
          "country": "USA, China",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 7.2,
          "awards": "Nominated for 1 Oscar. Another 5 wins & 46 nominations.",
          "mpaaRating": "PG",
          "plot": "Po and his friends fight to stop a peacock villain from conquering China with a deadly new weapon, but first the Dragon Warrior must come to terms with his past.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Irishman",
          "releaseDate": "2019-11-27T05:00:00.000Z",
          "runTime": 209,
          "genres": [
            "Biography",
            "Crime",
            "Drama"
          ],
          "director": "Martin Scorsese",
          "cast": [
            "Robert De Niro",
            "Al Pacino",
            "Joe Pesci",
            "Harvey Keitel"
          ],
          "country": "USA",
          "productionCompany": "Tribeca Productions",
          "imdbRating": 7.9,
          "awards": "Nominated for 10 Oscars. Another 73 wins & 333 nominations.",
          "mpaaRating": "R",
          "plot": "An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
        },
        {
          "title": "Iron Man 3",
          "releaseDate": "2013-05-03T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Shane Black",
          "cast": [
            "Robert Downey Jr.",
            "Gwyneth Paltrow",
            "Don Cheadle",
            "Guy Pearce"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7.1,
          "awards": "Nominated for 1 Oscar. Another 20 wins & 63 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Pirates of the Caribbean: On Stranger Tides",
          "releaseDate": "2011-05-20T04:00:00.000Z",
          "runTime": 136,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Rob Marshall",
          "cast": [
            "Johnny Depp",
            "Penélope Cruz",
            "Geoffrey Rush",
            "Ian McShane"
          ],
          "country": "USA, UK",
          "productionCompany": "Walt Disney Pictures",
          "imdbRating": 6.6,
          "awards": "3 wins & 31 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg"
        },
        {
          "title": "The Watch",
          "releaseDate": "2012-07-27T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Comedy",
            "Sci-Fi"
          ],
          "director": "Akiva Schaffer",
          "cast": [
            "Ben Stiller",
            "Vince Vaughn",
            "Jonah Hill",
            "Richard Ayoade"
          ],
          "country": "USA",
          "productionCompany": "21 Laps Entertainment",
          "imdbRating": 5.7,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "Four men who form a neighborhood watch group as a way to get out of their day-to-day family routines find themselves defending the Earth from an alien invasion.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjU5MzI1NTk1MV5BMl5BanBnXkFtZTcwMzk5NzY5Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Warrior",
          "releaseDate": "2011-09-09T04:00:00.000Z",
          "runTime": 140,
          "genres": [
            "Action",
            "Drama",
            "Sport"
          ],
          "director": "Gavin O'Connor",
          "cast": [
            "Joel Edgerton",
            "Tom Hardy",
            "Nick Nolte",
            "Jennifer Morrison"
          ],
          "country": "USA",
          "productionCompany": "Lionsgate",
          "imdbRating": 8.2,
          "awards": "Nominated for 1 Oscar. Another 5 wins & 21 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_SX300.jpg"
        },
        {
          "title": "Teenage Mutant Ninja Turtles",
          "releaseDate": "2014-08-08T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "Jonathan Liebesman",
          "cast": [
            "Megan Fox",
            "Will Arnett",
            "William Fichtner",
            "Alan Ritchson"
          ],
          "country": "USA",
          "productionCompany": "Heavy Metal",
          "imdbRating": 5.8,
          "awards": "1 win & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When a kingpin threatens New York City, a group of mutated turtle warriors must emerge from the shadows to protect their home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjUzODQ5MDY5NV5BMl5BanBnXkFtZTgwOTc1NzcyMjE@._V1_SX300.jpg"
        },
        {
          "title": "Ghostbusters",
          "releaseDate": "2016-07-15T04:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Action",
            "Comedy",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Paul Feig",
          "cast": [
            "Zach Woods",
            "Kristen Wiig",
            "Ed Begley Jr.",
            "Charles Dance"
          ],
          "country": "USA, Australia",
          "productionCompany": "Ivan Reitman",
          "imdbRating": 6.6,
          "awards": "5 wins & 24 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg3OTM4NTM4NV5BMl5BanBnXkFtZTgwOTI3NDc0OTE@._V1_SX300.jpg"
        },
        {
          "title": "Evil Dead",
          "releaseDate": "2013-04-05T04:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Horror"
          ],
          "director": "Fede Alvarez",
          "cast": [
            "Jane Levy",
            "Shiloh Fernandez",
            "Lou Taylor Pucci",
            "Jessica Lucas"
          ],
          "country": "USA",
          "productionCompany": "Ghost House Pictures",
          "imdbRating": 6.5,
          "awards": "6 wins & 18 nominations.",
          "mpaaRating": "R",
          "plot": "Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzk2ZTVhOWMtMWQxYS00OWQzLWFmY2QtODQ4NGFmNGQxZWVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "The Social Network",
          "releaseDate": "2010-10-01T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "David Fincher",
          "cast": [
            "Jesse Eisenberg",
            "Rooney Mara",
            "Bryan Barter",
            "Dustin Fitzsimons"
          ],
          "country": "USA",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 7.7,
          "awards": "Won 3 Oscars. Another 168 wins & 186 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Bad Teacher",
          "releaseDate": "2011-06-24T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Jake Kasdan",
          "cast": [
            "Cameron Diaz",
            "Lucy Punch",
            "Jason Segel",
            "Justin Timberlake"
          ],
          "country": "USA",
          "productionCompany": "Mosaic",
          "imdbRating": 5.6,
          "awards": "6 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "A lazy, incompetent middle school teacher who hates her job, her students, and her co-workers is forced to return to teaching to make enough money for breast implants after her wealthy fiancé dumps her.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ5NDI4MDM0Nl5BMl5BanBnXkFtZTcwNDYwODU2NA@@._V1_SX300.jpg"
        },
        {
          "title": "Easy A",
          "releaseDate": "2010-09-17T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Will Gluck",
          "cast": [
            "Emma Stone",
            "Penn Badgley",
            "Amanda Bynes",
            "Dan Byrd"
          ],
          "country": "USA",
          "productionCompany": "Olive Bridge Entertainment",
          "imdbRating": 7,
          "awards": "Nominated for 1 Golden Globe. Another 9 wins & 20 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A clean-cut high school student relies on the school's rumor mill to advance her social and financial standing.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE1MzU1Mjg1OF5BMl5BanBnXkFtZTcwNDc3NDQ2Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Date Night",
          "releaseDate": "2010-04-09T04:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Comedy",
            "Crime",
            "Romance",
            "Thriller"
          ],
          "director": "Shawn Levy",
          "cast": [
            "Steve Carell",
            "Tina Fey",
            "Mark Wahlberg",
            "Taraji P. Henson"
          ],
          "country": "USA",
          "productionCompany": "21 Laps Entertainment",
          "imdbRating": 6.3,
          "awards": "4 wins & 8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In New York City, a case of mistaken identity turns a bored married couple's attempt at a glamorous and romantic evening into something more thrilling and dangerous.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODgwMjM2ODE4M15BMl5BanBnXkFtZTcwMTU2MDcyMw@@._V1_SX300.jpg"
        },
        {
          "title": "Madagascar 3: Europe's Most Wanted",
          "releaseDate": "2012-06-08T04:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family"
          ],
          "director": "Eric Darnell, Tom McGrath, Conrad Vernon",
          "cast": [
            "Ben Stiller",
            "Chris Rock",
            "David Schwimmer",
            "Jada Pinkett Smith"
          ],
          "country": "USA",
          "productionCompany": "PDI",
          "imdbRating": 6.8,
          "awards": "3 wins & 20 nominations.",
          "mpaaRating": "PG",
          "plot": "The Madagascar animals join a struggling European circus to get back to New York, but find themselves being pursued by a psychotic animal control officer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg"
        },
        {
          "title": "Looper",
          "releaseDate": "2012-09-28T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Rian Johnson",
          "cast": [
            "Joseph Gordon-Levitt",
            "Bruce Willis",
            "Emily Blunt",
            "Paul Dano"
          ],
          "country": "USA, China",
          "productionCompany": "Ram Bergman",
          "imdbRating": 7.4,
          "awards": "18 wins & 47 nominations.",
          "mpaaRating": "R",
          "plot": "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg5NTA3NTg4NF5BMl5BanBnXkFtZTcwNTA0NDYzOA@@._V1_SX300.jpg"
        },
        {
          "title": "2 Guns",
          "releaseDate": "2013-08-02T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Baltasar Kormákur",
          "cast": [
            "Denzel Washington",
            "Mark Wahlberg",
            "Paula Patton",
            "Edward James Olmos"
          ],
          "country": "USA",
          "productionCompany": "Marc Platt Productions",
          "imdbRating": 6.7,
          "awards": "3 wins.",
          "mpaaRating": "R",
          "plot": "Two hardened criminals get into trouble with the US border patrol after meeting with a Mexican drug lord, and then revelations start to unfold.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTQ5MTgzNDg4OF5BMl5BanBnXkFtZTcwMjAyODEzOQ@@._V1_SX300.jpg"
        },
        {
          "title": "X-Men: First Class",
          "releaseDate": "2011-06-03T04:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Matthew Vaughn",
          "cast": [
            "James McAvoy",
            "Laurence Belcher",
            "Michael Fassbender",
            "Bill Milner"
          ],
          "country": "USA, UK",
          "productionCompany": "Bad Hat Harry",
          "imdbRating": 7.7,
          "awards": "21 wins & 39 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In the 1960s, superpowered humans Charles Xavier and Erik Lensherr work together to find others like them, but Erik's vengeful pursuit of an ambitious mutant who ruined his life causes a schism to divide them.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Venom",
          "releaseDate": "2018-10-05T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Ruben Fleischer",
          "cast": [
            "Tom Hardy",
            "Michelle Williams",
            "Riz Ahmed",
            "Scott Haze"
          ],
          "country": "China, USA",
          "productionCompany": "Pascal Pictures",
          "imdbRating": 6.7,
          "awards": "3 wins & 9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg"
        },
        {
          "title": "Hercules",
          "releaseDate": "2014-07-25T04:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Brett Ratner",
          "cast": [
            "Dwayne Johnson",
            "Ian McShane",
            "John Hurt",
            "Rufus Sewell"
          ],
          "country": "USA, Hungary",
          "productionCompany": "Flynn Picture Company",
          "imdbRating": 6,
          "awards": "2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Having endured his legendary twelve labors, Hercules, the Greek demigod, has his life as a sword-for-hire tested when the King of Thrace and his daughter seek his aid in defeating a tyrannical warlord.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4ODA5MTA4OF5BMl5BanBnXkFtZTgwNjMyODM5MTE@._V1_SX300.jpg"
        },
        {
          "title": "Scream 4",
          "releaseDate": "2011-04-15T04:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Horror",
            "Mystery"
          ],
          "director": "Wes Craven",
          "cast": [
            "Lucy Hale",
            "Roger Jackson",
            "Shenae Grimes-Beech",
            "Dane Farwell"
          ],
          "country": "USA",
          "productionCompany": "Outerbanks Entertainment",
          "imdbRating": 6.1,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "R",
          "plot": "Ten years have passed, and Sidney Prescott, who has put herself back together thanks in part to her writing, is visited by the Ghostface Killer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk5OTcxNTUyNF5BMl5BanBnXkFtZTcwMDczMzE0NA@@._V1_SX300.jpg"
        },
        {
          "title": "The Twilight Saga: New Moon",
          "releaseDate": "2009-11-20T05:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Romance"
          ],
          "director": "Chris Weitz",
          "cast": [
            "Kristen Stewart",
            "Christina Jastrzembska",
            "Robert Pattinson",
            "Billy Burke"
          ],
          "country": "USA",
          "productionCompany": "Summit Entertainment",
          "imdbRating": 4.7,
          "awards": "20 wins & 24 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Edward leaves Bella after an attack that nearly claimed her life, and, in her depression, she falls into yet another difficult relationship - this time with her close friend, Jacob Black.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI3MjE3NDIxNF5BMl5BanBnXkFtZTcwODM3NTY5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "The Cabin in the Woods",
          "releaseDate": "2012-04-13T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Horror"
          ],
          "director": "Drew Goddard",
          "cast": [
            "Kristen Connolly",
            "Chris Hemsworth",
            "Anna Hutchison",
            "Fran Kranz"
          ],
          "country": "USA",
          "productionCompany": "Mutant Enemy",
          "imdbRating": 7,
          "awards": "20 wins & 34 nominations.",
          "mpaaRating": "R",
          "plot": "Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_SX300.jpg"
        },
        {
          "title": "Exam",
          "releaseDate": "2010-06-17T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Mystery",
            "Thriller"
          ],
          "director": "Stuart Hazeldine",
          "cast": [
            "Adar Beck",
            "Gemma Chan",
            "Nathalie Cox",
            "John Lloyd Fillingham"
          ],
          "country": "UK",
          "productionCompany": "Hazeldine Films",
          "imdbRating": 6.8,
          "awards": "Nominated for 1 BAFTA Film Award. Another 2 wins & 1 nomination.",
          "mpaaRating": "Not Rated",
          "plot": "Eight candidates for a highly desirable corporate job are locked together in an exam room and given a final test with just one seemingly simple question. However, it doesn't take long for confusion to ensue and tensions to unravel.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDg2NzM2NzIwNF5BMl5BanBnXkFtZTcwODE2ODc1Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Incendies",
          "releaseDate": "2011-01-12T05:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Drama",
            "Mystery",
            "War"
          ],
          "director": "Denis Villeneuve",
          "cast": [
            "Mustafa Kamel",
            "Hussein Sami",
            "Rémy Girard",
            "Mélissa Désormeaux-Poulin"
          ],
          "country": "Canada, France",
          "productionCompany": "TS Productions",
          "imdbRating": 8.3,
          "awards": "Nominated for 1 Oscar. Another 39 wins & 16 nominations.",
          "mpaaRating": "R",
          "plot": "Twins journey to the Middle East to discover their family history and fulfill their mother's last wishes.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMWE3MGYzZjktY2Q5Mi00Y2NiLWIyYWUtMmIyNzA3YmZlMGFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Immortals",
          "releaseDate": "2011-11-11T05:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Romance"
          ],
          "director": "Tarsem Singh",
          "cast": [
            "Henry Cavill",
            "Mickey Rourke",
            "Stephen Dorff",
            "Freida Pinto"
          ],
          "country": "USA, Canada, UK",
          "productionCompany": "Relativity",
          "imdbRating": 6,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "R",
          "plot": "Theseus is a mortal man chosen by Zeus to lead the fight against the ruthless King Hyperion, who is on a rampage across Greece to obtain a weapon that can destroy humanity.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMzMjA2MjA2N15BMl5BanBnXkFtZTcwMTkwNTc5Ng@@._V1_SX300.jpg"
        },
        {
          "title": "300: Rise of an Empire",
          "releaseDate": "2014-03-07T05:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Action",
            "Drama"
          ],
          "director": "Noam Murro",
          "cast": [
            "Sullivan Stapleton",
            "Eva Green",
            "Lena Headey",
            "Hans Matheson"
          ],
          "country": "USA",
          "productionCompany": "Mark Canton/Gianna Nunnari",
          "imdbRating": 6.2,
          "awards": "2 wins & 7 nominations.",
          "mpaaRating": "R",
          "plot": "Greek general Themistokles of Athens leads the naval charge against invading Persian forces led by mortal-turned-god Xerxes and Artemisia, vengeful commander of the Persian navy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTEwNTU2MjAwMDdeQTJeQWpwZ15BbWU3MDk2Njc2Njk@._V1_SX300.jpg"
        },
        {
          "title": "Kick-Ass",
          "releaseDate": "2010-04-16T04:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Matthew Vaughn",
          "cast": [
            "Aaron Taylor-Johnson",
            "Garrett M. Brown",
            "Evan Peters",
            "Deborah Twiss"
          ],
          "country": "UK, USA, China",
          "productionCompany": "Marv Films",
          "imdbRating": 7.6,
          "awards": "19 wins & 61 nominations.",
          "mpaaRating": "R",
          "plot": "Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a superhero, even though he has no powers, training or meaningful reason to do so.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMzNzEzMDYxM15BMl5BanBnXkFtZTcwMTc0NTMxMw@@._V1_SX300.jpg"
        },
        {
          "title": "RED",
          "releaseDate": "2010-10-15T04:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Thriller"
          ],
          "director": "Robert Schwentke",
          "cast": [
            "Bruce Willis",
            "Mary-Louise Parker",
            "Heidi von Palleske",
            "Jefferson Brown"
          ],
          "country": "USA, China",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 7,
          "awards": "Nominated for 1 Golden Globe. Another 4 wins & 18 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When his peaceful life is threatened by a high-tech assassin, former black-ops agent Frank Moses reassembles his old team in a last-ditch effort to survive and uncover his assailants.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg"
        },
        {
          "title": "This Is the End",
          "releaseDate": "2013-06-12T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Comedy"
          ],
          "director": "Evan Goldberg, Seth Rogen",
          "cast": [
            "James Franco",
            "Jonah Hill",
            "Seth Rogen",
            "Jay Baruchel"
          ],
          "country": "USA",
          "productionCompany": "Point Grey",
          "imdbRating": 6.6,
          "awards": "10 wins & 21 nominations.",
          "mpaaRating": "R",
          "plot": "Six Los Angeles celebrities are stuck in James Franco's house after a series of devastating events just destroyed the city. Inside, the group not only have to face the apocalypse, but themselves.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQxODE3NjM1Ml5BMl5BanBnXkFtZTcwMzkzNjc4OA@@._V1_SX300.jpg"
        },
        {
          "title": "The Tourist",
          "releaseDate": "2010-12-10T05:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Action",
            "Romance",
            "Thriller"
          ],
          "director": "Florian Henckel von Donnersmarck",
          "cast": [
            "Johnny Depp",
            "Angelina Jolie",
            "Paul Bettany",
            "Timothy Dalton"
          ],
          "country": "USA, France, Italy, UK",
          "productionCompany": "GK Films",
          "imdbRating": 6,
          "awards": "Nominated for 3 Golden Globes. Another 4 wins & 1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "Revolves around Frank, an American tourist visiting Italy to mend a broken heart. Elise is an extraordinary woman who deliberately crosses his path.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMyMzc3OTkwMV5BMl5BanBnXkFtZTcwMjc0MTgwNA@@._V1_SX300.jpg"
        },
        {
          "title": "We Need to Talk About Kevin",
          "releaseDate": "2011-10-21T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Lynne Ramsay",
          "cast": [
            "Tilda Swinton",
            "John C. Reilly",
            "Ezra Miller",
            "Jasper Newell"
          ],
          "country": "UK, USA",
          "productionCompany": "BBC Films",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Golden Globe. Another 26 wins & 65 nominations.",
          "mpaaRating": "R",
          "plot": "Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE0NDE0MjYxNF5BMl5BanBnXkFtZTcwNjM2NTY5Ng@@._V1_SX300.jpg"
        },
        {
          "title": "Zack Snyder's Justice League",
          "releaseDate": "2021-03-18T04:00:00.000Z",
          "runTime": 240,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Zack Snyder",
          "cast": [
            "Jared Leto",
            "Henry Cavill",
            "Amber Heard",
            "Gal Gadot"
          ],
          "country": "USA",
          "productionCompany": "N/A",
          "imdbRating": null,
          "awards": "N/A",
          "mpaaRating": "R",
          "plot": "Zack Snyder's definitive director's cut of Justice League. Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
        },
        {
          "title": "RoboCop",
          "releaseDate": "2014-02-12T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Action",
            "Crime",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "José Padilha",
          "cast": [
            "Joel Kinnaman",
            "Gary Oldman",
            "Michael Keaton",
            "Abbie Cornish"
          ],
          "country": "USA",
          "productionCompany": "Strike Entertainment",
          "imdbRating": 6.1,
          "awards": "4 wins & 1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "In 2028 Detroit, when Alex Murphy, a loving husband, father and good cop, is critically injured in the line of duty, the multinational conglomerate OmniCorp sees their chance for a part-man, part-robot police officer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAyOTUzMTcxN15BMl5BanBnXkFtZTgwMjkyOTc1MDE@._V1_SX300.jpg"
        },
        {
          "title": "The Men Who Stare at Goats",
          "releaseDate": "2009-11-06T05:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Comedy",
            "War"
          ],
          "director": "Grant Heslov",
          "cast": [
            "George Clooney",
            "Ewan McGregor",
            "Jeff Bridges",
            "Kevin Spacey"
          ],
          "country": "USA, UK",
          "productionCompany": "Smoke House",
          "imdbRating": 6.2,
          "awards": "1 win & 1 nomination.",
          "mpaaRating": "R",
          "plot": "A reporter in Iraq might just have the story of a lifetime when he meets Lyn Cassady, a guy who claims to be a former member of the U.S. Army's New Earth Army, a unit that employs paranormal powers in their missions.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIwOTQwNzg1MV5BMl5BanBnXkFtZTcwODc4MDU4Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Saw VI",
          "releaseDate": "2009-10-23T04:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Kevin Greutert",
          "cast": [
            "Tobin Bell",
            "Costas Mandylor",
            "Mark Rolston",
            "Betsy Russell"
          ],
          "country": "Canada, USA, Australia",
          "productionCompany": "Twisted Pictures",
          "imdbRating": 6,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "Agent Strahm is dead, and FBI agent Erickson draws nearer to Hoffman. Meanwhile, a pair of insurance executives find themselves in another game set by Jigsaw.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU0NDA3MTM4M15BMl5BanBnXkFtZTcwOTY4Njg3Mg@@._V1_SX300.jpg"
        },
        {
          "title": "21 Jump Street",
          "releaseDate": "2012-03-16T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Phil Lord, Christopher Miller",
          "cast": [
            "Jonah Hill",
            "Channing Tatum",
            "Brie Larson",
            "Dave Franco"
          ],
          "country": "USA",
          "productionCompany": "Original Film",
          "imdbRating": 7.2,
          "awards": "11 wins & 21 nominations.",
          "mpaaRating": "R",
          "plot": "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTZjNzRjMTMtZDMzNy00Y2ZjLTg0OTAtZjVhNzYyZmJjOTljXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "Hot Tub Time Machine",
          "releaseDate": "2010-03-26T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Comedy",
            "Sci-Fi"
          ],
          "director": "Steve Pink",
          "cast": [
            "John Cusack",
            "Clark Duke",
            "Craig Robinson",
            "Rob Corddry"
          ],
          "country": "USA",
          "productionCompany": "Metro-Goldwyn-Mayer",
          "imdbRating": 6.4,
          "awards": "5 nominations.",
          "mpaaRating": "R",
          "plot": "A malfunctioning time machine at a ski resort takes a man back to 1986 with his two friends and nephew, where they must relive a fateful night and not change anything to make sure the nephew is born.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQwMjExODA4Ml5BMl5BanBnXkFtZTcwNTYwMDYxMw@@._V1_SX300.jpg"
        },
        {
          "title": "Due Date",
          "releaseDate": "2010-11-05T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Todd Phillips",
          "cast": [
            "Robert Downey Jr.",
            "Zach Galifianakis",
            "Michelle Monaghan",
            "Jamie Foxx"
          ],
          "country": "USA",
          "productionCompany": "Green Hat Films",
          "imdbRating": 6.5,
          "awards": "7 nominations.",
          "mpaaRating": "R",
          "plot": "High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU5MTgxODM3Nl5BMl5BanBnXkFtZTcwMjMxNDEwNA@@._V1_SX300.jpg"
        },
        {
          "title": "Anchorman 2: The Legend Continues",
          "releaseDate": "2013-12-18T05:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Comedy"
          ],
          "director": "Adam McKay",
          "cast": [
            "Will Ferrell",
            "Steve Carell",
            "Paul Rudd",
            "David Koechner"
          ],
          "country": "USA",
          "productionCompany": "Gary Sanchez Productions",
          "imdbRating": 6.3,
          "awards": "1 win & 24 nominations.",
          "mpaaRating": "PG-13",
          "plot": "With the 1970s behind them, San Diego's top-rated newsman, Ron Burgundy, returns to take New York City's first twenty-four-hour news channel by storm.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE5ODk0NjQzNV5BMl5BanBnXkFtZTgwODk4MDA1MDE@._V1_SX300.jpg"
        },
        {
          "title": "Mission: Impossible - Ghost Protocol",
          "releaseDate": "2011-12-21T05:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Brad Bird",
          "cast": [
            "Tom Cruise",
            "Paula Patton",
            "Simon Pegg",
            "Jeremy Renner"
          ],
          "country": "USA",
          "productionCompany": "Bad Robot",
          "imdbRating": 7.4,
          "awards": "5 wins & 30 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
        },
        {
          "title": "Let Me In",
          "releaseDate": "2010-10-01T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Drama",
            "Fantasy",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Matt Reeves",
          "cast": [
            "Kodi Smit-McPhee",
            "Chloë Grace Moretz",
            "Richard Jenkins",
            "Cara Buono"
          ],
          "country": "UK, USA",
          "productionCompany": "Fish Head Productions",
          "imdbRating": 7.1,
          "awards": "14 wins & 28 nominations.",
          "mpaaRating": "R",
          "plot": "A bullied young boy befriends a young female vampire who lives in secrecy with her guardian.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDQ4MjQ4OTMwMF5BMl5BanBnXkFtZTcwOTYzNDc4Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Iron Man 2",
          "releaseDate": "2010-05-07T04:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Jon Favreau",
          "cast": [
            "Robert Downey Jr.",
            "Gwyneth Paltrow",
            "Don Cheadle",
            "Scarlett Johansson"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7,
          "awards": "Nominated for 1 Oscar. Another 7 wins & 43 nominations.",
          "mpaaRating": "PG-13",
          "plot": "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Get Him to the Greek",
          "releaseDate": "2010-06-04T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Adventure",
            "Comedy",
            "Music"
          ],
          "director": "Nicholas Stoller",
          "cast": [
            "Russell Brand",
            "Rose Byrne",
            "Tyler McKinney",
            "Zoe Salmon"
          ],
          "country": "USA",
          "productionCompany": "Apatow Company",
          "imdbRating": 6.4,
          "awards": "14 nominations.",
          "mpaaRating": "R",
          "plot": "A record company intern is hired to accompany out-of-control British rock star Aldous Snow to a concert at L.A.'s Greek Theater.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIyMzQ0MjExNV5BMl5BanBnXkFtZTcwMzkyMzgxMw@@._V1_SX300.jpg"
        },
        {
          "title": "Yip Man",
          "releaseDate": "2008-12-12T05:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Action",
            "Biography",
            "Drama",
            "History"
          ],
          "director": "Wilson Yip",
          "cast": [
            "Donnie Yen",
            "Simon Yam",
            "Lynn Xiong",
            "Hiroyuki Ikeuchi"
          ],
          "country": "Hong Kong, China",
          "productionCompany": "Shanghai Film Group",
          "imdbRating": 8,
          "awards": "12 wins & 19 nominations.",
          "mpaaRating": "R",
          "plot": "During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of providing for themselves, Ip Man and the remaining members of the city must find a way to survive.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTFmMjM3M2UtOTIyZC00Zjk3LTkzODUtYTdhNGRmNzFhYzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Resident Evil: Afterlife",
          "releaseDate": "2010-09-10T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Action",
            "Adventure",
            "Horror",
            "Sci-Fi"
          ],
          "director": "Paul W.S. Anderson",
          "cast": [
            "Milla Jovovich",
            "Ali Larter",
            "Kim Coates",
            "Shawn Roberts"
          ],
          "country": "Germany, France, Canada, UK, China, USA",
          "productionCompany": "Davis Films",
          "imdbRating": 5.8,
          "awards": "2 wins & 8 nominations.",
          "mpaaRating": "R",
          "plot": "While still out to destroy the evil Umbrella Corporation, Alice joins a group of survivors living in a prison surrounded by the infected who also want to relocate to the mysterious but supposedly unharmed safe haven known only as Arcadia.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjRlMGQ0NmUtM2U2Ny00MTk3LTg5NjAtN2M3Y2JmZjllNjJlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Ghost in the Shell",
          "releaseDate": "2017-03-31T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Rupert Sanders",
          "cast": [
            "Scarlett Johansson",
            "Pilou Asbæk",
            "Takeshi Kitano",
            "Juliette Binoche"
          ],
          "country": "USA, India, Hong Kong, China, Canada",
          "productionCompany": "Paramount Pictures",
          "imdbRating": 6.3,
          "awards": "3 wins & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In the near future, Major Mira Killian is the first of her kind: A human saved from a terrible crash, who is cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzJiNTI3MjItMGJiMy00YzA1LTg2MTItZmE1ZmRhOWQ0NGY1XkEyXkFqcGdeQXVyOTk4MTM0NQ@@._V1_SX300.jpg"
        },
        {
          "title": "Limitless",
          "releaseDate": "2011-03-18T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Neil Burger",
          "cast": [
            "Bradley Cooper",
            "Robert De Niro",
            "Abbie Cornish",
            "Andrew Howard"
          ],
          "country": "USA, Mexico",
          "productionCompany": "Many Rivers",
          "imdbRating": 7.4,
          "awards": "2 wins & 8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "With the help of a mysterious pill that enables the user to access 100% of his brain abilities, a struggling writer becomes a financial wizard, but it also puts him in a new world with lots of dangers.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmViZGM0MGItZTdiYi00ZDU4LWIxNDYtNTc1NWQ5Njc2N2YwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
          "title": "Battle Los Angeles",
          "releaseDate": "2011-03-11T05:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Sci-Fi"
          ],
          "director": "Jonathan Liebesman",
          "cast": [
            "Aaron Eckhart",
            "Ramon Rodriguez",
            "Will Rothhaar",
            "Cory Hardrict"
          ],
          "country": "USA",
          "productionCompany": "Original Film",
          "imdbRating": 5.7,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A squad of U.S. Marines becomes the last line of defense against a global invasion.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDg2NzQwOGMtMGRkNC00YjAwLTg4NjgtZWQwYzljZmM1YzA4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Brave",
          "releaseDate": "2012-06-22T04:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Mark Andrews, Brenda Chapman, Steve Purcell(co-director)",
          "cast": [
            "Kelly Macdonald",
            "Billy Connolly",
            "Emma Thompson",
            "Julie Walters"
          ],
          "country": "USA, UK",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 7.1,
          "awards": "Won 1 Oscar. Another 19 wins & 48 nominations.",
          "mpaaRating": "PG",
          "plot": "Determined to make her own path in life, Princess Merida (Kelly Macdonald) defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Cars 2",
          "releaseDate": "2011-06-24T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Sci-Fi",
            "Sport"
          ],
          "director": "John Lasseter, Bradford Lewis(co-director)",
          "cast": [
            "Larry the Cable Guy",
            "Owen Wilson",
            "Michael Caine",
            "Emily Mortimer"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Studios",
          "imdbRating": 6.1,
          "awards": "Nominated for 1 Golden Globe. Another 1 win & 18 nominations.",
          "mpaaRating": "G",
          "plot": "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg"
        },
        {
          "title": "The World's End",
          "releaseDate": "2013-08-23T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Comedy",
            "Sci-Fi"
          ],
          "director": "Edgar Wright",
          "cast": [
            "Thomas Law",
            "Zachary Bailess",
            "Jasper Levine",
            "James Tarpey"
          ],
          "country": "UK, USA, Japan",
          "productionCompany": "Working Title Films",
          "imdbRating": 7,
          "awards": "4 wins & 24 nominations.",
          "mpaaRating": "R",
          "plot": "Five friends who reunite in an attempt to top their epic pub crawl from twenty years earlier unwittingly become humanity's only hope for survival.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzA1MTk1MzY0OV5BMl5BanBnXkFtZTgwNjkzNTUwMDE@._V1_SX300.jpg"
        },
        {
          "title": "First Man",
          "releaseDate": "2018-10-12T04:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Biography",
            "Drama",
            "History"
          ],
          "director": "Damien Chazelle",
          "cast": [
            "Ryan Gosling",
            "Claire Foy",
            "Jason Clarke",
            "Kyle Chandler"
          ],
          "country": "USA, Japan",
          "productionCompany": "Temple Hill Entertainment",
          "imdbRating": 7.3,
          "awards": "Won 1 Oscar. Another 30 wins & 190 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"
        },
        {
          "title": "Lawless",
          "releaseDate": "2012-08-29T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Crime",
            "Drama"
          ],
          "director": "John Hillcoat",
          "cast": [
            "Shia LaBeouf",
            "Tom Hardy",
            "Jason Clarke",
            "Guy Pearce"
          ],
          "country": "USA",
          "productionCompany": "Annapurna Pictures",
          "imdbRating": 7.3,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "R",
          "plot": "Set in Depression-era Franklin County, Virginia, a trio of bootlegging brothers are threatened by a new special deputy and other authorities angling for a cut of their profits.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAxNjUyNjUwN15BMl5BanBnXkFtZTcwMDgwOTIyOA@@._V1_SX300.jpg"
        },
        {
          "title": "Escape Plan",
          "releaseDate": "2013-10-18T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Mikael Håfström",
          "cast": [
            "Sylvester Stallone",
            "Arnold Schwarzenegger",
            "Jim Caviezel",
            "Faran Tahir"
          ],
          "country": "USA",
          "productionCompany": "Boies/Shiller Films",
          "imdbRating": 6.7,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "When a structural-security authority finds himself set up and incarcerated in the world's most secret and secure prison, he has to use his skills to escape with help from the inside.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzllMmUxN2UtNmM3YS00NGU1LThhYjUtYmY3YTc0OTVlMzJiXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
        },
        {
          "title": "Doctor Strange",
          "releaseDate": "2016-11-04T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Scott Derrickson",
          "cast": [
            "Benedict Cumberbatch",
            "Chiwetel Ejiofor",
            "Rachel McAdams",
            "Benedict Wong"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Oscar. Another 19 wins & 66 nominations.",
          "mpaaRating": "PG-13",
          "plot": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Lone Ranger",
          "releaseDate": "2013-07-03T04:00:00.000Z",
          "runTime": 150,
          "genres": [
            "Action",
            "Adventure",
            "Western"
          ],
          "director": "Gore Verbinski",
          "cast": [
            "Johnny Depp",
            "Armie Hammer",
            "William Fichtner",
            "Tom Wilkinson"
          ],
          "country": "USA",
          "productionCompany": "Blind Wink",
          "imdbRating": 6.4,
          "awards": "Nominated for 2 Oscars. Another 5 wins & 18 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Native American warrior Tonto recounts the untold tales that transformed John Reid, a man of the law, into a legend of justice.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjFiMTc2MTAtZDA0My00OGRmLTk5M2ItNTlmYTUwZmU2YmRiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Moneyball",
          "releaseDate": "2011-09-23T04:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Biography",
            "Drama",
            "Sport"
          ],
          "director": "Bennett Miller",
          "cast": [
            "Brad Pitt",
            "Jonah Hill",
            "Philip Seymour Hoffman",
            "Robin Wright"
          ],
          "country": "USA",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 7.6,
          "awards": "Nominated for 6 Oscars. Another 29 wins & 76 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg"
        },
        {
          "title": "Out of the Furnace",
          "releaseDate": "2013-12-06T05:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Scott Cooper",
          "cast": [
            "Woody Harrelson",
            "Dendrie Taylor",
            "Carl Ciarfalio",
            "Nancy Mosser"
          ],
          "country": "UK, USA",
          "productionCompany": "Appian Way",
          "imdbRating": 6.8,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "R",
          "plot": "When Rodney Baze mysteriously disappears and law enforcement doesn't follow through fast enough, his older brother, Russell, takes matters into his own hands to find justice.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ4MDU4NV5BMl5BanBnXkFtZTgwOTU1ODgzMDE@._V1_SX300.jpg"
        },
        {
          "title": "Jack Ryan: Shadow Recruit",
          "releaseDate": "2014-01-17T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Action",
            "Drama",
            "Thriller"
          ],
          "director": "Kenneth Branagh",
          "cast": [
            "Chris Pine",
            "Keira Knightley",
            "Kevin Costner",
            "Kenneth Branagh"
          ],
          "country": "USA, Russia",
          "productionCompany": "Lorenzo di Bonaventura",
          "imdbRating": 6.2,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Jack Ryan, as a young covert C.I.A. analyst, uncovers a Russian plot to crash the U.S. economy with a terrorist attack.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY2MDkxNzYwNl5BMl5BanBnXkFtZTgwOTM2MjE5MDE@._V1_SX300.jpg"
        },
        {
          "title": "Gran Torino",
          "releaseDate": "2009-01-09T05:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Drama"
          ],
          "director": "Clint Eastwood",
          "cast": [
            "Clint Eastwood",
            "Christopher Carley",
            "Bee Vang",
            "Ahney Her"
          ],
          "country": "Germany, USA",
          "productionCompany": "Malpaso Company",
          "imdbRating": 8.1,
          "awards": "Nominated for 1 Golden Globe. Another 21 wins & 21 nominations.",
          "mpaaRating": "R",
          "plot": "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_SX300.jpg"
        },
        {
          "title": "Last Vegas",
          "releaseDate": "2013-11-01T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Jon Turteltaub",
          "cast": [
            "Michael Douglas",
            "Robert De Niro",
            "Morgan Freeman",
            "Kevin Kline"
          ],
          "country": "USA",
          "productionCompany": "Laurence Mark Productions",
          "imdbRating": 6.6,
          "awards": "4 wins & 1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "Four friends take a break from their day-to-day lives to throw a bachelor party in Las Vegas for their last remaining single pal.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2ODg2MTIyNF5BMl5BanBnXkFtZTgwMzU2NjgwMDE@._V1_SX300.jpg"
        },
        {
          "title": "Harry Potter and the Deathly Hallows: Part 2",
          "releaseDate": "2011-07-15T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Mystery"
          ],
          "director": "David Yates",
          "cast": [
            "Ralph Fiennes",
            "Michael Gambon",
            "Alan Rickman",
            "Daniel Radcliffe"
          ],
          "country": "UK",
          "productionCompany": "Heyday Films",
          "imdbRating": 8.1,
          "awards": "Nominated for 3 Oscars. Another 46 wins & 91 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "Funny People",
          "releaseDate": "2009-07-31T04:00:00.000Z",
          "runTime": 146,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Judd Apatow",
          "cast": [
            "Adam Sandler",
            "Seth Rogen",
            "Leslie Mann",
            "Eric Bana"
          ],
          "country": "USA",
          "productionCompany": "Apatow Company",
          "imdbRating": 6.3,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "When seasoned comedian George Simmons learns of his terminal, inoperable health condition, his desire to form a genuine friendship causes him to take a relatively green performer under his wing as his opening act.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNWU0ZDllZWEtNWI4ZC00YjIzLTk3YjMtZmE0MmFiNzg4MmRlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Law Abiding Citizen",
          "releaseDate": "2009-10-16T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "F. Gary Gray",
          "cast": [
            "Jamie Foxx",
            "Gerard Butler",
            "Colm Meaney",
            "Bruce McGill"
          ],
          "country": "USA",
          "productionCompany": "Warp Films",
          "imdbRating": 7.4,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTQ1NmZlNDktZTg0NS00ZjNhLTk5M2QtNzExNjUzY2MwMjliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Bourne Legacy",
          "releaseDate": "2012-08-10T04:00:00.000Z",
          "runTime": 135,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Tony Gilroy",
          "cast": [
            "Jeremy Renner",
            "Scott Glenn",
            "Stacy Keach",
            "Edward Norton"
          ],
          "country": "USA, Japan",
          "productionCompany": "Kennedy/Marshall",
          "imdbRating": 6.6,
          "awards": "1 win & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An expansion of the universe from Robert Ludlum's novels, centered on a new hero whose stakes have been triggered by the events of the previous three films.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc4Njk3MDM1Nl5BMl5BanBnXkFtZTcwODgyOTMxOA@@._V1_SX300.jpg"
        },
        {
          "title": "Up in the Air",
          "releaseDate": "2009-12-23T05:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Jason Reitman",
          "cast": [
            "George Clooney",
            "Vera Farmiga",
            "Anna Kendrick",
            "Jason Bateman"
          ],
          "country": "USA",
          "productionCompany": "Montecito Picture Company",
          "imdbRating": 7.4,
          "awards": "Nominated for 6 Oscars. Another 75 wins & 164 nominations.",
          "mpaaRating": "R",
          "plot": "Ryan Bingham enjoys living out of a suitcase for his job, travelling around the country firing people, but finds that lifestyle threatened by the presence of a potential love interest, and a new hire presenting a new business model.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI3MzYxMTA4NF5BMl5BanBnXkFtZTcwMDE4ODg3Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Rango",
          "releaseDate": "2011-03-04T05:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Western"
          ],
          "director": "Gore Verbinski",
          "cast": [
            "Johnny Depp",
            "Isla Fisher",
            "Abigail Breslin",
            "Ned Beatty"
          ],
          "country": "USA, Canada",
          "productionCompany": "Blind Wink",
          "imdbRating": 7.2,
          "awards": "Won 1 Oscar. Another 45 wins & 25 nominations.",
          "mpaaRating": "PG",
          "plot": "Rango is an ordinary chameleon who accidentally winds up in the town of Dirt, a lawless outpost in the Wild West in desperate need of a new sheriff.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc4NjEyODE1OV5BMl5BanBnXkFtZTcwMjYzNTkxNA@@._V1_SX300.jpg"
        },
        {
          "title": "2012",
          "releaseDate": "2009-11-13T05:00:00.000Z",
          "runTime": 158,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Roland Emmerich",
          "cast": [
            "John Cusack",
            "Amanda Peet",
            "Chiwetel Ejiofor",
            "Thandie Newton"
          ],
          "country": "USA",
          "productionCompany": "Centropolis Entertainment",
          "imdbRating": 5.8,
          "awards": "5 wins & 21 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_SX300.jpg"
        },
        {
          "title": "The Lincoln Lawyer",
          "releaseDate": "2011-03-18T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Brad Furman",
          "cast": [
            "Matthew McConaughey",
            "Marisa Tomei",
            "Ryan Phillippe",
            "William H. Macy"
          ],
          "country": "USA",
          "productionCompany": "Stone Village Productions",
          "imdbRating": 7.3,
          "awards": "1 nomination.",
          "mpaaRating": "R",
          "plot": "A lawyer defending a wealthy man begins to believe his client is guilty of more than just one crime.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4NDE4NTY5MV5BMl5BanBnXkFtZTcwODQyMTkxNA@@._V1_SX300.jpg"
        },
        {
          "title": "The Skin I Live In",
          "releaseDate": "2011-09-02T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Drama",
            "Horror",
            "Thriller"
          ],
          "director": "Pedro Almodóvar",
          "cast": [
            "Antonio Banderas",
            "Elena Anaya",
            "Marisa Paredes",
            "Jan Cornet"
          ],
          "country": "Spain",
          "productionCompany": "El Deseo S.A.",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Golden Globe. Another 28 wins & 68 nominations.",
          "mpaaRating": "R",
          "plot": "A brilliant plastic surgeon, haunted by past tragedies, creates a type of synthetic skin that withstands any kind of damage. His guinea pig: a mysterious and volatile woman who holds the key to his obsession.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMWZiNmUyMDItODI4MC00ODJkLThiYmQtOTM1MThhMzAzMTM0XkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_SX300.jpg"
        },
        {
          "title": "Pandorum",
          "releaseDate": "2009-09-25T04:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Action",
            "Horror",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Christian Alvart",
          "cast": [
            "Dennis Quaid",
            "Ben Foster",
            "Cam Gigandet",
            "Antje Traue"
          ],
          "country": "Germany, UK",
          "productionCompany": "Constantin Film",
          "imdbRating": 6.7,
          "awards": "N/A",
          "mpaaRating": "R",
          "plot": "Two crew members of a spaceship wake up from hypersleep to discover that all their colleagues are missing. Despite this, it appears that they are not alone.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDQxNjc5NTMxNl5BMl5BanBnXkFtZTcwNjg2NDE4Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Triangle",
          "releaseDate": "2009-10-16T04:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Fantasy",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Christopher Smith",
          "cast": [
            "Melissa George",
            "Joshua McIvor",
            "Jack Taylor",
            "Michael Dorman"
          ],
          "country": "UK, Australia",
          "productionCompany": "Icon Entertainment International",
          "imdbRating": 6.9,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "R",
          "plot": "Yacht passengers encounter mysterious weather conditions that force them to jump onto another ship, only to have the odd havoc increase.",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2VlODI5ZmMtZDExYS00OWI4LWJiMWItZWZkZWRkNzlmZWI2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "3 Idiots",
          "releaseDate": "2009-12-25T05:00:00.000Z",
          "runTime": 170,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Rajkumar Hirani",
          "cast": [
            "Aamir Khan",
            "Madhavan",
            "Sharman Joshi",
            "Kareena Kapoor"
          ],
          "country": "India",
          "productionCompany": "N/A",
          "imdbRating": 8.4,
          "awards": "64 wins & 23 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\".",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "Moon",
          "releaseDate": "2009-07-10T04:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Drama",
            "Mystery",
            "Sci-Fi"
          ],
          "director": "Duncan Jones",
          "cast": [
            "Sam Rockwell",
            "Kevin Spacey",
            "Dominique McElligott",
            "Rosie Shaw"
          ],
          "country": "UK, USA",
          "productionCompany": "Xingu Films",
          "imdbRating": 7.9,
          "awards": "Won 1 BAFTA Film Award. Another 27 wins & 37 nominations.",
          "mpaaRating": "R",
          "plot": "Astronaut Sam Bell has a quintessentially personal encounter toward the end of his three-year stint on the Moon, where he, working alongside his computer, GERTY, sends back to Earth parcels of a resource that has helped diminish our planet's power problems.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_SX300.jpg"
        },
        {
          "title": "10 Cloverfield Lane",
          "releaseDate": "2016-03-11T05:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Action",
            "Drama",
            "Horror",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Dan Trachtenberg",
          "cast": [
            "John Goodman",
            "Mary Elizabeth Winstead",
            "John Gallagher Jr.",
            "Douglas M. Griffin"
          ],
          "country": "USA",
          "productionCompany": "Bad Robot",
          "imdbRating": 7.2,
          "awards": "15 wins & 48 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After getting in a car accident, a woman is held in a shelter by a man who claims that the outside world is affected by a widespread chemical attack.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEzMjczOTIxMV5BMl5BanBnXkFtZTgwOTUwMjI3NzE@._V1_SX300.jpg"
        },
        {
          "title": "Paranormal Activity",
          "releaseDate": "2009-10-16T04:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Horror",
            "Mystery"
          ],
          "director": "Oren Peli",
          "cast": [
            "Katie Featherston",
            "Micah Sloat",
            "Mark Fredrichs",
            "Amber Armstrong"
          ],
          "country": "USA",
          "productionCompany": "Blumhouse",
          "imdbRating": 6.3,
          "awards": "3 wins & 12 nominations.",
          "mpaaRating": "R",
          "plot": "After moving into a suburban home, a couple becomes increasingly disturbed by a nightly demonic presence.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjY1NjcxODQ4MV5BMl5BanBnXkFtZTcwMzUxNjM4Mg@@._V1_SX300.jpg"
        },
        {
          "title": "From Paris with Love",
          "releaseDate": "2010-02-05T05:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Pierre Morel",
          "cast": [
            "John Travolta",
            "Jonathan Rhys Meyers",
            "Kasia Smutniak",
            "Richard Durden"
          ],
          "country": "France, UK, USA",
          "productionCompany": "EuropaCorp",
          "imdbRating": 6.5,
          "awards": "N/A",
          "mpaaRating": "R",
          "plot": "In Paris, a young employee in the office of the US Ambassador hooks up with an American spy looking to stop a terrorist attack in the city.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODAwMDFjNjktMWY2Mi00MmVhLWI0MjYtNzg4OTI0NzA5YzBjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "An Education",
          "releaseDate": "2010-02-05T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Drama"
          ],
          "director": "Lone Scherfig",
          "cast": [
            "Carey Mulligan",
            "Olivia Williams",
            "Alfred Molina",
            "Cara Seymour"
          ],
          "country": "UK, USA",
          "productionCompany": "BBC",
          "imdbRating": 7.3,
          "awards": "Nominated for 3 Oscars. Another 36 wins & 93 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A coming-of-age story about a teenage girl in 1960s suburban London, and how her life changes with the arrival of a playboy nearly twice her age.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg4NjgzOTc0MF5BMl5BanBnXkFtZTcwOTc2OTE3Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Bronson",
          "releaseDate": "2009-03-13T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Action",
            "Biography",
            "Crime",
            "Drama"
          ],
          "director": "Nicolas Winding Refn",
          "cast": [
            "Tom Hardy",
            "Kelly Adams",
            "Luing Andrews",
            "Katy Barker"
          ],
          "country": "UK, Cayman Islands, Denmark, USA",
          "productionCompany": "Perfume Films",
          "imdbRating": 7.1,
          "awards": "3 wins & 7 nominations.",
          "mpaaRating": "R",
          "plot": "A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZGYwYzdkYmYtYTIzOC00OWU3LWFkOTAtYTFjZTY0MDE4M2VkXkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg"
        },
        {
          "title": "The Hobbit: The Desolation of Smaug",
          "releaseDate": "2013-12-13T05:00:00.000Z",
          "runTime": 161,
          "genres": [
            "Adventure",
            "Fantasy"
          ],
          "director": "Peter Jackson",
          "cast": [
            "Ian McKellen",
            "Martin Freeman",
            "Richard Armitage",
            "Ken Stott"
          ],
          "country": "New Zealand, USA",
          "productionCompany": "WingNut Films",
          "imdbRating": 7.8,
          "awards": "Nominated for 3 Oscars. Another 19 wins & 87 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg"
        },
        {
          "title": "Zombieland",
          "releaseDate": "2009-10-02T04:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Adventure",
            "Comedy",
            "Fantasy",
            "Horror",
            "Sci-Fi"
          ],
          "director": "Ruben Fleischer",
          "cast": [
            "Jesse Eisenberg",
            "Woody Harrelson",
            "Emma Stone",
            "Abigail Breslin"
          ],
          "country": "USA",
          "productionCompany": "Pariah Films",
          "imdbRating": 7.6,
          "awards": "10 wins & 28 nominations.",
          "mpaaRating": "R",
          "plot": "A shy student trying to reach his family in Ohio, a gun-toting tough guy trying to find the last Twinkie, and a pair of sisters trying to get to an amusement park join forces to travel across a zombie-filled America.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SX300.jpg"
        },
        {
          "title": "The Karate Kid",
          "releaseDate": "2010-06-11T04:00:00.000Z",
          "runTime": 140,
          "genres": [
            "Action",
            "Drama",
            "Family",
            "Sport"
          ],
          "director": "Harald Zwart",
          "cast": [
            "Jaden Smith",
            "Jackie Chan",
            "Taraji P. Henson",
            "Wenwen Han"
          ],
          "country": "USA, China",
          "productionCompany": "Overbrook Entertainment",
          "imdbRating": 6.2,
          "awards": "5 wins & 12 nominations.",
          "mpaaRating": "PG",
          "plot": "Work causes a single mother to move to China with her young son; in his new home, the boy embraces kung fu, taught to him by a master.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjQ1NzRhYjYtMWY3My00ODA0LTk5ZDctYjQ4YjE0M2RhMGNiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
        },
        {
          "title": "I Love You, Man",
          "releaseDate": "2009-03-20T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "John Hamburg",
          "cast": [
            "Paul Rudd",
            "Rashida Jones",
            "Sarah Burns",
            "Greg Levine"
          ],
          "country": "USA",
          "productionCompany": "De Line Pictures",
          "imdbRating": 7,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "R",
          "plot": "Friendless Peter Klaven goes on a series of man-dates to find a Best Man for his wedding. But, when his insta-bond with his new B.F.F. puts a strain on his relationship with his fiancée, can the trio learn to live happily ever after?",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg"
        },
        {
          "title": "Public Enemies",
          "releaseDate": "2009-07-01T04:00:00.000Z",
          "runTime": 140,
          "genres": [
            "Biography",
            "Crime",
            "Drama",
            "History"
          ],
          "director": "Michael Mann",
          "cast": [
            "Christian Bale",
            "Christian Stolte",
            "Jason Clarke",
            "Johnny Depp"
          ],
          "country": "USA, Japan",
          "productionCompany": "Forward Pass",
          "imdbRating": 7,
          "awards": "1 win & 14 nominations.",
          "mpaaRating": "R",
          "plot": "The Feds try to take down notorious American gangsters John Dillinger, Baby Face Nelson and Pretty Boy Floyd during a booming crime wave in the 1930s.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMGI4YTIxMDQtNDlmNC00ZDJhLWIyZGItM2QyODRiMTEzN2ViXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Orphan",
          "releaseDate": "2009-07-24T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Jaume Collet-Serra",
          "cast": [
            "Vera Farmiga",
            "Peter Sarsgaard",
            "Isabelle Fuhrman",
            "CCH Pounder"
          ],
          "country": "USA, Canada, Germany, France",
          "productionCompany": "Dark Castle Entertainment",
          "imdbRating": 7,
          "awards": "1 win & 7 nominations.",
          "mpaaRating": "R",
          "plot": "A husband and wife who recently lost their baby adopt a 9-year-old girl who is not nearly as innocent as she appears.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTBjMjY0ODEtZGVkMy00MjUyLTlkMjAtNDBmNzVjOTk0NzQyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          "title": "The Ugly Truth",
          "releaseDate": "2009-07-24T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Robert Luketic",
          "cast": [
            "Katherine Heigl",
            "Gerard Butler",
            "Bree Turner",
            "Eric Winter"
          ],
          "country": "USA",
          "productionCompany": "Lakeshore Entertainment",
          "imdbRating": 6.4,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "An uptight television producer takes control of a morning show segment on modern relationships hosted by a misogynistic man.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM2MTM2OTUwNl5BMl5BanBnXkFtZTcwNTgwNTE0Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Let the Right One In",
          "releaseDate": "2008-12-12T05:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Crime",
            "Drama",
            "Fantasy",
            "Horror",
            "Romance"
          ],
          "director": "Tomas Alfredson",
          "cast": [
            "Kåre Hedebrant",
            "Lina Leandersson",
            "Per Ragnar",
            "Henrik Dahl"
          ],
          "country": "Sweden",
          "productionCompany": "Canal+",
          "imdbRating": 7.9,
          "awards": "Nominated for 1 BAFTA Film Award. Another 75 wins & 57 nominations.",
          "mpaaRating": "R",
          "plot": "Oskar, an overlooked and bullied boy, finds love and revenge through Eli, a beautiful but peculiar girl.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"
        },
        {
          "title": "The Ghost Writer",
          "releaseDate": "2010-03-19T04:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Roman Polanski",
          "cast": [
            "Ewan McGregor",
            "Jon Bernthal",
            "Tim Preece",
            "Jim Belushi"
          ],
          "country": "France, Germany, UK",
          "productionCompany": "RP Films 11",
          "imdbRating": 7.2,
          "awards": "33 wins & 55 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A ghost writer, hired to complete the memoirs of a former British Prime Minister, uncovers secrets that put his own life in jeopardy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI3NzMwMzkyNV5BMl5BanBnXkFtZTcwODk4NjQxMw@@._V1_SX300.jpg"
        },
        {
          "title": "District 9",
          "releaseDate": "2009-08-14T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Neill Blomkamp",
          "cast": [
            "Sharlto Copley",
            "Jason Cope",
            "Nathalie Boltt",
            "Sylvaine Strike"
          ],
          "country": "South Africa, USA, New Zealand, Canada",
          "productionCompany": "WingNut Films",
          "imdbRating": 7.9,
          "awards": "Nominated for 4 Oscars. Another 31 wins & 112 nominations.",
          "mpaaRating": "R",
          "plot": "Violence ensues after an extraterrestrial race forced to live in slum-like conditions on Earth finds a kindred spirit in a government agent exposed to their biotechnology.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmQ5MzFjYWMtMTMwNC00ZGU5LWI3YTQtYzhkMGExNGFlY2Q0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Julie & Julia",
          "releaseDate": "2009-08-07T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Biography",
            "Drama",
            "Romance"
          ],
          "director": "Nora Ephron",
          "cast": [
            "Meryl Streep",
            "Amy Adams",
            "Stanley Tucci",
            "Chris Messina"
          ],
          "country": "USA",
          "productionCompany": "Amy Robinson Productions",
          "imdbRating": 7,
          "awards": "Nominated for 1 Oscar. Another 24 wins & 46 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Julia Child's story of her start in the cooking profession is intertwined with blogger Julie Powell's 2002 challenge to cook all the recipes in Child's first book.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzA4NjA2NjI2NV5BMl5BanBnXkFtZTcwOTEzNzI2Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Green Lantern",
          "releaseDate": "2011-06-17T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Martin Campbell",
          "cast": [
            "Ryan Reynolds",
            "Blake Lively",
            "Peter Sarsgaard",
            "Mark Strong"
          ],
          "country": "USA",
          "productionCompany": "De Line Pictures",
          "imdbRating": 5.5,
          "awards": "3 wins & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Reckless test pilot Hal Jordan is granted an alien ring that bestows him with otherworldly powers that inducts him into an intergalactic police force, the Green Lantern Corps.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjQ1YTIxNzEtMzcxNC00NTUzLThkZjktMmJlYTcyMjBhMGUyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Saw V",
          "releaseDate": "2008-10-24T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Crime",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "David Hackl",
          "cast": [
            "Tobin Bell",
            "Costas Mandylor",
            "Scott Patterson",
            "Betsy Russell"
          ],
          "country": "Canada, USA",
          "productionCompany": "Twisted Pictures",
          "imdbRating": 5.8,
          "awards": "1 win & 2 nominations.",
          "mpaaRating": "R",
          "plot": "Following Jigsaw's grisly demise, Mark Hoffman is commended as a hero, but Agent Strahm is suspicious, and delves into Hoffman's past. Meanwhile, another group of people are put through a series of gruesome tests.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzc2ZWQ4YTYtZDY0Zi00YzkxLTgxNTMtMTE3MDE3NzQyNjc2XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"
        },
        {
          "title": "The Girl with the Dragon Tattoo",
          "releaseDate": "2010-04-30T04:00:00.000Z",
          "runTime": 152,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Niels Arden Oplev",
          "cast": [
            "Michael Nyqvist",
            "Noomi Rapace",
            "Lena Endre",
            "Sven-Bertil Taube"
          ],
          "country": "Sweden, Denmark, Germany, Norway",
          "productionCompany": "Zweites Deutsches Fernsehen",
          "imdbRating": 7.8,
          "awards": "Won 1 BAFTA Film Award. Another 17 wins & 35 nominations.",
          "mpaaRating": "R",
          "plot": "A journalist is aided by a young female hacker in his search for the killer of a woman who has been dead for forty years.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc2Mjc0MDg3MV5BMl5BanBnXkFtZTcwMjUzMDkxMw@@._V1_SX300.jpg"
        },
        {
          "title": "Jennifer's Body",
          "releaseDate": "2009-09-18T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Comedy",
            "Horror"
          ],
          "director": "Karyn Kusama",
          "cast": [
            "Megan Fox",
            "Amanda Seyfried",
            "Johnny Simmons",
            "Adam Brody"
          ],
          "country": "USA, Canada",
          "productionCompany": "Fox Atomic",
          "imdbRating": 5.2,
          "awards": "3 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "A newly possessed high school cheerleader turns into a succubus who specializes in killing her male classmates. Can her best friend put an end to the horror?",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNzYwMjc1Ml5BMl5BanBnXkFtZTcwNDI3MDE3Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Pirate Radio",
          "releaseDate": "2009-11-13T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Comedy",
            "Drama",
            "Music"
          ],
          "director": "Richard Curtis",
          "cast": [
            "Michael Hadley",
            "Charlie Rowe",
            "Lucy Fleming",
            "Philip Seymour Hoffman"
          ],
          "country": "UK, France, Germany",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.4,
          "awards": "2 wins & 9 nominations.",
          "mpaaRating": "R",
          "plot": "A band of rogue DJs that captivated Britain, playing the music that defined a generation and standing up to a government that wanted classical music, and nothing else, on the airwaves.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMzMjYzMTMyM15BMl5BanBnXkFtZTcwOTk5NDA5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Shutter Island",
          "releaseDate": "2010-02-19T05:00:00.000Z",
          "runTime": 138,
          "genres": [
            "Mystery",
            "Thriller"
          ],
          "director": "Martin Scorsese",
          "cast": [
            "Leonardo DiCaprio",
            "Mark Ruffalo",
            "Ben Kingsley",
            "Max von Sydow"
          ],
          "country": "USA",
          "productionCompany": "Phoenix",
          "imdbRating": 8.2,
          "awards": "11 wins & 66 nominations.",
          "mpaaRating": "R",
          "plot": "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Transporter 3",
          "releaseDate": "2008-11-26T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Olivier Megaton",
          "cast": [
            "Jason Statham",
            "Natalya Rudakova",
            "François Berléand",
            "Robert Knepper"
          ],
          "country": "France, USA, Ukraine, UK",
          "productionCompany": "EuropaCorp",
          "imdbRating": 6.1,
          "awards": "2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Frank Martin is forced to deliver Valentina, the kidnapped daughter of a Ukrainian government official, from Marseilles to Odessa on the Black Sea. En route, he has to contend with thugs who want to intercept Valentina's safe delivery.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzg1OTU4M15BMl5BanBnXkFtZTcwMjcyMjI5MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Drag Me to Hell",
          "releaseDate": "2009-05-29T04:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Horror"
          ],
          "director": "Sam Raimi",
          "cast": [
            "Alison Lohman",
            "Justin Long",
            "Lorna Raver",
            "Dileep Rao"
          ],
          "country": "USA",
          "productionCompany": "Ghost House Pictures",
          "imdbRating": 6.5,
          "awards": "7 wins & 24 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A loan officer who evicts an old woman from her home finds herself the recipient of a supernatural curse. Desperate, she turns to a seer to try and save her soul, while evil forces work to push her to a breaking point.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQwNTMyNjc5Ml5BMl5BanBnXkFtZTcwOTI2MTQ0Mg@@._V1_SX300.jpg"
        },
        {
          "title": "The Wrestler",
          "releaseDate": "2009-01-30T05:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Drama",
            "Sport"
          ],
          "director": "Darren Aronofsky",
          "cast": [
            "Mickey Rourke",
            "Marisa Tomei",
            "Evan Rachel Wood",
            "Mark Margolis"
          ],
          "country": "USA, France",
          "productionCompany": "Protozoa Pictures",
          "imdbRating": 7.9,
          "awards": "Nominated for 2 Oscars. Another 58 wins & 91 nominations.",
          "mpaaRating": "R",
          "plot": "A faded professional wrestler must retire, but finds his quest for a new life outside the ring a dispiriting struggle.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MjYyOTg4MF5BMl5BanBnXkFtZTcwNDc2MzQwMg@@._V1_SX300.jpg"
        },
        {
          "title": "The Ides of March",
          "releaseDate": "2011-10-07T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Drama",
            "Thriller"
          ],
          "director": "George Clooney",
          "cast": [
            "Ryan Gosling",
            "George Clooney",
            "Philip Seymour Hoffman",
            "Paul Giamatti"
          ],
          "country": "USA",
          "productionCompany": "Smoke House",
          "imdbRating": 7.1,
          "awards": "Nominated for 1 Oscar. Another 9 wins & 34 nominations.",
          "mpaaRating": "R",
          "plot": "An idealistic staffer for a new presidential candidate gets a crash course on dirty politics during his stint on the campaign trail.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTU4MjkzNTY0OF5BMl5BanBnXkFtZTcwNDI5ODIxNg@@._V1_SX300.jpg"
        },
        {
          "title": "Crank: High Voltage",
          "releaseDate": "2009-04-17T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Mark Neveldine, Brian Taylor",
          "cast": [
            "Jason Statham",
            "Amy Smart",
            "Dwight Yoakam",
            "Efren Ramirez"
          ],
          "country": "USA",
          "productionCompany": "Lakeshore Entertainment",
          "imdbRating": 6.2,
          "awards": "1 win & 2 nominations.",
          "mpaaRating": "R",
          "plot": "Chelios faces a Chinese mobster who has stolen his nearly indestructible heart and replaced it with a battery-powered ticker which requires regular jolts of electricity to keep working.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQzNTU1ODkxNl5BMl5BanBnXkFtZTcwMDgyODEzMg@@._V1_SX300.jpg"
        },
        {
          "title": "Blue Valentine",
          "releaseDate": "2011-01-28T05:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Derek Cianfrance",
          "cast": [
            "Ryan Gosling",
            "Michelle Williams",
            "Faith Wladyka",
            "John Doman"
          ],
          "country": "USA",
          "productionCompany": "Silverwood Films",
          "imdbRating": 7.4,
          "awards": "Nominated for 1 Oscar. Another 9 wins & 55 nominations.",
          "mpaaRating": "R",
          "plot": "The relationship of a contemporary married couple, charting their evolution over a span of years by cross-cutting between time periods.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU4MTQ2MzA1Ml5BMl5BanBnXkFtZTcwODE3NTgwNA@@._V1_SX300.jpg"
        },
        {
          "title": "The Hangover",
          "releaseDate": "2009-06-05T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Comedy"
          ],
          "director": "Todd Phillips",
          "cast": [
            "Bradley Cooper",
            "Ed Helms",
            "Zach Galifianakis",
            "Justin Bartha"
          ],
          "country": "USA, Germany",
          "productionCompany": "Green Hat Films",
          "imdbRating": 7.7,
          "awards": "Won 1 Golden Globe. Another 12 wins & 25 nominations.",
          "mpaaRating": "R",
          "plot": "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
          "title": "Paul Blart: Mall Cop",
          "releaseDate": "2009-01-16T05:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Family"
          ],
          "director": "Steve Carr",
          "cast": [
            "Kevin James",
            "Keir O'Donnell",
            "Jayma Mays",
            "Raini Rodriguez"
          ],
          "country": "USA",
          "productionCompany": "Happy Madison Productions",
          "imdbRating": 5.2,
          "awards": "1 win & 3 nominations.",
          "mpaaRating": "PG",
          "plot": "When a shopping mall is taken over by a gang of organized crooks, it's up to a mild-mannered security guard to save the day.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM2NzA1MzE1NF5BMl5BanBnXkFtZTcwOTYyNDIzMg@@._V1_SX300.jpg"
        },
        {
          "title": "The Taking of Pelham 123",
          "releaseDate": "2009-06-12T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Tony Scott",
          "cast": [
            "Denzel Washington",
            "John Travolta",
            "Luis Guzmán",
            "Victor Gojcaj"
          ],
          "country": "USA, UK",
          "productionCompany": "Escape Artists",
          "imdbRating": 6.4,
          "awards": "1 win & 7 nominations.",
          "mpaaRating": "R",
          "plot": "Armed men hijack a New York City subway train, holding the passengers hostage in return for a ransom, and turning an ordinary day's work for dispatcher Walter Garber into a face-off with the mastermind behind the crime.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU3NzA4MDcwNV5BMl5BanBnXkFtZTcwMDAyNzc1Mg@@._V1_SX300.jpg"
        },
        {
          "title": "TRON: Legacy",
          "releaseDate": "2010-12-17T05:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Joseph Kosinski",
          "cast": [
            "Jeff Bridges",
            "Garrett Hedlund",
            "Olivia Wilde",
            "Bruce Boxleitner"
          ],
          "country": "USA",
          "productionCompany": "Sean Bailey",
          "imdbRating": 6.8,
          "awards": "Nominated for 1 Oscar. Another 10 wins & 49 nominations.",
          "mpaaRating": "PG",
          "plot": "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his father's corrupted creation and a unique ally who was born inside the digital world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_SX300.jpg"
        },
        {
          "title": "Foxcatcher",
          "releaseDate": "2015-01-16T05:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Biography",
            "Drama",
            "History",
            "Sport"
          ],
          "director": "Bennett Miller",
          "cast": [
            "Steve Carell",
            "Channing Tatum",
            "Mark Ruffalo",
            "Sienna Miller"
          ],
          "country": "USA",
          "productionCompany": "Annapurna Pictures",
          "imdbRating": 7,
          "awards": "Nominated for 5 Oscars. Another 13 wins & 76 nominations.",
          "mpaaRating": "R",
          "plot": "U.S. Olympic wrestling champions and brothers Mark Schultz and Dave Schultz join \"Team Foxcatcher\", led by eccentric multi-millionaire John du Pont, as they train for the 1988 Olympic Games in Seoul, South Korea, but John's self-destructive behavior threatens to consume them all.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MjQxNjYxOV5BMl5BanBnXkFtZTgwMzIwODUxMzE@._V1_SX300.jpg"
        },
        {
          "title": "Twilight",
          "releaseDate": "2008-11-21T05:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Drama",
            "Fantasy",
            "Romance"
          ],
          "director": "Catherine Hardwicke",
          "cast": [
            "Kristen Stewart",
            "Sarah Clarke",
            "Matt Bushell",
            "Billy Burke"
          ],
          "country": "USA",
          "productionCompany": "Temple Hill",
          "imdbRating": 5.2,
          "awards": "32 wins & 16 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg"
        },
        {
          "title": "Paul",
          "releaseDate": "2011-03-18T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "Greg Mottola",
          "cast": [
            "Mia Stallard",
            "Simon Pegg",
            "Nick Frost",
            "Jeremy Owen"
          ],
          "country": "USA, UK",
          "productionCompany": "Working Title Films",
          "imdbRating": 7,
          "awards": "2 wins & 9 nominations.",
          "mpaaRating": "R",
          "plot": "Two English comic book geeks traveling across the U.S. encounter an alien outside Area 51.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZmM4YjAyODktOWM0YS00MmVjLWI0YzMtYTBhYzczZGU5YzBiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Adventureland",
          "releaseDate": "2009-04-03T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Greg Mottola",
          "cast": [
            "Jesse Eisenberg",
            "Martin Starr",
            "Jack Gilpin",
            "Margarita Levieva"
          ],
          "country": "USA",
          "productionCompany": "This Is That Productions",
          "imdbRating": 6.8,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "R",
          "plot": "In the summer of 1987, a college graduate takes a 'nowhere' job at his local amusement park, only to find it's the perfect course to get him prepared for the real world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI1NTYyMjA2N15BMl5BanBnXkFtZTcwNjU1OTA0Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Lone Survivor",
          "releaseDate": "2014-01-10T05:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Action",
            "Biography",
            "Drama",
            "War"
          ],
          "director": "Peter Berg",
          "cast": [
            "Mark Wahlberg",
            "Taylor Kitsch",
            "Emile Hirsch",
            "Ben Foster"
          ],
          "country": "USA, UK",
          "productionCompany": "Envision Entertainment",
          "imdbRating": 7.5,
          "awards": "Nominated for 2 Oscars. Another 6 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "Marcus Luttrell and his team set out on a mission to capture or kill notorious Taliban leader Ahmad Shah, in late June 2005. Marcus and his team are left to fight for their lives in one of the most valiant efforts of modern warfare.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Blended",
          "releaseDate": "2014-05-23T04:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Frank Coraci",
          "cast": [
            "Adam Sandler",
            "Drew Barrymore",
            "Kevin Nealon",
            "Terry Crews"
          ],
          "country": "USA",
          "productionCompany": "Gulfstream Pictures",
          "imdbRating": 6.5,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After a bad blind date, a man and woman find themselves stuck together at a resort for families, where their attraction grows as their respective kids benefit from the burgeoning relationship.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzc2ODI5NjAyMl5BMl5BanBnXkFtZTgwMzIyOTE4MDE@._V1_SX300.jpg"
        },
        {
          "title": "Ice Age: Dawn of the Dinosaurs",
          "releaseDate": "2009-07-01T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Carlos Saldanha, Mike Thurmeier(co-director)",
          "cast": [
            "Eunice Cho",
            "Karen Disher",
            "Harrison Fahn",
            "Maile Flanagan"
          ],
          "country": "USA, UK, Australia",
          "productionCompany": "Twentieth Century Fox",
          "imdbRating": 6.9,
          "awards": "3 wins & 13 nominations.",
          "mpaaRating": "PG",
          "plot": "When Sid's attempt to adopt three dinosaur eggs gets him abducted by their real mother to an underground lost world, his friends attempt to rescue him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMzNDkzMTcyOV5BMl5BanBnXkFtZTcwNDIzMjM2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Couples Retreat",
          "releaseDate": "2009-10-09T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Comedy"
          ],
          "director": "Peter Billingsley",
          "cast": [
            "Vince Vaughn",
            "Jason Bateman",
            "Faizon Love",
            "Jon Favreau"
          ],
          "country": "USA",
          "productionCompany": "Wild West Picture Show",
          "imdbRating": 5.5,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A comedy centered around four couples who settle into a tropical-island resort for a vacation. While one of the couples is there to work on the marriage, the others fail to realize that participation in the resort's therapy sessions is not optional.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQxMjI1Nzc0M15BMl5BanBnXkFtZTcwMTc0Mzg2Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Night at the Museum: Battle of the Smithsonian",
          "releaseDate": "2009-05-22T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Shawn Levy",
          "cast": [
            "Ben Stiller",
            "Amy Adams",
            "Owen Wilson",
            "Hank Azaria"
          ],
          "country": "USA, Canada",
          "productionCompany": "1492 Pictures",
          "imdbRating": 6,
          "awards": "2 wins & 9 nominations.",
          "mpaaRating": "PG",
          "plot": "Security guard Larry Daley infiltrates the Smithsonian Institution in order to rescue Jedediah and Octavius, who have been shipped to the museum by mistake.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMGZjZDE2NjUtMzVkNy00N2UyLTg5MjYtYzY1ZmM1YWY3ZTZmXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
        },
        {
          "title": "Dark Shadows",
          "releaseDate": "2012-05-11T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Comedy",
            "Fantasy",
            "Horror"
          ],
          "director": "Tim Burton",
          "cast": [
            "Johnny Depp",
            "Michelle Pfeiffer",
            "Helena Bonham Carter",
            "Eva Green"
          ],
          "country": "USA, Australia, UK",
          "productionCompany": "Zanuck Company",
          "imdbRating": 6.2,
          "awards": "2 wins & 13 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An imprisoned vampire, Barnabas Collins, is set free and returns to his ancestral home, where his dysfunctional descendants are in need of his protection.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjc0NzAyMzI1MF5BMl5BanBnXkFtZTcwMTE0NDQ1Nw@@._V1_SX300.jpg"
        },
        {
          "title": "Planet Terror",
          "releaseDate": "2008-06-13T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Horror",
            "Thriller"
          ],
          "director": "Robert Rodriguez",
          "cast": [
            "Rose McGowan",
            "Freddy Rodríguez",
            "Josh Brolin",
            "Marley Shelton"
          ],
          "country": "USA, Mexico",
          "productionCompany": "A Band Apart",
          "imdbRating": 7,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "After an experimental bio-weapon is released, turning thousands into zombie-like creatures, it's up to a rag-tag group of survivors to stop the infected and those behind its release.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODdmNmM2ZTgtODM1MS00ZGMxLTk3MTMtMGQ1ODZhMTQ1NWEwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Skyfall",
          "releaseDate": "2012-11-09T05:00:00.000Z",
          "runTime": 143,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Sam Mendes",
          "cast": [
            "Daniel Craig",
            "Judi Dench",
            "Javier Bardem",
            "Ralph Fiennes"
          ],
          "country": "UK, USA, Turkey",
          "productionCompany": "Eon Productions Ltd.",
          "imdbRating": 7.8,
          "awards": "Won 2 Oscars. Another 65 wins & 122 nominations.",
          "mpaaRating": "PG-13",
          "plot": "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg"
        },
        {
          "title": "Meet the Spartans",
          "releaseDate": "2008-01-25T05:00:00.000Z",
          "runTime": 87,
          "genres": [
            "Animation",
            "Comedy",
            "Fantasy"
          ],
          "director": "Jason Friedberg, Aaron Seltzer",
          "cast": [
            "Sean Maguire",
            "Carmen Electra",
            "Ken Davitian",
            "Kevin Sorbo"
          ],
          "country": "USA",
          "productionCompany": "New Regency Pictures",
          "imdbRating": 2.8,
          "awards": "6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A spoof of 300 (2006) and many other movies, TV series/shows/commercials, video games and celebrities. King Leonidas of Sparta and his army of 12 go to war against Xerxes of Persia to fight to the death for Sparta's freedom.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMDE3NDQwMF5BMl5BanBnXkFtZTcwMjA0MzU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Ghost Rider: Spirit of Vengeance",
          "releaseDate": "2012-02-17T05:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Action",
            "Fantasy",
            "Thriller"
          ],
          "director": "Mark Neveldine, Brian Taylor",
          "cast": [
            "Nicolas Cage",
            "Violante Placido",
            "Ciarán Hinds",
            "Idris Elba"
          ],
          "country": "USA, United Arab Emirates",
          "productionCompany": "Columbia Pictures",
          "imdbRating": 4.3,
          "awards": "4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Johnny Blaze, tortured by the Ghost Rider's curse, gets a chance of redemption through protecting the Devil's son, whose father is pursuing him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkwNDM5MDEzOF5BMl5BanBnXkFtZTcwNDEyNTUxNw@@._V1_SX300.jpg"
        },
        {
          "title": "The Trial of the Chicago 7",
          "releaseDate": "2020-10-16T04:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Drama",
            "History",
            "Thriller"
          ],
          "director": "Aaron Sorkin",
          "cast": [
            "Eddie Redmayne",
            "Alex Sharp",
            "Sacha Baron Cohen",
            "Jeremy Strong"
          ],
          "country": "USA, UK, India",
          "productionCompany": "N/A",
          "imdbRating": 7.8,
          "awards": "Won 1 Golden Globe. Another 47 wins & 174 nominations.",
          "mpaaRating": "R",
          "plot": "The story of 7 people on trial stemming from various charges surrounding the uprising at the 1968 Democratic National Convention in Chicago, Illinois.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjYzOGE1MjUtODgyMy00ZDAxLTljYTgtNzk0Njg2YWQwMTZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Yes Man",
          "releaseDate": "2008-12-19T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Peyton Reed",
          "cast": [
            "Jim Carrey",
            "Zooey Deschanel",
            "Bradley Cooper",
            "John Michael Higgins"
          ],
          "country": "USA, UK",
          "productionCompany": "Heyday Films",
          "imdbRating": 6.8,
          "awards": "3 wins & 9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A man challenges himself to say \"yes\" to everything.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzBmZTMzYmItNzhhMC00M2FkLWIxMGEtMjIxMjAwNmQ2ZmM4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Water for Elephants",
          "releaseDate": "2011-04-22T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Francis Lawrence",
          "cast": [
            "Reese Witherspoon",
            "Robert Pattinson",
            "Christoph Waltz",
            "Paul Schneider"
          ],
          "country": "USA",
          "productionCompany": "3 Arts Entertainment",
          "imdbRating": 6.9,
          "awards": "3 wins & 13 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Set in the 1930s, a former veterinary student takes a job in a travelling circus and falls in love with the ringmaster's wife.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQzMDU3NDEwN15BMl5BanBnXkFtZTcwMTI3MDU0NA@@._V1_SX300.jpg"
        },
        {
          "title": "A Christmas Carol",
          "releaseDate": "2009-11-06T05:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Animation",
            "Drama",
            "Family",
            "Fantasy"
          ],
          "director": "Robert Zemeckis",
          "cast": [
            "Jim Carrey",
            "Steve Valentine",
            "Daryl Sabara",
            "Sage Ryan"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Pictures",
          "imdbRating": 6.8,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "PG",
          "plot": "An animated retelling of Charles Dickens' classic novel about a Victorian-era miser taken on a journey of self-redemption, courtesy of several mysterious Christmas apparitions.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM1MTI5ODU4MV5BMl5BanBnXkFtZTcwNTYyNTU4Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Boyhood",
          "releaseDate": "2014-08-15T04:00:00.000Z",
          "runTime": 165,
          "genres": [
            "Drama"
          ],
          "director": "Richard Linklater",
          "cast": [
            "Ellar Coltrane",
            "Patricia Arquette",
            "Elijah Smith",
            "Lorelei Linklater"
          ],
          "country": "USA",
          "productionCompany": "Detour Filmproduction",
          "imdbRating": 7.9,
          "awards": "Won 1 Oscar. Another 172 wins & 218 nominations.",
          "mpaaRating": "R",
          "plot": "The life of Mason, from early childhood to his arrival at college.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg"
        },
        {
          "title": "The Wave",
          "releaseDate": "2011-05-27T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Drama",
            "Thriller"
          ],
          "director": "Dennis Gansel",
          "cast": [
            "Jürgen Vogel",
            "Frederick Lau",
            "Max Riemelt",
            "Jennifer Ulrich"
          ],
          "country": "Germany, France",
          "productionCompany": "N/A",
          "imdbRating": 7.6,
          "awards": "9 wins & 8 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "A high school teacher's experiment to demonstrate to his students what life is like under a dictatorship spins horribly out of control when he forms a social unit with a life of its own.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzc0ZmUyZjAtZThkMi00ZDY5LTg5YjctYmUwM2FiYjMyMDI5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Cloverfield",
          "releaseDate": "2008-01-18T05:00:00.000Z",
          "runTime": 85,
          "genres": [
            "Action",
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Matt Reeves",
          "cast": [
            "Lizzy Caplan",
            "Jessica Lucas",
            "T.J. Miller",
            "Michael Stahl-David"
          ],
          "country": "USA",
          "productionCompany": "Bad Robot",
          "imdbRating": 7,
          "awards": "5 wins & 34 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A group of friends venture deep into the streets of New York on a rescue mission during a rampaging monster attack.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZDNhNDJlNDktZDI4OC00OTE3LWI2M2UtOThkNTFkNjBjYzRmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          "title": "Eagle Eye",
          "releaseDate": "2008-09-26T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Mystery",
            "Thriller"
          ],
          "director": "D.J. Caruso",
          "cast": [
            "Shia LaBeouf",
            "Michelle Monaghan",
            "Rosario Dawson",
            "Michael Chiklis"
          ],
          "country": "USA, Germany",
          "productionCompany": "Kurtzman/Orci",
          "imdbRating": 6.6,
          "awards": "3 wins & 8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Jerry and Rachel are two strangers thrown together by a mysterious phone call from a woman they have never met. Threatening their lives and family, she pushes Jerry and Rachel into a series of increasingly dangerous situations, using the technology of everyday life to track and control their every move.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5MTMzMDMzNl5BMl5BanBnXkFtZTcwMzUwNDUzMw@@._V1_SX300.jpg"
        },
        {
          "title": "The Invention of Lying",
          "releaseDate": "2009-10-02T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Comedy",
            "Fantasy",
            "Romance"
          ],
          "director": "Ricky Gervais, Matthew Robinson",
          "cast": [
            "Ricky Gervais",
            "Jennifer Garner",
            "Jonah Hill",
            "Louis C.K."
          ],
          "country": "USA",
          "productionCompany": "Radar Pictures",
          "imdbRating": 6.4,
          "awards": "1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "A comedy set in a world where no one has ever lied, until a writer seizes the opportunity for personal gain.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2OTQzOTc1Nl5BMl5BanBnXkFtZTcwNDM5MDE4Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Invictus",
          "releaseDate": "2009-12-11T05:00:00.000Z",
          "runTime": 134,
          "genres": [
            "Biography",
            "Drama",
            "History",
            "Sport"
          ],
          "director": "Clint Eastwood",
          "cast": [
            "Morgan Freeman",
            "Matt Damon",
            "Tony Kgoroge",
            "Patrick Mofokeng"
          ],
          "country": "USA",
          "productionCompany": "Malpaso Company",
          "imdbRating": 7.3,
          "awards": "Nominated for 2 Oscars. Another 12 wins & 35 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Nelson Mandela, in his first term as President of South Africa, initiates a unique venture to unite the Apartheid-torn land: enlist the national rugby team on a mission to win the 1995 Rugby World Cup.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAyMzExMDM1N15BMl5BanBnXkFtZTcwNTcyMTQ5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Transformers: Revenge of the Fallen",
          "releaseDate": "2009-06-24T04:00:00.000Z",
          "runTime": 149,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Michael Bay",
          "cast": [
            "Shia LaBeouf",
            "Megan Fox",
            "Josh Duhamel",
            "Tyrese Gibson"
          ],
          "country": "USA",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 6,
          "awards": "Nominated for 1 Oscar. Another 15 wins & 30 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Sam Witwicky leaves the Autobots behind for a normal life. But when his mind is filled with cryptic symbols, the Decepticons target him and he is dragged back into the Transformers' war.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Life as We Know It",
          "releaseDate": "2010-10-08T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Greg Berlanti",
          "cast": [
            "Katherine Heigl",
            "Josh Duhamel",
            "Josh Lucas",
            "Alexis Clagett"
          ],
          "country": "USA",
          "productionCompany": "Gold Circle Films",
          "imdbRating": 6.5,
          "awards": "2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two single adults become caregivers to an orphaned girl when their mutual best friends die in an accident.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc1OTQzNzE0Nl5BMl5BanBnXkFtZTcwNDU4NDk3Mw@@._V1_SX300.jpg"
        },
        {
          "title": "The Imaginarium of Doctor Parnassus",
          "releaseDate": "2010-01-08T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Adventure",
            "Comedy",
            "Fantasy",
            "Mystery"
          ],
          "director": "Terry Gilliam",
          "cast": [
            "Andrew Garfield",
            "Christopher Plummer",
            "Richard Riddell",
            "Katie Lyons"
          ],
          "country": "UK, France, Canada",
          "productionCompany": "Infinity Entertainment",
          "imdbRating": 6.8,
          "awards": "Nominated for 2 Oscars. Another 5 wins & 21 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A traveling theater company gives its audience much more than they were expecting.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY4Njg4NTA3Nl5BMl5BanBnXkFtZTcwNzYxMzg5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Repo Men",
          "releaseDate": "2010-03-19T04:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Miguel Sapochnik",
          "cast": [
            "Jude Law",
            "Forest Whitaker",
            "Alice Braga",
            "Liev Schreiber"
          ],
          "country": "USA, Canada",
          "productionCompany": "Stuber Pictures",
          "imdbRating": 6.3,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "Set in the near future when artificial organs can be bought on credit, it revolves around a man who struggles to make the payments on a heart he has purchased. He must therefore go on the run before said ticker is repossessed.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA4MTUxODM0MV5BMl5BanBnXkFtZTcwMDg3MTgwMw@@._V1_SX300.jpg"
        },
        {
          "title": "The Invisible Man",
          "releaseDate": "2020-02-28T05:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Leigh Whannell",
          "cast": [
            "Elisabeth Moss",
            "Oliver Jackson-Cohen",
            "Harriet Dyer",
            "Aldis Hodge"
          ],
          "country": "Canada, Australia, USA",
          "productionCompany": "Theatrical Arts International",
          "imdbRating": 7.1,
          "awards": "30 wins & 64 nominations.",
          "mpaaRating": "R",
          "plot": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          "title": "Up",
          "releaseDate": "2009-05-29T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family"
          ],
          "director": "Pete Docter, Bob Peterson(co-director)",
          "cast": [
            "Edward Asner",
            "Christopher Plummer",
            "Jordan Nagai",
            "Bob Peterson"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 8.2,
          "awards": "Won 2 Oscars. Another 77 wins & 87 nominations.",
          "mpaaRating": "PG",
          "plot": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg"
        },
        {
          "title": "G.I. Joe: The Rise of Cobra",
          "releaseDate": "2009-08-07T04:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Stephen Sommers",
          "cast": [
            "Adewale Akinnuoye-Agbaje",
            "Christopher Eccleston",
            "Grégory Fitoussi",
            "Joseph Gordon-Levitt"
          ],
          "country": "USA, Czech Republic",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 5.8,
          "awards": "3 wins & 16 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An elite military unit comprised of special operatives known as G.I. Joe, operating out of The Pit, takes on an evil organization led by a notorious arms dealer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQzMTU1NzQwNl5BMl5BanBnXkFtZTcwNDg4NzMzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Silver Linings Playbook",
          "releaseDate": "2012-12-25T05:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "David O. Russell",
          "cast": [
            "Bradley Cooper",
            "Jennifer Lawrence",
            "Robert De Niro",
            "Jacki Weaver"
          ],
          "country": "USA",
          "productionCompany": "Weinstein Company",
          "imdbRating": 7.7,
          "awards": "Won 1 Oscar. Another 88 wins & 148 nominations.",
          "mpaaRating": "R",
          "plot": "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SX300.jpg"
        },
        {
          "title": "The Proposal",
          "releaseDate": "2009-06-19T04:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Anne Fletcher",
          "cast": [
            "Sandra Bullock",
            "Ryan Reynolds",
            "Mary Steenburgen",
            "Craig T. Nelson"
          ],
          "country": "USA",
          "productionCompany": "Mandeville Films",
          "imdbRating": 6.7,
          "awards": "Nominated for 1 Golden Globe. Another 7 wins & 19 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S. and avoid deportation to Canada.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "REC",
          "releaseDate": "2007-11-23T05:00:00.000Z",
          "runTime": 78,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Horror",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Jaume Balagueró, Paco Plaza",
          "cast": [
            "Manuela Velasco",
            "Ferran Terraza",
            "Jorge-Yamam Serrano",
            "Pablo Rosso"
          ],
          "country": "Spain",
          "productionCompany": "Filmax",
          "imdbRating": 7.4,
          "awards": "16 wins & 12 nominations.",
          "mpaaRating": "R",
          "plot": "A television reporter and cameraman follow emergency workers into a dark apartment building and are quickly locked inside with something terrifying.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZTJmNTZlZWUtZTQ2Yi00YTFjLWFiNzctYzFlNmZmZGMzYTlmXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Bounty Hunter",
          "releaseDate": "2010-03-19T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Comedy",
            "Romance"
          ],
          "director": "Andy Tennant",
          "cast": [
            "Gerard Butler",
            "Jennifer Aniston",
            "Gio Perez",
            "Joel Marsh Garland"
          ],
          "country": "USA",
          "productionCompany": "Original Film",
          "imdbRating": 5.6,
          "awards": "4 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A bounty hunter learns that his next target is his ex-wife, a reporter working on a murder cover-up. Soon after their reunion, the always-at-odds duo find themselves on a run-for-their-lives adventure.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUwNjY4MjY0MV5BMl5BanBnXkFtZTcwNTA2OTYwMw@@._V1_SX300.jpg"
        },
        {
          "title": "Legion",
          "releaseDate": "2010-01-22T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Fantasy",
            "Horror"
          ],
          "director": "Scott Stewart",
          "cast": [
            "Paul Bettany",
            "Lucas Black",
            "Tyrese Gibson",
            "Adrianne Palicki"
          ],
          "country": "USA",
          "productionCompany": "Bold Films",
          "imdbRating": 5.3,
          "awards": "N/A",
          "mpaaRating": "R",
          "plot": "When a group of strangers at a dusty roadside diner come under attack by demonic forces, their only chance for survival lies with an archangel named Michael, who informs a pregnant waitress that her unborn child is humanity's last hope.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMzNDg4NjYxOV5BMl5BanBnXkFtZTcwODQyNDg3Mg@@._V1_SX300.jpg"
        },
        {
          "title": "The Book of Eli",
          "releaseDate": "2010-01-15T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Thriller"
          ],
          "director": "Albert Hughes, Allen Hughes",
          "cast": [
            "Denzel Washington",
            "Gary Oldman",
            "Mila Kunis",
            "Ray Stevenson"
          ],
          "country": "USA",
          "productionCompany": "Silver Pictures",
          "imdbRating": 6.9,
          "awards": "3 wins & 16 nominations.",
          "mpaaRating": "R",
          "plot": "A post-apocalyptic tale, in which a lone man fights his way across America in order to protect a sacred book that holds the secrets to saving humankind.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTE1OWI1YzgtZjEyMy00MjQ4LWE0NWMtYTNhYjc0ZDQ3ZGRkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"
        },
        {
          "title": "Defiance",
          "releaseDate": "2009-01-16T05:00:00.000Z",
          "runTime": 137,
          "genres": [
            "Action",
            "Drama",
            "History",
            "Thriller",
            "War"
          ],
          "director": "Edward Zwick",
          "cast": [
            "Daniel Craig",
            "Liev Schreiber",
            "Jamie Bell",
            "Alexa Davalos"
          ],
          "country": "USA",
          "productionCompany": "Grosvenor Park Productions",
          "imdbRating": 7.2,
          "awards": "Nominated for 1 Oscar. Another 2 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "Jewish brothers in Nazi-occupied Eastern Europe escape into the Belarussian forests, where they join Russian resistance fighters, and endeavor to build a village, in order to protect themselves and about one thousand Jewish non-combatants.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjEyYjk4ZDQtZDhjMi00NGFkLWExM2UtZjgyMDMxODgwNjgyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          "title": "Gamer",
          "releaseDate": "2009-09-04T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Mark Neveldine, Brian Taylor",
          "cast": [
            "Gerard Butler",
            "Amber Valletta",
            "Michael C. Hall",
            "Kyra Sedgwick"
          ],
          "country": "USA",
          "productionCompany": "Lakeshore Entertainment",
          "imdbRating": 5.8,
          "awards": "1 win.",
          "mpaaRating": "R",
          "plot": "In a future mind-controlling game, death row convicts are forced to battle in a 'Doom'-type environment. Convict Kable, controlled by Simon, a skilled teenage gamer, must survive thirty sessions in order to be set free.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkzMDU0NTg3MF5BMl5BanBnXkFtZTcwNzU1MjU1Mg@@._V1_SX300.jpg"
        },
        {
          "title": "What Happens in Vegas",
          "releaseDate": "2008-05-09T04:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Tom Vaughan",
          "cast": [
            "Cameron Diaz",
            "Ashton Kutcher",
            "Rob Corddry",
            "Lake Bell"
          ],
          "country": "USA",
          "productionCompany": "21 Laps Entertainment",
          "imdbRating": 6.1,
          "awards": "2 wins & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A man and a woman are compelled, for legal reasons, to live life as a couple for a limited period of time. At stake is a large amount of money.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzQyYjE3YjYtNjJkNi00MWY0LWJhNDctZDRmOTY5ZGJiNDI5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Descendants",
          "releaseDate": "2011-12-09T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Alexander Payne",
          "cast": [
            "George Clooney",
            "Shailene Woodley",
            "Amara Miller",
            "Nick Krause"
          ],
          "country": "USA",
          "productionCompany": "Dune",
          "imdbRating": 7.3,
          "awards": "Won 1 Oscar. Another 64 wins & 147 nominations.",
          "mpaaRating": "R",
          "plot": "A land baron tries to reconnect with his two daughters after his wife is seriously injured in a boating accident.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAyNTA1MTcyN15BMl5BanBnXkFtZTcwNjEyODczNQ@@._V1_SX300.jpg"
        },
        {
          "title": "RocknRolla",
          "releaseDate": "2008-10-31T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Guy Ritchie",
          "cast": [
            "Gerard Butler",
            "Tom Wilkinson",
            "Thandie Newton",
            "Mark Strong"
          ],
          "country": "UK, USA, France",
          "productionCompany": "Warner Bros.",
          "imdbRating": 7.3,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "R",
          "plot": "When a Russian mobster orchestrates a crooked land deal, millions of dollars are up for grabs, drawing in the entire London underworld into a feeding frenzy at a time when the old criminal regime is losing turf to a wealthy foreign mob.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ0NTk5Mzk2OV5BMl5BanBnXkFtZTcwMDE3NTE4MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Hachi: A Dog's Tale",
          "releaseDate": "2010-03-12T05:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Biography",
            "Drama",
            "Family"
          ],
          "director": "Lasse Hallström",
          "cast": [
            "Richard Gere",
            "Joan Allen",
            "Cary-Hiroyuki Tagawa",
            "Sarah Roemer"
          ],
          "country": "UK, USA",
          "productionCompany": "Stage 6 Films",
          "imdbRating": 8.1,
          "awards": "1 nomination.",
          "mpaaRating": "G",
          "plot": "A college professor bonds with an abandoned dog he takes into his home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Death Proof",
          "releaseDate": "2007-05-31T04:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Quentin Tarantino",
          "cast": [
            "Kurt Russell",
            "Zoë Bell",
            "Rosario Dawson",
            "Vanessa Ferlito"
          ],
          "country": "USA",
          "productionCompany": "Dimension Films",
          "imdbRating": 7,
          "awards": "8 nominations.",
          "mpaaRating": "TV-MA",
          "plot": "Two separate sets of voluptuous women are stalked at different times by a scarred stuntman who uses his \"death proof\" cars to execute his murderous plans.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTdmZmY3Y2QtNjU5NC00OGUxLTg3MWQtMmE2ODM5Mzg3MzcyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Argo",
          "releaseDate": "2012-10-12T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Biography",
            "Drama",
            "Thriller"
          ],
          "director": "Ben Affleck",
          "cast": [
            "Ben Affleck",
            "Bryan Cranston",
            "Alan Arkin",
            "John Goodman"
          ],
          "country": "USA, UK",
          "productionCompany": "Smoke House",
          "imdbRating": 7.7,
          "awards": "Won 3 Oscars. Another 91 wins & 155 nominations.",
          "mpaaRating": "R",
          "plot": "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzljNjY3MDYtYzc0Ni00YjU0LWIyNDUtNTE0ZDRiMGExMjZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Way Back",
          "releaseDate": "2011-01-21T05:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Adventure",
            "Drama",
            "History"
          ],
          "director": "Peter Weir",
          "cast": [
            "Dragos Bucur",
            "Colin Farrell",
            "Ed Harris",
            "Alexandru Potocean"
          ],
          "country": "USA, United Arab Emirates, Poland, India",
          "productionCompany": "Exclusive Films",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 Oscar. Another 4 wins & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Siberian gulag escapees travel four thousand miles by foot to freedom in India.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg5MTc5MTM3Ml5BMl5BanBnXkFtZTcwMDI2NzgwNA@@._V1_SX300.jpg"
        },
        {
          "title": "500 Days of Summer",
          "releaseDate": "2009-08-07T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Marc Webb",
          "cast": [
            "Joseph Gordon-Levitt",
            "Zooey Deschanel",
            "Geoffrey Arend",
            "Chloë Grace Moretz"
          ],
          "country": "USA",
          "productionCompany": "Watermark",
          "imdbRating": 7.7,
          "awards": "Nominated for 2 Golden Globes. Another 17 wins & 56 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_SX300.jpg"
        },
        {
          "title": "A Serious Man",
          "releaseDate": "2009-11-06T05:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Ethan Coen, Joel Coen",
          "cast": [
            "Michael Stuhlbarg",
            "Richard Kind",
            "Fred Melamed",
            "Sari Lennick"
          ],
          "country": "UK, France, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 7,
          "awards": "Nominated for 2 Oscars. Another 17 wins & 78 nominations.",
          "mpaaRating": "R",
          "plot": "Larry Gopnik, a Midwestern physics teacher, watches his life unravel over multiple sudden incidents. Though seeking meaning and answers amidst his turmoils, he seems to keep sinking.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNGZkODlhMjktNzhhMC00YjFiLWJmODMtNjQwOGMzZjMxNTZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Alice in Wonderland",
          "releaseDate": "2010-03-05T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Tim Burton",
          "cast": [
            "Johnny Depp",
            "Mia Wasikowska",
            "Helena Bonham Carter",
            "Anne Hathaway"
          ],
          "country": "USA, UK",
          "productionCompany": "Zanuck Company",
          "imdbRating": 6.4,
          "awards": "Won 2 Oscars. Another 33 wins & 63 nominations.",
          "mpaaRating": "PG",
          "plot": "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Milk",
          "releaseDate": "2009-01-30T05:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "Gus Van Sant",
          "cast": [
            "Sean Penn",
            "Emile Hirsch",
            "Josh Brolin",
            "Diego Luna"
          ],
          "country": "USA",
          "productionCompany": "Groundswell Productions",
          "imdbRating": 7.5,
          "awards": "Won 2 Oscars. Another 64 wins & 144 nominations.",
          "mpaaRating": "R",
          "plot": "The story of Harvey Milk and his struggles as an American gay activist who fought for gay rights and became California's first openly gay elected official.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI2OTM5NjUzMV5BMl5BanBnXkFtZTcwMzY1MTM5MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Fast & Furious",
          "releaseDate": "2009-04-03T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Justin Lin",
          "cast": [
            "Vin Diesel",
            "Paul Walker",
            "Jordana Brewster",
            "Michelle Rodriguez"
          ],
          "country": "USA, Japan",
          "productionCompany": "Original Film",
          "imdbRating": 6.6,
          "awards": "6 wins & 2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Brian O'Conner, back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
          "title": "Knight and Day",
          "releaseDate": "2010-06-23T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Adventure",
            "Comedy"
          ],
          "director": "James Mangold",
          "cast": [
            "Tom Cruise",
            "Cameron Diaz",
            "Peter Sarsgaard",
            "Jordi Mollà"
          ],
          "country": "USA",
          "productionCompany": "Pink Machine",
          "imdbRating": 6.3,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young woman gets mixed up with a disgraced spy who is trying to clear his name.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM0Mzg0MzI3Ml5BMl5BanBnXkFtZTcwNjIyNzk1Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Slumdog Millionaire",
          "releaseDate": "2008-12-25T05:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Danny Boyle, Loveleen Tandan(co-director)",
          "cast": [
            "Dev Patel",
            "Saurabh Shukla",
            "Anil Kapoor",
            "Raj Zutshi"
          ],
          "country": "UK, USA, India",
          "productionCompany": "Celador Productions",
          "imdbRating": 8,
          "awards": "Won 8 Oscars. Another 145 wins & 133 nominations.",
          "mpaaRating": "R",
          "plot": "A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of \"Who Wants to be a Millionaire?\".",
          "poster": "https://m.media-amazon.com/images/M/MV5BZmNjZWI3NzktYWI1Mi00OTAyLWJkNTYtMzUwYTFlZDA0Y2UwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "The Iron Lady",
          "releaseDate": "2012-01-13T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "Phyllida Lloyd",
          "cast": [
            "Meryl Streep",
            "Jim Broadbent",
            "Susan Brown",
            "Alice da Cunha"
          ],
          "country": "UK, France",
          "productionCompany": "Pathé",
          "imdbRating": 6.4,
          "awards": "Won 2 Oscars. Another 23 wins & 47 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An elderly Margaret Thatcher talks to the imagined presence of her recently deceased husband as she struggles to come to terms with his death while scenes from her past life, from girlhood to British prime minister, intervene.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg"
        },
        {
          "title": "Zack and Miri Make a Porno",
          "releaseDate": "2008-10-31T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Kevin Smith",
          "cast": [
            "Elizabeth Banks",
            "Seth Rogen",
            "Craig Robinson",
            "Gerry Bednob"
          ],
          "country": "USA",
          "productionCompany": "View Askew Productions",
          "imdbRating": 6.5,
          "awards": "2 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "Lifelong platonic friends Zack and Miri look to solve their respective cash-flow problems by making an adult film together. As the cameras roll, however, the duo begin to sense that they may have more feelings for each other than they previously thought.",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2I1N2Y0ODEtNzZmZS00NzBjLWFkZjEtMTVkOTY1Y2UzZGE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Megamind",
          "releaseDate": "2010-11-05T04:00:00.000Z",
          "runTime": 95,
          "genres": [
            "Animation",
            "Action",
            "Comedy",
            "Family",
            "Sci-Fi"
          ],
          "director": "Tom McGrath",
          "cast": [
            "Will Ferrell",
            "Brad Pitt",
            "Tina Fey",
            "Jonah Hill"
          ],
          "country": "USA",
          "productionCompany": "DreamWorks",
          "imdbRating": 7.2,
          "awards": "2 wins & 16 nominations.",
          "mpaaRating": "PG",
          "plot": "The supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAzMzI0NTMzNDBeQTJeQWpwZ15BbWU3MDM3NTAyOTM@._V1_SX300.jpg"
        },
        {
          "title": "He's Just Not That Into You",
          "releaseDate": "2009-02-06T05:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Ken Kwapis",
          "cast": [
            "Morgan Lily",
            "Trenton Rogers",
            "Michelle Carmichael",
            "Jasmine Woods"
          ],
          "country": "Germany, USA",
          "productionCompany": "Flower Films",
          "imdbRating": 6.4,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "This Baltimore-set movie of interconnecting story arcs deals with the challenges of reading or misreading human behavior.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY5MTUyNDgwMF5BMl5BanBnXkFtZTcwNzYzMDQyMg@@._V1_SX300.jpg"
        },
        {
          "title": "Sex and the City",
          "releaseDate": "2008-05-30T04:00:00.000Z",
          "runTime": 145,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Michael Patrick King",
          "cast": [
            "Sarah Jessica Parker",
            "Kim Cattrall",
            "Kristin Davis",
            "Cynthia Nixon"
          ],
          "country": "USA",
          "productionCompany": "Darren Star",
          "imdbRating": 5.6,
          "awards": "2 wins & 12 nominations.",
          "mpaaRating": "R",
          "plot": "A New York City writer on sex and love is finally getting married to her Mr. Big. But her three best girlfriends must console her after one of them inadvertently leads Mr. Big to jilt her.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYyMzYxMjM3OF5BMl5BanBnXkFtZTcwNjg2OTA3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Wolf of Wall Street",
          "releaseDate": "2013-12-25T05:00:00.000Z",
          "runTime": 180,
          "genres": [
            "Biography",
            "Crime",
            "Drama"
          ],
          "director": "Martin Scorsese",
          "cast": [
            "Leonardo DiCaprio",
            "Jonah Hill",
            "Margot Robbie",
            "Matthew McConaughey"
          ],
          "country": "USA",
          "productionCompany": "Appian Way",
          "imdbRating": 8.2,
          "awards": "Nominated for 5 Oscars. Another 37 wins & 174 nominations.",
          "mpaaRating": "R",
          "plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
        },
        {
          "title": "Hanna",
          "releaseDate": "2011-04-08T04:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Thriller"
          ],
          "director": "Joe Wright",
          "cast": [
            "Saoirse Ronan",
            "Eric Bana",
            "Vicky Krieps",
            "Cate Blanchett"
          ],
          "country": "USA, UK, Germany",
          "productionCompany": "Focus Features",
          "imdbRating": 6.8,
          "awards": "8 wins & 26 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A sixteen-year-old girl who was raised by her father to be the perfect assassin is dispatched on a mission across Europe, tracked by a ruthless intelligence agent and her operatives.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjljNzE0OTItM2Q1MS00MTUyLTg4YjgtMzUzZDRkMzkyN2NiXkEyXkFqcGdeQXVyODU2MDg1NzU@._V1_SX300.jpg"
        },
        {
          "title": "The Green Hornet",
          "releaseDate": "2011-01-14T05:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Michel Gondry",
          "cast": [
            "Seth Rogen",
            "Jay Chou",
            "Cameron Diaz",
            "Tom Wilkinson"
          ],
          "country": "USA",
          "productionCompany": "Original Film",
          "imdbRating": 5.8,
          "awards": "4 wins & 7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Following the death of his father, Britt Reid, heir to his father's large company, teams up with his late dad's assistant Kato to become a masked crime fighting team.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcwOTMwMDYyMl5BMl5BanBnXkFtZTcwMzAxMjMyNA@@._V1_SX300.jpg"
        },
        {
          "title": "Dear John",
          "releaseDate": "2010-02-05T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Drama",
            "Romance",
            "War"
          ],
          "director": "Lasse Hallström",
          "cast": [
            "Channing Tatum",
            "Amanda Seyfried",
            "Richard Jenkins",
            "Henry Thomas"
          ],
          "country": "USA",
          "productionCompany": "Temple Hill",
          "imdbRating": 6.3,
          "awards": "4 wins & 8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A romantic drama about a soldier who falls for a conservative college student while he's home on leave.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk1NDEzMTU5NV5BMl5BanBnXkFtZTcwNTI3MTk5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "27 Dresses",
          "releaseDate": "2008-01-18T05:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Anne Fletcher",
          "cast": [
            "Brian Kerwin",
            "Charli Barcena",
            "Peyton List",
            "Jane Pfitsch"
          ],
          "country": "USA",
          "productionCompany": "Birnbaum/Barber",
          "imdbRating": 6.1,
          "awards": "5 wins & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After serving as a bridesmaid 27 times, a young woman wrestles with the idea of standing by her sister's side as her sibling marries the man she's secretly in love with.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzI5OTM0OTg2MF5BMl5BanBnXkFtZTcwNjAyMTU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Sherlock Holmes",
          "releaseDate": "2009-12-25T05:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Action",
            "Adventure",
            "Mystery"
          ],
          "director": "Guy Ritchie",
          "cast": [
            "Robert Downey Jr.",
            "Jude Law",
            "Rachel McAdams",
            "Mark Strong"
          ],
          "country": "USA, Germany, UK, Australia",
          "productionCompany": "Silver Pictures",
          "imdbRating": 7.6,
          "awards": "Nominated for 2 Oscars. Another 10 wins & 29 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Like Stars on Earth",
          "releaseDate": "2007-12-21T05:00:00.000Z",
          "runTime": 165,
          "genres": [
            "Drama",
            "Family"
          ],
          "director": "Aamir Khan, Amole Gupte",
          "cast": [
            "Darsheel Safary",
            "Aamir Khan",
            "Tisca Chopra",
            "Vipin Sharma"
          ],
          "country": "India",
          "productionCompany": "N/A",
          "imdbRating": 8.4,
          "awards": "23 wins & 13 nominations.",
          "mpaaRating": "PG",
          "plot": "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Surrogates",
          "releaseDate": "2009-09-25T04:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Jonathan Mostow",
          "cast": [
            "Bruce Willis",
            "Radha Mitchell",
            "Rosamund Pike",
            "Boris Kodjoe"
          ],
          "country": "USA",
          "productionCompany": "Mandeville Films",
          "imdbRating": 6.3,
          "awards": "N/A",
          "mpaaRating": "PG-13",
          "plot": "Set in a futuristic world where humans live in isolation and interact through surrogate robots, a cop is forced to leave his home for the first time in years in order to investigate the murders of others' surrogates.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2FiZTdjY2YtMzg2YS00ODEyLTg3NWQtZmVhZDg1YzE0OTJjXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg"
        },
        {
          "title": "Valkyrie",
          "releaseDate": "2008-12-25T05:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Drama",
            "History",
            "Thriller",
            "War"
          ],
          "director": "Bryan Singer",
          "cast": [
            "Tom Cruise",
            "Kenneth Branagh",
            "Bill Nighy",
            "Tom Wilkinson"
          ],
          "country": "USA, Germany, Italy, Spain, France, Japan, UK",
          "productionCompany": "United Artists",
          "imdbRating": 7.1,
          "awards": "3 wins & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A dramatization of the July 20, 1944 assassination and political coup plot by desperate renegade German Army officers against Adolf Hitler during World War II.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"
        },
        {
          "title": "Machete",
          "releaseDate": "2010-09-03T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Ethan Maniquis, Robert Rodriguez",
          "cast": [
            "Danny Trejo",
            "Robert De Niro",
            "Jessica Alba",
            "Steven Seagal"
          ],
          "country": "USA",
          "productionCompany": "Troublemaker Studios",
          "imdbRating": 6.6,
          "awards": "2 wins & 6 nominations.",
          "mpaaRating": "R",
          "plot": "After being set-up and betrayed by the man who hired him to assassinate a Texas Senator, an ex-Federale launches a brutal rampage of revenge against his former boss.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZWUxODc2NmItNThkNS00Mzc4LThlYTQtOTYwZjVhYjRiNmMwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "The Adventures of Tintin: The Secret of the Unicorn",
          "releaseDate": "2011-12-21T05:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Family",
            "Mystery"
          ],
          "director": "Steven Spielberg",
          "cast": [
            "Jamie Bell",
            "Andy Serkis",
            "Daniel Craig",
            "Nick Frost"
          ],
          "country": "USA, New Zealand, UK, France, Australia",
          "productionCompany": "Amblin Entertainment",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 Oscar. Another 22 wins & 62 nominations.",
          "mpaaRating": "PG",
          "plot": "Intrepid reporter Tintin and Captain Haddock set off on a treasure hunt for a sunken ship commanded by Haddock's ancestor.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDE5MDExNTQ1OF5BMl5BanBnXkFtZTcwMDIxMTM5Ng@@._V1_SX300.jpg"
        },
        {
          "title": "The Chronicles of Narnia: The Voyage of the Dawn Treader",
          "releaseDate": "2010-12-10T05:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Michael Apted",
          "cast": [
            "Georgie Henley",
            "Skandar Keynes",
            "Ben Barnes",
            "Will Poulter"
          ],
          "country": "USA, UK",
          "productionCompany": "Mark Johnson",
          "imdbRating": 6.3,
          "awards": "Nominated for 1 Golden Globe. Another 2 wins & 17 nominations.",
          "mpaaRating": "PG",
          "plot": "Lucy and Edmund Pevensie return to Narnia with their cousin Eustace where they meet up with Prince Caspian for a trip across the sea aboard the royal ship The Dawn Treader. Along the way they encounter dragons, dwarves, merfolk, and a band of lost warriors before reaching the edge of the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjQ2MDQzMzExNl5BMl5BanBnXkFtZTcwMTYzOTc5Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Sucker Punch",
          "releaseDate": "2011-03-25T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Zack Snyder",
          "cast": [
            "Emily Browning",
            "Abbie Cornish",
            "Jena Malone",
            "Vanessa Hudgens"
          ],
          "country": "USA, Canada",
          "productionCompany": "Cruel and Unusual",
          "imdbRating": 6,
          "awards": "1 win & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young girl institutionalized by her abusive stepfather retreats to an alternative reality as a coping strategy and envisions a plan to help her escape.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDEwNGRlNjQtZjI4OC00ZmMxLWEyYmQtNGI1NDk4YmUyYTNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
        },
        {
          "title": "Mary and Max",
          "releaseDate": "2010-03-12T05:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Animation",
            "Comedy",
            "Drama",
            "Family"
          ],
          "director": "Adam Elliot",
          "cast": [
            "Christopher Massey",
            "Oliver Marks",
            "Daisy Kocher",
            "Daniel Marks"
          ],
          "country": "Australia, USA",
          "productionCompany": "Melodrama Pictures",
          "imdbRating": 8.1,
          "awards": "5 wins & 9 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDgzYjQwMDMtNGUzYi00MTRmLWIyMGMtNjE1OGZkNzY2YWIzL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "The Reader",
          "releaseDate": "2009-01-30T05:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Stephen Daldry",
          "cast": [
            "Ralph Fiennes",
            "Jeanette Hain",
            "David Kross",
            "Kate Winslet"
          ],
          "country": "Germany, USA",
          "productionCompany": "Mirage Enterprises",
          "imdbRating": 7.6,
          "awards": "Won 1 Oscar. Another 25 wins & 48 nominations.",
          "mpaaRating": "R",
          "plot": "Post-WWII Germany: Nearly a decade after his affair with an older woman came to a mysterious end, law student Michael Berg re-encounters his former lover as she defends herself in a war-crime trial.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM0NDQxNjA0N15BMl5BanBnXkFtZTcwNDUwMzcwMg@@._V1_SX300.jpg"
        },
        {
          "title": "17 Again",
          "releaseDate": "2009-04-17T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Comedy",
            "Drama",
            "Fantasy",
            "Romance",
            "Sport"
          ],
          "director": "Burr Steers",
          "cast": [
            "Zac Efron",
            "Leslie Mann",
            "Thomas Lennon",
            "Matthew Perry"
          ],
          "country": "USA",
          "productionCompany": "Offspring Entertainment",
          "imdbRating": 6.4,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Mike O'Donnell is ungrateful for how his life turned out. He gets a chance to rewrite his life when he tried to save a janitor near a bridge and jumped after him into a time vortex.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA2NTI1Mzg3N15BMl5BanBnXkFtZTcwMjYwNjAzMg@@._V1_SX300.jpg"
        },
        {
          "title": "Justice League",
          "releaseDate": "2017-11-17T05:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Zack Snyder",
          "cast": [
            "Ben Affleck",
            "Henry Cavill",
            "Amy Adams",
            "Gal Gadot"
          ],
          "country": "USA, Canada, UK",
          "productionCompany": "Atlas Entertainment",
          "imdbRating": 6.3,
          "awards": "2 wins & 13 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Little Fockers",
          "releaseDate": "2010-12-22T05:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Paul Weitz",
          "cast": [
            "Robert De Niro",
            "Ben Stiller",
            "Owen Wilson",
            "Dustin Hoffman"
          ],
          "country": "USA",
          "productionCompany": "Tribeca Productions",
          "imdbRating": 5.5,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Family-patriarch Jack Byrnes wants to appoint a successor. Does his son-in-law, the male nurse Greg Focker, have what it takes?",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkwNjE3NjQwOV5BMl5BanBnXkFtZTcwNzAyNTMwNA@@._V1_SX300.jpg"
        },
        {
          "title": "The Day the Earth Stood Still",
          "releaseDate": "2008-12-12T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Scott Derrickson",
          "cast": [
            "Keanu Reeves",
            "Jennifer Connelly",
            "Kathy Bates",
            "Jaden Smith"
          ],
          "country": "USA, Canada",
          "productionCompany": "3 Arts Entertainment",
          "imdbRating": 5.5,
          "awards": "2 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A remake of the 1951 classic science fiction film about an alien visitor and his giant robot counterpart who visit Earth.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI5NTg1MzU5Nl5BMl5BanBnXkFtZTcwMDU1ODMwMg@@._V1_SX300.jpg"
        },
        {
          "title": "Hugo",
          "releaseDate": "2011-11-23T05:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Drama",
            "Family",
            "Fantasy",
            "Mystery"
          ],
          "director": "Martin Scorsese",
          "cast": [
            "Ben Kingsley",
            "Sacha Baron Cohen",
            "Asa Butterfield",
            "Chloë Grace Moretz"
          ],
          "country": "UK, USA, France",
          "productionCompany": "GK Films",
          "imdbRating": 7.5,
          "awards": "Won 5 Oscars. Another 56 wins & 191 nominations.",
          "mpaaRating": "PG",
          "plot": "In 1931 Paris, an orphan living in the walls of a train station gets wrapped up in a mystery involving his late father and an automaton.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAzNzk5MzgyNF5BMl5BanBnXkFtZTcwOTE4NDU5Ng@@._V1_SX300.jpg"
        },
        {
          "title": "The Fighter",
          "releaseDate": "2010-12-17T05:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Biography",
            "Drama",
            "Sport"
          ],
          "director": "David O. Russell",
          "cast": [
            "Mark Wahlberg",
            "Christian Bale",
            "Amy Adams",
            "Melissa Leo"
          ],
          "country": "USA",
          "productionCompany": "Relativity",
          "imdbRating": 7.8,
          "awards": "Won 2 Oscars. Another 71 wins & 124 nominations.",
          "mpaaRating": "R",
          "plot": "Based on the story of Micky Ward, a fledgling boxer who tries to escape the shadow of his more famous but troubled older boxing brother and get his own shot at greatness.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM0ODk3MjM1MV5BMl5BanBnXkFtZTcwNzc1MDIwNA@@._V1_SX300.jpg"
        },
        {
          "title": "The Sorcerer's Apprentice",
          "releaseDate": "2010-07-14T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Jon Turteltaub",
          "cast": [
            "Nicolas Cage",
            "Jay Baruchel",
            "Alfred Molina",
            "Teresa Palmer"
          ],
          "country": "USA",
          "productionCompany": "Jerry Bruckheimer Films",
          "imdbRating": 6.1,
          "awards": "1 win & 1 nomination.",
          "mpaaRating": "PG",
          "plot": "Balthazar Blake, an apprentice of the legendary magician Merlin, must train his old teacher's successor - an introverted but resourceful physics prodigy - in the art of sorcery to prevent the return of Morgana le Fay.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2EwMzg3YWUtMTQyYS00ZDY3LTgzNTctOWI5NzY3MmZkOTk2XkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg"
        },
        {
          "title": "You Don't Mess with the Zohan",
          "releaseDate": "2008-06-06T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Comedy"
          ],
          "director": "Dennis Dugan",
          "cast": [
            "Adam Sandler",
            "John Turturro",
            "Emmanuelle Chriqui",
            "Nick Swardson"
          ],
          "country": "USA",
          "productionCompany": "Happy Madison Productions",
          "imdbRating": 5.5,
          "awards": "2 wins & 2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An Israeli Special Forces Soldier fakes his death so he can re-emerge in New York City as a hair stylist.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzE2MzEzNDc5M15BMl5BanBnXkFtZTcwMzYxOTA3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Revolutionary Road",
          "releaseDate": "2009-01-23T05:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Drama",
            "Romance"
          ],
          "director": "Sam Mendes",
          "cast": [
            "Kate Winslet",
            "Leonardo DiCaprio",
            "Christopher Fitzgerald",
            "Jonathan Roumie"
          ],
          "country": "USA, UK",
          "productionCompany": "Neal Street Productions",
          "imdbRating": 7.3,
          "awards": "Nominated for 3 Oscars. Another 20 wins & 70 nominations.",
          "mpaaRating": "R",
          "plot": "A young couple living in a Connecticut suburb during the mid-1950s struggle to come to terms with their personal problems while trying to raise their two children.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTczNDgzMjczOV5BMl5BanBnXkFtZTcwOTU3MzMwMg@@._V1_SX300.jpg"
        },
        {
          "title": "Robin Hood",
          "releaseDate": "2010-05-14T04:00:00.000Z",
          "runTime": 140,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "History"
          ],
          "director": "Ridley Scott",
          "cast": [
            "Russell Crowe",
            "Cate Blanchett",
            "Max von Sydow",
            "William Hurt"
          ],
          "country": "USA, UK",
          "productionCompany": "Scott Free Productions",
          "imdbRating": 6.6,
          "awards": "1 win & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In twelfth-century England, Robin Longstride and his band of marauders confront corruption in a local village and lead an uprising against the crown that will forever alter the balance of world power.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM5NzcwMzEwOF5BMl5BanBnXkFtZTcwNjg5MTgwMw@@._V1_SX300.jpg"
        },
        {
          "title": "The Happening",
          "releaseDate": "2008-06-13T04:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Drama",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "M. Night Shyamalan",
          "cast": [
            "Mark Wahlberg",
            "Zooey Deschanel",
            "John Leguizamo",
            "Ashlyn Sanchez"
          ],
          "country": "USA, India",
          "productionCompany": "Blinding Edge Pictures",
          "imdbRating": 5,
          "awards": "3 wins & 10 nominations.",
          "mpaaRating": "R",
          "plot": "A science teacher, his wife, and a young girl struggle to survive a plague that causes those infected to commit suicide.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc2MjcwNjI0MF5BMl5BanBnXkFtZTcwMjM4NjM3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Amazing Spider-Man",
          "releaseDate": "2012-07-03T04:00:00.000Z",
          "runTime": 136,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Marc Webb",
          "cast": [
            "Andrew Garfield",
            "Emma Stone",
            "Rhys Ifans",
            "Denis Leary"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 6.9,
          "awards": "2 wins & 31 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
        },
        {
          "title": "Green Zone",
          "releaseDate": "2010-03-12T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Drama",
            "Thriller",
            "War"
          ],
          "director": "Paul Greengrass",
          "cast": [
            "Igal Naor",
            "Said Faraj",
            "Faycal Attougui",
            "Aymen Hamdouchi"
          ],
          "country": "UK, France, Spain, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 6.8,
          "awards": "6 nominations.",
          "mpaaRating": "R",
          "plot": "Discovering covert and faulty intelligence causes a U.S. Army officer to go rogue as he hunts for Weapons of Mass Destruction in an unstable region.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYzMTA1NDMyNV5BMl5BanBnXkFtZTcwMzUwODY5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Black Swan",
          "releaseDate": "2010-12-17T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Drama",
            "Thriller"
          ],
          "director": "Darren Aronofsky",
          "cast": [
            "Natalie Portman",
            "Mila Kunis",
            "Vincent Cassel",
            "Barbara Hershey"
          ],
          "country": "USA",
          "productionCompany": "Dune",
          "imdbRating": 8,
          "awards": "Won 1 Oscar. Another 96 wins & 278 nominations.",
          "mpaaRating": "R",
          "plot": "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's \"Swan Lake\".",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Source Code",
          "releaseDate": "2011-04-01T04:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Action",
            "Drama",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Duncan Jones",
          "cast": [
            "Jake Gyllenhaal",
            "Michelle Monaghan",
            "Vera Farmiga",
            "Jeffrey Wright"
          ],
          "country": "USA, Canada, France, Germany",
          "productionCompany": "Mark Gordon Productions",
          "imdbRating": 7.5,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A soldier wakes up in someone else's body and discovers he's part of an experimental government program to find the bomber of a commuter train within 8 minutes.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY0MTc3MzMzNV5BMl5BanBnXkFtZTcwNDE4MjE0NA@@._V1_SX300.jpg"
        },
        {
          "title": "Salt",
          "releaseDate": "2010-07-23T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Phillip Noyce",
          "cast": [
            "Angelina Jolie",
            "Liev Schreiber",
            "Chiwetel Ejiofor",
            "Daniel Olbrychski"
          ],
          "country": "USA",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 6.4,
          "awards": "Nominated for 1 Oscar. Another 4 wins & 15 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A CIA agent goes on the run after a defector accuses her of being a Russian spy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIyODA2NDg4NV5BMl5BanBnXkFtZTcwMjg4NDAwMw@@._V1_SX300.jpg"
        },
        {
          "title": "Tropic Thunder",
          "releaseDate": "2008-08-13T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Comedy",
            "War"
          ],
          "director": "Ben Stiller",
          "cast": [
            "Jeff Kahn",
            "Robert Downey Jr.",
            "Anthony Ruivivar",
            "Jack Black"
          ],
          "country": "USA, UK, Germany",
          "productionCompany": "Red Hour Films",
          "imdbRating": 7,
          "awards": "Nominated for 1 Oscar. Another 10 wins & 46 nominations.",
          "mpaaRating": "R",
          "plot": "Through a series of freak occurrences, a group of actors shooting a big-budget war movie are forced to become the soldiers they are portraying.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDE5NjQzMDkzOF5BMl5BanBnXkFtZTcwODI3ODI3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Last Airbender",
          "releaseDate": "2010-07-01T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Action",
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "M. Night Shyamalan",
          "cast": [
            "Noah Ringer",
            "Dev Patel",
            "Nicola Peltz",
            "Jackson Rathbone"
          ],
          "country": "USA",
          "productionCompany": "Blinding Edge Pictures",
          "imdbRating": 4,
          "awards": "8 wins & 12 nominations.",
          "mpaaRating": "PG",
          "plot": "Follows the adventures of Aang, a young successor to a long line of Avatars, who must master all four elements and stop the Fire Nation from enslaving the Water Tribes and the Earth Kingdom.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM1NjE0NDA0MV5BMl5BanBnXkFtZTcwODE4NDg1Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Taken",
          "releaseDate": "2009-01-30T05:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Pierre Morel",
          "cast": [
            "Liam Neeson",
            "Maggie Grace",
            "Leland Orser",
            "Jon Gries"
          ],
          "country": "France, USA, UK",
          "productionCompany": "EuropaCorp",
          "imdbRating": 7.8,
          "awards": "2 wins & 2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM4NzQ0OTYyOF5BMl5BanBnXkFtZTcwMDkyNjQyMg@@._V1_SX300.jpg"
        },
        {
          "title": "Precious",
          "releaseDate": "2009-11-20T05:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Drama"
          ],
          "director": "Lee Daniels",
          "cast": [
            "Gabourey Sidibe",
            "Mo'Nique",
            "Paula Patton",
            "Mariah Carey"
          ],
          "country": "USA",
          "productionCompany": "Smokewood Entertainment Group",
          "imdbRating": 7.3,
          "awards": "Won 2 Oscars. Another 112 wins & 103 nominations.",
          "mpaaRating": "R",
          "plot": "In New York City's Harlem circa 1987, an overweight, abused, illiterate teen who is pregnant with her second child is invited to enroll in an alternative school in hopes that her life can head in a new direction.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk3NDM4ODMwNl5BMl5BanBnXkFtZTcwMTYyNDIzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Harry Potter and the Deathly Hallows: Part 1",
          "releaseDate": "2010-11-19T05:00:00.000Z",
          "runTime": 146,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy",
            "Mystery"
          ],
          "director": "David Yates",
          "cast": [
            "Bill Nighy",
            "Emma Watson",
            "Richard Griffiths",
            "Harry Melling"
          ],
          "country": "UK",
          "productionCompany": "Heyday Films",
          "imdbRating": 7.7,
          "awards": "Nominated for 2 Oscars. Another 15 wins & 53 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
        },
        {
          "title": "The Legend of Tarzan",
          "releaseDate": "2016-07-01T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Romance"
          ],
          "director": "David Yates",
          "cast": [
            "Alexander Skarsgård",
            "Rory J. Saper",
            "Christian Stevens",
            "Christoph Waltz"
          ],
          "country": "UK, Canada, USA, Australia",
          "productionCompany": "Jerry Weintraub Productions",
          "imdbRating": 6.2,
          "awards": "2 wins & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzY3OTI0OTcyMF5BMl5BanBnXkFtZTgwNjkxNTAwOTE@._V1_SX300.jpg"
        },
        {
          "title": "Doubt",
          "releaseDate": "2008-12-25T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Drama",
            "Mystery"
          ],
          "director": "John Patrick Shanley",
          "cast": [
            "Meryl Streep",
            "Philip Seymour Hoffman",
            "Amy Adams",
            "Viola Davis"
          ],
          "country": "USA",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 7.5,
          "awards": "Nominated for 5 Oscars. Another 25 wins & 91 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A Catholic school principal questions a priest's ambiguous relationship with a troubled young student.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYWFjZmE2NGYtNGIzYi00Nzc2LTlhZWMtMTNkOTBkOTQ0MTJmXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg"
        },
        {
          "title": "The Boy in the Striped Pajamas",
          "releaseDate": "2008-11-26T05:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Drama",
            "History",
            "War"
          ],
          "director": "Mark Herman",
          "cast": [
            "Asa Butterfield",
            "Zac Mattoon O'Brien",
            "Domonkos Németh",
            "Henry Kingsmill"
          ],
          "country": "UK, USA",
          "productionCompany": "Heyday Films",
          "imdbRating": 7.8,
          "awards": "7 wins & 7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Through the innocent eyes of Bruno, the eight-year-old son of the commandant at a German concentration camp, a forbidden friendship with a Jewish boy on the other side of the camp fence has startling and unexpected consequences.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMzMTc3MjA5NF5BMl5BanBnXkFtZTcwOTk3MDE5MQ@@._V1_SX300.jpg"
        },
        {
          "title": "WALL·E",
          "releaseDate": "2008-06-27T04:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Animation",
            "Adventure",
            "Family",
            "Romance",
            "Sci-Fi"
          ],
          "director": "Andrew Stanton",
          "cast": [
            "Ben Burtt",
            "Elissa Knight",
            "Jeff Garlin",
            "Fred Willard"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 8.4,
          "awards": "Won 1 Oscar. Another 92 wins & 95 nominations.",
          "mpaaRating": "G",
          "plot": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Pineapple Express",
          "releaseDate": "2008-08-06T04:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "David Gordon Green",
          "cast": [
            "Seth Rogen",
            "James Franco",
            "Danny McBride",
            "Kevin Corrigan"
          ],
          "country": "USA",
          "productionCompany": "N/A",
          "imdbRating": 6.9,
          "awards": "Nominated for 1 Golden Globe. Another 2 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after he witnesses his dealer's boss murder a competitor while trying to serve papers on him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY1MTE4NzAwM15BMl5BanBnXkFtZTcwNzg3Mjg2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Once",
          "releaseDate": "2007-06-15T04:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Drama",
            "Music",
            "Romance"
          ],
          "director": "John Carney",
          "cast": [
            "Glen Hansard",
            "Markéta Irglová",
            "Hugh Walsh",
            "Gerard Hendrick"
          ],
          "country": "Ireland",
          "productionCompany": "Samson Films",
          "imdbRating": 7.8,
          "awards": "Won 1 Oscar. Another 22 wins & 32 nominations.",
          "mpaaRating": "R",
          "plot": "A modern-day musical about a busker and an immigrant and their eventful week in Dublin, as they write, rehearse and record songs that tell their love story.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYWUxZjJkMDktZmMxMS00Mzg3LTk4MDItN2IwODlmN2E0MTM0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Thing",
          "releaseDate": "2011-10-14T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Horror",
            "Mystery",
            "Sci-Fi"
          ],
          "director": "Matthijs van Heijningen Jr.",
          "cast": [
            "Mary Elizabeth Winstead",
            "Joel Edgerton",
            "Ulrich Thomsen",
            "Eric Christian Olsen"
          ],
          "country": "Canada, USA, UK",
          "productionCompany": "Strike Entertainment",
          "imdbRating": 6.2,
          "awards": "5 nominations.",
          "mpaaRating": "R",
          "plot": "At an Antarctica research site, the discovery of an alien craft leads to a confrontation between graduate student Kate Lloyd and scientist Dr. Sander Halvorson.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMxMjI0MzUyNl5BMl5BanBnXkFtZTcwNjc1NzE5NQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Hobbit: An Unexpected Journey",
          "releaseDate": "2012-12-14T05:00:00.000Z",
          "runTime": 169,
          "genres": [
            "Adventure",
            "Fantasy"
          ],
          "director": "Peter Jackson",
          "cast": [
            "Ian McKellen",
            "Martin Freeman",
            "Richard Armitage",
            "Ken Stott"
          ],
          "country": "New Zealand, USA",
          "productionCompany": "WingNut Films",
          "imdbRating": 7.8,
          "awards": "Nominated for 3 Oscars. Another 11 wins & 72 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg"
        },
        {
          "title": "Bride Wars",
          "releaseDate": "2009-01-09T05:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Gary Winick",
          "cast": [
            "Kate Hudson",
            "Anne Hathaway",
            "Bryan Greenberg",
            "Chris Pratt"
          ],
          "country": "USA",
          "productionCompany": "New Regency Pictures",
          "imdbRating": 5.5,
          "awards": "1 win & 8 nominations.",
          "mpaaRating": "PG",
          "plot": "Two best friends become rivals when they schedule their respective weddings on the same day.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUyNTg2OTUwN15BMl5BanBnXkFtZTgwNzEzMzg5MTI@._V1_SX300.jpg"
        },
        {
          "title": "The Road",
          "releaseDate": "2009-11-25T05:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Drama"
          ],
          "director": "John Hillcoat",
          "cast": [
            "Viggo Mortensen",
            "Kodi Smit-McPhee",
            "Robert Duvall",
            "Guy Pearce"
          ],
          "country": "USA",
          "productionCompany": "Dimension Films",
          "imdbRating": 7.2,
          "awards": "Nominated for 1 BAFTA Film Award. Another 5 wins & 33 nominations.",
          "mpaaRating": "R",
          "plot": "In a dangerous post-apocalyptic world, an ailing father defends his son as they slowly travel to the sea.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAwNzk4NTU3NDReQTJeQWpwZ15BbWU3MDg3OTEyODI@._V1_SX300.jpg"
        },
        {
          "title": "Shrek Forever After",
          "releaseDate": "2010-05-21T04:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy",
            "Romance"
          ],
          "director": "Mike Mitchell",
          "cast": [
            "Mike Myers",
            "Eddie Murphy",
            "Cameron Diaz",
            "Antonio Banderas"
          ],
          "country": "USA, Japan",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 6.3,
          "awards": "1 win & 13 nominations.",
          "mpaaRating": "PG",
          "plot": "Rumpelstiltskin tricks a mid-life crisis burdened Shrek into allowing himself to be erased from existence and cast in a dark alternate timeline where Rumpelstiltskin rules supreme.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Monsters vs. Aliens",
          "releaseDate": "2009-03-27T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Comedy",
            "Family",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Rob Letterman, Conrad Vernon",
          "cast": [
            "Reese Witherspoon",
            "Seth Rogen",
            "Hugh Laurie",
            "Will Arnett"
          ],
          "country": "USA",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 6.4,
          "awards": "3 wins & 10 nominations.",
          "mpaaRating": "PG",
          "plot": "A woman transformed into a giant after she is struck by a meteorite on her wedding day becomes part of a team of monsters sent in by the U.S. government to defeat an alien mastermind trying to take over Earth.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMzMzMg@@._V1_SX300.jpg"
        },
        {
          "title": "How to Train Your Dragon",
          "releaseDate": "2010-03-26T04:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Dean DeBlois, Chris Sanders",
          "cast": [
            "Jay Baruchel",
            "Gerard Butler",
            "Craig Ferguson",
            "America Ferrera"
          ],
          "country": "USA",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 8.1,
          "awards": "Nominated for 2 Oscars. Another 25 wins & 61 nominations.",
          "mpaaRating": "PG",
          "plot": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg"
        },
        {
          "title": "Saw IV",
          "releaseDate": "2007-10-26T04:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Crime",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Darren Lynn Bousman",
          "cast": [
            "Tobin Bell",
            "Costas Mandylor",
            "Scott Patterson",
            "Betsy Russell"
          ],
          "country": "Canada, USA",
          "productionCompany": "Twisted Pictures",
          "imdbRating": 5.9,
          "awards": "2 wins & 7 nominations.",
          "mpaaRating": "R",
          "plot": "Despite Jigsaw's death, and in order to save the lives of two of his colleagues, Lieutenant Rigg is forced to take part in a new game, which promises to test him to the limit.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjc0NjUyNzg3MF5BMl5BanBnXkFtZTYwODMxOTM3._V1_SX300.jpg"
        },
        {
          "title": "Brüno",
          "releaseDate": "2009-07-10T04:00:00.000Z",
          "runTime": 81,
          "genres": [
            "Comedy"
          ],
          "director": "Larry Charles",
          "cast": [
            "Sacha Baron Cohen",
            "Gustaf Hammarsten",
            "Clifford Bañagale",
            "Chibundu Orukwowu"
          ],
          "country": "USA, UK",
          "productionCompany": "Four by Two Films",
          "imdbRating": 5.8,
          "awards": "2 wins & 5 nominations.",
          "mpaaRating": "R",
          "plot": "Flamboyant and gay Austrian Brüno looks for new fame in America.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUwNDIwNDE5MV5BMl5BanBnXkFtZTcwMDA2MzA1Mg@@._V1_SX300.jpg"
        },
        {
          "title": "The Hurt Locker",
          "releaseDate": "2009-07-31T04:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Drama",
            "Thriller",
            "War"
          ],
          "director": "Kathryn Bigelow",
          "cast": [
            "Jeremy Renner",
            "Anthony Mackie",
            "Brian Geraghty",
            "Guy Pearce"
          ],
          "country": "USA",
          "productionCompany": "Voltage Pictures",
          "imdbRating": 7.5,
          "awards": "Won 6 Oscars. Another 119 wins & 130 nominations.",
          "mpaaRating": "R",
          "plot": "During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYWYxZjU2MmQtMmMzYi00ZWUwLTg2ZWQtMDExZTVlYjM3ZWM1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
          "title": "Burn After Reading",
          "releaseDate": "2008-09-12T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Comedy",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Ethan Coen, Joel Coen",
          "cast": [
            "George Clooney",
            "Frances McDormand",
            "Brad Pitt",
            "John Malkovich"
          ],
          "country": "USA, UK, France",
          "productionCompany": "Working Title Films",
          "imdbRating": 7,
          "awards": "Nominated for 2 Golden Globes. Another 8 wins & 30 nominations.",
          "mpaaRating": "R",
          "plot": "A disk containing mysterious information from a CIA agent ends up in the hands of two unscrupulous and daft gym employees who attempt to sell it.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzYwMjZhOGEtMGZlZS00Mjg1LTlkMDktYzJiZDU4MzAxZDRiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Mist",
          "releaseDate": "2007-11-21T05:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Frank Darabont",
          "cast": [
            "Thomas Jane",
            "Marcia Gay Harden",
            "Laurie Holden",
            "Andre Braugher"
          ],
          "country": "USA",
          "productionCompany": "Darkwoods Productions",
          "imdbRating": 7.1,
          "awards": "6 wins & 13 nominations.",
          "mpaaRating": "R",
          "plot": "A freak storm unleashes a species of bloodthirsty creatures on a small town, where a small band of citizens hole up in a supermarket and fight for their lives.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjQyNDY1Ml5BMl5BanBnXkFtZTcwMTk1MDU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Blind Side",
          "releaseDate": "2009-11-20T05:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Biography",
            "Drama",
            "Sport"
          ],
          "director": "John Lee Hancock",
          "cast": [
            "Sandra Bullock",
            "Tim McGraw",
            "Quinton Aaron",
            "Jae Head"
          ],
          "country": "USA",
          "productionCompany": "Gil Netter",
          "imdbRating": 7.6,
          "awards": "Won 1 Oscar. Another 8 wins & 30 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The story of Michael Oher, a homeless and traumatized boy who became an All-American football player and first-round NFL draft pick with the help of a caring woman and her family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Ponyo",
          "releaseDate": "2009-08-14T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Hayao Miyazaki",
          "cast": [
            "Tomoko Yamaguchi",
            "Kazushige Nagashima",
            "Yûki Amami",
            "George Tokoro"
          ],
          "country": "Japan, USA",
          "productionCompany": "Studio Ghibli",
          "imdbRating": 7.7,
          "awards": "12 wins & 20 nominations.",
          "mpaaRating": "G",
          "plot": "A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTc3YmM3N2QtODZkMC00ZDE5LThjMTQtYTljN2Y1YTYwYWJkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg"
        },
        {
          "title": "Antichrist",
          "releaseDate": "2009-05-20T04:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Drama",
            "Horror",
            "Thriller"
          ],
          "director": "Lars von Trier",
          "cast": [
            "Willem Dafoe",
            "Charlotte Gainsbourg",
            "Storm Acheche Sahlstrøm"
          ],
          "country": "Denmark, Germany, France, Sweden, Italy, Poland",
          "productionCompany": "Zentropa Entertainments",
          "imdbRating": 6.6,
          "awards": "21 wins & 33 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "A grieving couple retreat to their cabin in the woods, hoping to repair their broken hearts and troubled marriage, but nature takes its course and things go from bad to worse.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE3MjQ2ODc1N15BMl5BanBnXkFtZTcwNjYyMzI5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Frost/Nixon",
          "releaseDate": "2009-01-23T05:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Biography",
            "Drama",
            "History"
          ],
          "director": "Ron Howard",
          "cast": [
            "Frank Langella",
            "Michael Sheen",
            "Sam Rockwell",
            "Kevin Bacon"
          ],
          "country": "UK, France, USA",
          "productionCompany": "Imagine Entertainment",
          "imdbRating": 7.7,
          "awards": "Nominated for 5 Oscars. Another 23 wins & 75 nominations.",
          "mpaaRating": "R",
          "plot": "A dramatic retelling of the post-Watergate television interviews between British talk-show host David Frost and former president Richard Nixon.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTY4NTU2NTU4NF5BMl5BanBnXkFtZTcwNjE0OTc5MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Forbidden Kingdom",
          "releaseDate": "2008-04-18T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Rob Minkoff",
          "cast": [
            "Jet Li",
            "Michael Angarano",
            "Jackie Chan",
            "Juana Collignon"
          ],
          "country": "USA, China",
          "productionCompany": "Casey Silver Productions",
          "imdbRating": 6.6,
          "awards": "5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A discovery made by a kung fu obsessed American teen sends him on an adventure to China, where he joins up with a band of martial arts warriors in order to free the imprisoned Monkey King.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUwNTExMTg3NF5BMl5BanBnXkFtZTcwNDYyMTM2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Mummy: Tomb of the Dragon Emperor",
          "releaseDate": "2008-08-01T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Horror",
            "War"
          ],
          "director": "Rob Cohen",
          "cast": [
            "Brendan Fraser",
            "Jet Li",
            "Maria Bello",
            "John Hannah"
          ],
          "country": "USA, Germany, China, Canada",
          "productionCompany": "Sean Daniel Company",
          "imdbRating": 5.2,
          "awards": "2 wins & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In the Far East, Alex O'Connell, the son of famed mummy fighters Rick and Evy O'Connell, unearths the mummy of the first Emperor of Qin -- a shape-shifting entity cursed by a witch centuries ago.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU4NDIzMDY1OV5BMl5BanBnXkFtZTcwNjQxMzk3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Epic",
          "releaseDate": "2013-05-24T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Animation",
            "Adventure",
            "Family",
            "Fantasy",
            "Mystery",
            "Thriller"
          ],
          "director": "Chris Wedge",
          "cast": [
            "Blake Anderson",
            "Aziz Ansari",
            "Allison Bills",
            "Jim Conroy"
          ],
          "country": "USA, Ireland",
          "productionCompany": "Blue Sky Studios",
          "imdbRating": 6.7,
          "awards": "2 wins & 21 nominations.",
          "mpaaRating": "PG",
          "plot": "A teenager finds herself transported to a deep forest setting where a battle between the forces of good and the forces of evil is taking place. She bands together with a rag-tag group of characters in order to save their world -- and ours.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgyNDYwNzE5NV5BMl5BanBnXkFtZTcwMzUyODM5OA@@._V1_SX300.jpg"
        },
        {
          "title": "The Avengers",
          "releaseDate": "2012-05-04T04:00:00.000Z",
          "runTime": 143,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Joss Whedon",
          "cast": [
            "Robert Downey Jr.",
            "Chris Evans",
            "Mark Ruffalo",
            "Chris Hemsworth"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 8,
          "awards": "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Cloudy with a Chance of Meatballs",
          "releaseDate": "2009-09-18T04:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Phil Lord, Christopher Miller",
          "cast": [
            "Bill Hader",
            "Anna Faris",
            "James Caan",
            "Andy Samberg"
          ],
          "country": "USA, Canada",
          "productionCompany": "Sony Pictures Animation",
          "imdbRating": 6.9,
          "awards": "Nominated for 1 Golden Globe. Another 1 win & 13 nominations.",
          "mpaaRating": "PG",
          "plot": "A local scientist is often regarded as a failure until he invents a machine that can make food fall from the sky. But little does he know, that things are about to take a turn for the worst.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg0MjAwNDI5MV5BMl5BanBnXkFtZTcwODkyMzg2Mg@@._V1_SX300.jpg"
        },
        {
          "title": "The Kids Are All Right",
          "releaseDate": "2010-07-30T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Lisa Cholodenko",
          "cast": [
            "Julianne Moore",
            "Annette Bening",
            "Mark Ruffalo",
            "Mia Wasikowska"
          ],
          "country": "USA, France",
          "productionCompany": "Antidote Films",
          "imdbRating": 7,
          "awards": "Nominated for 4 Oscars. Another 29 wins & 129 nominations.",
          "mpaaRating": "R",
          "plot": "Two children conceived by artificial insemination bring their biological father into their non-traditional family life.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE4NTMwNDg5MF5BMl5BanBnXkFtZTcwNDY2ODE0Mw@@._V1_SX300.jpg"
        },
        {
          "title": "The Town",
          "releaseDate": "2010-09-17T04:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Ben Affleck",
          "cast": [
            "Ben Affleck",
            "Rebecca Hall",
            "Jon Hamm",
            "Jeremy Renner"
          ],
          "country": "USA",
          "productionCompany": "GK Films",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Oscar. Another 9 wins & 45 nominations.",
          "mpaaRating": "R",
          "plot": "A longtime thief, planning his next job, tries to balance his feelings for a bank manager connected to an earlier heist, and a hell-bent F.B.I Agent looking to bring him and his crew down.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcyNzcxODg3Nl5BMl5BanBnXkFtZTcwMTUyNjQ3Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Step Brothers",
          "releaseDate": "2008-07-25T04:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Comedy"
          ],
          "director": "Adam McKay",
          "cast": [
            "Will Ferrell",
            "John C. Reilly",
            "Mary Steenburgen",
            "Richard Jenkins"
          ],
          "country": "USA",
          "productionCompany": "Apatow Productions",
          "imdbRating": 6.9,
          "awards": "3 wins & 2 nominations.",
          "mpaaRating": "R",
          "plot": "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Darjeeling Limited",
          "releaseDate": "2007-10-26T04:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Adventure",
            "Comedy",
            "Drama"
          ],
          "director": "Wes Anderson",
          "cast": [
            "Owen Wilson",
            "Adrien Brody",
            "Jason Schwartzman",
            "Amara Karan"
          ],
          "country": "USA, India",
          "productionCompany": "American Empirical Pictures",
          "imdbRating": 7.2,
          "awards": "4 wins & 4 nominations.",
          "mpaaRating": "R",
          "plot": "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MTQ4MTgwOF5BMl5BanBnXkFtZTcwMDA3MDU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Hotel Transylvania",
          "releaseDate": "2012-09-28T04:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Animation",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Genndy Tartakovsky",
          "cast": [
            "Adam Sandler",
            "Andy Samberg",
            "Selena Gomez",
            "Kevin James"
          ],
          "country": "USA, South Korea, Canada",
          "productionCompany": "Sony Pictures Animation",
          "imdbRating": 7.1,
          "awards": "Nominated for 1 Golden Globe. Another 2 wins & 14 nominations.",
          "mpaaRating": "PG",
          "plot": "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teenaged daughter.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_SX300.jpg"
        },
        {
          "title": "Underworld: Rise of the Lycans",
          "releaseDate": "2009-01-23T05:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Action",
            "Fantasy",
            "Thriller"
          ],
          "director": "Patrick Tatopoulos",
          "cast": [
            "Michael Sheen",
            "Bill Nighy",
            "Rhona Mitra",
            "Steven Mackintosh"
          ],
          "country": "USA, New Zealand",
          "productionCompany": "Lakeshore International",
          "imdbRating": 6.6,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "An origins story centered on the centuries-old feud between the race of aristocratic vampires and their onetime slaves, the Lycans.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg1OTU5ODc0MV5BMl5BanBnXkFtZTcwNDYyMDUwMg@@._V1_SX300.jpg"
        },
        {
          "title": "Definitely, Maybe",
          "releaseDate": "2008-02-14T05:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Adam Brooks",
          "cast": [
            "Ryan Reynolds",
            "An Nguyen",
            "Matthew Mason",
            "Rick Derby"
          ],
          "country": "UK, France, Germany, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.1,
          "awards": "1 win & 1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "A political consultant tries to explain his impending divorce and past relationships to his 11-year-old daughter.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc1Mzc1ODMxMF5BMl5BanBnXkFtZTcwNDY1MzU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Godzilla",
          "releaseDate": "2014-05-16T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Gareth Edwards",
          "cast": [
            "Aaron Taylor-Johnson",
            "CJ Adams",
            "Ken Watanabe",
            "Bryan Cranston"
          ],
          "country": "USA, Japan",
          "productionCompany": "Legendary Pictures",
          "imdbRating": 6.4,
          "awards": "7 wins & 31 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg"
        },
        {
          "title": "Quantum of Solace",
          "releaseDate": "2008-11-14T05:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Action",
            "Adventure",
            "Thriller"
          ],
          "director": "Marc Forster",
          "cast": [
            "Daniel Craig",
            "Olga Kurylenko",
            "Mathieu Amalric",
            "Judi Dench"
          ],
          "country": "UK, USA",
          "productionCompany": "Eon Productions Ltd.",
          "imdbRating": 6.6,
          "awards": "Nominated for 2 BAFTA Film Awards. Another 4 wins & 30 nominations.",
          "mpaaRating": "PG-13",
          "plot": "James Bond descends into mystery as he tries to stop a mysterious organisation from eliminating a country's most valuable resource.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjZiYTUzMzktZWI5Yy00Mzk4LWFlMDgtYjRmNWU0Mzc0MzNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
        },
        {
          "title": "Superbad",
          "releaseDate": "2007-08-17T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Comedy"
          ],
          "director": "Greg Mottola",
          "cast": [
            "Jonah Hill",
            "Michael Cera",
            "Christopher Mintz-Plasse",
            "Bill Hader"
          ],
          "country": "USA",
          "productionCompany": "Apatow Productions",
          "imdbRating": 7.6,
          "awards": "11 wins & 24 nominations.",
          "mpaaRating": "R",
          "plot": "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Dracula Untold",
          "releaseDate": "2014-10-10T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Horror",
            "War"
          ],
          "director": "Gary Shore",
          "cast": [
            "Luke Evans",
            "Sarah Gadon",
            "Dominic Cooper",
            "Art Parkinson"
          ],
          "country": "USA, UK, Ireland",
          "productionCompany": "Michael De Luca",
          "imdbRating": 6.3,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As his kingdom is being threatened by the Turks, young prince Vlad Tepes must become a monster feared by his own people in order to obtain the power needed to protect his own family, and the families of his kingdom.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkzNzI1OTI4N15BMl5BanBnXkFtZTgwNTQ2NzEwMjE@._V1_SX300.jpg"
        },
        {
          "title": "The Bucket List",
          "releaseDate": "2008-01-11T05:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Adventure",
            "Comedy",
            "Drama"
          ],
          "director": "Rob Reiner",
          "cast": [
            "Jack Nicholson",
            "Morgan Freeman",
            "Sean Hayes",
            "Beverly Todd"
          ],
          "country": "USA",
          "productionCompany": "Warner Bros.",
          "imdbRating": 7.4,
          "awards": "3 wins & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two terminally ill men escape from a cancer ward and head off on a road trip with a wish list of to-dos before they die.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY2NTUyMjIyNF5BMl5BanBnXkFtZTYwNzYwMDM4._V1_SX300.jpg"
        },
        {
          "title": "Changeling",
          "releaseDate": "2008-10-31T04:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Biography",
            "Crime",
            "Drama",
            "History",
            "Mystery",
            "Thriller"
          ],
          "director": "Clint Eastwood",
          "cast": [
            "Angelina Jolie",
            "Gattlin Griffith",
            "Michelle Gunn",
            "Jan Devereaux"
          ],
          "country": "USA",
          "productionCompany": "Malpaso Company",
          "imdbRating": 7.7,
          "awards": "Nominated for 3 Oscars. Another 14 wins & 51 nominations.",
          "mpaaRating": "R",
          "plot": "Grief-stricken mother Christine Collins (Angelina Jolie) takes on the L.A.P.D. to her own detriment when it tries to pass off an obvious impostor as her missing child.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTA1Mzg3NjIxNV5BMl5BanBnXkFtZTcwNzU2NTc5MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Shooter",
          "releaseDate": "2007-03-23T04:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Drama",
            "Thriller"
          ],
          "director": "Antoine Fuqua",
          "cast": [
            "Mark Wahlberg",
            "Michael Peña",
            "Danny Glover",
            "Kate Mara"
          ],
          "country": "USA",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 7.2,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "A marksman living in exile is coaxed back into action after learning of a plot to kill the President. After being double crossed for the attempt and on the run, he sets out for the real killer and the truth.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMGRjMzY0OGItNDc4YS00OGNlLWI3MGYtZjRkNjdiNWUyNDY4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          "title": "Priest",
          "releaseDate": "2011-05-13T04:00:00.000Z",
          "runTime": 87,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Scott Stewart",
          "cast": [
            "Paul Bettany",
            "Karl Urban",
            "Cam Gigandet",
            "Maggie Q"
          ],
          "country": "USA",
          "productionCompany": "Michael De Luca",
          "imdbRating": 5.7,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A priest disobeys church law to track down the vampires who kidnapped his niece.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MTAwODc3OV5BMl5BanBnXkFtZTcwNzI0MDQ3NA@@._V1_SX300.jpg"
        },
        {
          "title": "Marley & Me",
          "releaseDate": "2008-12-25T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Comedy",
            "Drama",
            "Family"
          ],
          "director": "David Frankel",
          "cast": [
            "Owen Wilson",
            "Jennifer Aniston",
            "Eric Dane",
            "Kathleen Turner"
          ],
          "country": "USA",
          "productionCompany": "Gil Netter",
          "imdbRating": 7.1,
          "awards": "2 wins & 4 nominations.",
          "mpaaRating": "PG",
          "plot": "A family learns important life lessons from their adorable, but naughty and neurotic dog.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTdiZGY1MTctMjQzYy00ZTc0LThiM2EtY2U2OGIwYjBiNTM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Valentine's Day",
          "releaseDate": "2010-02-12T05:00:00.000Z",
          "runTime": 125,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Garry Marshall",
          "cast": [
            "Jessica Alba",
            "Kathy Bates",
            "Jessica Biel",
            "Bradley Cooper"
          ],
          "country": "USA",
          "productionCompany": "Wayne Rice",
          "imdbRating": 5.7,
          "awards": "7 wins & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Intertwining couples and singles in Los Angeles break-up and make-up based on the pressures and expectations of Valentine's Day.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk3MTIwNDIxNF5BMl5BanBnXkFtZTcwMDMyMzcwMw@@._V1_SX300.jpg"
        },
        {
          "title": "World War Z",
          "releaseDate": "2013-06-21T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Adventure",
            "Horror",
            "Sci-Fi"
          ],
          "director": "Marc Forster",
          "cast": [
            "Brad Pitt",
            "Mireille Enos",
            "Daniella Kertesz",
            "James Badge Dale"
          ],
          "country": "USA, UK, Malta",
          "productionCompany": "Plan B Films",
          "imdbRating": 7,
          "awards": "3 wins & 24 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          "title": "Interstellar",
          "releaseDate": "2014-11-07T05:00:00.000Z",
          "runTime": 169,
          "genres": [
            "Adventure",
            "Drama",
            "Sci-Fi"
          ],
          "director": "Christopher Nolan",
          "cast": [
            "Ellen Burstyn",
            "Matthew McConaughey",
            "Mackenzie Foy",
            "John Lithgow"
          ],
          "country": "USA, UK, Canada",
          "productionCompany": "Syncopy",
          "imdbRating": 8.6,
          "awards": "Won 1 Oscar. Another 43 wins & 148 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Book Thief",
          "releaseDate": "2013-11-27T05:00:00.000Z",
          "runTime": 131,
          "genres": [
            "Drama",
            "War"
          ],
          "director": "Brian Percival",
          "cast": [
            "Roger Allam",
            "Sophie Nélisse",
            "Heike Makatsch",
            "Julian Lehmann"
          ],
          "country": "USA, Germany",
          "productionCompany": "Sunswept Entertainment",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 9 wins & 16 nominations.",
          "mpaaRating": "PG-13",
          "plot": "While subjected to the horrors of World War II Germany, young Liesel finds solace by stealing books and sharing them with others. In the basement of her home, a Jewish refugee is being protected by her adoptive parents.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTE3NzkyMjAyNF5BMl5BanBnXkFtZTgwMDc5MTE0MDE@._V1_SX300.jpg"
        },
        {
          "title": "She's Out of My League",
          "releaseDate": "2010-03-12T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Jim Field Smith",
          "cast": [
            "Jay Baruchel",
            "Alice Eve",
            "T.J. Miller",
            "Mike Vogel"
          ],
          "country": "USA",
          "productionCompany": "Mosaic Media Group",
          "imdbRating": 6.4,
          "awards": "1 nomination.",
          "mpaaRating": "R",
          "plot": "An average Joe meets the perfect woman, but his lack of confidence and the influence of his friends and family begin to pick away at the relationship.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkwMTY5ODA1MF5BMl5BanBnXkFtZTcwODYyNzAxMw@@._V1_SX300.jpg"
        },
        {
          "title": "Seven Pounds",
          "releaseDate": "2008-12-19T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Drama"
          ],
          "director": "Gabriele Muccino",
          "cast": [
            "Will Smith",
            "Rosario Dawson",
            "Woody Harrelson",
            "Michael Ealy"
          ],
          "country": "USA",
          "productionCompany": "Overbrook Entertainment",
          "imdbRating": 7.6,
          "awards": "5 wins & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A man with a fateful secret embarks on an extraordinary journey of redemption by forever changing the lives of seven strangers.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU0NzY0MTY5OF5BMl5BanBnXkFtZTcwODY3MDEwMg@@._V1_SX300.jpg"
        },
        {
          "title": "Percy Jackson & the Olympians: The Lightning Thief",
          "releaseDate": "2010-02-12T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Chris Columbus",
          "cast": [
            "Logan Lerman",
            "Brandon T. Jackson",
            "Alexandra Daddario",
            "Jake Abel"
          ],
          "country": "UK, Canada, USA",
          "productionCompany": "Phoenix Film Partners",
          "imdbRating": 5.9,
          "awards": "11 nominations.",
          "mpaaRating": "PG",
          "plot": "A teenager discovers he's the descendant of a Greek god and sets out on an adventure to settle an on-going battle between the gods.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ5NDlmZWUtMjIyMC00NzQ3LTg3OWYtMzRkY2FiNzQ0Njc4XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"
        },
        {
          "title": "The Danish Girl",
          "releaseDate": "2016-01-22T05:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Biography",
            "Drama",
            "Romance"
          ],
          "director": "Tom Hooper",
          "cast": [
            "Alicia Vikander",
            "Eddie Redmayne",
            "Tusse Silberg",
            "Adrian Schiller"
          ],
          "country": "UK, USA, Germany, Denmark, Belgium, Japan",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.1,
          "awards": "Won 1 Oscar. Another 31 wins & 77 nominations.",
          "mpaaRating": "R",
          "plot": "A fictitious love story loosely inspired by the lives of Danish artists Lili Elbe and Gerda Wegener. Lili and Gerda's marriage and work evolve as they navigate Lili's groundbreaking journey as a transgender pioneer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA0NjA4NjE2Nl5BMl5BanBnXkFtZTgwNzIxNTY2NjE@._V1_SX300.jpg"
        },
        {
          "title": "Angels & Demons",
          "releaseDate": "2009-05-15T04:00:00.000Z",
          "runTime": 138,
          "genres": [
            "Action",
            "Mystery",
            "Thriller"
          ],
          "director": "Ron Howard",
          "cast": [
            "Tom Hanks",
            "Ewan McGregor",
            "Ayelet Zurer",
            "Stellan Skarsgård"
          ],
          "country": "USA, Italy",
          "productionCompany": "Imagine Entertainment",
          "imdbRating": 6.7,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Harvard symbologist Robert Langdon works with a nuclear physicist to solve a murder and prevent a terrorist act against the Vatican during one of the significant events within the church.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Lars and the Real Girl",
          "releaseDate": "2007-11-02T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Craig Gillespie",
          "cast": [
            "Ryan Gosling",
            "Emily Mortimer",
            "Paul Schneider",
            "R.D. Reid"
          ],
          "country": "USA, Canada",
          "productionCompany": "Sidney Kimmel Entertainment",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 Oscar. Another 7 wins & 35 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A delusional young man strikes up an unconventional relationship with a doll he finds on the Internet.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI4NDc1NDkwMV5BMl5BanBnXkFtZTcwNjgzMDE1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "It's Kind of a Funny Story",
          "releaseDate": "2010-10-08T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Anna Boden, Ryan Fleck",
          "cast": [
            "Keir Gilchrist",
            "Dana DeVestern",
            "Lauren Graham",
            "Jim Gaffigan"
          ],
          "country": "USA",
          "productionCompany": "Misher Films",
          "imdbRating": 7.1,
          "awards": "2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A clinically depressed teenager gets a new start after he checks himself into an adult psychiatric ward.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk0MTAyNjQ2N15BMl5BanBnXkFtZTcwNjYwOTU3Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Warcraft",
          "releaseDate": "2016-06-10T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Duncan Jones",
          "cast": [
            "Travis Fimmel",
            "Paula Patton",
            "Ben Foster",
            "Dominic Cooper"
          ],
          "country": "China, USA, Canada, Japan",
          "productionCompany": "Legendary Pictures",
          "imdbRating": 6.8,
          "awards": "2 wins & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_SX300.jpg"
        },
        {
          "title": "Thor",
          "releaseDate": "2011-05-06T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Kenneth Branagh",
          "cast": [
            "Chris Hemsworth",
            "Natalie Portman",
            "Tom Hiddleston",
            "Anthony Hopkins"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7,
          "awards": "5 wins & 30 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
        },
        {
          "title": "Clash of the Titans",
          "releaseDate": "2010-04-02T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Louis Leterrier",
          "cast": [
            "Sam Worthington",
            "Liam Neeson",
            "Ralph Fiennes",
            "Jason Flemyng"
          ],
          "country": "USA, UK, Australia",
          "productionCompany": "Thunder Road Productions",
          "imdbRating": 5.8,
          "awards": "4 wins & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Perseus, demigod, son of Zeus, battles the minions of the underworld to stop them from conquering heaven and earth.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYxNjg4MzU5OV5BMl5BanBnXkFtZTcwOTA3NTUwMw@@._V1_SX300.jpg"
        },
        {
          "title": "The Incredible Hulk",
          "releaseDate": "2008-06-13T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Louis Leterrier",
          "cast": [
            "Edward Norton",
            "Liv Tyler",
            "Tim Roth",
            "William Hurt"
          ],
          "country": "USA",
          "productionCompany": "Marvel Films",
          "imdbRating": 6.7,
          "awards": "1 win & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Forgetting Sarah Marshall",
          "releaseDate": "2008-04-18T04:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Nicholas Stoller",
          "cast": [
            "Jason Segel",
            "Kristen Bell",
            "Mila Kunis",
            "Russell Brand"
          ],
          "country": "USA",
          "productionCompany": "Apatow Productions",
          "imdbRating": 7.1,
          "awards": "4 wins & 19 nominations.",
          "mpaaRating": "R",
          "plot": "Devastated Peter takes a Hawaiian vacation in order to deal with the recent break-up with his TV star girlfriend, Sarah. Little does he know, Sarah's traveling to the same resort as her ex - and she's bringing along her new boyfriend.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYzODgzMjAyM15BMl5BanBnXkFtZTcwMTI3NzI2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Epic Movie",
          "releaseDate": "2007-01-26T05:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Adventure",
            "Comedy",
            "Fantasy"
          ],
          "director": "Jason Friedberg, Aaron Seltzer",
          "cast": [
            "Kal Penn",
            "Adam Campbell",
            "Jennifer Coolidge",
            "Jayma Mays"
          ],
          "country": "USA",
          "productionCompany": "Regency Enterprises",
          "imdbRating": 2.4,
          "awards": "2 wins & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A spoof on previous years' epic movies (The Da Vinci Code (2006), The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005) + 20 more), TV series, music videos and celebs. 4 orphans are on an epic adventure.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SX300.jpg"
        },
        {
          "title": "Star Trek",
          "releaseDate": "2009-05-08T04:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "J.J. Abrams",
          "cast": [
            "Chris Pine",
            "Zachary Quinto",
            "Leonard Nimoy",
            "Eric Bana"
          ],
          "country": "USA, Germany",
          "productionCompany": "Bad Robot",
          "imdbRating": 7.9,
          "awards": "Won 1 Oscar. Another 26 wins & 95 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Mamma Mia!",
          "releaseDate": "2008-07-18T04:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Comedy",
            "Musical",
            "Romance"
          ],
          "director": "Phyllida Lloyd",
          "cast": [
            "Amanda Seyfried",
            "Stellan Skarsgård",
            "Pierce Brosnan",
            "Nancy Baldwin"
          ],
          "country": "USA, UK, Germany",
          "productionCompany": "Playtone Productions",
          "imdbRating": 6.4,
          "awards": "Nominated for 2 Golden Globes. Another 15 wins & 23 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The story of a bride-to-be trying to find her real father told using hit songs by the popular 1970s group ABBA.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_SX300.jpg"
        },
        {
          "title": "Death at a Funeral",
          "releaseDate": "2007-09-07T04:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Comedy"
          ],
          "director": "Frank Oz",
          "cast": [
            "Matthew Macfadyen",
            "Keeley Hawes",
            "Andy Nyman",
            "Ewen Bremner"
          ],
          "country": "USA, Germany, UK, Netherlands",
          "productionCompany": "N/A",
          "imdbRating": 7.4,
          "awards": "3 wins & 2 nominations.",
          "mpaaRating": "R",
          "plot": "Chaos ensues when a man tries to expose a dark secret regarding a recently deceased patriarch of a dysfunctional British family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE4OTIyNTM1MF5BMl5BanBnXkFtZTcwMjUzNTg0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "R.I.P.D.",
          "releaseDate": "2013-07-19T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Crime",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Robert Schwentke",
          "cast": [
            "Jeff Bridges",
            "Ryan Reynolds",
            "Kevin Bacon",
            "Mary-Louise Parker"
          ],
          "country": "USA",
          "productionCompany": "Original Film",
          "imdbRating": 5.6,
          "awards": "N/A",
          "mpaaRating": "PG-13",
          "plot": "A recently slain cop joins a team of undead police officers working for the Rest in Peace Department and tries to find the man who murdered him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM5OTYxNzE5N15BMl5BanBnXkFtZTcwMDU1MTQ4OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Jack Reacher",
          "releaseDate": "2012-12-21T05:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Christopher McQuarrie",
          "cast": [
            "Tom Cruise",
            "Rosamund Pike",
            "Richard Jenkins",
            "David Oyelowo"
          ],
          "country": "USA",
          "productionCompany": "Tom Cruise",
          "imdbRating": 7,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A homicide investigator digs deeper into a case involving a trained military sniper who shot five random victims.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM1NjUxMDI3OV5BMl5BanBnXkFtZTcwNjg1ODM3OA@@._V1_SX300.jpg"
        },
        {
          "title": "Mirrors",
          "releaseDate": "2008-08-15T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Horror",
            "Mystery"
          ],
          "director": "Alexandre Aja",
          "cast": [
            "Kiefer Sutherland",
            "Paula Patton",
            "Cameron Boyce",
            "Arika Gluck"
          ],
          "country": "USA, Romania, Germany",
          "productionCompany": "New Regency Pictures",
          "imdbRating": 6.2,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "An ex-cop and his family are the target of an evil force that is using mirrors as a gateway into their home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI2NTA1ODEyOF5BMl5BanBnXkFtZTcwNjc3MjY3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Dallas Buyers Club",
          "releaseDate": "2013-11-22T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "Jean-Marc Vallée",
          "cast": [
            "Matthew McConaughey",
            "Jennifer Garner",
            "Jared Leto",
            "Denis O'Hare"
          ],
          "country": "USA",
          "productionCompany": "Voltage Pictures",
          "imdbRating": 8,
          "awards": "Won 3 Oscars. Another 81 wins & 86 nominations.",
          "mpaaRating": "R",
          "plot": "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg"
        },
        {
          "title": "Atonement",
          "releaseDate": "2008-01-11T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Drama",
            "Mystery",
            "Romance",
            "War"
          ],
          "director": "Joe Wright",
          "cast": [
            "Saoirse Ronan",
            "Ailidh Mackay",
            "Brenda Blethyn",
            "Julia West"
          ],
          "country": "UK, France, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 7.8,
          "awards": "Won 1 Oscar. Another 50 wins & 149 nominations.",
          "mpaaRating": "R",
          "plot": "Thirteen-year-old fledgling writer Briony Tallis irrevocably changes the course of several lives when she accuses her older sister's lover of a crime he did not commit.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMGRiYjE0YzItMzk3Zi00ZmYwLWJjNDktYTAwYjIwMjIxYzM3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Wolfman",
          "releaseDate": "2010-02-12T05:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Drama",
            "Fantasy",
            "Horror",
            "Thriller"
          ],
          "director": "Joe Johnston",
          "cast": [
            "Simon Merrells",
            "Gemma Whelan",
            "Emily Blunt",
            "Benicio Del Toro"
          ],
          "country": "USA",
          "productionCompany": "Stuber Pictures",
          "imdbRating": 5.8,
          "awards": "Won 1 Oscar. Another 3 wins & 8 nominations.",
          "mpaaRating": "R",
          "plot": "Upon his return to his ancestral homeland, an American man is bitten, and subsequently cursed by, a werewolf.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTUyODEyMDIyM15BMl5BanBnXkFtZTcwNTYxMzg5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Mr. Brooks",
          "releaseDate": "2007-06-01T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Bruce A. Evans",
          "cast": [
            "Kevin Costner",
            "Demi Moore",
            "Dane Cook",
            "William Hurt"
          ],
          "country": "USA",
          "productionCompany": "Tig Productions",
          "imdbRating": 7.3,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "A well-respected businessman is sometimes controlled by his murder and mayhem-loving alter ego.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQyNTk5MTMxN15BMl5BanBnXkFtZTcwNTc0ODI1NA@@._V1_SX300.jpg"
        },
        {
          "title": "In Bruges",
          "releaseDate": "2008-02-29T05:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Comedy",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Martin McDonagh",
          "cast": [
            "Elizabeth Berrington",
            "Rudy Blomme",
            "Olivier Bonjour",
            "Mark Donovan"
          ],
          "country": "UK, USA",
          "productionCompany": "Blueprint Pictures",
          "imdbRating": 7.9,
          "awards": "Nominated for 1 Oscar. Another 24 wins & 54 nominations.",
          "mpaaRating": "R",
          "plot": "Guilt-stricken after a job gone wrong, hitman Ray and his partner await orders from their ruthless boss in Bruges, Belgium, the last place in the world Ray wants to be.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUwOGFiM2QtOWMxYS00MjU2LThmZDMtZDM2MWMzNzllNjdhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Princess and the Frog",
          "releaseDate": "2009-12-11T05:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy",
            "Musical",
            "Romance"
          ],
          "director": "Ron Clements, John Musker",
          "cast": [
            "Anika Noni Rose",
            "Bruno Campos",
            "Keith David",
            "Michael-Leon Wooley"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Animation",
          "imdbRating": 7.1,
          "awards": "Nominated for 3 Oscars. Another 10 wins & 39 nominations.",
          "mpaaRating": "G",
          "plot": "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEyOTQ5NzAzNl5BMl5BanBnXkFtZTcwMTcyNTU1Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Drive",
          "releaseDate": "2011-09-16T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Crime",
            "Drama"
          ],
          "director": "Nicolas Winding Refn",
          "cast": [
            "Ryan Gosling",
            "Carey Mulligan",
            "Bryan Cranston",
            "Albert Brooks"
          ],
          "country": "USA",
          "productionCompany": "Marc Platt Productions",
          "imdbRating": 7.8,
          "awards": "Nominated for 1 Oscar. Another 79 wins & 179 nominations.",
          "mpaaRating": "R",
          "plot": "A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver and finds himself in trouble when he helps out his neighbor.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_SX300.jpg"
        },
        {
          "title": "Man of Steel",
          "releaseDate": "2013-06-14T04:00:00.000Z",
          "runTime": 143,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Zack Snyder",
          "cast": [
            "Henry Cavill",
            "Amy Adams",
            "Michael Shannon",
            "Diane Lane"
          ],
          "country": "USA, UK",
          "productionCompany": "Syncopy",
          "imdbRating": 7,
          "awards": "7 wins & 46 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when other survivors of his home planet invade Earth.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"
        },
        {
          "title": "Eastern Promises",
          "releaseDate": "2007-09-21T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "David Cronenberg",
          "cast": [
            "Josef Altin",
            "Mina E. Mina",
            "Aleksandar Mikic",
            "Sarah-Jeanne Labrosse"
          ],
          "country": "UK, Canada, USA",
          "productionCompany": "Serendipity Point Films",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 28 wins & 73 nominations.",
          "mpaaRating": "R",
          "plot": "A teenager who dies during childbirth leaves clues in her journal that could tie her child to a rape involving a violent Russian mob family.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcwMzU0OTY3NF5BMl5BanBnXkFtZTYwNzkwNjg2._V1_SX300.jpg"
        },
        {
          "title": "American Gangster",
          "releaseDate": "2007-11-02T04:00:00.000Z",
          "runTime": 157,
          "genres": [
            "Biography",
            "Crime",
            "Drama"
          ],
          "director": "Ridley Scott",
          "cast": [
            "Denzel Washington",
            "Russell Crowe",
            "Chiwetel Ejiofor",
            "Josh Brolin"
          ],
          "country": "USA, UK",
          "productionCompany": "Scott Free Productions",
          "imdbRating": 7.8,
          "awards": "Nominated for 2 Oscars. Another 12 wins & 36 nominations.",
          "mpaaRating": "R",
          "plot": "An outcast New York City cop is charged with bringing down Harlem drug lord Frank Lucas, whose real life inspired this partly biographical film.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjFmZGI2YTEtYmJhMS00YTE5LWJjNjAtNDI5OGY5ZDhmNTRlXkEyXkFqcGdeQXVyODAwMTU1MTE@._V1_SX300.jpg"
        },
        {
          "title": "Brothers",
          "releaseDate": "2009-12-04T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Action",
            "Drama",
            "Thriller",
            "War"
          ],
          "director": "Jim Sheridan",
          "cast": [
            "Tobey Maguire",
            "Jake Gyllenhaal",
            "Natalie Portman",
            "Sam Shepard"
          ],
          "country": "USA",
          "productionCompany": "Sighvatsson Films",
          "imdbRating": 7.1,
          "awards": "Nominated for 2 Golden Globes. Another 4 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "While on tour in Afghanistan, Sam's copter is shot down and he is presumed dead. Back home, it is his screw-up brother who looks after the family. Sam does return, but with a lot of excess baggage.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkyMTY5MTcxOV5BMl5BanBnXkFtZTcwMTI3MDE3Mg@@._V1_SX300.jpg"
        },
        {
          "title": "I Now Pronounce You Chuck & Larry",
          "releaseDate": "2007-07-20T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Dennis Dugan",
          "cast": [
            "Adam Sandler",
            "Kevin James",
            "Jessica Biel",
            "Dan Aykroyd"
          ],
          "country": "USA",
          "productionCompany": "Universal Pictures",
          "imdbRating": 5.9,
          "awards": "14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two straight, single Brooklyn firefighters pretend to be a gay couple in order to receive domestic partner benefits.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM4NDQ3NDQ3Nl5BMl5BanBnXkFtZTcwMjE4NjY0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Body of Lies",
          "releaseDate": "2008-10-10T04:00:00.000Z",
          "runTime": 128,
          "genres": [
            "Action",
            "Drama",
            "Thriller"
          ],
          "director": "Ridley Scott",
          "cast": [
            "Leonardo DiCaprio",
            "Russell Crowe",
            "Mark Strong",
            "Golshifteh Farahani"
          ],
          "country": "USA, UK",
          "productionCompany": "Scott Free Productions",
          "imdbRating": 7.1,
          "awards": "2 nominations.",
          "mpaaRating": "R",
          "plot": "A CIA agent on the ground in Jordan hunts down a powerful terrorist leader while being caught between the unclear intentions of his American supervisors and Jordan Intelligence.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgzOTY3MTM0OV5BMl5BanBnXkFtZTcwNjc5MTI5MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Into the Wild",
          "releaseDate": "2007-10-19T04:00:00.000Z",
          "runTime": 148,
          "genres": [
            "Adventure",
            "Biography",
            "Drama"
          ],
          "director": "Sean Penn",
          "cast": [
            "Emile Hirsch",
            "Marcia Gay Harden",
            "William Hurt",
            "Jena Malone"
          ],
          "country": "USA",
          "productionCompany": "Paramount Vantage",
          "imdbRating": 8.1,
          "awards": "Nominated for 2 Oscars. Another 23 wins & 104 nominations.",
          "mpaaRating": "R",
          "plot": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_SX300.jpg"
        },
        {
          "title": "Love & Other Drugs",
          "releaseDate": "2010-11-24T05:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Edward Zwick",
          "cast": [
            "Jake Gyllenhaal",
            "Anne Hathaway",
            "Oliver Platt",
            "Hank Azaria"
          ],
          "country": "USA",
          "productionCompany": "New Regency Pictures",
          "imdbRating": 6.7,
          "awards": "Nominated for 2 Golden Globes. Another 1 win & 3 nominations.",
          "mpaaRating": "R",
          "plot": "In 1990s Pittsburgh, a medicine peddler starts a relationship with a young woman suffering from Parkinson's disease.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg"
        },
        {
          "title": "Aliens vs. Predator: Requiem",
          "releaseDate": "2007-12-25T05:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Colin Strause, Greg Strause",
          "cast": [
            "Steven Pasquale",
            "Reiko Aylesworth",
            "John Ortiz",
            "Johnny Lewis"
          ],
          "country": "USA, Mexico",
          "productionCompany": "John Davis",
          "imdbRating": 4.7,
          "awards": "5 nominations.",
          "mpaaRating": "R",
          "plot": "Warring Alien and Predator races descend on a rural Colorado town, where unsuspecting residents must band together for any chance of survival.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI5NDY2NDUwM15BMl5BanBnXkFtZTYwNzQxMTA3._V1_SX300.jpg"
        },
        {
          "title": "The Man from Earth",
          "releaseDate": "2007-11-13T05:00:00.000Z",
          "runTime": 87,
          "genres": [
            "Drama",
            "Fantasy",
            "Mystery",
            "Sci-Fi"
          ],
          "director": "Richard Schenkman",
          "cast": [
            "David Lee Smith",
            "Tony Todd",
            "John Billingsley",
            "Ellen Crawford"
          ],
          "country": "USA",
          "productionCompany": "Falling Sky Entertainment",
          "imdbRating": 7.9,
          "awards": "5 wins & 2 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "An impromptu goodbye party for Professor John Oldman becomes a mysterious interrogation after the retiring scholar reveals to his colleagues he has a longer and stranger past than they can imagine.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzQ5NGQwOTUtNWJlZi00ZTFiLWI0ZTEtOGU3MTA2ZGU5OWZiXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_SX300.jpg"
        },
        {
          "title": "Avatar",
          "releaseDate": "2009-12-18T05:00:00.000Z",
          "runTime": 162,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "James Cameron",
          "cast": [
            "Sam Worthington",
            "Zoe Saldana",
            "Sigourney Weaver",
            "Stephen Lang"
          ],
          "country": "USA",
          "productionCompany": "Dune",
          "imdbRating": 7.8,
          "awards": "Won 3 Oscars. Another 86 wins & 130 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
        },
        {
          "title": "The Chronicles of Narnia: Prince Caspian",
          "releaseDate": "2008-05-16T04:00:00.000Z",
          "runTime": 150,
          "genres": [
            "Action",
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Andrew Adamson",
          "cast": [
            "Ben Barnes",
            "Georgie Henley",
            "Skandar Keynes",
            "William Moseley"
          ],
          "country": "USA, Poland, Slovenia, Czech Republic, UK",
          "productionCompany": "Walden Media",
          "imdbRating": 6.5,
          "awards": "2 wins & 21 nominations.",
          "mpaaRating": "PG",
          "plot": "The Pevensie siblings return to Narnia, where they are enlisted to once again help ward off an evil king and restore the rightful heir to the land's throne, Prince Caspian.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTIwOTA4NTE4Ml5BMl5BanBnXkFtZTcwOTI2NTg1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Letters from Iwo Jima",
          "releaseDate": "2007-02-02T05:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "History",
            "War"
          ],
          "director": "Clint Eastwood",
          "cast": [
            "Ken Watanabe",
            "Kazunari Ninomiya",
            "Tsuyoshi Ihara",
            "Ryô Kase"
          ],
          "country": "USA, Japan",
          "productionCompany": "Amblin Entertainment",
          "imdbRating": 7.9,
          "awards": "Won 1 Oscar. Another 23 wins & 39 nominations.",
          "mpaaRating": "R",
          "plot": "The story of the battle of Iwo Jima between the United States and Imperial Japan during World War II, as told from the perspective of the Japanese who fought it.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE0NzgwODI4M15BMl5BanBnXkFtZTcwNjg3OTA0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Vicky Cristina Barcelona",
          "releaseDate": "2008-08-15T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Woody Allen",
          "cast": [
            "Rebecca Hall",
            "Scarlett Johansson",
            "Christopher Evan Welch",
            "Chris Messina"
          ],
          "country": "Spain, USA",
          "productionCompany": "Mediapro Pictures",
          "imdbRating": 7.1,
          "awards": "Won 1 Oscar. Another 31 wins & 54 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two friends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNjVkZGE1OWItYjMzNC00ZTcwLThiODAtYmYwNzJkMjk5OTVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Ocean's Thirteen",
          "releaseDate": "2007-06-08T04:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Steven Soderbergh",
          "cast": [
            "George Clooney",
            "Brad Pitt",
            "Matt Damon",
            "Michael Mantell"
          ],
          "country": "USA",
          "productionCompany": "Section Eight Ltd.",
          "imdbRating": 6.9,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Danny Ocean rounds up the boys for a third heist after casino owner Willy Bank double-crosses one of the original eleven, Reuben Tishkoff.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMyNTc1NzY5MV5BMl5BanBnXkFtZTcwNDM4NTQzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Wanted",
          "releaseDate": "2008-06-27T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Timur Bekmambetov",
          "cast": [
            "James McAvoy",
            "Morgan Freeman",
            "Angelina Jolie",
            "Terence Stamp"
          ],
          "country": "USA, Germany",
          "productionCompany": "Marc Platt Productions",
          "imdbRating": 6.7,
          "awards": "Nominated for 2 Oscars. Another 4 wins & 23 nominations.",
          "mpaaRating": "R",
          "plot": "A frustrated office worker discovers that he is the son of a professional assassin, and that he shares his father's superhuman killing abilities.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SX300.jpg"
        },
        {
          "title": "Silence",
          "releaseDate": "2017-01-13T05:00:00.000Z",
          "runTime": 161,
          "genres": [
            "Drama",
            "History"
          ],
          "director": "Martin Scorsese",
          "cast": [
            "Andrew Garfield",
            "Adam Driver",
            "Liam Neeson",
            "Tadanobu Asano"
          ],
          "country": "USA, UK, Taiwan, Japan, Mexico, Italy",
          "productionCompany": "G&amp;G",
          "imdbRating": 7.2,
          "awards": "Nominated for 1 Oscar. Another 6 wins & 56 nominations.",
          "mpaaRating": "R",
          "plot": "In the 17th century, two Portuguese Jesuit priests travel to Japan in an attempt to locate their mentor, who is rumored to have committed apostasy, and to propagate Catholicism.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjY3OTk0NjA2NV5BMl5BanBnXkFtZTgwNTg3Mjc2MDI@._V1_SX300.jpg"
        },
        {
          "title": "Saw III",
          "releaseDate": "2006-10-27T04:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Crime",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Darren Lynn Bousman",
          "cast": [
            "Tobin Bell",
            "Shawnee Smith",
            "Angus Macfadyen",
            "Bahar Soomekh"
          ],
          "country": "Canada, USA",
          "productionCompany": "Lionsgate Films",
          "imdbRating": 6.2,
          "awards": "1 win & 9 nominations.",
          "mpaaRating": "R",
          "plot": "Jigsaw abducts a doctor in order to keep himself alive while he watches his new apprentice put an unlucky citizen named Jeff through a brutal test.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNWVjMzgwMTctZmZjNC00ZmE0LThiNTUtYzkyM2RkYWIzY2Y2XkEyXkFqcGdeQXVyNjEyNDAyMzI@._V1_SX300.jpg"
        },
        {
          "title": "Jumper",
          "releaseDate": "2008-02-14T05:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Doug Liman",
          "cast": [
            "Hayden Christensen",
            "Jamie Bell",
            "Rachel Bilson",
            "Diane Lane"
          ],
          "country": "USA, Canada",
          "productionCompany": "New Regency Pictures",
          "imdbRating": 6.1,
          "awards": "2 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A teenager with teleportation abilities suddenly finds himself in the middle of an ancient war between those like him and their sworn annihilators.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEwOTkyOTI3M15BMl5BanBnXkFtZTcwNTQxMjU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Fracture",
          "releaseDate": "2007-04-20T04:00:00.000Z",
          "runTime": 113,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Gregory Hoblit",
          "cast": [
            "Anthony Hopkins",
            "Ryan Gosling",
            "David Strathairn",
            "Rosamund Pike"
          ],
          "country": "USA, Germany",
          "productionCompany": "Castle Rock Entertainment",
          "imdbRating": 7.2,
          "awards": "1 win & 2 nominations.",
          "mpaaRating": "R",
          "plot": "An attorney intending on climbing the career ladder toward success finds an unlikely opponent in a manipulative criminal he is trying to prosecute.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzIzNjQyMzkwM15BMl5BanBnXkFtZTcwOTg5ODQ0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Wild Hogs",
          "releaseDate": "2007-03-02T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Adventure",
            "Comedy"
          ],
          "director": "Walt Becker",
          "cast": [
            "Tim Allen",
            "John Travolta",
            "Martin Lawrence",
            "William H. Macy"
          ],
          "country": "USA",
          "productionCompany": "Touchstone Pictures",
          "imdbRating": 5.8,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A group of suburban biker wannabes looking for adventure hit the open road, but get more than they bargained for when they encounter a New Mexico gang called the Del Fuegos.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZWZlMzQ5NmItNjBmMS00NDgyLThiNDYtZWU2MzA3YjZmOGU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Disturbia",
          "releaseDate": "2007-04-13T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "D.J. Caruso",
          "cast": [
            "Shia LaBeouf",
            "Sarah Roemer",
            "Carrie-Anne Moss",
            "David Morse"
          ],
          "country": "USA",
          "productionCompany": "Montecito Picture Company",
          "imdbRating": 6.8,
          "awards": "5 wins & 7 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A teen living under house arrest becomes convinced his neighbor is a serial killer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMyNTIxOTQ3M15BMl5BanBnXkFtZTcwMjU2NzAzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Stardust",
          "releaseDate": "2007-08-10T04:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Adventure",
            "Family",
            "Fantasy",
            "Romance"
          ],
          "director": "Matthew Vaughn",
          "cast": [
            "Ian McKellen",
            "Bimbo Hart",
            "Alastair MacIntosh",
            "David Kelly"
          ],
          "country": "UK, USA",
          "productionCompany": "Di Bonaventura Pictures",
          "imdbRating": 7.6,
          "awards": "5 wins & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Fantastic 4: Rise of the Silver Surfer",
          "releaseDate": "2007-06-15T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "director": "Tim Story",
          "cast": [
            "Ioan Gruffudd",
            "Jessica Alba",
            "Chris Evans",
            "Michael Chiklis"
          ],
          "country": "USA, Germany, UK, Hong Kong",
          "productionCompany": "Marvel Enterprises",
          "imdbRating": 5.6,
          "awards": "3 wins & 17 nominations.",
          "mpaaRating": "PG",
          "plot": "The Fantastic Four learn that they aren't the only super-powered beings in the universe when they square off against the powerful Silver Surfer and the planet-eating Galactus.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODA4YTc5N2QtNzQyYS00ZDUzLWI3M2UtZWI2OWVhOGZlN2MxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "Mr. Nobody",
          "releaseDate": "2013-09-26T04:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Drama",
            "Fantasy",
            "Romance",
            "Sci-Fi"
          ],
          "director": "Jaco Van Dormael",
          "cast": [
            "Jared Leto",
            "Sarah Polley",
            "Diane Kruger",
            "Linh Dan Pham"
          ],
          "country": "Belgium, Germany, Canada, France, UK, Luxembourg, USA",
          "productionCompany": "N/A",
          "imdbRating": 7.8,
          "awards": "11 wins & 6 nominations.",
          "mpaaRating": "R",
          "plot": "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_SX300.jpg"
        },
        {
          "title": "The Strangers",
          "releaseDate": "2008-05-30T04:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Bryan Bertino",
          "cast": [
            "Alex Fisher",
            "Peter Clayton-Luce",
            "Scott Speedman",
            "Liv Tyler"
          ],
          "country": "USA",
          "productionCompany": "Intrepid Pictures",
          "imdbRating": 6.2,
          "awards": "1 win & 15 nominations.",
          "mpaaRating": "R",
          "plot": "A young couple staying in an isolated vacation home are terrorized by three unknown assailants.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkxODAyODMwNV5BMl5BanBnXkFtZTcwNzk5Nzk2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Prestige",
          "releaseDate": "2006-10-20T04:00:00.000Z",
          "runTime": 130,
          "genres": [
            "Drama",
            "Mystery",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Christopher Nolan",
          "cast": [
            "Hugh Jackman",
            "Christian Bale",
            "Michael Caine",
            "Piper Perabo"
          ],
          "country": "UK, USA",
          "productionCompany": "Newmarket Productions",
          "imdbRating": 8.5,
          "awards": "Nominated for 2 Oscars. Another 6 wins & 43 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg"
        },
        {
          "title": "Harold & Kumar Escape from Guantanamo Bay",
          "releaseDate": "2008-04-25T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Adventure",
            "Comedy"
          ],
          "director": "Jon Hurwitz, Hayden Schlossberg",
          "cast": [
            "John Cho",
            "Kal Penn",
            "Rob Corddry",
            "Jack Conley"
          ],
          "country": "USA",
          "productionCompany": "Kingsgate Films",
          "imdbRating": 6.6,
          "awards": "1 win & 1 nomination.",
          "mpaaRating": "R",
          "plot": "After being mistaken for terrorists and thrown into Guantánamo Bay, stoners Harold and Kumar escape and return to the U.S., where they proceed to flee across the country with federal agents in hot pursuit.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ3NTg3OTk0OV5BMl5BanBnXkFtZTcwODAwMzU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Croods",
          "releaseDate": "2013-03-22T04:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Kirk DeMicco, Chris Sanders",
          "cast": [
            "Nicolas Cage",
            "Emma Stone",
            "Ryan Reynolds",
            "Catherine Keener"
          ],
          "country": "USA",
          "productionCompany": "Gizmo Prods.",
          "imdbRating": 7.2,
          "awards": "Nominated for 1 Oscar. Another 5 wins & 45 nominations.",
          "mpaaRating": "PG",
          "plot": "After their cave is destroyed, a caveman family must trek through an unfamiliar fantastical world with the help of an inventive boy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Number 23",
          "releaseDate": "2007-02-23T05:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Crime",
            "Mystery",
            "Thriller"
          ],
          "director": "Joel Schumacher",
          "cast": [
            "Jim Carrey",
            "Virginia Madsen",
            "Logan Lerman",
            "Danny Huston"
          ],
          "country": "USA",
          "productionCompany": "New Line Cinema",
          "imdbRating": 6.4,
          "awards": "5 nominations.",
          "mpaaRating": "R",
          "plot": "Walter Sparrow becomes obsessed with a novel that he believes was written about him, as more and more similarities between himself and his literary alter ego seem to arise.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjcwNzczNDQ0MV5BMl5BanBnXkFtZTcwMTE0NzA0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Hall Pass",
          "releaseDate": "2011-02-25T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Bobby Farrelly, Peter Farrelly",
          "cast": [
            "Owen Wilson",
            "Jason Sudeikis",
            "Jenna Fischer",
            "Christina Applegate"
          ],
          "country": "USA",
          "productionCompany": "Conundrum Entertainment",
          "imdbRating": 5.8,
          "awards": "N/A",
          "mpaaRating": "R",
          "plot": "Rick and Fred, two husbands who are having difficulty in their marriages, are given a Hall Pass by their wives: for one week, they can do whatever they want.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc4MzIxNTYwNl5BMl5BanBnXkFtZTcwNzE4MjE0NA@@._V1_SX300.jpg"
        },
        {
          "title": "I Am Legend",
          "releaseDate": "2007-12-14T05:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Francis Lawrence",
          "cast": [
            "Will Smith",
            "Alice Braga",
            "Charlie Tahan",
            "Salli Richardson-Whitfield"
          ],
          "country": "USA",
          "productionCompany": "Weed Road Pictures",
          "imdbRating": 7.2,
          "awards": "9 wins & 23 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "This Is England",
          "releaseDate": "2007-04-27T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Crime",
            "Drama"
          ],
          "director": "Shane Meadows",
          "cast": [
            "Thomas Turgoose",
            "Stephen Graham",
            "Jo Hartley",
            "Andrew Shim"
          ],
          "country": "UK",
          "productionCompany": "Warp Films",
          "imdbRating": 7.7,
          "awards": "Nominated for 1 BAFTA Film Award. Another 14 wins & 15 nominations.",
          "mpaaRating": "Not Rated",
          "plot": "A young boy becomes friends with a gang of skinheads. Friends soon become like family, and relationships will be pushed to the very limit.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMmE3OWZhZDYtOTBjMi00NDIwLTg1NWMtMjg0NjJmZWM4MjliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Madagascar: Escape 2 Africa",
          "releaseDate": "2008-11-07T05:00:00.000Z",
          "runTime": 89,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family"
          ],
          "director": "Eric Darnell, Tom McGrath",
          "cast": [
            "Ben Stiller",
            "Chris Rock",
            "David Schwimmer",
            "Jada Pinkett Smith"
          ],
          "country": "USA",
          "productionCompany": "PDI",
          "imdbRating": 6.6,
          "awards": "4 wins & 11 nominations.",
          "mpaaRating": "PG",
          "plot": "The Madagascar animals fly back to New York City, but crash-land on an African nature reserve, where they meet others of their own kind, and Alex especially discovers his royal heritage as prince of a lion pride.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Crank",
          "releaseDate": "2006-09-01T04:00:00.000Z",
          "runTime": 88,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Mark Neveldine, Brian Taylor",
          "cast": [
            "Jason Statham",
            "Amy Smart",
            "Jose Pablo Cantillo",
            "Efren Ramirez"
          ],
          "country": "USA",
          "productionCompany": "Lakeshore Entertainment",
          "imdbRating": 6.9,
          "awards": "2 wins & 2 nominations.",
          "mpaaRating": "R",
          "plot": "Professional assassin Chev Chelios learns his rival has injected him with a poison that will kill him if his heart rate drops.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjg0NjAxNDY4MV5BMl5BanBnXkFtZTcwODA5MjMzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Rocky Balboa",
          "releaseDate": "2006-12-20T05:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Action",
            "Drama",
            "Sport"
          ],
          "director": "Sylvester Stallone",
          "cast": [
            "Sylvester Stallone",
            "Burt Young",
            "Antonio Tarver",
            "Geraldine Hughes"
          ],
          "country": "USA",
          "productionCompany": "Rogue Marble",
          "imdbRating": 7.1,
          "awards": "4 nominations.",
          "mpaaRating": "PG",
          "plot": "Thirty years after the ring of the first bell, Rocky Balboa comes out of retirement and dons his gloves for his final fight against the reigning heavyweight champ Mason 'The Line' Dixon.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNWIyNmQyNjctYmVmMS00MGI4LWIxMmUtNjA0ODYzOTA0Yjk0L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Ant-Man",
          "releaseDate": "2015-07-17T04:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "director": "Peyton Reed",
          "cast": [
            "Paul Rudd",
            "Michael Douglas",
            "Evangeline Lilly",
            "Corey Stoll"
          ],
          "country": "USA",
          "productionCompany": "Marvel Studios",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 BAFTA Film Award. Another 4 wins & 33 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg"
        },
        {
          "title": "Knocked Up",
          "releaseDate": "2007-06-01T04:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Judd Apatow",
          "cast": [
            "Seth Rogen",
            "Katherine Heigl",
            "Paul Rudd",
            "Leslie Mann"
          ],
          "country": "USA",
          "productionCompany": "Apatow Productions",
          "imdbRating": 6.9,
          "awards": "8 wins & 26 nominations.",
          "mpaaRating": "R",
          "plot": "For fun-loving party animal Ben Stone, the last thing he ever expected was for his one-night stand to show up on his doorstep eight weeks later to tell him she's pregnant with his child.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzgzYjMzMWItNDFiYi00ZjhkLWIyMzYtZGRlY2FmNzkwNjRhL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "The Tree of Life",
          "releaseDate": "2011-05-17T04:00:00.000Z",
          "runTime": 139,
          "genres": [
            "Drama",
            "Fantasy"
          ],
          "director": "Terrence Malick",
          "cast": [
            "Brad Pitt",
            "Sean Penn",
            "Jessica Chastain",
            "Hunter McCracken"
          ],
          "country": "USA",
          "productionCompany": "Cottonwood Pictures",
          "imdbRating": 6.8,
          "awards": "Nominated for 3 Oscars. Another 116 wins & 125 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The story of a family in Waco, Texas in 1956. The eldest son witnesses the loss of innocence and struggles with his parents' conflicting teachings.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjMzN15BMl5BanBnXkFtZTcwNjMxMTkyNA@@._V1_SX300.jpg"
        },
        {
          "title": "21",
          "releaseDate": "2008-03-28T04:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Crime",
            "Drama",
            "History",
            "Thriller"
          ],
          "director": "Robert Luketic",
          "cast": [
            "Jim Sturgess",
            "Kevin Spacey",
            "Kate Bosworth",
            "Aaron Yoo"
          ],
          "country": "USA",
          "productionCompany": "Trigger Street Productions",
          "imdbRating": 6.8,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "\"21\" is the fact-based story about six MIT students who were trained to become experts in card counting and subsequently took Vegas casinos for millions in winnings.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAyNTU5OTcxOV5BMl5BanBnXkFtZTcwMDEyNjM2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "No Country for Old Men",
          "releaseDate": "2007-11-21T05:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Ethan Coen, Joel Coen",
          "cast": [
            "Tommy Lee Jones",
            "Javier Bardem",
            "Josh Brolin",
            "Woody Harrelson"
          ],
          "country": "USA, Mexico",
          "productionCompany": "Paramount Vantage",
          "imdbRating": 8.1,
          "awards": "Won 4 Oscars. Another 159 wins & 140 nominations.",
          "mpaaRating": "R",
          "plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Night at the Museum",
          "releaseDate": "2006-12-22T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Shawn Levy",
          "cast": [
            "Ben Stiller",
            "Carla Gugino",
            "Dick Van Dyke",
            "Mickey Rooney"
          ],
          "country": "USA, UK",
          "productionCompany": "20th Century Fox",
          "imdbRating": 6.4,
          "awards": "2 wins & 8 nominations.",
          "mpaaRating": "PG",
          "plot": "A newly recruited night security guard at the Museum of Natural History discovers that an ancient curse causes the animals and exhibits on display to come to life and wreak havoc.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQyOTM4MDMxN15BMl5BanBnXkFtZTcwODg5NTQzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Unstoppable",
          "releaseDate": "2010-11-12T05:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Tony Scott",
          "cast": [
            "Denzel Washington",
            "Chris Pine",
            "Rosario Dawson",
            "Ethan Suplee"
          ],
          "country": "USA",
          "productionCompany": "Scott Free Productions",
          "imdbRating": 6.8,
          "awards": "Nominated for 1 Oscar. Another 1 win & 13 nominations.",
          "mpaaRating": "PG-13",
          "plot": "With an unmanned, half-mile-long freight train barreling toward a city, a veteran engineer and a young conductor race against the clock to prevent a catastrophe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjI4NDQwMDM0N15BMl5BanBnXkFtZTcwMzY1ODMwNA@@._V1_SX300.jpg"
        },
        {
          "title": "Smokin' Aces",
          "releaseDate": "2007-01-26T05:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Action",
            "Comedy",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Joe Carnahan",
          "cast": [
            "Ryan Reynolds",
            "Ray Liotta",
            "Joseph Ruskin",
            "Alex Rocco"
          ],
          "country": "UK, France, USA",
          "productionCompany": "Working Title Films",
          "imdbRating": 6.7,
          "awards": "4 wins.",
          "mpaaRating": "R",
          "plot": "When a Las Vegas performer-turned-snitch named Buddy Israel decides to turn state's evidence and testify against the mob, it seems that a whole lot of people would like to make sure he's no longer breathing.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI3NzQwNDEyN15BMl5BanBnXkFtZTcwMDY4ODQ0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Hail, Caesar!",
          "releaseDate": "2016-02-05T05:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Comedy",
            "Drama",
            "Music",
            "Mystery"
          ],
          "director": "Ethan Coen, Joel Coen",
          "cast": [
            "Josh Brolin",
            "George Clooney",
            "Alden Ehrenreich",
            "Ralph Fiennes"
          ],
          "country": "USA, UK, Japan",
          "productionCompany": "Working Title Films",
          "imdbRating": 6.3,
          "awards": "Nominated for 1 Oscar. Another 13 wins & 43 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A Hollywood fixer in the 1950s works to keep the studio's stars in line.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTI1M2FlMzItY2VjYS00Y2VkLWI5OTQtMzA0MWMyNmQzZmQ0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "State of Play",
          "releaseDate": "2009-04-17T04:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Kevin Macdonald",
          "cast": [
            "Russell Crowe",
            "Ben Affleck",
            "Rachel McAdams",
            "Helen Mirren"
          ],
          "country": "USA, UK, France",
          "productionCompany": "Andell Entertainment",
          "imdbRating": 7.1,
          "awards": "2 wins & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When a congressional aide is killed, a Washington, D.C. journalist starts investigating the case involving the Representative, his old college friend.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTQ4MDIwMl5BMl5BanBnXkFtZTcwNzgxOTc0Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Prince of Persia: The Sands of Time",
          "releaseDate": "2010-05-28T04:00:00.000Z",
          "runTime": 116,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Mike Newell",
          "cast": [
            "Jake Gyllenhaal",
            "Gemma Arterton",
            "Ben Kingsley",
            "Alfred Molina"
          ],
          "country": "USA",
          "productionCompany": "Jerry Bruckheimer Films",
          "imdbRating": 6.6,
          "awards": "1 win & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young fugitive prince and princess must stop a villain who unknowingly threatens to destroy the world with a special dagger that enables the magic sand inside to reverse time.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMwNDg0NzcyMV5BMl5BanBnXkFtZTcwNjg4MjQyMw@@._V1_SX300.jpg"
        },
        {
          "title": "The Mechanic",
          "releaseDate": "2011-01-28T05:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Simon West",
          "cast": [
            "Jason Statham",
            "Ben Foster",
            "Tony Goldwyn",
            "Donald Sutherland"
          ],
          "country": "USA",
          "productionCompany": "Nu Image",
          "imdbRating": 6.6,
          "awards": "1 nomination.",
          "mpaaRating": "R",
          "plot": "An elite hitman teaches his trade to an apprentice who has a connection to one of his previous victims.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEyMjk1NjI1M15BMl5BanBnXkFtZTcwODcyNjAxNA@@._V1_SX300.jpg"
        },
        {
          "title": "Charlie Wilson's War",
          "releaseDate": "2007-12-21T05:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Biography",
            "Comedy",
            "Drama",
            "History"
          ],
          "director": "Mike Nichols",
          "cast": [
            "Tom Hanks",
            "Amy Adams",
            "Julia Roberts",
            "Philip Seymour Hoffman"
          ],
          "country": "USA, Germany",
          "productionCompany": "Playtone Productions",
          "imdbRating": 7,
          "awards": "Nominated for 1 Oscar. Another 5 wins & 22 nominations.",
          "mpaaRating": "R",
          "plot": "A drama based on a Texas congressman Charlie Wilson's covert dealings in Afghanistan, where his efforts to assist rebels in their war with the Soviets have some unforeseen and long-reaching effects.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
        },
        {
          "title": "Apocalypto",
          "releaseDate": "2006-12-08T05:00:00.000Z",
          "runTime": 139,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Thriller"
          ],
          "director": "Mel Gibson",
          "cast": [
            "Rudy Youngblood",
            "Dalia Hernández",
            "Jonathan Brewer",
            "Morris Birdyellowhead"
          ],
          "country": "USA, Mexico, UK",
          "productionCompany": "Icon Entertainment International",
          "imdbRating": 7.8,
          "awards": "Nominated for 3 Oscars. Another 9 wins & 20 nominations.",
          "mpaaRating": "R",
          "plot": "As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzhmNGMzMDMtZDM0Yi00MmVmLWExYjAtZDhjZjcxZDM0MzJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "9",
          "releaseDate": "2009-09-09T04:00:00.000Z",
          "runTime": 79,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Shane Acker",
          "cast": [
            "Christopher Plummer",
            "Martin Landau",
            "John C. Reilly",
            "Crispin Glover"
          ],
          "country": "USA, Luxembourg, Canada",
          "productionCompany": "Jim Lemley",
          "imdbRating": 7.1,
          "awards": "9 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A rag doll that awakens in a postapocalyptic future holds the key to humanity's salvation.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY2ODE1MTgxMV5BMl5BanBnXkFtZTcwNTM1NTM2Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Tower Heist",
          "releaseDate": "2011-11-04T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Action",
            "Comedy",
            "Crime"
          ],
          "director": "Brett Ratner",
          "cast": [
            "Ben Stiller",
            "Eddie Murphy",
            "Casey Affleck",
            "Alan Alda"
          ],
          "country": "USA",
          "productionCompany": "Brian Grazer",
          "imdbRating": 6.2,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When a group of hard-working guys find out they've fallen victim to their wealthy employer's Ponzi scheme, they conspire to rob his high-rise residence.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY1NDQxMTcwOV5BMl5BanBnXkFtZTcwNzMzNTExNg@@._V1_SX300.jpg"
        },
        {
          "title": "Ex Machina",
          "releaseDate": "2015-04-24T04:00:00.000Z",
          "runTime": 108,
          "genres": [
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Alex Garland",
          "cast": [
            "Domhnall Gleeson",
            "Alicia Vikander",
            "Oscar Isaac",
            "Sonoya Mizuno"
          ],
          "country": "UK",
          "productionCompany": "DNA Films",
          "imdbRating": 7.7,
          "awards": "Won 1 Oscar. Another 71 wins & 159 nominations.",
          "mpaaRating": "R",
          "plot": "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg"
        },
        {
          "title": "There Will Be Blood",
          "releaseDate": "2008-01-25T05:00:00.000Z",
          "runTime": 158,
          "genres": [
            "Drama"
          ],
          "director": "Paul Thomas Anderson",
          "cast": [
            "Daniel Day-Lewis",
            "Martin Stringer",
            "Matthew Braden Stringer",
            "Jacob Stringer"
          ],
          "country": "USA",
          "productionCompany": "Scott Rudin Productions",
          "imdbRating": 8.2,
          "awards": "Won 2 Oscars. Another 114 wins & 137 nominations.",
          "mpaaRating": "R",
          "plot": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Dark Knight",
          "releaseDate": "2008-07-18T04:00:00.000Z",
          "runTime": 152,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Christopher Nolan",
          "cast": [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart",
            "Michael Caine"
          ],
          "country": "USA, UK",
          "productionCompany": "Syncopy",
          "imdbRating": 9,
          "awards": "Won 2 Oscars. Another 157 wins & 163 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
        },
        {
          "title": "The Host",
          "releaseDate": "2007-03-30T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Action",
            "Drama",
            "Horror",
            "Sci-Fi"
          ],
          "director": "Bong Joon Ho",
          "cast": [
            "Kang-ho Song",
            "Byun Hee-Bong",
            "Park Hae-il",
            "Bae Doona"
          ],
          "country": "South Korea",
          "productionCompany": "Chockstone Pictures",
          "imdbRating": 7.1,
          "awards": "29 wins & 35 nominations.",
          "mpaaRating": "R",
          "plot": "A monster emerges from Seoul's Han River and begins attacking people. One victim's loving family does what it can to rescue her from its clutches.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTE3N2IwNmMtOGE0Ny00NWFlLTliNmUtNjY3ODExYjgxNmUyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Juno",
          "releaseDate": "2007-12-25T05:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Jason Reitman",
          "cast": [
            "Elliot Page",
            "Michael Cera",
            "Jennifer Garner",
            "Jason Bateman"
          ],
          "country": "USA",
          "productionCompany": "Fox Searchlight",
          "imdbRating": 7.4,
          "awards": "Won 1 Oscar. Another 88 wins & 99 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Faced with an unplanned pregnancy, an offbeat young woman makes an unusual decision regarding the unborn child.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTIwMDgwODc5Nl5BMl5BanBnXkFtZTYwMjQzMDM4._V1_SX300.jpg"
        },
        {
          "title": "The Other Boleyn Girl",
          "releaseDate": "2008-02-29T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Biography",
            "Drama",
            "History",
            "Romance"
          ],
          "director": "Justin Chadwick",
          "cast": [
            "Natalie Portman",
            "Scarlett Johansson",
            "Eric Bana",
            "Jim Sturgess"
          ],
          "country": "UK, USA",
          "productionCompany": "Columbia Pictures",
          "imdbRating": 6.7,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two sisters contend for the affection of King Henry VIII.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTg1Mjk1Ml5BMl5BanBnXkFtZTYwODI5Njk3._V1_SX300.jpg"
        },
        {
          "title": "Max Payne",
          "releaseDate": "2008-10-17T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "John Moore",
          "cast": [
            "Mark Wahlberg",
            "Mila Kunis",
            "Beau Bridges",
            "Ludacris"
          ],
          "country": "USA, Canada",
          "productionCompany": "Firm Films",
          "imdbRating": 5.4,
          "awards": "1 nomination.",
          "mpaaRating": "PG-13",
          "plot": "Coming together to solve a series of murders in New York City are a police detective and an assassin, who will be hunted by the police, the mob, and a ruthless corporation.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzM5OTAxYmQtODRkZC00ZGZlLTlhNzYtNzFiODVjMTY4MWU2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Shoot 'Em Up",
          "releaseDate": "2007-09-07T04:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Michael Davis",
          "cast": [
            "Clive Owen",
            "Paul Giamatti",
            "Monica Bellucci",
            "Stephen McHattie"
          ],
          "country": "USA",
          "productionCompany": "New Line Cinema",
          "imdbRating": 6.7,
          "awards": "3 nominations.",
          "mpaaRating": "R",
          "plot": "A man named Mr. Smith delivers a woman's baby during a shootout, and is then called upon to protect the newborn from the army of gunmen.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEwMDA1MDUwNl5BMl5BanBnXkFtZTcwMDQzMzM1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Push",
          "releaseDate": "2009-02-06T05:00:00.000Z",
          "runTime": 111,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Paul McGuigan",
          "cast": [
            "Colin Ford",
            "Joel Gretsch",
            "Djimon Hounsou",
            "Dakota Fanning"
          ],
          "country": "USA, Canada",
          "productionCompany": "Icon Entertainment International",
          "imdbRating": 6.1,
          "awards": "1 win & 2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two young Americans with special abilities must race to find a girl in Hong Kong before a shadowy government organization called Division does.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM2NjE5NTYzMl5BMl5BanBnXkFtZTcwNzc3OTMyMg@@._V1_SX300.jpg"
        },
        {
          "title": "Michael Clayton",
          "releaseDate": "2007-10-12T04:00:00.000Z",
          "runTime": 119,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Tony Gilroy",
          "cast": [
            "Tom Wilkinson",
            "Michael O'Keefe",
            "Sydney Pollack",
            "Danielle Skraastad"
          ],
          "country": "USA",
          "productionCompany": "Section Eight Ltd.",
          "imdbRating": 7.2,
          "awards": "Won 1 Oscar. Another 27 wins & 114 nominations.",
          "mpaaRating": "R",
          "plot": "A law firm brings in its \"fixer\" to remedy the situation after a lawyer has a breakdown while representing a chemical company that he knows is guilty in a multibillion-dollar class action suit.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTc0NTU5MjI2MV5BMl5BanBnXkFtZTcwMTg5NTQzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Hitman",
          "releaseDate": "2007-11-21T05:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Xavier Gens",
          "cast": [
            "Timothy Olyphant",
            "Dougray Scott",
            "Olga Kurylenko",
            "Robert Knepper"
          ],
          "country": "France, USA",
          "productionCompany": "Red Duck Films",
          "imdbRating": 6.3,
          "awards": "2 wins.",
          "mpaaRating": "R",
          "plot": "A gun-for-hire known only as Agent 47 hired by a group known only as 'The Organization' is ensnared in a political conspiracy, which finds him pursued by both Interpol and the Russian military as he treks across Russia and Eastern Europe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMDlmMmZhZjQtZDhlMi00MzU0LWIwYjMtNDRhOGE5YzczYjBmXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"
        },
        {
          "title": "National Treasure: Book of Secrets",
          "releaseDate": "2007-12-21T05:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Adventure",
            "Mystery",
            "Thriller"
          ],
          "director": "Jon Turteltaub",
          "cast": [
            "Nicolas Cage",
            "Justin Bartha",
            "Diane Kruger",
            "Jon Voight"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Pictures",
          "imdbRating": 6.5,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "PG",
          "plot": "Benjamin Gates must follow a clue left in John Wilkes Booth's diary to prove his ancestor's innocence in the assassination of Abraham Lincoln.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU2NTM3NjU1N15BMl5BanBnXkFtZTcwODg1MDU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Orphanage",
          "releaseDate": "2008-01-11T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Drama",
            "Fantasy",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "J.A. Bayona",
          "cast": [
            "Belén Rueda",
            "Fernando Cayo",
            "Roger Príncep",
            "Mabel Rivera"
          ],
          "country": "Spain, Mexico",
          "productionCompany": "Telecinco Cinema",
          "imdbRating": 7.4,
          "awards": "32 wins & 43 nominations.",
          "mpaaRating": "R",
          "plot": "A woman brings her family back to her childhood home, which used to be an orphanage for handicapped children. Before long, her son starts to communicate with an invisible new friend.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjJiMjE1ODUtOWEwOS00N2YyLWE4YmQtOWNmZTA2Y2I4OWVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "The Fast and the Furious: Tokyo Drift",
          "releaseDate": "2006-06-16T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Justin Lin",
          "cast": [
            "Lucas Black",
            "Damien Marzette",
            "Trula M. Marcus",
            "Zachery Ty Bryan"
          ],
          "country": "USA, Germany, Japan",
          "productionCompany": "Universal Pictures",
          "imdbRating": 6,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "28 Weeks Later",
          "releaseDate": "2007-05-11T04:00:00.000Z",
          "runTime": 100,
          "genres": [
            "Drama",
            "Horror",
            "Sci-Fi"
          ],
          "director": "Juan Carlos Fresnadillo",
          "cast": [
            "Robert Carlyle",
            "Rose Byrne",
            "Jeremy Renner",
            "Harold Perrineau"
          ],
          "country": "UK, Spain",
          "productionCompany": "Sogecine",
          "imdbRating": 7,
          "awards": "3 wins & 16 nominations.",
          "mpaaRating": "R",
          "plot": "Six months after the rage virus was inflicted on the population of Great Britain, the US Army helps to secure a small area of London for the survivors to repopulate and start again. But not everything goes according to plan.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NjE2NDI0OF5BMl5BanBnXkFtZTgwNzU0NzQyMTI@._V1_SX300.jpg"
        },
        {
          "title": "Step Up",
          "releaseDate": "2006-08-11T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Crime",
            "Drama",
            "Music",
            "Romance"
          ],
          "director": "Anne Fletcher",
          "cast": [
            "Channing Tatum",
            "Jenna Dewan",
            "Damaine Radcliff",
            "De'Shawn Washington"
          ],
          "country": "USA",
          "productionCompany": "Summit Entertainment",
          "imdbRating": 6.5,
          "awards": "1 win & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Tyler Gage receives the opportunity of a lifetime after vandalizing a performing arts school, gaining him the chance to earn a scholarship and dance with an up and coming dancer, Nora.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODEzMzVhODgtOTc1NS00MmY3LWI3OGUtN2ZjNDEwM2ExZjJlXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
        },
        {
          "title": "The Simpsons Movie",
          "releaseDate": "2007-07-27T04:00:00.000Z",
          "runTime": 87,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy"
          ],
          "director": "David Silverman",
          "cast": [
            "Dan Castellaneta",
            "Julie Kavner",
            "Nancy Cartwright",
            "Yeardley Smith"
          ],
          "country": "USA, North Korea, South Korea",
          "productionCompany": "Gracie Films",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 Golden Globe. Another 5 wins & 33 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After Homer pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Rescue Dawn",
          "releaseDate": "2007-07-27T04:00:00.000Z",
          "runTime": 120,
          "genres": [
            "Action",
            "Biography",
            "Drama",
            "Thriller",
            "War"
          ],
          "director": "Werner Herzog",
          "cast": [
            "Christian Bale",
            "Zach Grenier",
            "Marshall Bell",
            "Toby Huss"
          ],
          "country": "USA, Luxembourg",
          "productionCompany": "Gibraltar Entertainment and Production LLC",
          "imdbRating": 7.3,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A U.S. fighter pilot's epic struggle of survival after being shot down on a mission over Laos during the Vietnam War.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzUxNzUzNzU2MV5BMl5BanBnXkFtZTcwNTgzNzU2NA@@._V1_SX300.jpg"
        },
        {
          "title": "Rambo",
          "releaseDate": "2008-01-25T05:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Action",
            "Thriller"
          ],
          "director": "Sylvester Stallone",
          "cast": [
            "Sylvester Stallone",
            "Julie Benz",
            "Matthew Marsden",
            "Graham McTavish"
          ],
          "country": "Germany, USA, Thailand",
          "productionCompany": "Lionsgate Films",
          "imdbRating": 7,
          "awards": "1 win & 1 nomination.",
          "mpaaRating": "R",
          "plot": "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Grindhouse",
          "releaseDate": "2007-04-06T04:00:00.000Z",
          "runTime": 191,
          "genres": [
            "Action",
            "Horror",
            "Thriller"
          ],
          "director": "Robert Rodriguez, Eli Roth, Quentin Tarantino, Edgar Wright, Rob Zombie",
          "cast": [
            "Kurt Russell",
            "Zoë Bell",
            "Rosario Dawson",
            "Vanessa Ferlito"
          ],
          "country": "USA, Canada",
          "productionCompany": "A Band Apart",
          "imdbRating": 7.5,
          "awards": "10 wins & 22 nominations.",
          "mpaaRating": "R",
          "plot": "Quentin Tarantino and Robert Rodriguez's homage to exploitation double features in the '60s and '70s with two back-to-back cult films that include previews of coming attractions between them.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA0MzExNzc3MV5BMl5BanBnXkFtZTcwODAxMzM0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Enchanted",
          "releaseDate": "2007-11-21T05:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Animation",
            "Comedy",
            "Family",
            "Fantasy",
            "Musical",
            "Romance"
          ],
          "director": "Kevin Lima",
          "cast": [
            "Amy Adams",
            "Patrick Dempsey",
            "James Marsden",
            "Timothy Spall"
          ],
          "country": "USA",
          "productionCompany": "Walt Disney Pictures",
          "imdbRating": 7,
          "awards": "Nominated for 3 Oscars. Another 12 wins & 48 nominations.",
          "mpaaRating": "PG",
          "plot": "A young maiden in a land called Andalasia, who is prepared to be wed, is sent away to New York City by an evil Queen, where she falls in love with a lawyer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE4NDQ2Mjc0OF5BMl5BanBnXkFtZTcwNzQ2NDE1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Fall",
          "releaseDate": "2008-05-30T04:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Adventure",
            "Drama",
            "Fantasy"
          ],
          "director": "Tarsem Singh",
          "cast": [
            "Catinca Untaru",
            "Justine Waddell",
            "Lee Pace",
            "Kim Uylenbroek"
          ],
          "country": "USA, South Africa, India",
          "productionCompany": "Googly Films",
          "imdbRating": 7.9,
          "awards": "4 wins & 11 nominations.",
          "mpaaRating": "R",
          "plot": "In a hospital on the outskirts of 1920s Los Angeles, an injured stuntman begins to tell a fellow patient, a little girl with a broken arm, a fantastic story of five mythical heroes. Thanks to his fractured state of mind and her vivid imagination, the line between fiction and reality blurs as the tale advances.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAzODUwMjM1M15BMl5BanBnXkFtZTcwNjU2MjU2MQ@@._V1_SX300.jpg"
        },
        {
          "title": "X-Men Origins: Wolverine",
          "releaseDate": "2009-05-01T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Action",
            "Sci-Fi"
          ],
          "director": "Gavin Hood",
          "cast": [
            "Hugh Jackman",
            "Liev Schreiber",
            "Danny Huston",
            "Will.i.am"
          ],
          "country": "USA, UK",
          "productionCompany": "Donners&#39; Company",
          "imdbRating": 6.6,
          "awards": "3 wins & 21 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The early years of James Logan, featuring his rivalry with his brother Victor Creed, his service in the special forces team Weapon X, and his experimentation into the metal-lined mutant Wolverine.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Frank Miller's Sin City: A Dame to Kill For",
          "releaseDate": "2014-08-22T04:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Frank Miller, Robert Rodriguez",
          "cast": [
            "Mickey Rourke",
            "Jessica Alba",
            "Josh Brolin",
            "Joseph Gordon-Levitt"
          ],
          "country": "USA",
          "productionCompany": "Troublemaker Studios",
          "imdbRating": 6.5,
          "awards": "4 wins & 6 nominations.",
          "mpaaRating": "R",
          "plot": "Some of Sin City's most hard-boiled citizens cross paths with a few of its more reviled inhabitants.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5ODYwNjgxMF5BMl5BanBnXkFtZTgwMTcwNzAyMjE@._V1_SX300.jpg"
        },
        {
          "title": "The Devil Wears Prada",
          "releaseDate": "2006-06-30T04:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "David Frankel",
          "cast": [
            "Meryl Streep",
            "Anne Hathaway",
            "Emily Blunt",
            "Stanley Tucci"
          ],
          "country": "USA, France",
          "productionCompany": "Fox 2000 Pictures",
          "imdbRating": 6.9,
          "awards": "Nominated for 2 Oscars. Another 19 wins & 51 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg"
        },
        {
          "title": "Captain America: The First Avenger",
          "releaseDate": "2011-07-22T04:00:00.000Z",
          "runTime": 124,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
          ],
          "director": "Joe Johnston",
          "cast": [
            "Chris Evans",
            "Hayley Atwell",
            "Sebastian Stan",
            "Tommy Lee Jones"
          ],
          "country": "USA",
          "productionCompany": "Marvel Enterprises",
          "imdbRating": 6.9,
          "awards": "4 wins & 46 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Holiday",
          "releaseDate": "2006-12-08T05:00:00.000Z",
          "runTime": 136,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Nancy Meyers",
          "cast": [
            "Cameron Diaz",
            "Kate Winslet",
            "Jude Law",
            "Jack Black"
          ],
          "country": "USA",
          "productionCompany": "Waverly Films",
          "imdbRating": 6.9,
          "awards": "2 wins & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_SX300.jpg"
        },
        {
          "title": "Pan's Labyrinth",
          "releaseDate": "2007-01-19T05:00:00.000Z",
          "runTime": 118,
          "genres": [
            "Drama",
            "Fantasy",
            "War"
          ],
          "director": "Guillermo del Toro",
          "cast": [
            "Ivana Baquero",
            "Sergi López",
            "Maribel Verdú",
            "Doug Jones"
          ],
          "country": "Mexico, Spain",
          "productionCompany": "Warner Bros.",
          "imdbRating": 8.2,
          "awards": "Won 3 Oscars. Another 106 wins & 115 nominations.",
          "mpaaRating": "R",
          "plot": "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU3ODg2NjQ5NF5BMl5BanBnXkFtZTcwMDEwODgzMQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Equalizer",
          "releaseDate": "2014-09-26T04:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Crime",
            "Thriller"
          ],
          "director": "Antoine Fuqua",
          "cast": [
            "Denzel Washington",
            "Marton Csokas",
            "Chloë Grace Moretz",
            "David Harbour"
          ],
          "country": "USA",
          "productionCompany": "Escape Artists",
          "imdbRating": 7.2,
          "awards": "1 win & 9 nominations.",
          "mpaaRating": "R",
          "plot": "A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_SX300.jpg"
        },
        {
          "title": "Australia",
          "releaseDate": "2008-11-26T05:00:00.000Z",
          "runTime": 165,
          "genres": [
            "Adventure",
            "Comedy",
            "Drama",
            "Romance",
            "War",
            "Western"
          ],
          "director": "Baz Luhrmann",
          "cast": [
            "Shea Adams",
            "Eddie Baroo",
            "Ray Barrett",
            "Tony Barry"
          ],
          "country": "UK, Australia, USA",
          "productionCompany": "Bazmark Films",
          "imdbRating": 6.6,
          "awards": "Nominated for 1 Oscar. Another 12 wins & 35 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Set in northern Australia before World War II, an English aristocrat who inherits a sprawling ranch reluctantly pacts with a stock-man in order to protect her new property from a takeover plot. As the pair drive 2,000 head of cattle over unforgiving landscape, they experience the bombing of Darwin, Australia, by Japanese forces firsthand.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZjJhMTAyZWMtMjRlZC00NWU3LTg3ODQtYTkyZjRiN2NhY2Y5XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "The Last King of Scotland",
          "releaseDate": "2007-01-19T05:00:00.000Z",
          "runTime": 123,
          "genres": [
            "Biography",
            "Drama",
            "History",
            "Thriller"
          ],
          "director": "Kevin Macdonald",
          "cast": [
            "Forest Whitaker",
            "James McAvoy",
            "Kerry Washington",
            "Gillian Anderson"
          ],
          "country": "UK, Germany",
          "productionCompany": "DNA Films",
          "imdbRating": 7.7,
          "awards": "Won 1 Oscar. Another 48 wins & 32 nominations.",
          "mpaaRating": "R",
          "plot": "Based on the events of the brutal Ugandan dictator Idi Amin's regime as seen by his personal physician during the 1970s.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjM1NTkxNjkzMl5BMl5BanBnXkFtZTgwNDgwMDAxMzE@._V1_SX300.jpg"
        },
        {
          "title": "The Crazies",
          "releaseDate": "2010-02-26T05:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Adventure",
            "Fantasy",
            "Horror",
            "Mystery",
            "Thriller"
          ],
          "director": "Breck Eisner",
          "cast": [
            "Timothy Olyphant",
            "Radha Mitchell",
            "Joe Anderson",
            "Danielle Panabaker"
          ],
          "country": "USA, United Arab Emirates",
          "productionCompany": "Participant Media",
          "imdbRating": 6.5,
          "awards": "11 nominations.",
          "mpaaRating": "R",
          "plot": "After a strange and insecure plane crash, an unusual toxic virus enters a quaint farming town. A young couple are quarantined, but they fight for survival along with help from a couple of people.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAzMDU5OTg0NV5BMl5BanBnXkFtZTcwNDQ4MjcwMw@@._V1_SX300.jpg"
        },
        {
          "title": "She's the Man",
          "releaseDate": "2006-03-17T05:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Comedy",
            "Romance",
            "Sport"
          ],
          "director": "Andy Fickman",
          "cast": [
            "Amanda Bynes",
            "Channing Tatum",
            "Laura Ramsey",
            "Vinnie Jones"
          ],
          "country": "USA, Canada",
          "productionCompany": "DreamWorks SKG",
          "imdbRating": 6.3,
          "awards": "2 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When her brother decides to ditch for a couple weeks, Viola heads over to his elite boarding school, disguised as him, and proceeds to fall for his school's star soccer player, and soon learns she's not the only one with romantic troubles.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTE0NDk1YzAtNTUwZC00NmViLWI3YjgtY2ZjYWI2YjYzZjkyXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg"
        },
        {
          "title": "The Pursuit of Happyness",
          "releaseDate": "2006-12-15T05:00:00.000Z",
          "runTime": 117,
          "genres": [
            "Biography",
            "Drama"
          ],
          "director": "Gabriele Muccino",
          "cast": [
            "Will Smith",
            "Jaden Smith",
            "Thandie Newton",
            "Brian Howe"
          ],
          "country": "USA",
          "productionCompany": "Overbrook Entertainment",
          "imdbRating": 8,
          "awards": "Nominated for 1 Oscar. Another 12 wins & 25 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Life of Pi",
          "releaseDate": "2012-11-21T05:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Adventure",
            "Drama",
            "Fantasy"
          ],
          "director": "Ang Lee",
          "cast": [
            "Suraj Sharma",
            "Irrfan Khan",
            "Ayush Tandon",
            "Gautam Belur"
          ],
          "country": "USA, Taiwan, UK, Mexico, Canada, France, India",
          "productionCompany": "Gil Netter",
          "imdbRating": 7.9,
          "awards": "Won 4 Oscars. Another 77 wins & 134 nominations.",
          "mpaaRating": "PG",
          "plot": "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_SX300.jpg"
        },
        {
          "title": "Inside Man",
          "releaseDate": "2006-03-24T05:00:00.000Z",
          "runTime": 129,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Spike Lee",
          "cast": [
            "Denzel Washington",
            "Clive Owen",
            "Jodie Foster",
            "Christopher Plummer"
          ],
          "country": "USA",
          "productionCompany": "Universal Pictures",
          "imdbRating": 7.6,
          "awards": "5 wins & 12 nominations.",
          "mpaaRating": "R",
          "plot": "A police detective, a bank robber, and a high-power broker enter high-stakes negotiations after the criminal's brilliant heist spirals into a hostage situation.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjc4MjA2ZDgtOGY3YS00NDYzLTlmNTEtYWMxMzcwZjgzYWNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "The Hills Have Eyes",
          "releaseDate": "2006-03-10T05:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Horror",
            "Thriller"
          ],
          "director": "Alexandre Aja",
          "cast": [
            "Maxime Giffard",
            "Michael Bailey Smith",
            "Tom Bower",
            "Ted Levine"
          ],
          "country": "USA",
          "productionCompany": "Craven-Maddalena Films",
          "imdbRating": 6.4,
          "awards": "2 wins & 13 nominations.",
          "mpaaRating": "R",
          "plot": "A family falls victim to a group of mutated cannibals in a desert far away from civilization.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzk0MTg5MzEyOF5BMl5BanBnXkFtZTcwNDUyMzIzMQ@@._V1_SX300.jpg"
        },
        {
          "title": "Deja Vu",
          "releaseDate": "2006-11-22T05:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Action",
            "Crime",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Tony Scott",
          "cast": [
            "Denzel Washington",
            "Paula Patton",
            "Val Kilmer",
            "Jim Caviezel"
          ],
          "country": "USA, UK",
          "productionCompany": "Touchstone Pictures",
          "imdbRating": 7.1,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After a ferry is bombed in New Orleans, an A.T.F. agent joins a unique investigation using experimental surveillance technology to find the bomber, but soon finds himself becoming obsessed with one of the victims.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzEwNTAwNjEwMV5BMl5BanBnXkFtZTYwMzgzMjA3._V1_SX300.jpg"
        },
        {
          "title": "Mr. Bean's Holiday",
          "releaseDate": "2007-08-24T04:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Comedy",
            "Family"
          ],
          "director": "Steve Bendelack",
          "cast": [
            "Rowan Atkinson",
            "Steve Pemberton",
            "Lily Atkinson",
            "Preston Nyman"
          ],
          "country": "UK, France, Germany, USA",
          "productionCompany": "Universal Pictures",
          "imdbRating": 6.4,
          "awards": "2 nominations.",
          "mpaaRating": "G",
          "plot": "Mr. Bean wins a trip to Cannes where he unwittingly separates a young boy from his father and must help the two reunite. On the way he discovers France, bicycling, and true love.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM2NzQ1Mzc4M15BMl5BanBnXkFtZTcwNTk3NjA1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Time Traveler's Wife",
          "releaseDate": "2009-08-14T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Drama",
            "Fantasy",
            "Romance",
            "Sci-Fi"
          ],
          "director": "Robert Schwentke",
          "cast": [
            "Michelle Nolden",
            "Alex Ferris",
            "Arliss Howard",
            "Eric Bana"
          ],
          "country": "USA",
          "productionCompany": "Plan B Entertainment",
          "imdbRating": 7.1,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A Chicago librarian has a gene that causes him to involuntarily time travel, creating complications in his marriage.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZWNlN2RmZDktNzllNC00NDVlLTllMzgtZGQ1YmRmZThmZjZmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          "title": "Gone Baby Gone",
          "releaseDate": "2007-10-19T04:00:00.000Z",
          "runTime": 114,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "Ben Affleck",
          "cast": [
            "Casey Affleck",
            "Michelle Monaghan",
            "Morgan Freeman",
            "Ed Harris"
          ],
          "country": "USA",
          "productionCompany": "Ladd Company",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 33 wins & 31 nominations.",
          "mpaaRating": "R",
          "plot": "Two Boston area detectives investigate a little girl's kidnapping, which ultimately turns into a crisis both professionally and personally.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmM2NDNiNGItMTRhMi00ZDA2LTgzOWMtZTE2ZjFhMDQ2M2U5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
          "title": "Death Race",
          "releaseDate": "2008-08-22T04:00:00.000Z",
          "runTime": 105,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Paul W.S. Anderson",
          "cast": [
            "Jason Statham",
            "Joan Allen",
            "Ian McShane",
            "Tyrese Gibson"
          ],
          "country": "USA, Germany, UK",
          "productionCompany": "Impact Pictures",
          "imdbRating": 6.4,
          "awards": "1 win & 5 nominations.",
          "mpaaRating": "R",
          "plot": "Ex-con Jensen Ames is forced by the warden of a notorious prison to compete in our post-industrial world's most popular sport: a car race in which inmates must brutalize and kill one another on the road to victory.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZTA4ODc4YTQtM2YyZS00YTgzLTgyMTAtMTg4Y2Q1YWFmZDYzXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
        },
        {
          "title": "The Break-Up",
          "releaseDate": "2006-06-02T04:00:00.000Z",
          "runTime": 106,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Peyton Reed",
          "cast": [
            "Vince Vaughn",
            "Jennifer Aniston",
            "Joey Lauren Adams",
            "Cole Hauser"
          ],
          "country": "USA",
          "productionCompany": "Universal Pictures",
          "imdbRating": 5.8,
          "awards": "3 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In a bid to keep their luxurious condo from their significant other, a couple's break-up proceeds to get uglier and nastier by the moment.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTM1YjVhNTMtZTEyZi00ODk3LWI4NDItZWUyZTA1ODM3Zjk4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
          "title": "Wonder Woman",
          "releaseDate": "2017-06-02T04:00:00.000Z",
          "runTime": 141,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi",
            "War"
          ],
          "director": "Patty Jenkins",
          "cast": [
            "Gal Gadot",
            "Chris Pine",
            "Connie Nielsen",
            "Robin Wright"
          ],
          "country": "USA, UK",
          "productionCompany": "Atlas Entertainment",
          "imdbRating": 7.4,
          "awards": "25 wins & 71 nominations.",
          "mpaaRating": "PG-13",
          "plot": "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "Horton Hears a Who!",
          "releaseDate": "2008-03-14T04:00:00.000Z",
          "runTime": 86,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Jimmy Hayward, Steve Martino",
          "cast": [
            "Jim Carrey",
            "Steve Carell",
            "Carol Burnett",
            "Will Arnett"
          ],
          "country": "USA",
          "productionCompany": "Blue Sky Studios",
          "imdbRating": 6.8,
          "awards": "1 win & 18 nominations.",
          "mpaaRating": "G",
          "plot": "Horton the Elephant struggles to protect a microscopic community from his neighbors who refuse to believe it exists.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYzk5YzhjODYtZDc3Mi00OTYyLWIyYzAtMzZjYTljYTYzODM1XkEyXkFqcGdeQXVyODU2MDg1NzU@._V1_SX300.jpg"
        },
        {
          "title": "1408",
          "releaseDate": "2007-06-22T04:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Fantasy",
            "Horror",
            "Mystery"
          ],
          "director": "Mikael Håfström",
          "cast": [
            "John Cusack",
            "Tony Shalhoub",
            "Len Cariou",
            "Isiah Whitlock Jr."
          ],
          "country": "USA",
          "productionCompany": "Dimension Films",
          "imdbRating": 6.8,
          "awards": "4 wins & 12 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A man who specialises in debunking paranormal occurrences checks into the fabled room 1408 in the Dolphin Hotel. Soon after settling in, he confronts genuine terror.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjQ2ODkxMjc4OV5BMl5BanBnXkFtZTgwMTgzNzQyMTI@._V1_SX300.jpg"
        },
        {
          "title": "Hostel",
          "releaseDate": "2006-01-06T05:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Horror"
          ],
          "director": "Eli Roth",
          "cast": [
            "Jay Hernandez",
            "Derek Richardson",
            "Eythor Gudjonsson",
            "Barbara Nedeljakova"
          ],
          "country": "USA, Czech Republic",
          "productionCompany": "Hostel LLC",
          "imdbRating": 5.9,
          "awards": "6 wins & 14 nominations.",
          "mpaaRating": "R",
          "plot": "Three backpackers head to a Slovak city that promises to meet their hedonistic expectations, with no idea of the hell that awaits them.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY1NDA3ODM1OV5BMl5BanBnXkFtZTcwMDM5NzEzMQ@@._V1_SX300.jpg"
        },
        {
          "title": "Blood Diamond",
          "releaseDate": "2006-12-08T05:00:00.000Z",
          "runTime": 143,
          "genres": [
            "Adventure",
            "Drama",
            "Thriller"
          ],
          "director": "Edward Zwick",
          "cast": [
            "Leonardo DiCaprio",
            "Djimon Hounsou",
            "Jennifer Connelly",
            "Kagiso Kuypers"
          ],
          "country": "USA, Germany, UK",
          "productionCompany": "Virtual Studios",
          "imdbRating": 8,
          "awards": "Nominated for 5 Oscars. Another 8 wins & 27 nominations.",
          "mpaaRating": "R",
          "plot": "A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.",
          "poster": "https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          "title": "16 Blocks",
          "releaseDate": "2006-03-03T05:00:00.000Z",
          "runTime": 102,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Richard Donner",
          "cast": [
            "Bruce Willis",
            "Yasiin Bey",
            "David Morse",
            "Jenna Stern"
          ],
          "country": "USA, Germany",
          "productionCompany": "Millennium Films",
          "imdbRating": 6.6,
          "awards": "2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "An aging alcoholic cop is assigned the task of escorting a witness from police custody to a courthouse 16 blocks away. There are, however, chaotic forces at work that prevent them from making it in one piece.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1NDEwMzEwMl5BMl5BanBnXkFtZTcwNzM4MTEzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Babel",
          "releaseDate": "2006-11-10T05:00:00.000Z",
          "runTime": 143,
          "genres": [
            "Drama"
          ],
          "director": "Alejandro G. Iñárritu",
          "cast": [
            "Brad Pitt",
            "Cate Blanchett",
            "Mohamed Akhzam",
            "Peter Wight"
          ],
          "country": "USA, Mexico, France, Morocco, Japan",
          "productionCompany": "Anonymous Content",
          "imdbRating": 7.4,
          "awards": "Won 1 Oscar. Another 42 wins & 136 nominations.",
          "mpaaRating": "R",
          "plot": "Tragedy strikes a married couple on vacation in the Moroccan desert, touching off an interlocking story involving four different families.",
          "poster": "https://m.media-amazon.com/images/M/MV5BYTJkZDljNGYtNjRiNC00ZmY2LTg1NmItYTI1MTllNDQzMWVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Pirates of the Caribbean: At World's End",
          "releaseDate": "2007-05-25T04:00:00.000Z",
          "runTime": 169,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Gore Verbinski",
          "cast": [
            "Johnny Depp",
            "Geoffrey Rush",
            "Orlando Bloom",
            "Keira Knightley"
          ],
          "country": "USA",
          "productionCompany": "Jerry Bruckheimer Films",
          "imdbRating": 7.1,
          "awards": "Nominated for 2 Oscars. Another 22 wins & 49 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg"
        },
        {
          "title": "Little Miss Sunshine",
          "releaseDate": "2006-08-18T04:00:00.000Z",
          "runTime": 101,
          "genres": [
            "Comedy",
            "Drama"
          ],
          "director": "Jonathan Dayton, Valerie Faris",
          "cast": [
            "Abigail Breslin",
            "Greg Kinnear",
            "Paul Dano",
            "Alan Arkin"
          ],
          "country": "USA",
          "productionCompany": "Big Beach",
          "imdbRating": 7.8,
          "awards": "Won 2 Oscars. Another 70 wins & 112 nominations.",
          "mpaaRating": "R",
          "plot": "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_SX300.jpg"
        },
        {
          "title": "Eragon",
          "releaseDate": "2006-12-15T05:00:00.000Z",
          "runTime": 104,
          "genres": [
            "Action",
            "Adventure",
            "Family",
            "Fantasy"
          ],
          "director": "Stefen Fangmeier",
          "cast": [
            "Ed Speleers",
            "Jeremy Irons",
            "Sienna Guillory",
            "Robert Carlyle"
          ],
          "country": "USA, UK, Hungary",
          "productionCompany": "N/A",
          "imdbRating": 5.1,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "PG",
          "plot": "In his homeland of Alagaesia, a farm boy happens upon a dragon's egg -- a discovery that leads him on a predestined journey where he realizes he's the one person who can defend his home against an evil king.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzMyMGI1N2UtNzc5YS00OGNkLTg1OTktMTNkMmY2Zjk1NTQxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Puss in Boots",
          "releaseDate": "2011-10-28T04:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Chris Miller",
          "cast": [
            "Antonio Banderas",
            "Salma Hayek",
            "Zach Galifianakis",
            "Billy Bob Thornton"
          ],
          "country": "USA",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 6.6,
          "awards": "Nominated for 1 Oscar. Another 9 wins & 42 nominations.",
          "mpaaRating": "PG",
          "plot": "An outlaw cat, his childhood egg-friend and a seductive thief kitty set out in search for the eggs of the fabled Golden Goose to clear his name, restore his lost honor and regain the trust of his mother and town.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMxMTU5MTY4MV5BMl5BanBnXkFtZTcwNzgyNjg2NQ@@._V1_SX300.jpg"
        },
        {
          "title": "Hancock",
          "releaseDate": "2008-07-02T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Action",
            "Drama",
            "Fantasy"
          ],
          "director": "Peter Berg",
          "cast": [
            "Will Smith",
            "Charlize Theron",
            "Jason Bateman",
            "Jae Head"
          ],
          "country": "USA",
          "productionCompany": "Blue Light",
          "imdbRating": 6.4,
          "awards": "4 wins & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Hancock is a superhero whose ill-considered behavior regularly causes damage in the millions. He changes when the person he saves helps him improve his public image.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgyMzc4ODU3NV5BMl5BanBnXkFtZTcwNjk5Mzc1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Sunshine",
          "releaseDate": "2007-07-27T04:00:00.000Z",
          "runTime": 107,
          "genres": [
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Danny Boyle",
          "cast": [
            "Cliff Curtis",
            "Chipo Chung",
            "Cillian Murphy",
            "Michelle Yeoh"
          ],
          "country": "UK, USA",
          "productionCompany": "DNA Films",
          "imdbRating": 7.2,
          "awards": "1 win & 22 nominations.",
          "mpaaRating": "R",
          "plot": "A team of international astronauts are sent on a dangerous mission to reignite the dying Sun with a nuclear fission bomb in 2057.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTU5Nzg2OTk2NF5BMl5BanBnXkFtZTYwNTc1ODM3._V1_SX300.jpg"
        },
        {
          "title": "Shazam!",
          "releaseDate": "2019-04-05T04:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
          ],
          "director": "David F. Sandberg",
          "cast": [
            "Zachary Levi",
            "Mark Strong",
            "Asher Angel",
            "Jack Dylan Grazer"
          ],
          "country": "USA, Canada",
          "productionCompany": "Mad Ghost Productions",
          "imdbRating": 7,
          "awards": "23 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOWZhZjE4NGQtODg5Ni00MjQ1LWJmMzAtNzQ2N2M1NzYzMDJkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
        },
        {
          "title": "Knowing",
          "releaseDate": "2009-03-20T04:00:00.000Z",
          "runTime": 121,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Alex Proyas",
          "cast": [
            "Nicolas Cage",
            "Chandler Canterbury",
            "Rose Byrne",
            "Lara Robinson"
          ],
          "country": "USA, UK, Australia",
          "productionCompany": "Summit Entertainment",
          "imdbRating": 6.2,
          "awards": "1 win & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "M.I.T. professor John Koestler links a mysterious list of numbers from a time capsule to past and future disasters and sets out to prevent the ultimate catastrophe.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTMyMjgyMDIyM15BMl5BanBnXkFtZTcwNjg3MjAyMg@@._V1_SX300.jpg"
        },
        {
          "title": "Scott Pilgrim vs. the World",
          "releaseDate": "2010-08-13T04:00:00.000Z",
          "runTime": 112,
          "genres": [
            "Action",
            "Comedy",
            "Fantasy",
            "Romance"
          ],
          "director": "Edgar Wright",
          "cast": [
            "Michael Cera",
            "Kieran Culkin",
            "Anna Kendrick",
            "Alison Pill"
          ],
          "country": "USA, UK, Canada, Japan",
          "productionCompany": "Marc Platt Productions",
          "imdbRating": 7.5,
          "awards": "17 wins & 64 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In a magically realistic version of Toronto, a young man must defeat his new girlfriend's seven evil exes one by one in order to win her heart.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_SX300.jpg"
        },
        {
          "title": "Blades of Glory",
          "releaseDate": "2007-03-30T04:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Comedy",
            "Sport"
          ],
          "director": "Josh Gordon, Will Speck",
          "cast": [
            "Will Ferrell",
            "Jon Heder",
            "Will Arnett",
            "Amy Poehler"
          ],
          "country": "USA",
          "productionCompany": "Red Hour Films",
          "imdbRating": 6.3,
          "awards": "3 wins & 10 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In 2002, two rival Olympic ice skaters were stripped of their gold medals and permanently banned from men's single competition. Presently, however, they've found a loophole that will allow them to qualify as a pairs team.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MDMyMTYxMl5BMl5BanBnXkFtZTcwMjk0NzI0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Across the Universe",
          "releaseDate": "2007-10-12T04:00:00.000Z",
          "runTime": 133,
          "genres": [
            "Drama",
            "Fantasy",
            "History",
            "Music",
            "Musical",
            "Romance"
          ],
          "director": "Julie Taymor",
          "cast": [
            "Evan Rachel Wood",
            "Jim Sturgess",
            "Joe Anderson",
            "Dana Fuchs"
          ],
          "country": "USA, UK",
          "productionCompany": "Revolution Studios",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 Oscar. Another 2 wins & 17 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The music of The Beatles and the Vietnam War form the backdrop for the romance between an upper-class American girl and a poor Liverpudlian artist.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTIyMTUwNzg3Nl5BMl5BanBnXkFtZTcwMjM1MDI1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Zodiac",
          "releaseDate": "2007-03-02T05:00:00.000Z",
          "runTime": 157,
          "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
          ],
          "director": "David Fincher",
          "cast": [
            "Jake Gyllenhaal",
            "Mark Ruffalo",
            "Anthony Edwards",
            "Robert Downey Jr."
          ],
          "country": "USA",
          "productionCompany": "Warner Bros.",
          "imdbRating": 7.7,
          "awards": "4 wins & 72 nominations.",
          "mpaaRating": "R",
          "plot": "In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.",
          "poster": "https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
          "title": "The Assassination of Jesse James by the Coward Robert Ford",
          "releaseDate": "2007-10-19T04:00:00.000Z",
          "runTime": 160,
          "genres": [
            "Biography",
            "Crime",
            "Drama",
            "History",
            "Western"
          ],
          "director": "Andrew Dominik",
          "cast": [
            "Brad Pitt",
            "Mary-Louise Parker",
            "Brooklynn Proulx",
            "Dustin Bollinger"
          ],
          "country": "USA, Canada, UK",
          "productionCompany": "Virtual Studios",
          "imdbRating": 7.5,
          "awards": "Nominated for 2 Oscars. Another 26 wins & 68 nominations.",
          "mpaaRating": "R",
          "plot": "Robert Ford, who's idolized Jesse James since childhood, tries hard to join the reforming gang of the Missouri outlaw, but gradually becomes resentful of the bandit leader.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY2NDI2MTc2NV5BMl5BanBnXkFtZTcwNjA2NTQzMw@@._V1_SX300.jpg"
        },
        {
          "title": "10,000 BC",
          "releaseDate": "2008-03-07T05:00:00.000Z",
          "runTime": 109,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "History"
          ],
          "director": "Roland Emmerich",
          "cast": [
            "Steven Strait",
            "Camilla Belle",
            "Cliff Curtis",
            "Joel Virgel"
          ],
          "country": "USA, South Africa",
          "productionCompany": "Moonlighting Films",
          "imdbRating": 5.1,
          "awards": "N/A",
          "mpaaRating": "PG-13",
          "plot": "In the prehistoric past, D'Leh is a mammoth hunter who bonds with the beautiful Evolet. When warriors on horseback capture Evolet and the tribesmen, D'Leh must embark on an odyssey to save his true love.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMzc2NDMzNDY4Ml5BMl5BanBnXkFtZTYwNzM2Njk3._V1_SX300.jpg"
        },
        {
          "title": "The Illusionist",
          "releaseDate": "2006-09-01T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Drama",
            "Fantasy",
            "Mystery",
            "Romance",
            "Thriller"
          ],
          "director": "Neil Burger",
          "cast": [
            "Edward Norton",
            "Paul Giamatti",
            "Jessica Biel",
            "Rufus Sewell"
          ],
          "country": "USA, Czech Republic",
          "productionCompany": "Stillking Films",
          "imdbRating": 7.6,
          "awards": "Nominated for 1 Oscar. Another 11 wins & 11 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          "title": "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
          "releaseDate": "2006-11-03T05:00:00.000Z",
          "runTime": 84,
          "genres": [
            "Comedy"
          ],
          "director": "Larry Charles",
          "cast": [
            "Sacha Baron Cohen",
            "Ken Davitian",
            "Luenell",
            "Chester"
          ],
          "country": "USA, UK, Kazakhstan",
          "productionCompany": "Gold/Miller Productions",
          "imdbRating": 7.3,
          "awards": "Nominated for 1 Oscar. Another 20 wins & 33 nominations.",
          "mpaaRating": "R",
          "plot": "Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world. With a documentary crew in tow, Borat becomes more interested in locating and marrying Pamela Anderson.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Vantage Point",
          "releaseDate": "2008-02-22T05:00:00.000Z",
          "runTime": 90,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Pete Travis",
          "cast": [
            "Dennis Quaid",
            "Matthew Fox",
            "Forest Whitaker",
            "Bruce McGill"
          ],
          "country": "USA, Mexico",
          "productionCompany": "Original Film",
          "imdbRating": 6.6,
          "awards": "2 wins & 2 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The attempted assassination of the American President is told and re-told from several different perspectives.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg3MjQ5OTY4M15BMl5BanBnXkFtZTcwNjk1MDU1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Lincoln",
          "releaseDate": "2012-11-16T05:00:00.000Z",
          "runTime": 150,
          "genres": [
            "Biography",
            "Drama",
            "History",
            "War"
          ],
          "director": "Steven Spielberg",
          "cast": [
            "Daniel Day-Lewis",
            "Sally Field",
            "David Strathairn",
            "Joseph Gordon-Levitt"
          ],
          "country": "USA, India",
          "productionCompany": "Amblin Entertainment",
          "imdbRating": 7.3,
          "awards": "Won 2 Oscars. Another 106 wins & 252 nominations.",
          "mpaaRating": "PG-13",
          "plot": "As the American Civil War continues to rage, America's president struggles with continuing carnage on the battlefield as he fights with many inside his own cabinet on the decision to emancipate the slaves.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQzNzczMDUyNV5BMl5BanBnXkFtZTcwNjM2ODEzOA@@._V1_SX300.jpg"
        },
        {
          "title": "Beowulf",
          "releaseDate": "2007-11-16T05:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "director": "Robert Zemeckis",
          "cast": [
            "Robin Wright",
            "Anthony Hopkins",
            "Paul Baker",
            "John Bilezikjian"
          ],
          "country": "USA, UK",
          "productionCompany": "ImageMovers",
          "imdbRating": 6.2,
          "awards": "3 wins & 19 nominations.",
          "mpaaRating": "PG-13",
          "plot": "The warrior Beowulf must fight and defeat the monster Grendel, who is terrorizing Denmark, and later, Grendel's Mother, who begins killing out of revenge.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTUzMjM0MTc3MF5BMl5BanBnXkFtZTcwNzU0ODMyMw@@._V1_SX300.jpg"
        },
        {
          "title": "Kung Fu Panda",
          "releaseDate": "2008-06-06T04:00:00.000Z",
          "runTime": 92,
          "genres": [
            "Animation",
            "Action",
            "Adventure",
            "Comedy",
            "Family"
          ],
          "director": "Mark Osborne, John Stevenson",
          "cast": [
            "Jack Black",
            "Dustin Hoffman",
            "Angelina Jolie",
            "Ian McShane"
          ],
          "country": "USA, China",
          "productionCompany": "DreamWorks Animation",
          "imdbRating": 7.5,
          "awards": "Nominated for 1 Oscar. Another 14 wins & 38 nominations.",
          "mpaaRating": "PG",
          "plot": "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance. However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a novice in martial arts.",
          "poster": "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
          "title": "The Bourne Ultimatum",
          "releaseDate": "2007-08-03T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Mystery",
            "Thriller"
          ],
          "director": "Paul Greengrass",
          "cast": [
            "Matt Damon",
            "Julia Stiles",
            "David Strathairn",
            "Scott Glenn"
          ],
          "country": "USA, Germany, France, Spain",
          "productionCompany": "Kennedy/Marshall",
          "imdbRating": 8,
          "awards": "Won 3 Oscars. Another 26 wins & 42 nominations.",
          "mpaaRating": "PG-13",
          "plot": "Jason Bourne dodges a ruthless C.I.A. official and his Agents from a new assassination program while searching for the origins of his life as a trained killer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNGNiNmU2YTMtZmU4OS00MjM0LTlmYWUtMjVlYjAzYjE2N2RjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
          "title": "Terminator Salvation",
          "releaseDate": "2009-05-21T04:00:00.000Z",
          "runTime": 115,
          "genres": [
            "Action",
            "Sci-Fi"
          ],
          "director": "McG",
          "cast": [
            "Christian Bale",
            "Sam Worthington",
            "Moon Bloodgood",
            "Helena Bonham Carter"
          ],
          "country": "USA, Germany, UK, Italy",
          "productionCompany": "Moritz Borman",
          "imdbRating": 6.5,
          "awards": "2 wins & 14 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In 2018, a mysterious new weapon in the war against the machines, half-human and half-machine, comes to John Connor on the eve of a resistance attack on Skynet. But whose side is he on, and can he be trusted?",
          "poster": "https://m.media-amazon.com/images/M/MV5BODBlOTJhZjItMGRmYS00YzM1LWFmZTktOTJmNDMyZTBjMjBkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
        },
        {
          "title": "Ice Age: The Meltdown",
          "releaseDate": "2006-03-31T05:00:00.000Z",
          "runTime": 91,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Carlos Saldanha",
          "cast": [
            "Ray Romano",
            "John Leguizamo",
            "Denis Leary",
            "Seann William Scott"
          ],
          "country": "USA, UK, Australia",
          "productionCompany": "Fox Animation Studios",
          "imdbRating": 6.8,
          "awards": "8 wins & 16 nominations.",
          "mpaaRating": "PG",
          "plot": "Manny, Sid, and Diego discover that the ice age is coming to an end, and join everybody for a journey to higher ground. On the trip, they discover that Manny, in fact, is not the last of the woolly mammoths.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjAwODg3OTAxMl5BMl5BanBnXkFtZTcwMjg2NjYyMw@@._V1_SX300.jpg"
        },
        {
          "title": "Alita: Battle Angel",
          "releaseDate": "2019-02-14T05:00:00.000Z",
          "runTime": 122,
          "genres": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Robert Rodriguez",
          "cast": [
            "Rosa Salazar",
            "Christoph Waltz",
            "Jennifer Connelly",
            "Mahershala Ali"
          ],
          "country": "USA, Japan, Canada",
          "productionCompany": "Lightstorm Entertainment",
          "imdbRating": 7.3,
          "awards": "10 wins & 24 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A deactivated cyborg's revived, but can't remember anything of her past and goes on a quest to find out who she is.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQzYWYwYjctY2JhZS00NTYzLTllM2UtZWY5ZTk0NmYwYzIyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg"
        },
        {
          "title": "The Queen",
          "releaseDate": "2006-11-17T05:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Biography",
            "Drama",
            "History"
          ],
          "director": "Stephen Frears",
          "cast": [
            "Helen Mirren",
            "James Cromwell",
            "Alex Jennings",
            "Roger Allam"
          ],
          "country": "UK, USA, France, Italy",
          "productionCompany": "N/A",
          "imdbRating": 7.3,
          "awards": "Won 1 Oscar. Another 95 wins & 97 nominations.",
          "mpaaRating": "PG-13",
          "plot": "After the death of Princess Diana, Queen Elizabeth II struggles with her reaction to a sequence of events nobody could have predicted.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTQ3NTMxODg1Ml5BMl5BanBnXkFtZTcwMjEyMjczMQ@@._V1_SX300.jpg"
        },
        {
          "title": "Toy Story 3",
          "releaseDate": "2010-06-18T04:00:00.000Z",
          "runTime": 103,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Family",
            "Fantasy"
          ],
          "director": "Lee Unkrich",
          "cast": [
            "Tom Hanks",
            "Tim Allen",
            "Joan Cusack",
            "Ned Beatty"
          ],
          "country": "USA",
          "productionCompany": "Pixar Animation Studios",
          "imdbRating": 8.2,
          "awards": "Won 2 Oscars. Another 59 wins & 95 nominations.",
          "mpaaRating": "G",
          "plot": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg"
        },
        {
          "title": "Next",
          "releaseDate": "2007-04-27T04:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Action",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Lee Tamahori",
          "cast": [
            "Nicolas Cage",
            "Julianne Moore",
            "Jessica Biel",
            "Thomas Kretschmann"
          ],
          "country": "USA",
          "productionCompany": "Revolution Studios",
          "imdbRating": 6.2,
          "awards": "2 wins & 3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A Las Vegas magician who can see into the future is pursued by FBI agents seeking to use his abilities to prevent a nuclear terrorist attack.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg3MjgyNjE1Nl5BMl5BanBnXkFtZTcwNTY1NDU0MQ@@._V1_SX300.jpg"
        },
        {
          "title": "The Giver",
          "releaseDate": "2014-08-15T04:00:00.000Z",
          "runTime": 97,
          "genres": [
            "Drama",
            "Romance",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Phillip Noyce",
          "cast": [
            "Jeff Bridges",
            "Meryl Streep",
            "Brenton Thwaites",
            "Alexander Skarsgård"
          ],
          "country": "South Africa, Canada, USA",
          "productionCompany": "Tonik",
          "imdbRating": 6.5,
          "awards": "3 wins & 6 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In a seemingly perfect community, without war, pain, suffering, differences or choice, a young boy is chosen to learn from an elderly man about the true pain and pleasure of the \"real\" world.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTY1MTIxMjg2Ml5BMl5BanBnXkFtZTgwMjUyNzgwMjE@._V1_SX300.jpg"
        },
        {
          "title": "The Descent",
          "releaseDate": "2006-08-04T04:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Adventure",
            "Horror",
            "Thriller"
          ],
          "director": "Neil Marshall",
          "cast": [
            "Shauna Macdonald",
            "Natalie Mendoza",
            "Alex Reid",
            "Saskia Mulder"
          ],
          "country": "UK",
          "productionCompany": "Celador Productions",
          "imdbRating": 7.2,
          "awards": "8 wins & 22 nominations.",
          "mpaaRating": "R",
          "plot": "A caving expedition goes horribly wrong, as the explorers become trapped and ultimately pursued by a strange breed of predators.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_SX300.jpg"
        },
        {
          "title": "V for Vendetta",
          "releaseDate": "2006-03-17T05:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "James McTeigue",
          "cast": [
            "Natalie Portman",
            "Hugo Weaving",
            "Stephen Rea",
            "Stephen Fry"
          ],
          "country": "USA, UK, Germany",
          "productionCompany": "Virtual Studios",
          "imdbRating": 8.2,
          "awards": "7 wins & 29 nominations.",
          "mpaaRating": "R",
          "plot": "In a future British tyranny, a shadowy freedom fighter, known only by the alias of \"V\", plots to overthrow it with the help of a young woman.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg"
        },
        {
          "title": "Just Friends",
          "releaseDate": "2005-11-23T05:00:00.000Z",
          "runTime": 96,
          "genres": [
            "Comedy",
            "Romance"
          ],
          "director": "Roger Kumble",
          "cast": [
            "Ryan Reynolds",
            "Amy Smart",
            "Anna Faris",
            "Chris Klein"
          ],
          "country": "Germany, USA, Canada",
          "productionCompany": "Cinerenta",
          "imdbRating": 6.2,
          "awards": "3 nominations.",
          "mpaaRating": "PG-13",
          "plot": "While visiting his hometown during Christmas, a man comes face-to-face with his old high school crush whom he was best friends with -- a woman whose rejection of him turned him into a ferocious womanizer.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA0Mzg2NjUzMl5BMl5BanBnXkFtZTcwNDg2ODUzMQ@@._V1_SX300.jpg"
        },
        {
          "title": "Daybreakers",
          "releaseDate": "2010-01-08T05:00:00.000Z",
          "runTime": 98,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Horror",
            "Sci-Fi",
            "Thriller"
          ],
          "director": "Michael Spierig, Peter Spierig",
          "cast": [
            "Harriet Minto-Day",
            "Jay Laga'aia",
            "Damien Garvey",
            "Sahaj Dumpleton"
          ],
          "country": "Australia, USA",
          "productionCompany": "Lionsgate Films",
          "imdbRating": 6.4,
          "awards": "3 wins & 6 nominations.",
          "mpaaRating": "R",
          "plot": "In the year 2019, a plague has transformed almost every human into vampires. Faced with a dwindling blood supply, the fractured dominant race plots their survival; meanwhile, a researcher works with a covert band of vamps on a way to save humankind.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNzg3NDYyMDU4Nl5BMl5BanBnXkFtZTcwODA5NzA5Mg@@._V1_SX300.jpg"
        },
        {
          "title": "Real Steel",
          "releaseDate": "2011-10-07T04:00:00.000Z",
          "runTime": 127,
          "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Sport"
          ],
          "director": "Shawn Levy",
          "cast": [
            "Hugh Jackman",
            "Dakota Goyo",
            "Evangeline Lilly",
            "Anthony Mackie"
          ],
          "country": "USA, India",
          "productionCompany": "21 Laps Entertainment",
          "imdbRating": 7.1,
          "awards": "Nominated for 1 Oscar. Another 2 wins & 5 nominations.",
          "mpaaRating": "PG-13",
          "plot": "In the near future, robot boxing is a top sport. A struggling ex-boxer feels he's found a champion in a discarded robot.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjEzMzEzNjg0N15BMl5BanBnXkFtZTcwMzg4NDk0Ng@@._V1_SX300.jpg"
        },
        {
          "title": "SAW 2",
          "releaseDate": "2005-10-28T04:00:00.000Z",
          "runTime": 93,
          "genres": [
            "Horror",
            "Mystery"
          ],
          "director": "Darren Lynn Bousman",
          "cast": [
            "Tobin Bell",
            "Shawnee Smith",
            "Donnie Wahlberg",
            "Erik Knudsen"
          ],
          "country": "Canada, USA",
          "productionCompany": "Twisted Pictures",
          "imdbRating": 6.6,
          "awards": "4 wins & 11 nominations.",
          "mpaaRating": "R",
          "plot": "A detective and his team must rescue 8 people trapped in a factory by the twisted serial killer known as Jigsaw.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjY4Mjg4YTgtZWU2MC00MzVlLTg3MDgtYzUyYzU1NGMyMmU5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "Fantastic Mr. Fox",
          "releaseDate": "2009-11-25T05:00:00.000Z",
          "runTime": 87,
          "genres": [
            "Animation",
            "Adventure",
            "Comedy",
            "Crime",
            "Drama",
            "Family"
          ],
          "director": "Wes Anderson",
          "cast": [
            "George Clooney",
            "Meryl Streep",
            "Jason Schwartzman",
            "Bill Murray"
          ],
          "country": "USA, UK",
          "productionCompany": "American Empirical Pictures",
          "imdbRating": 7.9,
          "awards": "Nominated for 2 Oscars. Another 32 wins & 61 nominations.",
          "mpaaRating": "PG",
          "plot": "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
          "poster": "https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          "title": "Resident Evil: Extinction",
          "releaseDate": "2007-09-21T04:00:00.000Z",
          "runTime": 94,
          "genres": [
            "Action",
            "Horror",
            "Sci-Fi"
          ],
          "director": "Russell Mulcahy",
          "cast": [
            "Milla Jovovich",
            "Oded Fehr",
            "Ali Larter",
            "Iain Glen"
          ],
          "country": "France, Australia, Germany, UK, USA, Mexico, Canada, Japan",
          "productionCompany": "Impact Pictures",
          "imdbRating": 6.3,
          "awards": "2 wins & 2 nominations.",
          "mpaaRating": "R",
          "plot": "Survivors of the Raccoon City catastrophe travel across the Nevada desert, hoping to make it to Alaska. Alice joins the caravan and their fight against the evil Umbrella Corp.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNDQ0MWI3MmEtMzM0OC00Y2ViLWE4MDItMzNhNmY1ZTdjMWE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          "title": "P.S. I Love You",
          "releaseDate": "2007-12-21T05:00:00.000Z",
          "runTime": 126,
          "genres": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "director": "Richard LaGravenese",
          "cast": [
            "Hilary Swank",
            "Gerard Butler",
            "Lisa Kudrow",
            "Gina Gershon"
          ],
          "country": "USA",
          "productionCompany": "N/A",
          "imdbRating": 7,
          "awards": "2 wins & 4 nominations.",
          "mpaaRating": "PG-13",
          "plot": "A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.",
          "poster": "https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg"
        },
        {
          "title": "The Kingdom",
          "releaseDate": "2007-09-28T04:00:00.000Z",
          "runTime": 110,
          "genres": [
            "Action",
            "Drama",
            "Thriller"
          ],
          "director": "Peter Berg",
          "cast": [
            "Jamie Foxx",
            "Chris Cooper",
            "Jennifer Garner",
            "Jason Bateman"
          ],
          "country": "USA, Germany, United Arab Emirates",
          "productionCompany": "Universal Pictures",
          "imdbRating": 7,
          "awards": "5 nominations.",
          "mpaaRating": "R",
          "plot": "A team of U.S. government agents are sent to investigate the bombing of an American facility in the Middle East.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA1MDIzOTYwMV5BMl5BanBnXkFtZTcwMTM5OTA1MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Role Models",
          "releaseDate": "2008-11-07T05:00:00.000Z",
          "runTime": 99,
          "genres": [
            "Comedy"
          ],
          "director": "David Wain",
          "cast": [
            "Seann William Scott",
            "Paul Rudd",
            "Christopher Mintz-Plasse",
            "Bobb'e J. Thompson"
          ],
          "country": "Germany, USA",
          "productionCompany": "Stuber-Parent",
          "imdbRating": 6.8,
          "awards": "1 win & 4 nominations.",
          "mpaaRating": "R",
          "plot": "Wild behavior forces a pair of energy drink reps to enroll in a Big Brother program.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTg3MTk4NzQ0NV5BMl5BanBnXkFtZTcwNjM0OTc5MQ@@._V1_SX300.jpg"
        },
        {
          "title": "Miami Vice",
          "releaseDate": "2006-07-28T04:00:00.000Z",
          "runTime": 132,
          "genres": [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
          ],
          "director": "Michael Mann",
          "cast": [
            "Colin Farrell",
            "Jamie Foxx",
            "Gong Li",
            "Naomie Harris"
          ],
          "country": "USA, Germany",
          "productionCompany": "Universal Pictures",
          "imdbRating": 6,
          "awards": "1 win & 9 nominations.",
          "mpaaRating": "R",
          "plot": "Based on the 1980s TV action/drama, this update focuses on vice detectives Crockett and Tubbs as their respective personal and professional lives become dangerously intertwined.",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM4MDQ5MTkxMV5BMl5BanBnXkFtZTcwMTU4MzUzMQ@@._V1_SX300.jpg"
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Movies', null, {});

  }
};
