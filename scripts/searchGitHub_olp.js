//GitHub Users Search implemented using OLP - Object Literal Pattern
//Fiyin Simeon Adebayo | Andela 2014
//3rd December, 2014

var searchGitHub = {
  searchURL: "https://api.github.com/search/users?",
  repoURL: "https://api.github.com/search/repositories?",
  searchInput: $('#searchField'),
  searchUsersButton: $('#searchUsersButton'),
  // searchReposButton: $('#searchReposButton'),
  status: function(display) {
            $("#status").html(display);
          },
  initialize: function () {
                // if (searchGitHub.searchInput.val() === "") {
                //   searchGitHub.status("Please enter a username to search!");
                // }
                // else {
                $('form').submit(function(evt) {
                  evt.preventDefault();

                  if (searchGitHub.searchInput.val() === "") {
                    searchGitHub.status("Please enter a username to search!!!")
                  }

                  else {
                  searchGitHub.searchInput.prop("disabled", true);
                  searchGitHub.searchUsersButton.attr("disabled", true).val("Searching...");
                  var searchData = {
                    q: searchGitHub.searchInput.val(),
                    // sort: "joined",
                    format: "json"
                  };
                  var repoFxn = function (arg) {
                    console.log(arg);
                  };
                  var searchFxn = function (data) {
                    if (data.total_count === 0) {
                      searchGitHub.status("Sorry, there's no user with the username <strong>'" + searchGitHub.searchInput.val() + "'</strong>.");
                    }
                    else {
                    searchGitHub.status("Your search returned <strong>" + data.total_count + "</strong> results.");
                    var users = '<ul>';
                    $.each(data.items, function(i, info) {
                      users += '<li class="lists">';
                      users += '<img src="' + info.avatar_url + '" width="200" height="200"><br /><br />';
                      users += 'Login: <label>' + info.login + '</label><br />';
                      users += 'id: <label>' + info.id + '</label><br />';
                      users += 'Score: <label>' + info.score + '</label><br />';
                      users += 'Type: <label>' + info.type + '</label><br />';
                      users += '<a href="' + info.html_url + '">Open Profile</a><br />';
                      users += '</li>';
                  }); //end of .each loop
                  users += '</ul>';
                  $('#results').html(users);
                }
                  searchGitHub.searchInput.prop("disabled", false);
                  searchGitHub.searchUsersButton.attr("disabled", false).val("Search");
                  searchGitHub.searchInput.val("");
                }; //end of searchFxn
                $.getJSON(searchGitHub.searchURL, searchData, searchFxn);
                // $.getJSON(searchGitHub.repoURL, searchData, repoFxn);
                }//end of if-else
                }); //end of form submit function
                
                 
              },
  reposClick: function() {
                console.log("repos button was clicked");
                if (searchGitHub.searchInput.val() === "") {
                    searchGitHub.status("Please enter a repository name to search!!!")
                  } //end of if

                  else {
                    searchGitHub.status("Your typed " + searchGitHub.searchInput.val() + ".");
                    
                  } //end of if-else
              }
};
searchGitHub.initialize();
$('#searchReposButton').click(searchGitHub.reposClick);