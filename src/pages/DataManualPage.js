import React from 'react'
import { DataManualResources } from '../assets/data/DataManualResources'

const DataManualPage = () => {
  return (
    <div className='dasboard_page_container'>
      <div className='writeup_container'>




          <div className='data_manual_table_container'>
            <table className='item_table'>
              <thead>
                <tr>
                  <th>Dataset</th>
                  <th>Source</th>
                  <th>Period of Availablity</th>
                  <th>Spatial Resolution</th>
                  <th>Data Source Link</th>
                  <th>Data Description</th>

                </tr>
              </thead>
              <tbody>
                {DataManualResources.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Dataset}</td>
                    <td dangerouslySetInnerHTML={{ __html: item.Source }}></td>
                    <td dangerouslySetInnerHTML={{ __html: item.PeriodOfAvailablity }}></td>
                    <td dangerouslySetInnerHTML={{ __html: item.SpatialResolution }}></td>
                    <td><a href={item.SourceLink} target="_blank" without="true" rel="noreferrer">{item.SourceLink}</a> </td>
                    <td dangerouslySetInnerHTML={{ __html: item.DataDescription }}></td>
                  </tr>
                ))}



              </tbody>
            </table>



        </div>



      </div>
    </div>
  )
}

export default DataManualPage