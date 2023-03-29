const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

anime
  .timeline({
    loop: true,
  })
  .add({
    targets: '.text span',
    translateY: [-600, 0], // start val - end val
    scale: [10, 1], // start val - end val
    opacity: [0, 1], // start val - end val
    easing: 'easeOutExpo',
    duration: 1500,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text span',
    translateX: [0, -1000], // start val - end val
    scale: [1, 1], // start val - end val
    opacity: [1, 0], // start val - end val
    easing: 'easeOutExpo',
    duration: 2000,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text span',
    translateX: [1000, 0], // start val - end val
    scale: [1, 1], // start val - end val
    opacity: [0, 1], // start val - end val
    easing: 'easeOutExpo',
    duration: 2000,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text span',
    translateX: [0, 0], // start val - end val
    scale: [1, 50], // start val - end val
    opacity: [1, 0], // start val - end val
    easing: 'easeOutExpo',
    duration: 2000,
    delay: anime.stagger(100),
  });
