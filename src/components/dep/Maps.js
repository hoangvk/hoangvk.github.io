import React, {useState} from 'react'
import {ComposableMap, Geographies, Geography, Marker, Annotation, XoomableGroup, ZoomableGroup} from "react-simple-maps";
import {Tooltip} from "react-tooltip";

const markers = [
    {
        markerOffset: -22,
        name: "HAN",
        coordinates: [105.5, 20.5],
        description: "I was born in Hanoi and I spent the first 17 years of my life growing up here."
    },
    {
        markerOffset: 11,
        name: "SGN",
        coordinates: [107, 11],
    },
    {
        markerOffset: -22,
        name: "PEK",
        coordinates: [116, 39.5],
    },
    {
        markerOffset: -22,
        name: "PVG",
        coordinates: [120.5, 30],
    },
    {
        markerOffset: 10,
        name: "HGH",
        coordinates: [118, 29],
    },
    {
        markerOffset: -30,
        name: "SZV",
        coordinates: [119, 30.2],
    },
    {
        markerOffset: 8,
        name: "BKK",
        coordinates: [100.5, 13],
    },
    {
        markerOffset: -29,
        name: "YYZ",
        coordinates: [-79.5, 43.2],
    },
    {
        markerOffset: -22,
        name: "YKF",
        coordinates: [-80.5, 42.8],
    },
    {
        markerOffset:-22,
        name: "YVR",
        coordinates: [-123.7, 49.5],
    },
    {
        markerOffset:6,
        name: "YYJ",
        coordinates: [-124, 48.9],
    },
    {
        markerOffset: 14,
        name: "YXX",
        coordinates: [-121, 49],
    },
    {
        markerOffset:-29,
        name: "YVE",
        coordinates: [-118, 50.5],
    },
    {
        markerOffset: -31,
        name: "YUL",
        coordinates: [-74, 45],
    },
    {
        markerOffset: -39,
        name: "YOW",
        coordinates: [-76, 44.8],
    },
    {
        markerOffset: -30,
        name: "BOS",
        coordinates: [-70.8, 42],
    },
    {
        markerOffset: 8,
        name: "JFK",
        coordinates: [-74.5, 41],
    },
    {
        markerOffset: 14,
        name: "PHL",
        coordinates: [-75.5, 40.2],
    },
    {
        markerOffset: 18,
        name: "IAD",
        coordinates: [-78, 38.3],
    },
    {
        markerOffset: 14,
        name: "SAN",
        coordinates: [-116.5, 32.5],
    },
    {
        markerOffset: 8,
        name: "LAX",
        coordinates: [-117.4, 33.2],
    },
    {
        markerOffset: -20,
        name: "SFO",
        coordinates: [-122.5, 38.5],
    },
]

function Maps() {
  const [content, setcontent] = useState(" "); 
  const [description, setdiscription] = useState(" ");

  return (
    <div class = "travelled-map" >
      <Tooltip>{content}</Tooltip>
      <Tooltip>{description}</Tooltip>
      <ComposableMap data-tip=''>
        {/* <ZoomableGroup zoom={1}> */}
        <Geographies geography="/world.json">
            {({geographies}) =>
                geographies.map((geo) => (
                    <Geography 
                        key={geo.rsmKey} 
                        geography={geo} 
                        onMouseEnter={() => {
                            // const {name} = geo.properties;
                            // setcontent(`${name}`);
                            setcontent(`${geo.properties.name}`);
                        }}
                        onMouseLeave={() => {setcontent (" ");}}
                        style={{hover: {fill: "#B6FFFA", outline: "none", cursor: "pointer"}}}
                    />
                ))
            }
        </Geographies>
        {
            markers.map(({name, coordinates, markerOffset, description}) => (
                <Marker key={name} coordinates={coordinates}>
                    {/* <circle r={2} fill='#F53' stroke = "#fff" strokeWidth ={1}/>
                    <text textAnchor="middle" y ={markerOffset} style={{fontFamily: "system-ui", fill: "#687EFF", fontSize:"10px", fontWeight:"bold"}}> */}
                    <g
                        fill="none"
                        stroke="#F53"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                        onMouseEnter={() => 
                            setdiscription(description)}
                        onMouseLeave={() => setdiscription(" ")}
                    >
                        <circle cx="12" cy="10" r="2" />
                        <path d="M12 21.7C15 17 17 13 17 10a5 5 0 1 0-10 0c0 3 2 7 5 11.7z" />

                    </g>
                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "Quicksand", fill: "#808080", fontSize:"10px", fontWeight:"bold", cursor:"default"}}
                    >    
                        {name}
                    </text>
                </Marker>
        ))}
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </div>
  )
}

export default Maps
