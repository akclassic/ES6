// classical js
/*
var devices = [
    {id:1 , type: "HDD", capacity: 64},
    {id:2 , type: "SSD", capacity: 32},
    {id:3 , type: "flash Drive", capacity: 16}
];

var allDevicesstore32GBormore = true;
var someDevicesstore16GBormore = false;

for(var device = 0 ;device< devices.length; device++){
    if(devices[device].capacity < 32 ){
        allDevicesstore32GBormore = false;
    }else{
        someDevicesstore16GBormore = true;
    }
}
console.log('all devices store 32 GB or more:', allDevicesstore32GBormore);
console.log('some devices store 16 GB or more:', someDevicesstore16GBormore);
*/

//es6
const devices = [
    {id:1 , type: "HDD", capacity: 64},
    {id:2 , type: "SSD", capacity: 32},
    {id:3 , type: "flash Drive", capacity: 16}
];

const allDevicesstore32GBormore = devices.every(device => device.capacity >=32);
const someDevicesstore16GBormore = devices.some(device => device.capacity >=32);

console.log('all devices store 32 GB or more:', allDevicesstore32GBormore);
console.log('some devices store 16 GB or more:', someDevicesstore16GBormore);
