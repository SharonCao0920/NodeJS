const express = require('express');
const getDevice = express.Router();

// create endpoint to collects the device information, 
// and do the simple javascript to find out if the device 
// is windows or mac or linux
getDevice.get('/get-device', (req, res) => {

    const whatDeviceIsThis = req.header('User-Agent');

    //set default flags to false
    let isWindows = false;
    let isMac = false;
    let isLinux = false;
    
    // If the device is windows, send a flag: isWindows = true
    if (whatDeviceIsThis.includes('Windows')) {
      isWindows = true;
    } 
    // if the device is mac, send a flag: isMac = true
    else if (whatDeviceIsThis.includes('Macintosh')) {
      isMac = true;
    }  
    // if the device is linux, send a flag: isLinux = true
    else if (whatDeviceIsThis.includes('Linux')) {
      isLinux = true;
    }
    //otherwise, send compete information and return
    else {
        res.send({whatDeviceIsThis});
        return
    }

    res.send({
        isWindows,
        isMac,
        isLinux   
     });
})
    
module.exports = getDevice;