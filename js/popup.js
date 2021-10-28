console.log('working')

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
document.getElementById('btn2').addEventListener('click',downinpplay)

function downinp() {
    let data
    let x = document.getElementById('inpsingleurl').value
    
    if (x != '')
    {
      data = {'url': x}
    }
    else{
      data = {'url' : null}
    }
    senddata(data)
}
function downinpplay() {
  let data
  let x = document.getElementById('inpplaylisturl').value
  if (x != '')
    {
      data = {'url': x}
    }
    else{
      data = {'url' : null}
    }
    senddata(data)
}

var url = 'http://127.0.0.1:8000'
function senddata(data){
  console.log(data)
  if(data.url != null){
        let json_data = JSON.stringify(data)
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
            
          })
            .catch (function (error) {
            document.getElementById('status').innerText = 'Something is Wrong'
            // console.log('Request failed', error);
            });
    }
    else{
      document.getElementById('status').innerText = "Please Enter the Url"
      
    }

}
document.getElementById('btn1').addEventListener('click',showmsg)

function showmsg(){
  
  document.getElementById('status').setAttribute('class','active')
  
}