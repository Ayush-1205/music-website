let audioElement=new Audio('song/1.mp3');
let songindex=0;
let masterplay=document.getElementById('masterplay');
let myprogress=document.getElementById('myprogress');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"let me love you",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},{songName:"Na na",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},{songName:"Oo jaane jaana",filePath:"song/1.mp3",coverPath:"covers/3.jpg"},{songName:"9 2 11",filePath:"song/2.mp3",coverPath:"covers/4.jpg"},{songName:"dil meri na sune",filePath:"song/1.mp3",coverPath:"covers/5.jpg"}
]
let mastersong=document.getElementById('mastersong');
songitems.forEach((element,i)=>{
    console.log(element,i);
   // element.getElementsByTagName("img")[0].src=songs[i].filePath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
       audioElement.play();
       masterplay.classList.remove('fa-play');
       masterplay.classList.add('fa-pause'); 
       gif.style.opacity=1;
       
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
        makeallplays();
    }
})
audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogress.value=progress;
})
myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value*audioElement.duration/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })  
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        if(audioElement.paused||audioElement.currentTime<=0){
            songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`song/${songindex+1}.mp3`;
        mastersong.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
            
         }
         else{
             audioElement.pause();
             masterplay.classList.remove('fa-pause');
             masterplay.classList.add('fa-play');
             gif.style.opacity=0;
             makeallplays();
         }
        /*songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`song/${songindex+1}.mp3`;
        mastersong.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');*/
        
    })
})
document.getElementById('previous').addEventListener('click',()=>
{
    songindex--;
    if(songindex<0)
    {
        songindex=4;
    }
    audioElement.src=`song/${songindex+1}.mp3`;
    mastersong.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})
document.getElementById('forward').addEventListener('click',()=>
{
    songindex++;
    if(songindex>4)
    {
        songindex=0;
    }
    audioElement.src=`song/${songindex+1}.mp3`;
    mastersong.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})