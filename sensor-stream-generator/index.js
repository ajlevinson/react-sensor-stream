import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const sensor_ids = ['sensor-005','sensor-010','sensor-012','sensor-024','sensor-12345'];

const randomNumber = (min, max, decimalPlaces) => {
    var averageDbm = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min) * -1;  // could be min or max or anything in between
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(averageDbm*power) / power;
}

const generate = () => {
    let sensorStream = [];
    for (let i = 0; i < 1000; i++) {
        const randomIndex = Math.floor(Math.random() * sensor_ids.length);
        const sensor_id = sensor_ids[randomIndex];
        let data = {
            "sensor_id": sensor_id,
            "decibel_avg": randomNumber(1,200,1),
            "report_date": Math.round(generateReportDate())
        }
        console.log("Sensor Data: ", data);
        sensorStream.push(data);
    }
    console.log("Total data reports: ", sensorStream.length);

    return sensorStream;
}

const generateReportDate = () => {
    const reportDate = new Date('2024-11-01T01:00:00.271Z').getTime();
    const constructionDate = new Date(Date.now()).getTime();
    return (reportDate + Math.random() * (constructionDate - reportDate));
}

app.get('/sensors', (req, res) => {
    res.send(generate());
});

app.listen(4000, () => {
    console.log('Listening on port 4000.');
})