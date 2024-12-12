import React, { useMemo,useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const SensorGrid = () => {
    useEffect(() => {
        const interval = setInterval(() => {

            fetch('http://localhost:4000/sensors') // Fetch data from server
                .then((result) => result.json())
                .then((rowData) => setRowData(rowData)); // Update state of `rowData`
        }, 30000);

        return () => clearInterval(interval);
    });


    const [rowData, setRowData] = useState([
    ]);

    const defaultColDef = useMemo(() => {
        return {
            filter: true,
            flex: 1,
            minWidth: 75,
        };
    }, []);

    const [colDefs] = useState([
        {headerName: "Record Id", field: "record_id"},
        {headerName: "Sensor Id", field: "sensor_id"},
        {headerName: "Average Dbm", field: "decibel_avg"},
        {headerName: "Report Date", field: "report_date"}
    ]);

    console.log("Row Data is: ",rowData);

    return (
        <div className="ag-theme-quartz"
            style={{ height:500}} >

             <AgGridReact
                 rowData={rowData}
                 columnDefs={colDefs}
                 defaultColDef={defaultColDef}
                 pagination={true}
             />
        </div>
    );
}

export default SensorGrid;
