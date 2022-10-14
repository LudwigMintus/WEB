
function GetData(YVal,XVal,RVal){
    fetch(`main.php?Y=${YVal}&X=${XVal}&R=${RVal}`, {
        method: "Get",
        mode: "no-cors",
        headers: {"Content-Type": "application/json"},
    }).then(response => {
        return response.json();
    })
        .then(data => {
            let localData = JSON.parse(localStorage.getItem('Answer'))
            if (localData == null) {
                let Storage = [];
                Storage.push(data);
                localStorage.setItem('Answer', JSON.stringify(Storage));
            }else{
                let Storage = [];
                for (let i = 0; i < localData.length; i++){
                Storage.push(localData[i]);
                }
                Storage.push(data);
                localStorage.setItem('Answer', JSON.stringify(Storage));
            }
            window.open("Answer.html");
        });

}
function Validator(YVal,XVal,RVal){
    if((-4 > Number(YVal) || Number(YVal) > 6) || YVal === ""){
        document.querySelector('.leftChart').innerHTML =
            `
                <a>Вы ввели не коректные значения для Y (-3,5)</a>
                `
        return 0;
    } else if (XVal === "Ошибка"){
        document.querySelector('.leftChart').innerHTML =
            `
                <a id="X">Выберите значения X</a>
                `
        return 0;
    } else if (RVal === "Ошибка"){
        document.querySelector('.leftChart').innerHTML =
            `
                <a id="Y">Выберите значения R</a>
                `
        return 0;
    }else {
        document.querySelector('.leftChart').innerHTML =
            `
                <a id="Y">Вы ввели коректные данные</a>
                <p><img src="Screenshot 2022-09-16 at 10.04.22.png" alt="Письма мастера дзен"></p>
                `
        GetData(YVal,XVal,RVal);
    }


}
verify.onclick = function() {
    var YVal = document.getElementById('YInput').value;
    var XVal = document.getElementById('XSelect').value;
    var RVal = document.getElementById('RSelect').value;
    Validator(YVal,XVal,RVal);
};
clean.onclick = function (){
    localStorage.clear();
}



