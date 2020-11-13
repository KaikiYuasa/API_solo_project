
function requestAPI(){

    const num = form.typeSelect.selectedIndex;
    const str = form.typeSelect.options[num].value;

    if(str =="GET"){
        document.getElementById('span1').textContent = "";
        fetch('http://localhost:3001/api/' + form.input1.value)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            document.getElementById('span1').textContent = JSON.stringify(result,null,2);
            return result;
        })
    } else if (str == "POST"){
        const method = "POST";
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          };
        const body = JSON.stringify(JSON.parse(form.input2.value));
        document.getElementById('span1').textContent = "";
        fetch('http://localhost:3001/api/' + form.input1.value,{
            method,headers,body
        })
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            document.getElementById('span1').textContent = JSON.stringify(result,null,2);
            return result;
        })
    }else if (str == "PATCH"){
        const method = 'PATCH';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          };
        const body = JSON.stringify(JSON.parse(form.input2.value));
        document.getElementById('span1').textContent = "";
        fetch('http://localhost:3001/api/' + form.input1.value,{
            method,headers,body
        })
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            document.getElementById('span1').textContent = JSON.stringify(result,null,2);
            return result;
        })
    } else if (str == "DELETE"){
        const method = 'DELETE';
        document.getElementById('span1').textContent = "";
        fetch('http://localhost:3001/api/' + form.input1.value,{
            method
        })
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            document.getElementById('span1').textContent = JSON.stringify(result,null,2);
            return result;
        })
    }
}

function display(){
    requestAPI()

    return true;
}