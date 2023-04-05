import React from 'react'

export default function Albums() {
  return (
    <div>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Albums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Harry Styles</td>
            <td>Three Studio's</td>
          </tr>
          <tr>
            <td scope='row'>Taylor Swift</td>
            <td>Fearless</td>
          </tr>
          <tr>
            <td scope='row'>Zayn Malik</td>
            <td>Midnight Memories</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}