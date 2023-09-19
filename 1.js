var tl = gsap.timeline()
tl.from(".nav img, .nav h3, .nav h4, .nav button",{
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.2
})

tl.from(".main h1",{
    y: 100,
    opacity: 0,
    stagger: 0.2
})
tl.from(".main #left-img, .main #rigth-img, .main #top-img, .main #bottom-img",{
    y: 100,
    scale: 0,
    opacity: 0,
    duration: 0.5,
    rotate: 360,  
    stagger: 0.3
})
tl.from(".footer",{
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 1
})