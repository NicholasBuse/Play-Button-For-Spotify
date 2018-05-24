var ntp = 1;

var pauseButtons = document.getElementsByClassName("spoticon-pause-16");
var playButtons  = document.getElementsByClassName("spoticon-play-16");

if (pauseButtons.length != 0) {
    pauseButtons[0].click();
    ntp = 0;
}
else if (playButtons.length != 0) {
    playButtons[0].click();
    ntp = 0;
}
} else {
    if (play != "none") {
        // Featured, Podcasts, NewReleases, Discover Playlists, Daily Mix, Albums, Artists?
        var allDivs = document.getElementsByClassName('cover-art-playback');
        if (allDivs.length == 0) {
            // Tracks?
            allDivs = document.getElementsByClassName('spoticon-track-16');
        }
        if (allDivs.length == 0) {
            // In Album?
            allDivs = document.getElementsByClassName('tracklist-play-pause');
        }
        if (allDivs.length == 0) {
            // Genres
            allDivs = document.getElementsByClassName('cover-art-image');
            // First pick a genre
            if (allDivs.length) {
                var num;

                switch (play) {
                    case "first":
                        num = 0;
                        break;
                    case "last":
                        num = allDivs.length - 1;
                        break;
                    case "random":
                        num = Math.floor(Math.random() * allDivs.length);
                        break;
                }

                allDivs[num].click();
            }
            // The refresh with options of the Genre
            allDivs = document.getElementsByClassName('cover-art-playback');
        }

        if (allDivs.length) {
            var num;

            switch (play) {
                case "first":
                    num = 0;
                    break;
                case "last":
                    num = allDivs.length - 1;
                    break;
                case "random":
                    num = Math.floor(Math.random() * allDivs.length);
                    break;
            }

            allDivs[num].click();
            ntp = 0;
        }
    }
}

ntp;
