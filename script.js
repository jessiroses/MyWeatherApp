function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", handleSearchSubmit);
