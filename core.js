
class Location {
    constructor(id, name, address, octime, rate, lat, long, type, district) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.octime = octime;
        this.rate = rate;
        this.lat = lat;
        this.long = long;
        this.type = type;
        this.district = district;
    }
}

let loc = new Location(1000, 'Cora Cafe', '24 Hòa Mã', '07:00 AM - 11:00 PM', 7.2, 21.01583815, 105.8561032,'coffee','hai ba trung');
let loc1 = new Location(1001, 'Pattern Coffee', "108 K2 Bách Khoa, Ngõ 48 Tạ Quang Bửu", '07:00 AM - 10:00 PM', 7.5, 21.001128, 105.849237,'coffee','hoan kiem');
let loc2 = new Location(1002, 'Starbucks Coffee', '314 Bà Triệu,Hai Bà Trưng', '07:00 AM - 11:30 PM', 7.9, 21.01068, 105.849047,'coffee','hai ba trung');
let loc3 = new Location(1003, 'Kàffe Cây Xăng', "101 E5, Ngõ 29 Tạ Quang Bửu", '08:00 AM - 11:00 PM', 7.1, 21.00184004, 105.8494467,'coffee','hoan kiem');
let loc4 = new Location(1004, 'Greecy - Coffee & Cake', '10 Ngõ 84 Trần Đại Nghĩa', "08:00 AM - 11:00 PM", 6.6, 20.99939609, 105.8453174,'coffee','hai ba trung');
let loc5 = new Location(1005, 'Urban Station Coffee Takeaway', '61 Quang Trung', '07:00 AM - 10:00 PM', 7.6, 21.017249, 105.847081,'coffee','hoan kiem');
let loc6 = new Location(1006, 'Bay Coffee & Tea', '48 Nguyễn Bỉnh Khiêm', "08:00 AM - 11:00 PM", 7.1, 21.015371, 105.848556,'coffee','hoan kiem');
let loc7 = new Location(1007, 'Highlands Coffee - Vincom Bà Triệu', "Tầng 1, Vincom Bà Triệu, 191 Bà Triệu", "08:00 AM - 10:00 PM", 7.3, 21.011441, 105.850038,'coffee','hai ba trung');
let loc8 = new Location(1008, 'Anh Hòa Bakery & Coffee', '48 Trần Đại Nghĩa', '07:00 AM - 11:00 PM', 6.4, 21.00171484, 105.8449808,'coffee','hoan kiem');
let loc9 = new Location(1009, 'Fika Café', '50 Lò Đúc', '07:00 AM - 11:00 PM', 7.5, 21.01608, 105.8563678,'coffee','hai ba trung');
let loc10 = new Location(1010, 'Sky1991 - Coffee & Hot Dog', '111K2 Ngõ 48 Tạ Quang Bửu', "08:00 AM - 11:00 PM", 7.0, 21.00098366, 105.8490054,'coffee','hoan kiem');

let locations = [loc, loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9, loc10];

function findLoc(long,lat,type,r){
    let tempLoc = locations.slice(0)
    let results = [];
    tempLoc.forEach((loc)=>{
        if ( loc['type'] === type ){
            let distance = haversine(lat,long,loc['lat'],loc['long']);
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

exports.findLoc = findLoc;
exports.findLocInDistrict = findLocInDistrict;