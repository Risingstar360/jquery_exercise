let currentId = 0;

let movieList = [];

$(function () {
  $("#new-movie-form").on("submit", function (e) {
    e.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    let movieInfo = { title, rating, currentId };
    const appendInfo = htmlMovieData(movieInfo);

    currentId++;
    movieList.push(movieInfo);

    $("#movie-body").append(appendInfo);
    $("#new-movie-form").trigger("reset");
  });

  $("tbody").on("click", function (e) {
    let removeAtIndex = movieList.findIndex(
      (movie) => movie.currentId === +$(e.target).data("deletId")
    );
    movieList.splice(removeAtIndex, 1);
    $(e.target).closest("tr").remove();
  });
});

function htmlMovieData(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button class="btn btn-danger" data-delete-id=${data.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}
