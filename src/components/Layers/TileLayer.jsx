import { useContext, useEffect } from 'react'
import MapContext from '../Map/MapContext'
import OLTileLayer from 'ol/layer/Tile'

const TileLayer = ({ source, zIndex = 0, title, type = null, visible = false, attributions = false }) => {
  const { map } = useContext(MapContext)

  useEffect(() => {
    if (!map) return

    const tileLayer = new OLTileLayer({
      visible,
      title,
      source,
      type,
      zIndex
    })

    map.addLayer(tileLayer)
    tileLayer.setZIndex(zIndex)

    return () => {
      if (map) {
        map.removeLayer(tileLayer)
      }
    }
  }, [map])

  return null
}

export default TileLayer
