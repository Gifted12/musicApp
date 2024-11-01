/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}" ],
  theme: {
    extend:{
      fontFamily:{
        "popping":[
          'Poppins',
          'sans-serif'
        ]
      },
      keyframes:{
        'transLeft':{
          "0%":{right:'100%', top:'0%'},
          "100%":{right:'-100%', top:'0%'}
        }
      },

    },

    // animation:{
    //   myAnimation:{
        // "0%":{right:'100%', top:'0%'},
        // "100%":{right:'-100%', top:'0%'}
    //   }
        
    // }
      // Keyframe:{

      // }
    // #091057
    // #024CAA
    // #EC8305
    // #DBD3D3
       },
       plugins: [
        require("tailwindcss-animate"),
        // ...
      ],
}
