const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,
  
  html: {
    htmlmin: {
      collapseWhitespace: isProd
    },
  },
  
  pug: {
    pugs: {
      pretty: isDev,
      data: {
        news: require('../data/news.json')
      }
    }
  },
  
  webpack: {
    mode: isProd ? "production" : "development",
  },
  
  imagemin: {
    verbose: true
  },
  
  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  }
}