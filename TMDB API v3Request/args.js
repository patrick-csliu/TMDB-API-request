const pull1 = [
    "Account", "Certifications", "Changes", "Collections", "Companies", "Configuration", "Credits", "Discover", "Find", "Genres",
    "Guest Sessions", "Keywords", "Lists", "Movies", "Networks", "Trending", "People", "Reviews", "Search", "TV", "TV Seasons",
    "TV Episodes", "TV Episode Groups", "Watch Providers",
];
const pull2 = [
    ["Get Details", "Get Created Lists", "Get Favorite Movies", "Get Favorite TV Shows", "Mark as Favorite",
     "Get Rated Movies", "Get Rated TV Shows", "Get Rated TV Episodes", "Get Movie Watchlist", "Get TV Show Watchlist", "Add to Watchlist"],//"Account"
    ["Get Movie Certifications", "Get TV Certifications"],//"Certifications"
    ["Get Movie Change List", "Get TV Change List", "Get Person Change List"],//"Changes"
    ["Get Details", "Get Images", "Get Translations"],//"Collections"
    ["Get Details", "Get Alternative Names", "Get Images"],//"Companies"
    ["Get API Configuration", "Get Countries", "Get Jobs", "Get Languages", "Get Primary Translations", "Get Timezones"],//"Configuration"
    ["Get Details"],//"Credits"
    ["Movie Discover", "TV Discover"],//"Discover"
    ["Find by ID"],//"Find"
    ["Get Movie List", "Get TV List"],//"Genres"
    ["Get Rated Movies", "Get Rated TV Shows", "Get Rated TV Episodes"],//"Guest Sessions"
    ["Get Details", "Get Movies"],//"Keywords"
    ["Get Details", "Check Item Status", "Create List", "Add Movie", "Remove Movie", "Clear List", "Delete List"],//"Lists"
    ["Get Details", "Get Account States", "Get Alternative Titles", "Get Changes", "Get Credits", "Get External IDs", "Get Images", "Get Keywords",
     "Get Lists", "Get Recommendations", "Get Release Dates", "Get Reviews", "Get Similar Movies", "Get Translations", "Get Videos", "Get Watch Providers",
     "Rate Movie", "Delete Rating", "Get Latest", "Get Now Playing", "Get Popular", "Get Top Rated", "Get Upcoming"],//"Movies"
    ["Get Details", "Get Alternative Names", "Get Images"],//"Networks"
    ["Get Trending"],//"Trending"
    ["Get Details", "Get Changes", "Get Movie Credits", "Get TV Credits", "Get Combined Credits", "Get External IDs", "Get Images", "Get Tagged Images", "Get Translations", "Get Latest", "Get Popular"],//"People"
    ["Get Details"],//"Reviews"
    ["Search Companies", "Search Collections", "Search Keywords", "Search Movies", "Multi Search", "Search People", "Search TV Shows"],//"Search"
    ["Get Details", "Get Account States", "Get Aggregate Credits", "Get Alternative Titles", "Get Changes", "Get Content Ratings", "Get Credits", "Get Episode Groups", "Get External IDs", "Get Images", "Get Keywords",
     "Get Recommendations", "Get Reviews", "Get Screened Theatrically", "Get Similar TV Shows", "Get Translations", "Get Videos", "Get Watch Providers",
     "Rate TV Show", "Delete Rating", "Get Latest", "Get TV Airing Today", "Get TV On The Air", "Get Popular", "Get Top Rated"],//"TV"
    ["Get Details", "Get Account States", "Get Aggregate Credits", "Get Changes", "Get Credits", "Get External IDs", "Get Images", "Get Translations", "Get Videos"],//"TV Seasons"
    ["Get Details", "Get Account States", "Get Changes", "Get Credits", "Get External IDs", "Get Images", "Get Translations", "Rate TV Episode", "Delete Rating", "Get Videos"],//"TV Episodes"
    ["Get Details"],//"TV Episode Groups"
    ["Get Available Regions", "Get Movie Providers", "Get TV Providers"],//"Watch Providers"
];
const urlList = [
    ["/account", "/account/{account_id}/lists", "/account/{account_id}/favorite/movies", "/account/{account_id}/favorite/tv",
     "/account/{account_id}/favorite", "/account/{account_id}/rated/movies", "/account/{account_id}/rated/tv", "/account/{account_id}/rated/tv/episodes",
     "/account/{account_id}/watchlist/movies", "/account/{account_id}/watchlist/tv", "/account/{account_id}/watchlist"],//"Account"
    ["/certification/movie/list", "/certification/tv/list"],//"Certifications"
    ["/movie/changes", "/tv/changes", "/person/changes"],//"Changes"
    ["/collection/{collection_id}", "/collection/{collection_id}/images", "/collection/{collection_id}/translations"],//"Collections"
    ["/company/{company_id}", "/company/{company_id}/alternative_names", "/company/{company_id}/images"],//"Companies"
    ["/configuration", "/configuration/countries", "/configuration/jobs", "/configuration/languages", "/configuration/primary_translations", "/configuration/timezones"],//"Configuration"
    ["/credit/{credit_id}"],//"Credits"
    ["/discover/movie", "/discover/tv"],//"Discover"
    ["/find/{external_id}"],//"Find"
    ["/genre/movie/list", "/genre/tv/list"],//"Genres"
    ["/guest_session/{guest_session_id}/rated/movies", "/guest_session/{guest_session_id}/rated/tv", "/guest_session/{guest_session_id}/rated/tv/episodes"],//"Guest Sessions"
    ["/keyword/{keyword_id}", "/keyword/{keyword_id}/movies"],//"Keywords"
    ["/list/{list_id}", "/list/{list_id}/item_status", "/list", "/list/{list_id}/add_item", "/list/{list_id}/remove_item", "/list/{list_id}/clear", "/list/{list_id}"],//"Lists"
    ["/movie/{movie_id}", "/movie/{movie_id}/account_states", "/movie/{movie_id}/alternative_titles", "/movie/{movie_id}/changes",
     "/movie/{movie_id}/credits", "/movie/{movie_id}/external_ids", "/movie/{movie_id}/images", "/movie/{movie_id}/keywords", "/movie/{movie_id}/lists",
     "/movie/{movie_id}/recommendations", "/movie/{movie_id}/release_dates", "/movie/{movie_id}/reviews", "/movie/{movie_id}/similar", "/movie/{movie_id}/translations",
     "/movie/{movie_id}/videos", "/movie/{movie_id}/watch/providers", "/movie/{movie_id}/rating", "/movie/{movie_id}/rating", "/movie/latest", "/movie/now_playing",
     "/movie/popular", "/movie/top_rated", "/movie/upcoming"],//"Movies"
    ["/network/{network_id}", "/network/{network_id}/alternative_names", "/network/{network_id}/images"],//"Networks"
    ["/trending/{media_type}/{time_window}"],//"Trending"
    ["/person/{person_id}", "/person/{person_id}/changes", "/person/{person_id}/movie_credits", "/person/{person_id}/tv_credits", "/person/{person_id}/combined_credits", "/person/{person_id}/external_ids", "/person/{person_id}/images", "/person/{person_id}/tagged_images", "/person/{person_id}/translations", "/person/latest", "/person/popular"],//"People"
    ["/review/{review_id}"],//"Reviews"
    ["/search/company", "/search/collection", "/search/keyword", "/search/movie", "/search/multi", "/search/person", "/search/tv"],//"Search"
    ["/tv/{tv_id}", "/tv/{tv_id}/account_states", "/tv/{tv_id}/aggregate_credits", "/tv/{tv_id}/alternative_titles", "/tv/{tv_id}/changes", "/tv/{tv_id}/content_ratings",
     "/tv/{tv_id}/credits", "/tv/{tv_id}/episode_groups", "/tv/{tv_id}/external_ids", "/tv/{tv_id}/images", "/tv/{tv_id}/keywords", "/tv/{tv_id}/recommendations",
     "/tv/{tv_id}/reviews", "/tv/{tv_id}/screened_theatrically", "/tv/{tv_id}/similar", "/tv/{tv_id}/translations", "/tv/{tv_id}/videos", "/tv/{tv_id}/watch/providers",
     "/tv/{tv_id}/rating", "/tv/{tv_id}/rating", "/tv/latest", "/tv/airing_today", "/tv/on_the_air", "/tv/popular", "/tv/top_rated"],//"TV"
    ["/tv/{tv_id}/season/{season_number}", "/tv/{tv_id}/season/{season_number}/account_states", "/tv/{tv_id}/season/{season_number}/aggregate_credits",
     "/tv/season/{season_id}/changes", "/tv/{tv_id}/season/{season_number}/credits", "/tv/{tv_id}/season/{season_number}/external_ids", "/tv/{tv_id}/season/{season_number}/images", "/tv/{tv_id}/season/{season_number}/translations", "/tv/{tv_id}/season/{season_number}/videos"],//"TV Seasons"
    ["/tv/{tv_id}/season/{season_number}/episode/{episode_number}", "/tv/{tv_id}/season/{season_number}/episode/{episode_number}/account_states",
     "/tv/episode/{episode_id}/changes", "/tv/{tv_id}/season/{season_number}/episode/{episode_number}/credits",
     "/tv/{tv_id}/season/{season_number}/episode/{episode_number}/external_ids", "/tv/{tv_id}/season/{season_number}/episode/{episode_number}/images",
     "/tv/{tv_id}/season/{season_number}/episode/{episode_number}/translations", "/tv/{tv_id}/season/{season_number}/episode/{episode_number}/rating",
     "/tv/{tv_id}/season/{season_number}/episode/{episode_number}/rating", "/tv/{tv_id}/season/{season_number}/episode/{episode_number}/videos"],//"TV Episodes"
    ["/tv/episode_group/{id}"],//"TV Episode Groups"
    ["/watch/providers/regions", "/watch/providers/movie", "/watch/providers/tv"],//"Watch Providers"
];
const queryList = [
    [["{session_id}"],
     ["{session_id}", "{language}", "{page}"],
     ["{session_id}", "{language}", "{sort_by}", "{page}"],
     ["{session_id}", "{language}", "{sort_by}", "{page}"],
     ["{session_id}"],
     ["{session_id}", "{language}", "{sort_by}", "{page}"],
     ["{session_id}", "{language}", "{sort_by}", "{page}"],
     ["{session_id}", "{language}", "{sort_by}", "{page}"],
     ["{session_id}", "{language}", "{sort_by}", "{page}"],
     ["{session_id}", "{language}", "{sort_by}", "{page}"],
     ["{session_id}"],],//"Account"
    [[], []],//"Certifications"
    [["{end_date}", "{start_date}", "{page}"],
     ["{end_date}", "{start_date}", "{page}"],
     ["{end_date}", "{start_date}", "{page}"]],//"Changes"
    [["{language}"], ["{language}"], ["{language}"]],//"Collections"
    [[], [], []],//"Companies"
    [[], [], [], [], [], []],//"Configuration"
    [[]],//"Credits"
    [[], []],//"Discover"**~~~~~**
    [["{language}", "{external_source}"]],//"Find"
    [["{language}"], ["{language}"]],//"Genres"
    [["{language}", "{sort_by}"], ["{language}", "{sort_by}"], ["{language}", "{sort_by}"]],//"Guest Sessions"
    [[], ["{language}", "{include_adult}"]],//"Keywords"
    [["{language}"], ["{movie_id}"], ["{session_id}"], ["{session_id}"], ["{session_id}"], ["{session_id}", "{confirm}"], ["{session_id}"]],//"Lists"
    [["{language}", "{append_to_response}"],
     ["{session_id}", "{guest_session_id}"],
     ["{country}"],
     ["{end_date}", "{start_date}", "{page}"],
     ["{language}"],
     [],
     ["{language}", "{include_image_language}"],
     [],
     ["{language}", "{page}"],
     ["{language}", "{page}"],
     [],
     ["{language}", "{page}"],
     ["{language}", "{page}"],
     [],
     ["{language}"],
     [],
     ["{session_id}", "{guest_session_id}"],
     ["{session_id}", "{guest_session_id}"],
     ["{language}"],
     ["{language}", "{page}", "{region}"],
     ["{language}", "{page}", "{region}"],
     ["{language}", "{page}", "{region}"],
     ["{language}", "{page}", "{region}"]],//"Movies"
    [[], [], []],//"Networks"
    [[]],//"Trending"
    [["{language}", "{append_to_response}"], ["{end_date}", "{start_date}", "{page}"], ["{language}"], ["{language}"], ["{language}"], ["{language}"], [], ["{language}", "{page}"], ["{language}"], ["{language}"], ["{language}", "{page}"]],//"People"
    [[]],//"Reviews"
    [["{query}", "{page}"],
     ["{language}", "{page}", "{query}"],
     ["{query}", "{page}"],
     ["{language}", "{page}", "{query}", "{include_adult}", "{region}", "{year}", "{primary_release_year}"],
     ["{language}", "{page}", "{query}", "{include_adult}", "{region}"],
     ["{language}", "{page}", "{query}", "{include_adult}", "{region}"],
     ["{language}", "{page}", "{query}", "{include_adult}", "{first_air_date_year}"]],//"Search"
    [["{language}", "{append_to_response}"],
     ["{language}", "{session_id}", "{guest_session_id}"], 
     ["{language}"],
     ["{language}"],
     ["{end_date}", "{start_date}", "{page}"],
     ["{language}"],
     ["{language}"],
     ["{language}"],
     ["{language}"],
     ["{language}"],
     [],
     ["{language}", "{page}"],
     ["{language}", "{page}"],
     [],
     ["{language}", "{page}"],
     [],["{language}"],
     [],
     ["{session_id}", "{guest_session_id}"],
     ["{session_id}", "{guest_session_id}"],
     ["{language}"],
     ["{language}", "{page}"],
     ["{language}", "{page}"],
     ["{language}", "{page}"],
     ["{language}", "{page}"]],//"TV"
    [["{language}", "{append_to_response}"],
     ["{language}", "{session_id}", "{guest_session_id}"],
     ["{language}"],
     ["{end_date}", "{start_date}", "{page}"],
     ["{language}"],
     ["{language}"],
     ["{language}"],
     ["{language}"],
     ["{language}"]],//"TV Seasons"
    [["{language}", "{append_to_response}"],
     ["{session_id}", "{guest_session_id}"],
     ["{end_date}", "{start_date}", "{page}"],
     ["{language}"],
     [],
     [],
     [],
     ["{session_id}", "{guest_session_id}"],
     ["{session_id}", "{guest_session_id}"],
     ["{language}"]],//"TV Episodes"
    [["{language}"]],//"TV Episode Groups"
    [["{language}"], ["{language}", "{watch_region}"], ["{language}", "{watch_region}"]],//"Watch Providers"
];
function checkcode(){
    console.log("ALL", pull1.length, pull2.length, urlList.length, queryList.length);
    for(var i=0;i<pull1.length;i++){
        console.log(pull1[i], pull2[i].length, urlList[i].length, queryList[i].length);
        for(var j=0;j<pull1.length;j++){
        
        }
    }
}
function generate_pullList(pullList){
    var str = "";
    for(var i=0;i<pullList.length;i++){
        str += '<option value=' + i + ">" + pullList[i] + "</option>";
    }
    return str;
}
