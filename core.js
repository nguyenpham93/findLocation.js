let locations = [
    {
        'id' : 1,
        'name' : 'A restaurant',
        'long' : 50.15,
        'lat' : -60.56,
        'type' : 'restaurant',
        'district' : 'hoan kiem'
    },
    {
        'id' : 2,
        'name' : 'B restaurant',
        'long' : 80.12,
        'lat' : -90.17,
        'type' : 'restaurant',
        'district' : 'hai ba trung'
    },
    {
        'id' : 3,
        'name' : 'book store 1',
        'long' : 35.23,
        'lat' : -65.66,
        'type' : 'book',
        'district' : 'hoan kiem'
    },
    {
        'id' : 4,
        'name' : 'book store 2',
        'long' : 87.78,
        'lat' : -112.54,
        'type' : 'book',
        'district' : 'hai ba trung'
    }
];


function findLoc(long,lat,type,r){
    let tempLoc = locations.splice(0)
    let results = [];
    tempLoc.forEach((loc)=>{
        if ( loc['type'] === type ){
            let distance = haversine(long,lat,loc['long'],loc['lat']);
            loc['distance'] = distance;
            if(distance <= r){
                results.push(loc);
            }
        }        
    });
    sorting(results);
    return results;
}

function findLocInDistrict(type,district){
    let results = [];
    locations.forEach((loc)=>{
        if ( loc['type'] === type && loc['district'] === district){
            results.push(loc);
        }        
    });
    return results;
}

function sorting(list){  
    var len = list.length;
    for (var i = 0; i < len; i++) {
        var tmp = list[i];
        for (var j = i - 1; j >= 0 && (list[j]['distance'] > tmp['distance']); j--) {
            list[j + 1] = list[j];
        }
        list[j + 1] = tmp;
    }
}

function haversine() {
       var radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
       var lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
       var R = 6372.8; // km
       var dLat = lat2 - lat1;
       var dLon = lon2 - lon1;
       var a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
       var c = 2 * Math.asin(Math.sqrt(a));
       return R * c;
}

let temp = findLoc(20,32,'book',10000);
console.log(temp);