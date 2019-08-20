// $(".square").slideDown();
const songsNames = [
    'Los chicos no lloran',
    'Bambu',
    'Morena mía',
    'Manos vacías',
    'Aire soy',
    'Te amaré',
    'Y como un lobo',
    'Tu Salvación'
     ]

const red  = '<div class="square squareRed"></div>'
const green = '<div class="square squareGreen"></div>'
const buttonText = 'Enviar'
const button = `<button> ${buttonText}</button>`


$('body').append(red)
$('body').append(green)
$('body').append(red)
$('body').append(green)
$('body').append(red)
$('body').append(green)
$('.square').append(button)



$('button').on(("click"), (element)=>{
    $(element.target)
    .closest(".square")
    .slideUp();
})
