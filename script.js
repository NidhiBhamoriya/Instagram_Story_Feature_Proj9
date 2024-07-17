
// var a= [1,2,3,4,5];
// var clustter=""
// // var clus

// a.forEach(function(elem, x){
//     // clustter+="hello"
//     // clus+="Z"
//     console.log("hee",x)
// })
// console.log(clustter)   //-->  o/p hellohellohellohellohello
// // console.log(clus)     //--> o/p undefinedhellohellohellohellohello  undefined 5 time hello


// var a=[
//     {dp:1,story:10},
//     {dp:2,story:20},
//     {dp:3,story:30},
//     {dp:4,story:40}
// ]
// var cluter="";        //    <->   var cluster=  
// var clustr=""  
// a.forEach(function(elem){
//     cluter += `${elem}`      
//     clutr+=`${elem.dp}`
// })
// console.log(cluter);     //o/p : [object Object][object Object][object Object][object Object]
// console.log(clustr);


//********************************************************************************* */

var arr=[
    {dp:"https://w0.peakpx.com/wallpaper/244/822/HD-wallpaper-nobita-yellow-dress-cartoon-cartoon.jpg",
     story:"https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg"},
    {dp:"https://wallpapercave.com/wp/wp2153412.jpg", story:"https://w7.pngwing.com/pngs/255/370/png-transparent-doraemon-war-tank-television-doraemon-doraemon-cartoon-flower-fictional-character-thumbnail.png"},
    {dp:"https://pbs.twimg.com/profile_images/1378571837542707204/wyKCDtGA_400x400.jpg", story:"https://www.jammable.com/_next/image?url=https%3A%2F%2Fimagecdn.voicify.ai%2Fmodels%2F4002ee07-58dd-4201-848f-4d490dbc48a4.png&w=640&q=100"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvQEtCGxp5nhJxuV0Db5NsUV0DvOugFc8Optpkm_Eqks8bxDq8SSqlA5EZMSsiZq2Uys&usqp=CAU", story:"https://i.pinimg.com/originals/b0/e0/e0/b0e0e00613bcd1c5dbe6fe36569df6aa.jpg"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliGfWS4vpKizdXwd-NjMd9vN5zcIpYrz6o3iBItOrbw&s", story:"https://i.pinimg.com/736x/01/69/e2/0169e238bdb33dafb6cdf9e4cd1ac8c4.jpg"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZB7btp6FKxTv1O4JvFwB2g_i12nvrFFsIg&usqp=CAU", story:"https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/437c71acfb294dc68cecd7c84827443f~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1739626271&x-signature=2ixF6AQgo8uhPuwsQteBxFY0erw%3D"},
]
var clutter=""          // var clutter
arr.forEach(function(elem, index){
    clutter+=`<div class="story">
                <img id="${index}" src=${elem.dp} alt="">                           
            </div>`                                            //<<------->>  "${elem.dp}""
})                                                          //<<------->>  hr img ko id di h index  0,1,2,3...
// console.log(clutter)

var storiyan= document.querySelector("#storiyan");
storiyan.innerHTML=clutter
// storiyan.textContent=clutter
// hm textContent nhi likh skte h kyo ki vh as the text lega and vhi print hoga, as tag nhi lega 

// ☝️  👉👉 comment code ko hm javaScript se likh diya -->


storiyan.addEventListener("click",function(dets){
    //console.log(dets);        // jb bhi storiyans m khi bhi click krege console pr ayega 👉PointerEvent means jb us element pr click kiya to us smy uske sath kya kya ghtna hui

    //console.log(dets.target);     //  ----> es se console pr jisko target kiya click kr ke vh particular chij hi mile gi

    //console.log(dets.target.id);     //  ---> ese storiyan ke div m kisi bhi chij ko click kro ge to uski id console pr dikhe gi    

    //console.log(arr[dets.target.id])           // arr m id as index de rhe h hm

    //console.log(arr[dets.target.id].story);             // jb hm storiyans ki particular story ko click kre ge tbhi is arr ke us particular element object ki stories mile gi ---> kyo ki target kiya h id fir usnki story ko

    //var goldenValue=arr[dets.target.id].story;   isko main use krna h dekho kese 👇

    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url( ${arr[dets.target.id].story})`      //  <----$ me likha h kyo ki backtick use kiya h hmne
    
    // story ko thodi der bad gayb krne ka code
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },2000)
});

