module.exports = {
  LEVELS : {
    1: {
      walls: [
        [0, 0, 0.01, 1],
        [0, 0.35, 0.2, 0.4],
        [0.2, 0.15, 0.25, 0.4],
        [0.2, 0.15, 0.75, 0.2],
        [0.4, 0.45, 0.45, 0.6],
        [0, 0.6, 0.6, 0.65],
        [0.7, 0.2, 0.75, 1],
        [0.5, 0.65, 0.55, 1]
      ],
      playerStart: {x: .05, y: .50},
      level_header: "But wait... I'm still trapped!",
      level_header_2: "I need to keep searching for the way out."
    },
    2: {
    walls: [
        [0.35, 0, 0.5, 0.05],
        [0.35, 0, 0.4, 0.3],
        [0.5, 0, 0.55, 0.3],
        [0, .25, .35, .3],
        [.25, .3, .3, .35],
        [.02, .3, .05, .95],
        [.05, .9, .6, .95],
        [.15, .4, .2, .75],
        [.2, .5, .3, .55],
        [.25, .55, .3, .6],
        [.35, .65, .4, .7],
        [.35, .4, .5, .5],
        [.4, .67, .6, .7],
        [.55, .25, .6, .3],
        [.6, .15, .8, .2],
        [.6, .2, .65, .4],
        [.5, .4, .65, .45],
        [.8, .15, .85, .4],
        [.7, .4, 1, .45],
        [.78, .45, .8, .5],
        [.63, .55, .95, .57],
        [.99, .45, 1, .5],
        [.6, .8, .61, 1],
        [.78, .65, .82, .9],
        [.61, .99, 1, 1],
        [.9, .57, .91, 1],
        [.91, .65, 1, .73]
      ],
      playerStart: {x: .45, y: .07},
      level_header: "OK, I think I know how to find my way now...",
      level_header_2: "But what was that? I thought I saw a shadow move over there..."
    },
    3: {
      walls: [
        [0, 0, 0.01, 1],
        [0, .85, .8, .9],
        [0, 0.6, 0.6, 0.65],
        [.8, 0.33, .85, .9],
        [.6, .2, .63, .65],
        [.6, .2, 1, .23],
        [.73, .3, .75, .85],
        [.75, .3, 1, .33]

      ],
      playerStart: {x: .03, y: .75},
      ghosts: [
        {x: .53, y: .57, active: true}, 
        {x: .06, y: .97, active: true},
        {x: .76, y: .8, active: true},
        {x: .7, y: .15, active: true},
      ],
      level_header: "Whew, glad they couldn't reach me. I think I'm getting close to escaping.",
      level_header_2: "But I hope there's no more of those shadows..."
    },
    4: {
      walls: [
        [0, .3, 0.75, .35],
        [0, 0.6, 0.6, 0.65],
        [0.55, .6, 0.6, 1],
        [0.7, .35, 0.75, 1]
      ],
      playerStart: {x: .05, y: .49},
      ghosts: [
        {x: .35, y: .55},
        {x: .67, y: .38}
      ],
      level_header: "That was close! I need to be more careful. Wait...",
      level_header_2: "It's really cold in here... I think I'm in trouble..."
    },
    5: {
      walls: [
        [0, 0, .18, 0.1],
        [.25, 0, 1, 0.1],
        [.1, .18, .14, .22],
        [.2, .18, .45, .22],
        [.1, 0, .14, .4],
        [.2, .22, .24, .4],
        [.41, .22, .45, .4],
        [.55, .18, .9, .22],
        [.55, .22, .59, .4],
        [.86, .22, .9, .4],
        [.1, .78, .45, .82],
        [.1, .6, .14, .8],
        [.41, .6, .45, .8],
        [.55, .78, .9, .82],
        [.55, .6, .59, .8],
        [.86, .6, .9, .8],
        [0, 0, 0.04, 1],
        [0, .96, 1, 1],
        [.96, 0, 1, 1],
        [.96, .55, 1, 1]
      ],
      playerStart: {x: .05, y: .5},
      ghosts: [
        {x: .05, y: .25},
        {x: .85, y: .15},
        {x: .15, y: .22},
        {x: .2, y: .04},
        {x: .5, y: .9},
        {x: .9, y: .9}
      ],
      level_header: "I don't think I'll ever escape this darkness!",
      level_header_2: "But what's this... A small ray of light..? Could it be...?"
    },
    6: {
      walls: [
        [0.35, 0, 0.4, 0.3],
        [0.5, 0, 0.55, 0.3],
        [0, .25, .35, .3],
        [.25, .3, .3, .35],
        [.02, .3, .05, 1],
        [.15, .4, .2, .55],
        [.2, .5, .3, .55],
        [.25, .55, .3, .6],
        [.25, .6, .4, .65],
        [.35, .65, .4, .7],
        [.35, .4, .5, .5],
        [.5, .68, .63, .7],
        [.55, .25, .6, .3],
        [.6, .15, .8, .2],
        [.6, .2, .65, .4],
        [.5, .4, .65, .45],
        [.8, .15, .85, .4],
        [.7, .4, 1, .45],
        [.78, .45, .8, .5],
        [.63, .55, .95, .57],
        [.7, .72, .74, .74],
        [.99, .45, 1, 1],
        [.6, .7, .61, 1],
        [.8, .65, .81, .9],
        [0, .99, 1, 1],
        [.9, .57, .91, 1],
      ],
      playerStart: {x: .45, y: .95},
      ghosts: [
        {x: .21, y: .45},
        {x: .18, y: .72},
        {x: .17, y: .75},
        {x: .16, y: .72},
        {x: .17, y: .7},
        {x: .94, y: .93},
        {x: .96, y: .94},
        {x: .75, y: .24},
      ]
    },
  }
} 
  
window.wallColor = { color: "#fff" };
// window.wallColor = { color: "#000" };