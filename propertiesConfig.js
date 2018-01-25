const faker = require('faker');

const generateProperties = () => {
    let properties = [];
    for (let id = 0; id < 5; id++) {
        let thumbnail = faker.random.image();
        let address = faker.address.streetAddress();
        let addressDetail = faker.address.secondaryAddress();
        let beds = faker.random.number()%10;
        let bathrooms = faker.random.number()%10;
        let cars = faker.random.number()%10;
        let ID = faker.lorem.words();
        let price = faker.random.number()%1000;
        let bond = faker.random.number()%10000;
        let available = faker.date.recent();
        let applications = faker.random.number();
        let shortlisted = faker.random.number();
        let total = faker.random.number();
        let type = faker.lorem.words();
        properties.push({
            "thumbnail": thumbnail,
            "address": address,
            "addressDetail": addressDetail,
            "beds": beds,
            "bathrooms": bathrooms,
            "cars": cars,
            "ID": ID,
            "price": price,
            "bond": bond,
            "available": available,
            "applications": applications,
            "shortlisted": shortlisted,
            "total": total,
            "type": type,
        })
    }
    return {"properties": properties}
};

module.exports =  generateProperties;