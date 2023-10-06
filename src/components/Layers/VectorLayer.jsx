import { useContext, useEffect, useState } from 'react'
import MapContext from './../Map/MapContext'
import OLVectorLayer from 'ol/layer/Vector'

const VectorLayer = ({ source, style, name, isClickable, zIndex = 0 }) => {
  const { map } = useContext(MapContext)

  const [vectorLayer, setVectorLayer] = useState(null)

  useEffect(() => {
    if (!map) return
    const vectorLayer = new OLVectorLayer({
      source,
      name,
      isClickable,
      style
    })

    map.addLayer(vectorLayer)
    vectorLayer.setZIndex(zIndex)

    /* guardamos en la variable vertoLayer del componente el vector layer creado desde el useEffectd */
    setVectorLayer(vectorLayer)

    return () => {
      if (map) {
        map.removeLayer(vectorLayer)
      }
    }
  }, [map])

  //   cambia solo el estilo cuando hay un cambio
  useEffect(() => {
    if (!map) return
    // console.log('cmbia estilo')

    if (vectorLayer) {
      vectorLayer.setStyle(style)
      // console.log('cambia estilo')
    }
  }, [style])

  return null
}

export default VectorLayer
