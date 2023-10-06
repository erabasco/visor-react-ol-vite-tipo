import React from 'react'
import './App.css'
import Map from './components/Map'

import { Layers, TileLayer } from './components/Layers'
import osm from './components/Source/osm'
import { fromLonLat } from 'ol/proj'

const App = () => {
  return (
    <div className='app-container'>
      <div className='map-container'>
        <Map center={fromLonLat([-3.8196251, 40.4381311])} zoom={14}>
          <Layers>
            <TileLayer
              source={osm()}
              title='OpenStreetMap'
              type='base'
              visible
            />
          </Layers>
        </Map>
      </div>
    </div>
  )
}

export default App
