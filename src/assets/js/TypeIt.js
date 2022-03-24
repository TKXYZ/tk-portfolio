console.log("Inside TypeIt.js");

// TypeIt (https://www.typeitjs.com/docs/vanilla/usage)
new TypeIt("#test1", {
  strings: "This will be typed!",
  speed: 100,
  lifeLike: true,
  cursor: true,
  cursorSpeed: 1000,
  cursorChar: "|",
  loop: true,
}).go();

// new TypeIt('#test2', {
//   speed: 45
// })
//   .type('The programers')
//   .pause(300)
//   .options({ speed: 200 })
//   .delete(3)
//   .options({ speed: 45 })
//   .pause(300)
//   .type('mer\'s wife sent him to teh sto.', { delay: 400 })
//   .move(-5, { delay: 200 })
//   .delete(2, { delay: 200 })
//   .type('he', { delay: 200 })
//   .move(null, { to: 'END' })
//   .pause(500)
//   .options({ speed: 200 })
//   .delete(7)
//   .type('he store.')
//   .pause(500)
//   .break()
//   .options({ speed: 45 })
//   .type('Her instructions were <em>"Buy butter. See if they have 10 eggs. If they do, buy ten.</em>"')
//   .pause(1000)
//   .break({ delay: 1000 })
//   .type('He came back with ten packs of butter. ')
//   .pause(1000)
//   .type('Because they have eggs.')
//   .go();
