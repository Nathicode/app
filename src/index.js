if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log('sw registered');
        console.log(registration);
    }).catch(error => {
        console.log(error);
    })
}  

$('span').click(() => {
    $('.expand').fadeIn();
    $('.expand').css({
        display: 'block'
    });
  
    $('.expand button').click(() => {
        $('.expand').fadeOut();
        $('.expand').css({
            display: 'none'
        });
    })
   
       
});

$('#add').click(() => {
    let quest = document.querySelector('#question').value;

let answer = document.querySelector('#answer').value;


    let div = `<div id="card"><div class="borad"><h1>${quest}</h1></div><div class='hover'><img src='/images/326521_arrow_down_drop_icon (1).png' id='img'></img><div class='last'><h1 id='answers'>${answer}</h1></div></div></div>`;
  document.querySelector('#cards').innerHTML += div;
  let card = document.querySelectorAll('#card');

  
});
