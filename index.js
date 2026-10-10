var users=[
     {
        "name" : "Suresh",
        "gender" : "Male",
        "image" : "myimage.png"
     },
     {
       "name":"Jane",
       "gender":"Female",
       "image":"jane.png"
     }
]
var index=0;
function toggle(){
    if(index==0)
        index=1;
    else
        index=0;
    document.getElementById("username").innerText=users[index].name;
    document.getElementById("usergender").innerHTML=users[index].gender;
    document.getElementById("userimage").src=users[index].image;

}

function random(){
    fetch("https://randomuser.me/api")
    .then(function(rawData){
         return rawData.json();
    })
    .then(function(jsonData){

        var user=jsonData.results[0];
        var gender =user.gender;
        var img=user.picture.thumbnail;
        var fullName = user.name.title+" "+user.name.first+" "+user.name.last;
        document.getElementById("username").innerText=fullName;
        document.getElementById("usergender").innerText=gender;
        document.getElementById("userimage").src=img;


    })
}