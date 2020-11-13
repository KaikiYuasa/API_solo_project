
function requestAPI(){

    console.log(form.input1.value);
    fetch('http://localhost:3001/api/' + form.input1.value)
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        console.log(JSON.stringify(result,null,2));
        document.getElementById('span1').textContent = JSON.stringify(result,null,2);
        return result;
    })
}

function display(){
    requestAPI()

    return true;
}