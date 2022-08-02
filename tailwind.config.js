module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      colors:{
        'purple':'#C9BBCF',
        'green':'#1F441E',
        'rgba':'rgba(249, 243, 238,0.3)',
        'black-rgba':'rgba(0,0,0,0.5)',
        'border':'rgb(204, 214, 166,0.9)',
        'bluesky':'rgb(211, 228, 205,0.5)',
        'whitee':'rgb(211, 235, 205,0.5)'
      },
      backgroundImage:{

        'spring':'url("https://images.ctfassets.net/3s5io6mnxfqz/AUWonAVxQhoFqxggae3eR/80c49fc106c3c57c1d78610f1fd1a1f6/bird-s-eye-view-of-pine-trees-3312678.jpg")',
        'sea':'url("https://images.pexels.com/photos/386148/pexels-photo-386148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
       'tree':'url("https://videohive.img.customer.envatousercontent.com/files/a8c77ba2-a56b-41f1-9d0b-20876e0ce0c7/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=7b0dc2168acb811d9a166be666b2744a")'
      },
      backgroundSize:{
        '100':'100%',
      },
      spacing: {
        '50%': '47%',
        '55%':'55%',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '22': 'repeat(2, minmax(0, 3fr))',
      },
      boxShadow: {
        'blackk': '5px 5px 3px #F1F1F1,-5px -5px 3px #F1F1F1 ',
        'left-shadow':'0 5px 7px black',
      },
      
    },
  },
  plugins: [],
}

