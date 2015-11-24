module.exports = {
    people: getPeople(),
    locations: getLocations()
};

function getPeople() {
    return [
        {id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
        {id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
        {id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
        {id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
        {id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
        {id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
        {id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'},
        {id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah'}
    ];
}

function getLocations() {
    return [
        {id: 1, name: 'Bandle City', key: 'bandle_city', temp_lower: 0, temp_upper: 0, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
        {id: 2, name: 'Bilgewater', key: 'bilgewater', temp_lower: 40, temp_upper: 80, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
        {id: 3, name: 'Demacia', key: 'demacia', temp_lower: 40, temp_upper: 80, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
        {id: 4, name: 'Freljord', key: 'freljord', temp_lower: 40, temp_upper: 80, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
        {id: 5, name: 'Ionia', key: 'ionia', temp_lower: 40, temp_upper: 80, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
        {id: 6, name: 'Noxus', key: 'noxus', temp_lower: 40, temp_upper: 80, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
        {id: 7, name: 'Piltover', key: 'piltover', temp_lower: 40, temp_upper: 80, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
        {id: 8, name: 'Shadow Isles', key: 'shadow_isles', temp_lower: 40, temp_upper: 80, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
        {id: 9, name: 'Shurima', key: 'shurima', temp_lower: 40, temp_upper: 80, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
        {id: 10, name: 'Zaun', key: 'zaun', temp_lower: 40, temp_upper: 80, wind_lower: 0, wind_upper: 10, cloud_lower: 0, cloud_upper: 0.6, precip_type: null, precip_lower: 0, precip_upper: 0.002 },
    ];
}
