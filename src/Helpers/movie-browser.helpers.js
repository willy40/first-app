const TMDB_IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

const updateMoviePictureUrls = (movieResult, width = 300) => ({
  ...movieResult,
  backdrop_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
  poster_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.poster_path}`,
});

export const getMoviesList = (results) => {
  return !!results ? ([
    ...results.map(movieResult => updateMoviePictureUrls(movieResult))
  ]) : null;
}