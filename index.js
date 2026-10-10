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