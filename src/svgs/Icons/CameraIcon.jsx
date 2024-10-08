import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Svg,G,Path,Defs,ClipPath,Rect} from 'react-native-svg'

const CameraIcon = ({width,height,color}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_7221_112293)">
    <Path opacity="0.7" d="M15 10.0001L19.553 7.72412C19.7054 7.64795 19.8748 7.612 20.045 7.61967C20.2152 7.62733 20.3806 7.67837 20.5256 7.76792C20.6706 7.85748 20.7902 7.9826 20.8733 8.13139C20.9563 8.28019 20.9999 8.44773 21 8.61812V15.3821C20.9999 15.5525 20.9563 15.7201 20.8733 15.8688C20.7902 16.0176 20.6706 16.1428 20.5256 16.2323C20.3806 16.3219 20.2152 16.3729 20.045 16.3806C19.8748 16.3882 19.7054 16.3523 19.553 16.2761L15 14.0001V10.0001Z" fill="#1E5542"/>
    <Path d="M13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6Z" fill={color}/>
    </G>
    <Defs>
    <ClipPath id="clip0_7221_112293">
    <Rect width="24" height="24" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
    
  )
}

export default CameraIcon

const styles = StyleSheet.create({})