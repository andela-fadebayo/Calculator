//GitHub Users Search implemented using OLP - Object Literal Pattern
//Fiyin Simeon Adebayo | Andela 2014
//3rd December, 2014

var searchGitHub = {
  searchURL: "https://api.github.com/search/users?",
  searchInput: $('#searchField'),
  searchButton: $('#searchButton'),
  initialize: function () {
                $('form').submit(function(evt) {
                  evt.preventDefault();
                  var searchData = {
                    q: searchGitHub.searchInput.val(),
                    sort: "joined",
                    format: "json"
                  };
                  var searchFxn = function (data) {
                  var users = '<ul>';
                  $.each(data.items, function(i, info) {
                    users += '<li>';
                    users += '<img src="' + info.avatar_url + '" width="200" height="200"><br /><br />';
                    users += 'Login: <label>' + info.login + '</label><br />';
                    users += 'id: <label>' + info.id + '</label><br />';
                    users += 'Score: <label>' + info.score + '</label><br />';
                    users += 'Type: <label>' + info.type + '</label><br />';
                    users += '<a href="' + info.html_url + '">Open Profile</a>';
                    users += '</li>';
                  }); //end of .each loop
                  users += '</ul>';
                  $('#results').html(users);
                }; //end of searchFxn
                $.getJSON(searchGitHub.searchURL, searchData, searchFxn);
                }); //end of form submit function
              }
};
searchGitHub.initialize();