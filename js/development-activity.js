function fillWithOneLeadingZero(i) {
    return (i < 10 ? '0' : '') + i
}

$().ready(function() {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/repos/appleseedhq/appleseed/commits",
        dataType: "json",

        success: function(result) {
            for (var i = 0; i < 5; i++ ) {
                var tempDate        = new Date(result[i].commit.author.date);
                var commitDate      = tempDate.getFullYear() + "/"
                                      + fillWithOneLeadingZero(tempDate.getMonth()) + "/"
                                      + fillWithOneLeadingZero(tempDate.getDate());
                var commitAuthor    = result[i].commit.author.name;
                var commitMessage   = result[i].commit.message;
                var commitUrl       = result[i].html_url;

                $("#latest-commits").append(
                    "<li style='list-style-type: none;'>" +
                        "<a href='" + commitUrl + "'><span class='commit'>" + commitDate + "</span> " +
                        "<span class='commit commit-author'>" + commitAuthor + "</span> " +
                        commitMessage +
                        "</a></li>"
                );
            }
        }
    })
    .fail(function() {
        $('#commits').remove();
    });
});
