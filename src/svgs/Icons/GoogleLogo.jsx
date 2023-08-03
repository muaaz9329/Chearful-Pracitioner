import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Svg , Path ,G ,Rect ,ClipPath , Defs} from 'react-native-svg'

const GoogleLogo = ({width,height,color}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M23.52 12.2729C23.52 11.422 23.4436 10.6038 23.3018 9.81836H12V14.4602H18.4582C18.18 15.9602 17.3345 17.2311 16.0636 18.082V21.0929H19.9418C22.2109 19.0038 23.52 15.9274 23.52 12.2729Z" fill={color}/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.9998C15.24 23.9998 17.9564 22.9252 19.9418 21.0925L16.0636 18.0816C14.9891 18.8016 13.6145 19.2271 12 19.2271C8.87455 19.2271 6.22909 17.1161 5.28546 14.2798H1.27637V17.3889C3.25091 21.3107 7.30909 23.9998 12 23.9998Z" fill={color}/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M5.28545 14.2799C5.04545 13.5599 4.90909 12.7908 4.90909 11.9999C4.90909 11.209 5.04545 10.4399 5.28545 9.71993V6.61084H1.27636C0.463636 8.23084 0 10.0636 0 11.9999C0 13.9363 0.463636 15.769 1.27636 17.389L5.28545 14.2799Z" fill={color}/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.77273C13.7618 4.77273 15.3436 5.37818 16.5873 6.56727L20.0291 3.12545C17.9509 1.18909 15.2345 0 12 0C7.30909 0 3.25091 2.68909 1.27637 6.61091L5.28546 9.72C6.22909 6.88364 8.87455 4.77273 12 4.77273Z" fill={color}/>
</Svg>

  )
}

export default GoogleLogo

const styles = StyleSheet.create({})