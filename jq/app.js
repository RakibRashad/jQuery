$(function(){
    //*jqureycode

    let hideBtn = $('.hide')
    let img = $('.img')
    let showBtn = $('.show')
    let toggleBtn = $('.toggle')
    
    hideBtn.click(function(){
        img.fadeOut(1000) })

    showBtn.click(function (){
        img.slideDown(1000) })

    toggleBtn.hover(function(){
        img.slideToggle(1000)
    })


})