const sensor_ids = ['sensor-005','sensor-010','sensor-012','sensor-024','sensor-12345'];

const randomNumber = (min, max, decimalPlaces) => {
    var averageDbm = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min) * -1;  // could be min or max or anything in between
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(averageDbm*power) / power;
}

export const generateData = () => {
    const sensorData = [];
    let recordId = 1;
    for (let i = 0; i < 2000; i++) {
        const randomIndex = Math.floor(Math.random() * sensor_ids.length);
        const sensor_id = sensor_ids[randomIndex];
        let data = {
            "record_id": recordId,
            "sensor_id": sensor_id,
            "decibel_avg": randomNumber(1,200,1),
            "report_date": Math.round(generateReportDate())
        }
        console.log("Sensor Data: ", data);
        recordId++;
        sensorData.push(data);
    }
    console.log("Total data reports: ", sensorData.length);

    return sensorData;
}

const generateReportDate = () => {
    const reportDate = new Date('2024-11-01T01:00:00.271Z').getTime();
    const constructionDate = new Date(Date.now()).getTime();
    return (reportDate + Math.random() * (constructionDate - reportDate));
}