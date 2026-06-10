



// logger ko use karne ka tareeqa (Global Level)
// Aap chahte hain ke jab bhi poori app mein kahin bhi koi bhi request aaye,
//  toh console mein print ho ke GET request aayi hai ya POST. 
//  Isliye isko server.js mein global lagayenge.Apni main server.js
//   file mein jayein aur yeh karein:



// server.js ke andar top par import karein
// import logger from "./middlewares/logger.js"; // ya jo bhi aapka sahi path hai

// // express.json() ke bilkul niche isko active kar dein
// app.use(express.json());
// app.use(logger); // 👈 Ab har single request pehle is logger se guzregi

// app.use('/api/v1', router);





// logger.js    → Log karo


const logger = (req, res, next) => {
  console.log(`${req.method} → ${req.url}`)
  next()
}

export default logger



