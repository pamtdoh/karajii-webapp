import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/home/SearchForm';
import Catalogue from '../components/home/Catalogue'
import { fetchCatalogue } from '../actions';

const entries = [
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BMTUzNDgyMzg3Ml5BMl5BanBnXkFtZTcwMzIxNTAwMQ@@._V1_SX300.jpg",
    movie_name: "the_station_agent",
    title: "The Station Agent"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BNzhiMjRlMDEtYzYwNi00MzY5LTlmZDgtOTM2ZDBjN2Y2N2FlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
    movie_name: "my_stepmother_is_an_alien",
    title: "My Stepmother Is an Alien"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
    movie_name: "captain_america_the_first_avenger",
    title: "Captain America: The First Avenger"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg",
    movie_name: "captain_america_the_winter_soldier",
    title: "Captain America: The Winter Soldier"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BZjY4MWQzOTktMDlkMy00ZmQzLTk0ZmQtOWVmODAyNWE2YmUzXkEyXkFqcGdeQXVyMjUxOTQ5MzA@._V1_SX300.jpg",
    movie_name: "the_exterminating_angel",
    title: "The Exterminating Angel"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BMTgxMjUyNTAxNF5BMl5BanBnXkFtZTgwNTk4MDUyMzE@._V1_SX300.jpg",
    movie_name: "the_woman_in_black_2_angel_of_death",
    title: "The Woman in Black 2: Angel of Death"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BMmExOWQyYmUtMDZlZS00ZWQxLWE3YWQtMmM2ZmJhNWJhYzExXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
    movie_name: "the_blue_angel",
    title: "The Blue Angel"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    movie_name: "o_brother_where_art_thou",
    title: "O Brother, Where Art Thou?"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BNDg3NzE5MjU3MV5BMl5BanBnXkFtZTcwNjY1NTgxNQ@@._V1_SX300.jpg",
    movie_name: "the_art_of_getting_by",
    title: "The Art of Getting By"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BNzAyMjE2MDI3M15BMl5BanBnXkFtZTYwNTIwMzg2._V1_SX300.jpg",
    movie_name: "the_art_of_war",
    title: "The Art of War"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BNjUxNjYyNTUxMF5BMl5BanBnXkFtZTgwNDgyMDcyMTE@._V1_SX300.jpg",
    movie_name: "the_art_of_the_steal",
    title: "The Art of the Steal"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BZDlkOGE4YTUtYWRlZS00YjFkLWE3NmUtNzNlNjdiZTk2NzdhXkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_SX300.jpg",
    movie_name: "the_art_of_selfdefense",
    title: "The Art of Self-Defense"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BZjU5ZTYzM2MtNDNhYi00YjU1LWE4MzEtODc0NmNlODZlMjlhXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SX300.jpg",
    movie_name: "the_art_of_racing_in_the_rain",
    title: "The Art of Racing in the Rain"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BMTc1NjUwMDU1MF5BMl5BanBnXkFtZTcwMzU5NjA4OA@@._V1_SX300.jpg",
    movie_name: "the_art_of_flight",
    title: "The Art of Flight"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BOTFiMDE1YTctOTM0NC00MTM2LWJjODAtODY5MmU5NjI0MjgwL2ltYWdlXkEyXkFqcGdeQXVyNTkzODg2MTQ@._V1_SX300.jpg",
    movie_name: "sword_art_online_the_movie_ordinal_scale",
    title: "Sword Art Online The Movie: Ordinal Scale"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    movie_name: "star_wars_episode_ii__attack_of_the_clones",
    title: "Star Wars: Episode II - Attack of the Clones"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BMjAzNjc1MjgzOF5BMl5BanBnXkFtZTcwMzE3Njk5NQ@@._V1_SX300.jpg",
    movie_name: "attack_the_block",
    title: "Attack the Block"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BZWMxOTEzMjktYjE3NC00NmZjLThlNzYtMDE3MDlmNWVmZTZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    movie_name: "attack_of_the_killer_tomatoes",
    title: "Attack of the Killer Tomatoes!"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BZWJjM2U2ODUtNDZkZi00NjdhLWE0MzMtYzIyNzE0ZTcyNmJkL2ltYWdlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
    movie_name: "the_ghazi_attack",
    title: "The Ghazi Attack"
  },
  {
    cover_image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    movie_name: "the_avengers",
    title: "The Avengers"
  }
]

const HomePage = ({ user }) => {
  // useEffect(() => {
  //   dispatch(fetchCatalogue(keyword, genre))
  // })

  if (user == null) {
    return (
      <div className="mt-5 text-center">
        <h1>Welcome to KARAJII Movies</h1>
        <SearchForm />
        <Catalogue />
      </div>
    )  
  } else {
    return <h1>Hi {user.username}!, eskrim</h1>
  }
}

export default HomePage;