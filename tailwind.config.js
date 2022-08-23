module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rgba: "rgba(249, 243, 238,0.3)",
        "black-rgba": "rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        bg1: 'url("./img/bnaryshaxykosrat2.jpg")',
        bg2: 'url("https://images.pexels.com/photos/11924650/pexels-photo-11924650.jpeg?auto=compress&cs=tinysrgb&w=600")',
      },
      boxShadow: {
        insetShadow: "0 2px 4px 0 rgb(0 0 0 / 0.2) inset ",
      },
    },
  },
  plugins: [],
};
