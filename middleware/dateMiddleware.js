export const currentDate = (req, res, next) => {
    const date = new Date();
req.currentDate = date.toISOString().split('T')[0];
    next();
  } 
  export const printCurrentDate = (req, res, next) => {
    if(req.method == GET) {
         console.log(`Current Date: ${req.currentDate}`);
    }
    next();
  }
  
