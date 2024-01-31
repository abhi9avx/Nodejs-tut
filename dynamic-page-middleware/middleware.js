// middleware.js
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("please provide age");
    } else if (req.query.age < 18) {
        resp.send("You cannot access this page , You are under- age");
    } else {
        next();
    }
};

module.exports = reqFilter;
