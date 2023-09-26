const express = require('express');
const getUser = express.Router();

// Create a post request '/getuser', and sent this information, whatever data is send in the payload, you should send the same response.
getUser.post('/getUser', (req, res) => {
    // Retrieve data from the request body
    const { Name, LoginId, SISId, Section } = req.body;

    // Create a response object with the same data
    const user = {
        Name,
        LoginId,
        SISId,
        Section
    };

    // Send the response with the same data
    res.json(user);
})  

module.exports = getUser;
