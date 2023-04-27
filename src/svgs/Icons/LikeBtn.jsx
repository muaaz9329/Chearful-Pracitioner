import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Svg,Path} from  'react-native-svg'
const LikeBtn = ({width,height,color}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M13.7608 7.15284L7.51083 13.3428L1.26083 7.15284M1.26083 7.15284C0.848585 6.75168 0.523866 6.26952 0.30712 5.7367C0.0903746 5.20389 -0.0137016 4.63196 0.00144489 4.05695C0.0165914 3.48194 0.150633 2.91629 0.395128 2.39562C0.639624 1.87495 0.989276 1.41055 1.42207 1.03166C1.85486 0.65276 2.36142 0.36758 2.90984 0.194073C3.45826 0.0205668 4.03667 -0.0375073 4.60864 0.0235072C5.18061 0.0845218 5.73375 0.263304 6.23323 0.548595C6.73271 0.833886 7.1677 1.21951 7.51083 1.68117C7.85544 1.22286 8.29094 0.840607 8.79008 0.558343C9.28922 0.27608 9.84124 0.0998806 10.4116 0.0407727C10.982 -0.0183352 11.5584 0.0409211 12.1048 0.214833C12.6512 0.388744 13.1559 0.673567 13.5871 1.05148C14.0184 1.42938 14.367 1.89224 14.6112 2.41108C14.8553 2.92992 14.9898 3.49358 15.0061 4.06676C15.0224 4.63995 14.9202 5.21033 14.7059 5.74221C14.4917 6.2741 14.1699 6.75602 13.7608 7.15784" fill={color}/>
    </Svg>

  )
}

export default LikeBtn

const styles = StyleSheet.create({})