import React, { useRef, useState, useEffect } from 'react'
import './Map.css'

import MapContext from './MapContext'
import * as ol from 'ol'

function Map ({ children, zoom, center }) {
  const mapRef = useRef()
  const [map, setMap] = useState(null)

  // on component mount
  useEffect(() => {
    console.log('Monta mapa')
    const options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: []
    }

    const mapObject = new ol.Map(options)
    mapObject.setTarget(mapRef.current)
    setMap(mapObject)

    return () =>
      mapObject.setTarget(undefined)
  }, [])

  // zoom change handler
  useEffect(() => {
    if (!map) { return }
    console.log('carga zoom')

    map.getView().setZoom(zoom)
  }, [zoom])

  // center change handler
  useEffect(() => {
    if (!map) { return }
    console.log('ccarga center')

    map.getView().setCenter(center)
  }, [center])

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className='ol-map'>

        {children}
      </div>
    </MapContext.Provider>
  )
}

export default Map
