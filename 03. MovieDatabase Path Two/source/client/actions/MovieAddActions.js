import alt from '../alt';

class MovieAddActions {
  constructor() {
    this.generateActions(
      'handleNameChange',
      'handleDescriptionChange',
      'handleGenresChange',
      'nameValidationFail',
      'genresValidationFail',
      'addMovieSuccess',
      'addMovieFail'
    );
  }

  addMovie(data) {
    let request = {
      method: 'post',
      url: '/api/movies/add',
      data: JSON.stringify(data),
      contentType: 'application/json'
    };

    $.ajax(request)
      .done(() => this.addMovieSuccess())
      .fail(err => this.addMovieFail(err));

    return true;
  }
}

export default alt.createActions(MovieAddActions);