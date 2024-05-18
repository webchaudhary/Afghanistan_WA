import React from 'react';

const TableView = ({ tableHeaders, tableBody }) => {
    // Function to download table data as CSV
    const downloadCsv = () => {
        // Start the CSV content with the headers
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += tableHeaders.join(",") + "\r\n"; // Add headers

        // Add the row data
        tableBody.forEach(row => {
            const rowContent = row.join(",");
            csvContent += rowContent + "\r\n";
        });

        // Create a link and trigger the download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "table_data.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className='chart_download_btn'>
                <button onClick={downloadCsv}>Download CSV</button>
            </div>
            <div className='item_table_container'>
                <table className='item_table'>
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableView;
