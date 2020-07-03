jQuery(".city-nav-list").slide({
    type: "menu",
    titCell: "dd",
    targetCell: "ul",
    delayTime: 0,
    defaultPlay: false,
    returnDefault: true
});

jQuery(".city-slide").slide({
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    delayTime: 800
});