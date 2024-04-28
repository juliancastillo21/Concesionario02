import React from 'react'
import { ScrollView } from 'react-native'
import Vehicle from './Vehicle'

const VehicleList = ({vehicles}) => {
  
  return (
    <ScrollView>
     {vehicles.map((vehicle)=> (
        <Vehicle
            key={vehicle.id}
            name={vehicle.name}
            urlImagen={vehicle.urlImagen}
            description={vehicle.description}
            price={vehicle.price}
        />
     ))}
    </ScrollView>
  )
}

export default VehicleList

