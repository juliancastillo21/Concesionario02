import React from 'react'
import VehicleList from './VehicleList'

const Catalogue =()=>{
    const vehicles=[
        {
           id: 4,
           urlImagen:'https://estaticos.elcolombiano.com/documents/10157/0/1004x565/112c0/780d565/none/11101/FICA/image_content_25061817_20160101220021.jpg',
           name:'JOY SEDÁN',
           description:'carro muy bonito',
           price: 61.990100, 
        },
        {
            id:5,
            urlImagen:'https://img.remediosdigitales.com/38b6fe/jeep-wrangler-y-gladiator-high-altitude-2-/840_560.jpg',
            name:'JOY HB',
            description:'carro muy feo',
            price: 59.990000, 
        },
        {
            id:6,
            urlImagen:'https://estaticos.elcolombiano.com/documents/10157/0/980x476/100c0/780d476/none/11101/OIET/image_content_25061789_20160101214142.jpg',
            name:'ONIX TUTBO SEDÁN',
            description:'carro normal  ',
            price: 75.89900, 
        },
        {
            id:7,
            urlImagen:'https://estaticos.elcolombiano.com/documents/10157/0/780x585/0c10/780d565/none/11101/EIKH/image_content_25061816_20160101220021.jpg',
            name:'ONIX TURBO HB',
            description:'carro usado ',
            price: 80.990000, 
        }
    ];
    return <VehicleList vehicles={vehicles}/>;
}

export default Catalogue
