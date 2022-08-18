module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#C9BBCF",
        green: "#1F441E",
        rgba: "rgba(249, 243, 238,0.3)",
        "black-rgba": "rgba(0,0,0,0.1)",
        border: "rgb(204, 214, 166,0.9)",
        bluesky: "rgb(211, 228, 205,0.5)",
        whitee: "rgb(211, 235, 205,0.5)",
        nature: "#C4DFAA",
        blue: "#C3DBD9",
        bluetox: "#3F4E4F",
        greentox: '#377D71'
      },
      backgroundImage: {
        bluebg: 'url("https://www.thespruce.com/thmb/pyo7TjAXYYhAPUOiAjrMSOBCnJg=/4268x2845/filters:fill(auto,1)/types-of-leaf-arrangements-3269814-03-a6b9b4775c5b47b79e14aed9a7e6ac90.jpg")',
        spring: 'url("https://images.ctfassets.net/3s5io6mnxfqz/AUWonAVxQhoFqxggae3eR/80c49fc106c3c57c1d78610f1fd1a1f6/bird-s-eye-view-of-pine-trees-3312678.jpg")',
        sea: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80")',
        tree: 'url("https://cdn.britannica.com/26/152026-050-41D137DE/Sunshine-leaves-beech-tree.jpg")',

        'bg1': 'url("./img/bnaryshaxykosrat2.jpg")',
        'bg2': 'url("https://images.pexels.com/photos/11924650/pexels-photo-11924650.jpeg?auto=compress&cs=tinysrgb&w=600")'

      },
      backgroundSize: {
        100: "100%",
      },
      spacing: {
        "50%": "47%",
        "55%": "55%",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        22: "repeat(2, minmax(0, 3fr))",
      },
     boxShadow:{
      insetShadow:'0 2px 4px 0 rgb(0 0 0 / 0.2) inset '
     }
    },
  },
  plugins: [],
};