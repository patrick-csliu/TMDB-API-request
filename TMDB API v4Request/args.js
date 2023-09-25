const pull1 = [
    "Account", "List",
];
const pull2 = [
    ["Get Lists", "Get Favorite Movies", "Get Favorite TV Shows", "Get Movie Recommendations", "Get TV Show Recommendations", "Get Movie Watchlist",
     "Get TV Show Watchlist", "Get Rated Movies", "Get Rated TV Shows"],//Account
    ["Get List", "Create List", "Update List", "Clear List", "Delete List", "Add Items", "Update Items", "Remove Items", "Check Item Status"],//List
];
const urlList = [
    ["/account/{account_id}/lists", "/account/{account_id}/movie/favorites", "/account/{account_id}/tv/favorites", "/account/{account_id}/movie/recommendations",
     "/account/{account_id}/tv/recommendations", "/account/{account_id}/movie/watchlist", "/account/{account_id}/tv/watchlist", "/account/{account_id}/movie/rated",
     "/account/{account_id}/tv/rated"],//Account
    ["/list/{list_id}", "/list", "/list/{list_id}", "/list/{list_id}/clear", "/list/{list_id}", "/list/{list_id}/items", "/list/{list_id}/items",
     "/list/{list_id}/items", "/list/{list_id}/item_status"],//List
];
const queryList = [
    [["{page}"],
     ["{page}", "{sort_by}"],
     ["{page}", "{sort_by}"],
     ["{page}", "{sort_by}"],
     ["{page}", "{sort_by}"],
     ["{page}", "{sort_by}"],
     ["{page}", "{sort_by}"],
     ["{page}", "{sort_by}"],
     ["{page}", "{sort_by}"],],//Account
    [["{page}", "{api_key}", "{language}", "{sort_by}"],
     [],
     [],
     [],
     [],
     [],
     [],
     [],
     ["{media_id}", "{media_type}"],],//List

];
const requestMethod = [
    ["GET", "GET", "GET", "GET", "GET", "GET", "GET", "GET", "GET"],
    ["GET", "POST", "PUT", "GET", "DELETE", "POST", "PUT", "DELETE", "GET"],
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
