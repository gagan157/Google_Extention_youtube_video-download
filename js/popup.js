console.log('working')

// document.getElementById('newstopic').addEventListener('click',showval)

// function showval() {
//     // console.log('clikc')
//     var topicvalue = document.getElementById('newstopic').value
//     console.log(topicvalue)  
//     if (topicvalue!=='')
//     {  
//         fetch(`https://newsapi.org/v2/top-headlines?language=en&country=in&category=${topicvalue}&apiKey=cf0e3928ac1c47d094aa2d5153ed2828`)
//         .then(response => response.json())
//         .then(data => {
//             let articals = data.articles
//             let html=''
//             articals.forEach(function(elemnet,index) {
               
//                 if (index<10)
//                 {
//                     title=elemnet.title
//                     url=elemnet.url
//                     // console.log(index,title)
//                     html+=`<li>${title} <b>click link for Read more..</b></li>
//                     <span><a href="${url}">${url}</a></span>`                  
//                     document.getElementById('shownews').innerHTML=html
//                 }
//             })
//         });
//     }
// }
document.getElementById('btnsingleurl').addEventListener('click',showinp)
document.getElementById('btnplaylisturl').addEventListener('click',showplayinp)
function showinp() {
    document.getElementById('single').setAttribute("class","active")
    document.getElementById('btnsingleurl').setAttribute("class","d-none")
    
}
function showplayinp() {
    document.getElementById('playlist').setAttribute("class","active")
    document.getElementById('btnplaylisturl').setAttribute("class","d-none")
    
}

document.getElementById('btn1').addEventListener('click',downinp)

function downinp() {
    let x = document.getElementById('inpsingleurl').value
    let data={'url': x}
   
    senddata(data)
}

var url = 'http://127.0.0.1:8000'
function senddata(data){
  let json_data = JSON.stringify(data)
  console.log(json_data)
  let header={'Content-Type': 'application/json; charset=UTF-8'}
  let response =  fetch(`${url}/api/`, {
    method: 'POST',
    headers: header,
    body: json_data
    
  })
  .then(response => response.json())
    .then(data => {
      
      document.getElementById('status').innerText = data['vdinfo'] ,data['downstatus']
      document.getElementById('vidstatus').innerText = data['downstatus']
      
      console.log(data);
    })
      .catch (function (error) {
      document.getElementById('status').innerText = 'Url Wrong please Enter the Correct url'
      console.log('Request failed', error);
      });

}
document.getElementById('btn1').addEventListener('click',showmsg)

function showmsg(){
  let url = document.getElementById('inpsingleurl').value
  if(url != ''){
    document.getElementById('status').setAttribute('class','active')
  }
  // else{
  //   document.getElementById('status').setAttribute('class','active')
  //   document.getElementById('status').innerText = 'Please Enter Url'
  // }
}