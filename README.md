# liri-node-app
Repository for Language Interpretation and Recognition Interface; a command line node app that takes in parameters and returns data.

## Author
John Pendergrass

## Purpose of app
The purpose was to use "backend" technologies only. Node.js was used along with NPM (Node Package Manager) libraries in order to accomplish the tasks. There is no front end to this application, therefore this is no html page to publish.

## App organization
### `concert-this`

  `node liri.js concert-this <artist/band name>`

   * This will search the Bands in Town Artist Events API for an artist and show the following information about each event in the terminal and to the log.txt file:

    ```
      * Name of the venue
      * Venue location
      * Date of the Event 
    ```
    ### `spotify-this-song`

  `node liri.js spotify-this-song <song name>`

   * This will search the Spotify API for a song and show the following information about the song in the `terminal` and to the `log.txt` file:
   
    ```
      * Artist(s)
      * The song's name
      * A preview link of the song from Spotify
      * The album that the song is from
    ```

### `movie-this`

  `node liri.js movie-this <movie name here>`

  * This will search the OMDB API for a movie name and show the following information in the `terminal` and to the `log.txt` file:

    ```
      * Title of the movie.
      * Year the movie came out.
      * IMDB Rating of the movie.
      * Rotten Tomatoes Rating of the movie.
      * Country where the movie was produced.
      * Language of the movie.
      * Plot of the movie.
      * Actors in the movie.
    ```

### `do-what-it-says`
  `node liri.js do-what-it-says`

   * LIRI will take the text inside of `random.txt` and then use it to call one of LIRI's commands.

## Instructions
1. To search for information on a concert event for an artist/band, simply type:  `node liri.js concert-this <artist/band name>` in the terminal. 
1. To search for information on a song, simply type: `node liri.js spotify-this-song <song name>` in the terminal. 
1. To search for information on a movie, simply type:   `node liri.js movie-this <movie name here>` in the terminal. 

## Screenshots and videos
Link to the video: https://1drv.ms/v/s!AsTLbKRukIAN9BZTh-LmILQGLcyh?e=elxZIQ

## Links
* Link to video: https://1drv.ms/v/s!AsTLbKRukIAN9BZTh-LmILQGLcyh?e=elxZIQ
* Link to repository: https://github.com/JohnWP8253/liri-node-app

## Tech used
    * JavaScript
    * Node.js
    * Spotify API
    * Bands in Town API
    * OMDB API


