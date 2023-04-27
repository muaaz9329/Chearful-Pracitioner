import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Svg , Path ,G ,Rect ,ClipPath , Defs,Circle} from 'react-native-svg'

const CongratsImg = ({width,height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_8606_166306)">
    <Rect width="80" height="80" rx="40" fill="#FAFAFA"/>
    <Circle cx="40" cy="40" r="40" fill="#FAFAFA"/>
    <Path d="M34.7603 57.5715L21.3631 65.8994L14.8456 78.9345H29.329L34.0361 77.1241V83.5L46.347 88.5L57.9337 78.9345L57.2096 63.3649L52.1404 59.744L48.5195 63.3649L46.347 54.6748L40.1915 55.7611L34.7603 57.5715Z" fill="#98BB6D"/>
    <Path d="M40.916 26.4323C41.3961 24.8548 41.8475 23.8974 43.0885 22.8115C45.985 20.2769 47.1353 17.0679 51.7785 16.294C56.1233 15.5698 56.4854 18.4665 57.9338 18.4665C58.6408 18.4665 58.7342 18.0248 59.3823 17.7423C61.3093 16.9022 64.4515 19.5527 64.4515 19.5527C64.4515 19.5527 67.0443 22.8372 67.7103 25.3461C68.5753 28.6048 68.0722 30.0532 67.3482 33.312C67.2111 33.9293 66.6288 34.1279 66.624 34.7603C66.6172 35.6656 67.6403 35.7749 68.0722 36.5707C68.8412 37.9877 68.3198 38.905 67.3482 40.1916C66.9866 40.6704 66.7701 40.9017 66.2617 41.2778C64.3869 42.6647 65.5435 44.6485 64.4515 46.7091C63.6036 48.3092 62.9377 49.1609 61.5548 50.33C59.8646 51.7589 58.69 52.6661 56.4856 52.8646C54.6067 53.0337 53.4483 52.6564 51.7785 51.7783C49.8316 50.7545 49.034 49.6134 47.7956 47.7954C46.9055 46.4887 47.3236 45.1478 45.985 44.1745C45.2616 43.6486 44.9351 43.559 44.1747 43.0883C42.9724 42.344 42.0605 41.6044 42.0022 40.1916C41.9579 39.1156 42.8852 38.7145 43.0885 37.657C43.5698 35.1536 41.2921 34.0228 40.916 31.5015C40.6238 29.5436 40.3396 28.3262 40.916 26.4323Z" fill="white"/>
    <Path d="M63.0024 60.1062L57.5711 63.727V78.9346L79.2962 79.2967V77.1242L84.3654 79.2967H99.573H112.97L100.297 53.2266L98.4867 55.3991L92.6934 55.7612L90.1588 54.3128L94.1417 66.9858L77.1237 56.8474L66.2612 54.3128V63.727L63.0024 60.1062Z" fill="#98BB6D"/>
    <Path d="M0 79.2965L15.5697 49.6055L16.6559 53.9505L21.0009 57.2093H24.6218L15.5697 79.2965H0Z" fill="#98BB6D"/>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M84.5711 45.655C87.752 46.7585 90.8681 48.0946 93.8471 49.6313C94.2111 48.9359 94.5804 48.2359 94.9511 47.5417C91.8688 45.9499 88.644 44.5662 85.3544 43.4237C85.0917 44.1628 84.829 44.9105 84.5711 45.655ZM83.6832 46.0899C83.6353 45.9919 83.6285 45.8788 83.6643 45.7756C84.01 44.7722 84.3652 43.7597 84.7197 42.7663C84.7953 42.5556 85.0249 42.4447 85.2369 42.5164C88.829 43.7416 92.3482 45.2521 95.6965 47.0058C95.7931 47.0565 95.866 47.1439 95.8977 47.2487C95.9301 47.3533 95.9193 47.4665 95.8673 47.563C95.369 48.4941 94.8694 49.4395 94.3832 50.3731C94.3096 50.5131 94.1678 50.5932 94.02 50.5932C93.9565 50.5932 93.8917 50.5782 93.8316 50.5466C90.6595 48.8866 87.3246 47.457 83.9189 46.2977C83.8162 46.2625 83.7312 46.1877 83.6832 46.0899ZM121.713 16.4088C121.036 15.7572 120.28 15.4532 119.408 15.4855C117.236 15.5603 115.119 17.6921 114.783 18.0446C114.718 18.1784 114.652 18.3134 114.585 18.4496C116.23 17.278 118.843 15.8057 120.457 16.8616C121.318 17.4247 121.775 18.46 121.678 19.6309C121.566 20.9904 120.618 22.8066 118.294 23.8268C117.104 24.3494 115.926 24.6597 114.786 24.9597C114.344 25.076 113.916 25.1888 113.506 25.3093C113.617 25.2962 113.731 25.2832 113.845 25.2699C114.999 25.1369 116.306 24.9859 117.909 24.573C120.265 23.9659 122.279 22.1339 122.807 20.1178C123.061 19.1502 123.077 17.7213 121.713 16.4088ZM109.234 28.9672C109.334 28.6007 109.449 28.2649 109.571 27.9568C108.443 29.5276 108.625 31.3427 109.484 32.4562C109.808 32.8776 110.278 33.2364 110.846 33.3635C110.592 33.2001 110.351 32.9978 110.132 32.7575C109.198 31.7336 108.862 30.3166 109.234 28.9672ZM116.436 12.5042C115.208 9.8493 110.717 6.67222 105.41 4.72212C101.438 3.26322 98.03 2.88968 96.234 3.70954C95.6006 5.1878 90.1848 17.9818 90.6608 22.3885C90.8067 23.7428 91.4792 24.8402 92.3529 25.7142C93.2813 24.3889 96.0071 24.2691 98.8302 25.4936C101.653 26.7183 103.431 28.7927 103.104 30.3788C104.337 30.419 105.595 30.1592 106.68 29.3391C110.191 26.6849 115.747 14.0891 116.436 12.5042ZM98.5054 26.2461C97.2346 25.6947 96.0551 25.4551 95.1057 25.4551C93.972 25.4551 93.1665 25.7966 92.9241 26.3571C92.6142 27.0763 93.2901 28.0625 94.6223 28.9893L95.1604 27.6223C95.18 27.572 95.2097 27.5262 95.2468 27.4873C95.8856 26.827 97.1435 27.0416 98.0267 27.4261C98.9294 27.8186 99.8774 28.5639 99.8328 29.4782C99.8301 29.5318 99.8173 29.5845 99.7944 29.6331L99.1684 30.962C100.755 31.3011 101.934 31.1204 102.245 30.4013C102.69 29.3711 101.293 27.4556 98.5054 26.2461ZM99.0138 29.3699C98.9713 28.9879 98.4379 28.4985 97.7012 28.1781C96.9511 27.8517 96.1941 27.7873 95.8849 28.0137L93.8937 33.0745C94.4784 32.9612 95.0422 32.9531 95.4899 33.1524C95.8295 33.3038 96.2529 33.7297 96.6972 34.2882L99.0138 29.3699ZM95.1577 33.9016C94.2752 33.5089 92.2611 34.4756 91.5021 34.8396L91.3387 34.9179C91.0734 35.0439 90.7466 35.5938 90.4691 36.2021C91.0241 35.8698 91.5008 35.6594 91.7648 35.6594C91.9741 35.6594 92.2894 35.7402 92.6621 35.8708L93.2536 35.3911C93.4285 35.2487 93.6864 35.2757 93.8282 35.4519C93.9423 35.5927 93.947 35.7858 93.8552 35.9304L94.7377 36.774C95.6445 37.2166 96.4629 37.6582 96.7552 37.8178C96.9531 37.9262 97.0267 38.1753 96.9187 38.3741C96.8099 38.573 96.5621 38.6459 96.3636 38.5378C95.2367 37.9221 93.6446 37.1255 92.6277 36.7279C92.6047 36.7212 92.5818 36.7127 92.5602 36.7018C92.1983 36.5632 91.9154 36.4792 91.7648 36.4792C91.4819 36.4941 90.7256 36.944 89.9431 37.5269C89.9363 37.5321 89.9289 37.5372 89.9221 37.5424C89.8877 37.5806 89.8465 37.6118 89.8006 37.6344C89.2753 38.0348 88.7507 38.4866 88.3597 38.8993C89.3219 38.4915 90.3664 38.2543 90.8256 38.2543C90.8276 38.2543 90.8289 38.2543 90.831 38.2543C91.2989 38.2559 94.1658 39.5971 95.8336 40.3964C96.0375 40.4941 96.1239 40.7389 96.026 40.9431C95.9288 41.1477 95.6837 41.2333 95.4811 41.1362C93.465 40.1696 91.18 39.1403 90.8127 39.0742C90.1605 39.0817 87.9634 39.7323 87.3077 40.521C87.1882 40.6647 86.9721 41.0218 86.7919 41.3374C87.1328 41.4591 87.4772 41.5851 87.8222 41.7144C87.8438 41.658 87.8763 41.6051 87.9235 41.5611C88.5778 40.9479 89.7344 40.4896 90.33 40.4896C91.1389 40.4896 93.6358 42.0085 94.3819 42.4741C94.5737 42.5938 94.6317 42.8465 94.5129 43.0388C94.4352 43.1636 94.3015 43.2322 94.1651 43.2322C94.0915 43.2322 94.0166 43.2121 93.9497 43.1702C92.5156 42.2753 90.7236 41.3094 90.33 41.3094C89.9951 41.3094 89.1767 41.6096 88.6399 42.0268C89.5764 42.3903 90.5001 42.7695 91.357 43.1378C93.0767 43.8772 94.9045 44.7323 96.4858 45.5751C96.8491 45.1402 97.2475 44.2811 97.1914 43.6419C97.1799 43.5132 97.2299 43.3865 97.3258 43.3003C97.735 42.9334 98.0827 41.7383 97.9861 41.4364C97.9227 41.2382 97.7593 40.9017 97.5959 40.5877C97.4568 40.3201 97.3177 40.0688 97.2407 39.9336C97.1286 39.7372 97.1968 39.4868 97.3926 39.3743C97.5885 39.2617 97.8389 39.3302 97.9504 39.5267C97.9855 39.5874 98.1624 39.9002 98.3474 40.258C98.5864 39.8995 98.7924 39.4734 98.7289 39.241C98.5601 38.6196 96.0976 34.3203 95.1577 33.9016ZM81.1552 40.7096C81.1404 40.7096 81.1249 40.7096 81.11 40.71C80.2552 41.7786 79.3308 43.6204 79.0006 45.2604C79.6677 45.215 80.6556 45.4855 81.8628 45.9069C83.6542 46.5318 86.0606 47.5635 88.7918 48.7484C91.5224 49.9335 93.92 50.9861 95.6006 51.8675C96.7208 52.4551 97.5864 52.9864 98.0152 53.4994C98.9949 52.1764 99.9854 49.5271 99.8767 48.8685C98.4439 46.7484 84.5286 40.7096 81.1552 40.7096ZM99.3514 53.8208L99.0712 53.3638C98.7917 53.8242 98.5081 54.2172 98.2475 54.4856L98.2468 54.487C98.2333 54.5191 98.2157 54.5596 98.1806 54.6055C98.6276 54.3794 99.0253 54.1166 99.3514 53.8208ZM96.9835 55.0872C96.3751 55.201 95.4649 55.2952 94.0936 55.3357C94.0895 55.3357 94.0855 55.3359 94.0814 55.3359C94.024 55.3359 93.9673 55.3238 93.9153 55.3004L91.6075 54.2717L92.2151 55.3933C93.7276 55.692 95.4906 55.558 96.9835 55.0872ZM94.1618 54.5131C95.494 54.4688 97.0307 54.3106 97.4669 54.1278C97.3751 53.9556 96.9402 53.4696 94.9072 52.4316C93.2664 51.5937 91.0194 50.6087 88.4664 49.501C85.9141 48.3932 83.6596 47.4254 81.9277 46.7996C79.7224 46.0031 79.0952 46.0399 78.9271 46.0937C79.0263 46.4515 79.6738 47.4441 80.4328 48.394L94.1618 54.5131ZM89.8161 19.3852C89.6757 19.6851 89.5096 19.9987 89.3124 20.3233C88.5852 21.5186 87.3253 22.2429 85.9411 22.2612C85.9242 22.2614 85.9073 22.2614 85.8905 22.2614C85.5832 22.2614 85.2875 22.2234 85.0093 22.153C85.4901 22.4817 86.0735 22.5799 86.6042 22.5287C88.0012 22.3944 89.4454 21.2848 89.8161 19.3852ZM84.6319 18.4767C84.5171 18.7429 84.5124 19.038 84.6191 19.3076C84.7251 19.5773 84.9303 19.7891 85.1957 19.9043C85.4617 20.0197 85.7554 20.024 86.0248 19.9174C86.2936 19.8106 86.5049 19.6053 86.6197 19.3391C86.7345 19.0729 86.7392 18.778 86.6325 18.5083C86.5258 18.2387 86.3213 18.0267 86.0559 17.9115C85.9175 17.8517 85.7716 17.8216 85.6258 17.8216C85.5549 17.8216 85.484 17.8292 85.4131 17.8435C85.3982 17.8485 85.3827 17.853 85.3672 17.8563C85.3672 17.8563 85.303 17.8712 85.2058 17.9082C84.9472 18.0174 84.744 18.2179 84.6319 18.4767ZM92.6169 10.6537C92.5507 9.04027 92.0119 5.06358 90.2388 4.6304C89.5359 4.45872 88.7702 4.74149 88.1902 5.38622C87.436 6.2234 86.8904 7.85073 87.6183 9.90779C88.0316 11.0749 88.5974 12.1202 89.1443 13.131C89.7027 14.1622 90.2422 15.1618 90.5467 16.1844C90.5487 16.1915 90.5514 16.1984 90.5528 16.2057C90.6028 16.374 90.6466 16.543 90.6817 16.7129C91.2064 14.7446 91.9086 12.6208 92.6169 10.6537ZM89.0471 14.6966C88.8546 14.3146 88.6433 13.9245 88.4259 13.522C87.8641 12.4835 87.2828 11.4097 86.8479 10.182C85.9992 7.78534 86.671 5.84932 87.5825 4.83687C88.3685 3.96461 89.434 3.58985 90.4319 3.83376C92.2813 4.28535 92.995 6.98911 93.2691 8.88573C93.3292 8.72623 93.3893 8.56857 93.4488 8.41308C93.4751 7.95051 93.5683 5.22449 92.2246 3.68023C91.648 3.01742 90.8661 2.656 89.9019 2.60577C88.0106 2.50862 86.9857 3.49718 86.4563 4.34459C85.351 6.11049 85.3976 8.83685 86.5691 10.9746C87.3665 12.429 88.1511 13.4876 88.8438 14.4214C88.9127 14.5147 88.9809 14.6063 89.0471 14.6966ZM95.4805 3.39171C95.5115 3.31873 95.5338 3.26817 95.5446 3.24285C95.5824 3.15593 95.6493 3.08491 95.733 3.04186C97.7194 2.02467 101.349 2.35692 105.691 3.95229C110.434 5.69477 115.85 8.96567 117.26 12.3447C117.303 12.4471 117.302 12.5625 117.258 12.6645C117.247 12.6899 117.226 12.7406 117.194 12.8137C117.706 12.6367 118.051 12.3597 118.213 11.9868C118.618 11.0475 117.863 9.58522 116.14 7.97482C114.29 6.24473 111.561 4.54943 108.453 3.20121C105.346 1.85299 102.244 1.01784 99.7194 0.849682C99.4122 0.829238 99.1178 0.819151 98.8376 0.819151C96.9767 0.819151 95.7363 1.2652 95.3846 2.08153C95.2232 2.45433 95.259 2.89672 95.4805 3.39171ZM114.578 24.1667C115.687 23.8746 116.835 23.5727 117.966 23.0757C119.961 22.2 120.77 20.6871 120.863 19.5632C120.934 18.6974 120.616 17.9442 120.01 17.5483C118.479 16.5469 115.024 19.0383 113.731 20.1567C112.778 22.0223 111.713 23.9733 110.645 25.6744C110.875 25.5155 111.118 25.3746 111.37 25.2465C111.384 25.2383 111.399 25.2309 111.414 25.2246C112.362 24.7514 113.452 24.463 114.578 24.1667ZM113.78 31.124C113.891 30.8644 113.898 30.5777 113.8 30.3136C113.76 30.2192 113.729 30.1639 113.728 30.1622C113.72 30.1491 113.712 30.1356 113.706 30.122C113.591 29.9341 113.422 29.7858 113.216 29.6964C112.951 29.5814 112.656 29.5765 112.387 29.6834C112.118 29.79 111.907 29.9954 111.792 30.2615C111.555 30.8108 111.808 31.4513 112.356 31.6892C112.903 31.9268 113.542 31.6735 113.78 31.124ZM65.7342 52.6457C65.3641 51.8459 64.3885 51.4709 63.8692 51.3232C63.9273 51.7603 63.9968 52.2038 64.0806 52.6168C64.1494 52.5483 64.2433 52.5039 64.348 52.4989C64.5721 52.4838 64.7646 52.6623 64.7754 52.8886C64.7848 53.0876 64.9435 57.0444 62.8598 59.7439C62.9091 59.7433 62.957 59.7454 63.0023 59.7504C64.0846 59.8709 65.2885 61.3212 66.0137 62.3474C66.2291 59.9581 66.5998 54.5181 65.7342 52.6457ZM60.8018 60.5618C60.8288 60.5266 60.8619 60.4949 60.901 60.4692C63.1427 58.9977 63.7491 56.0244 63.9077 54.2829C63.7747 54.2542 63.6579 54.1602 63.6079 54.0219C63.1677 52.7953 62.9496 50.6958 62.8557 49.4978C62.5323 49.8568 62.165 50.2208 61.745 50.5818C61.6465 50.6668 61.5485 50.7486 61.452 50.8285C60.2359 52.3566 58.2394 54.4907 56.2077 55.0522C53.8856 55.7036 51.2455 54.0386 50.3738 53.4209C50.4015 53.9984 50.4002 54.5616 50.3482 55.0349C50.3266 55.2302 50.1706 55.3765 49.9836 55.3958C50.5953 56.5434 51.8107 58.3595 54.0294 60.1678C55.3454 60.9536 56.8923 62.3346 57.5959 62.9885C58.2367 62.428 59.5526 61.3252 60.8018 60.5618ZM52.1969 59.63C49.4407 56.9362 48.6953 54.5432 48.6609 54.4286C48.5954 54.2119 48.7182 53.9831 48.9343 53.9178C49.1497 53.8529 49.3779 53.9749 49.4434 54.1913C49.4454 54.1988 49.4826 54.3152 49.5663 54.519C49.6034 53.6419 49.5042 52.5354 49.3941 51.6403C48.9795 51.6537 47.8229 51.752 47.1828 52.4237C46.8418 52.7817 46.6987 53.2488 46.7446 53.8516C46.91 56.0057 48.1322 60.7776 48.6291 62.6541C49.4684 61.6387 51.0329 59.9164 52.1969 59.63ZM22.1227 56.8751C22.1322 56.8673 22.1419 56.8596 22.1522 56.8525L25.9358 54.2431C25.975 54.2161 26.0187 54.1961 26.0647 54.184C27.6539 53.77 30.5089 52.1499 31.3141 51.6382C31.3202 51.6343 31.3262 51.6307 31.3323 51.6273C32.1426 51.1691 33.3181 51.0309 34.2627 50.92C34.7077 50.8677 35.1277 50.8182 35.3012 50.7524C35.4794 50.6843 35.7759 50.2409 35.8177 49.7681C35.8245 49.6921 35.8366 49.4391 35.7158 49.3665C34.7563 48.8044 32.0838 48.4111 31.1351 48.3071C30.9103 48.2825 30.7483 48.0802 30.7732 47.8551C30.7975 47.6299 31.0001 47.4663 31.2236 47.4921C31.3546 47.5063 34.1115 47.8138 35.6368 48.4245C35.8366 48.1227 36.2222 47.4226 35.8386 46.9985C35.3795 46.4916 32.5099 45.6619 30.6193 45.2349C30.3992 45.185 30.2608 44.9657 30.3104 44.7447C30.3601 44.5239 30.5782 44.3846 30.7989 44.435C31.4586 44.584 34.3093 45.2518 35.7461 45.9752C35.9683 45.2703 36.0311 44.4348 35.5814 44.0045C34.6077 43.0689 31.2364 42.5147 30.0196 42.3799C29.7951 42.355 29.6332 42.1525 29.658 41.9275C29.6827 41.7024 29.8849 41.5386 30.1093 41.565C30.4965 41.6078 33.3566 41.9463 35.1358 42.7678C35.2877 42.1767 35.4092 41.3328 35.2208 40.9296C34.6813 40.3265 29.2011 40.0954 25.4912 41.1834C25.2745 41.2466 25.0473 41.1224 24.9839 40.9051C24.9206 40.6878 25.0448 40.4601 25.2616 40.3965C25.5234 40.3197 25.8078 40.2476 26.1094 40.1805C25.6439 38.8748 25.5786 37.9106 25.5218 37.0583C25.4761 36.3712 25.4365 35.7779 25.2049 35.0881C24.7601 33.7704 23.8837 32.425 23.0066 32.5791C22.8028 32.6154 22.8292 32.9839 23.0123 34.0728C23.1792 35.0665 23.4078 36.4274 23.2513 38.0387C23.2395 38.2365 23.2387 38.5391 23.2378 38.8895C23.2347 40.0583 23.2298 41.8246 22.7464 42.9954C22.2733 44.141 21.4959 45.4035 20.7442 46.6244C19.9266 47.9524 19.0811 49.3256 18.6223 50.5493L18.6205 50.5531C18.6134 50.5714 18.6052 50.5895 18.5953 50.607C18.5946 50.6082 18.5937 50.6095 18.593 50.6108C18.5844 50.6255 18.5748 50.6397 18.5643 50.6534C18.5614 50.6571 18.5587 50.6608 18.5556 50.6646C18.5536 50.6671 18.5519 50.6697 18.5497 50.6721L16.7702 52.7494C17.076 53.2215 17.4482 53.682 17.8608 54.1148L18.0855 54.3127C18.0811 54.3188 18.0768 54.3246 18.0724 54.3306C18.4768 54.7323 18.9137 55.1059 19.3623 55.4371C19.5921 55.6069 19.8247 55.7661 20.0575 55.9116C20.7735 56.3592 21.4735 56.6823 22.1227 56.8751ZM123.598 20.326C122.999 22.6166 120.743 24.6894 118.112 25.367C116.455 25.7941 115.06 25.955 113.939 26.0844C112.831 26.2123 111.959 26.3131 111.234 26.6007C110.847 27.1299 110.354 27.978 110.022 29.1854C109.725 30.2612 109.992 31.3897 110.735 32.2042C111.277 32.7977 111.97 33.0923 112.606 33.0049C112.845 32.8594 113.053 32.7056 113.23 32.5438C113.084 32.5791 112.935 32.5983 112.783 32.5983C112.531 32.5983 112.276 32.548 112.031 32.4417C111.069 32.0242 110.625 30.9 111.041 29.9359C111.243 29.4687 111.615 29.1083 112.087 28.9209C112.558 28.7337 113.075 28.7418 113.541 28.9439C114.007 29.1461 114.366 29.5181 114.553 29.9914C114.558 30.0054 114.563 30.0196 114.569 30.0337C114.706 30.3793 114.868 30.99 114.693 31.6907C114.49 32.5008 113.904 33.1944 112.953 33.7525C112.403 34.0752 111.832 34.2327 111.278 34.2328C110.357 34.2328 109.484 33.7964 108.837 32.9578C108.075 31.9708 107.74 30.5432 108.122 29.1136C107.795 29.4657 107.478 29.763 107.172 29.9939C105.999 30.8808 104.665 31.1981 103.359 31.1981C103.144 31.1981 102.929 31.1886 102.717 31.1725C102.274 31.6898 101.525 31.9507 100.551 31.9507C100.031 31.9507 99.4446 31.8752 98.8086 31.7258L97.2508 35.034C98.344 36.5978 99.4034 38.6028 99.5182 39.0252C99.7329 39.8158 98.9929 40.7967 98.737 41.1056C98.7471 41.1333 98.7566 41.1603 98.7647 41.1858C98.9578 41.7898 98.5493 43.1315 98.0138 43.7634C98.0098 44.5039 97.6458 45.3903 97.213 45.9719C98.9004 46.9155 100.203 47.8179 100.609 48.4948C100.627 48.5246 100.64 48.5565 100.651 48.5897C100.858 49.2931 100.322 50.9434 99.6121 52.3754C100.157 52.5256 100.558 52.7629 100.641 53.1301C100.644 53.1346 100.647 53.1387 100.649 53.1432C101.126 54.0226 112.33 74.7221 113.131 78.4596C113.724 81.2263 113.526 84.9137 111.749 86.9134C110.908 87.8591 109.808 88.337 108.475 88.337C108.285 88.337 108.091 88.3269 107.892 88.3079C103.268 87.8591 82.8662 79.2922 79.4031 77.8273C79.2302 86.6751 78.9338 106.06 79.4051 116.823H78.5861C77.9743 102.758 78.6617 74.1474 78.6847 73.2017C78.6847 73.1909 78.6853 73.1827 78.6853 73.1794C78.6907 72.956 78.873 72.7793 79.0938 72.7793H79.1046C79.3301 72.7854 79.5084 72.9736 79.503 73.1997C79.501 73.2653 79.4672 74.6585 79.4213 76.9446C81.555 77.8483 103.36 87.044 107.971 87.4915C109.296 87.6194 110.361 87.2417 111.139 86.3678C112.716 84.5921 112.863 81.1133 112.332 78.6322C111.627 75.3409 102.067 57.4986 100.233 54.0944C100.216 54.1135 100.197 54.1318 100.18 54.1508C100.173 54.1584 100.166 54.1655 100.159 54.1727C98.2839 56.1708 94.0098 56.9888 91.0153 55.9181C91.914 59.1387 95.4379 71.1329 100.312 79.5854C100.424 79.781 100.357 80.0322 100.162 80.1452C99.9659 80.2583 99.7167 80.1912 99.6033 79.9956C97.4068 76.1871 95.4838 71.6718 93.9471 67.5505C93.7897 67.4517 81.7163 59.8555 79.4888 58.4818C76.2066 56.4579 68.8158 55.2851 67.0231 55.0241C67.0279 55.0881 67.0326 55.1526 67.0366 55.2175C67.2669 58.6697 66.7429 63.327 66.7125 63.589C66.693 63.7643 66.564 63.9065 66.3925 63.943C66.221 63.9789 66.0448 63.9031 65.955 63.7521C65.2548 62.5729 63.8091 60.6652 62.9125 60.5654C62.0759 60.4654 59.5979 62.3068 58.0105 63.7142C58.0814 64.731 58.3906 69.3803 58.3676 73.1915C58.3663 73.352 58.3636 73.5666 58.3589 73.8286C58.2529 79.4622 57.2704 107.622 56.947 116.823H56.1286C56.45 107.672 57.4318 79.5576 57.5405 73.8536C57.5452 73.5774 57.5486 73.3533 57.55 73.1868C57.5729 69.3471 57.2562 64.645 57.1914 63.7311C56.2009 62.799 54.7161 61.5425 53.6243 60.873C53.5905 60.8588 53.5581 60.8405 53.5284 60.8162C53.5264 60.8148 53.525 60.8134 53.523 60.8121C53.1017 60.562 52.7452 60.408 52.5116 60.408C51.7162 60.408 49.8445 62.3867 48.7689 63.792C48.6906 63.8943 48.5704 63.9525 48.4441 63.9525C48.4185 63.9525 48.3921 63.9498 48.3658 63.945C48.2139 63.9152 48.0917 63.8015 48.0505 63.6512C47.9816 63.4014 46.542 58.1492 46.0633 55.0167C45.5637 55.0923 44.5421 55.2553 43.2707 55.5037C41.4138 55.8665 39.0236 56.4118 36.9446 57.1341C35.8035 57.5304 34.7563 57.9799 33.9427 58.4818C31.7145 59.8555 21.6776 66.4274 21.5766 66.4931C21.5381 66.5188 21.4968 66.5357 21.4546 66.5466C19.5597 70.9393 17.107 76.2108 14.4953 80.7402C14.3824 80.9359 14.1323 81.0029 13.9367 80.8899C13.7412 80.7768 13.6743 80.5257 13.7874 80.33C15.9661 76.5513 18.0346 72.2499 19.7575 68.3811C21.8759 63.6248 23.472 59.5219 24.1076 57.8494C22.8636 58.0733 21.2849 57.645 19.6248 56.6073C17.7775 55.4531 15.8351 53.4672 15.259 51.4383C12.5829 56.1813 1.78203 75.4472 1.09987 78.6322C0.568478 81.1133 0.715199 84.5921 2.29316 86.3678C3.07033 87.2424 4.13648 87.6208 5.46029 87.4915C8.31217 87.2153 17.7402 83.5923 25.0247 80.6543C29.4855 78.8543 33.1425 77.3122 33.9926 76.952C33.946 74.6612 33.9123 73.2653 33.9109 73.1997C33.9049 72.9736 34.0838 72.7854 34.3093 72.7793C34.5294 72.7779 34.7225 72.9526 34.7279 73.1794C34.7293 73.2173 34.7408 73.7047 34.7597 74.5563C34.8927 80.5229 35.3687 104.373 34.8272 116.823H34.0088C34.4795 106.063 34.1837 86.6859 34.0102 77.8348C30.4957 79.3214 10.1551 87.8598 5.53915 88.3079C5.34037 88.3269 5.14605 88.337 4.95672 88.337C3.62285 88.337 2.52354 87.8591 1.68264 86.9134C-0.0947124 84.9137 -0.29228 81.2263 0.300283 78.4596C1.10169 74.7181 14.5705 50.9886 15.1435 49.9802C15.1922 49.8945 15.2684 49.8327 15.3557 49.8C15.7958 49.2802 16.5879 49.6734 17.3759 50.3273C17.5918 50.1481 17.8081 49.9885 18.0174 49.8618C18.5202 48.677 19.2953 47.4168 20.0484 46.1937C20.7831 45.0004 21.5428 43.7665 21.9908 42.6817C22.4125 41.6606 22.4171 39.9917 22.42 38.8873C22.421 38.524 22.4218 38.2101 22.4362 37.9739C22.5834 36.4562 22.3651 35.1574 22.2058 34.2091C22.0027 33.0004 21.8273 31.9565 22.8634 31.7718C24.3146 31.5143 25.4495 33.2552 25.9797 34.8258C26.2455 35.6171 26.2904 36.2906 26.3378 37.0037C26.3951 37.8625 26.4541 38.7505 26.9121 39.9969C26.9149 40.0045 26.9169 40.0122 26.9193 40.0199C30.4358 39.3973 35.4747 39.4037 35.9683 40.5985C36.3424 41.3978 35.9919 42.7653 35.8697 43.1839C35.9717 43.257 36.0648 43.3329 36.1465 43.4119C36.9237 44.1547 36.8217 45.435 36.4477 46.4519C37.1236 47.2038 36.7644 48.2125 36.3498 48.8398C36.5672 49.0789 36.6685 49.4289 36.632 49.8404C36.5746 50.4928 36.1695 51.299 35.5908 51.519C35.3235 51.6208 34.8974 51.6708 34.3579 51.7342C33.5355 51.831 32.4106 51.9631 31.7422 52.3366C30.8752 52.8863 28.0467 54.4904 26.3412 54.9588L24.8962 55.9553C25.3601 56.4506 25.5573 56.9468 25.1689 57.3509C25.0656 57.6304 23.8663 60.8622 22.0195 65.2245C23.4074 64.3174 26.19 62.4997 28.72 60.8581C29.1331 60.5904 29.5396 60.3271 29.9319 60.0733C31.5038 59.0568 32.8515 58.1919 33.5139 57.7833C37.0128 55.6258 44.297 54.4489 45.956 54.2029C45.9458 54.1028 45.9364 54.0064 45.9296 53.9145C45.8655 53.0764 46.089 52.3834 46.5947 51.8544C47.4029 51.0087 48.7061 50.8506 49.2841 50.8233C49.2368 50.4988 49.1963 50.2514 49.1747 50.1243C48.2118 49.2237 47.721 48.3499 47.3807 47.744C46.7939 46.7813 46.2429 45.5371 45.6859 43.9041C44.6535 43.8473 42.8898 43.0193 42.1194 40.9249C41.6758 39.7189 41.821 38.4791 42.4975 37.6892C42.5549 37.6226 42.6157 37.5613 42.6785 37.503C41.0276 33.7706 38.9446 27.1785 42.4665 23.1437C42.5637 23.0326 42.6637 22.9228 42.7697 22.8157C42.9283 22.6547 43.1869 22.6531 43.3476 22.8123C43.5083 22.9715 43.5097 23.2311 43.351 23.3921C39.7846 27.0095 41.7758 33.4044 43.3794 37.0653C43.825 36.8953 44.3402 36.8628 44.8972 36.9775C45.0032 36.9993 45.091 37.0605 45.1484 37.1423C45.2119 37.2317 45.2396 37.3457 45.2159 37.4615C45.1707 37.6832 44.9553 37.8261 44.7332 37.7809C44.0458 37.6393 43.4874 37.7925 43.1181 38.2235C42.642 38.7793 42.5509 39.7283 42.8865 40.6412C43.4354 42.1339 44.5948 42.8497 45.4003 43.0366C45.3186 42.7798 45.2369 42.515 45.1552 42.2407C45.0897 42.0239 45.2126 41.7953 45.4286 41.7302C45.6454 41.6649 45.8729 41.7879 45.9377 42.0048C46.6622 44.4202 47.3442 46.1121 48.0856 47.3291C48.5697 48.1899 49.3678 49.6097 51.5258 50.8144C54.6499 52.6058 56.7033 52.4969 56.7222 52.4962C56.7282 52.4958 56.7343 52.496 56.7404 52.4959C56.7498 52.4942 56.7593 52.4924 56.7688 52.4914C56.7998 52.4875 58.531 52.2584 61.2136 49.9592C63.1441 48.2973 63.903 46.5844 64.1839 45.7112C64.6721 44.3567 65.0029 42.5623 65.2305 40.0502C65.2507 39.8249 65.4458 39.6589 65.6747 39.679C65.8996 39.6995 66.065 39.8988 66.0448 40.1244C66.0198 40.4008 65.9934 40.6684 65.9658 40.9286C66.7085 40.5608 67.6517 39.6359 67.8854 38.1085C68.0319 37.1467 67.7537 36.2351 67.1757 35.786C66.7281 35.4381 66.1501 35.3999 65.5053 35.6763C65.2966 35.7651 65.0569 35.6684 64.9685 35.4603C64.903 35.3064 64.9388 35.1348 65.0455 35.0198C65.0542 35.0102 65.0637 35.001 65.0738 34.9923C65.1055 34.9639 65.1427 34.94 65.1839 34.9222C65.6646 34.7166 66.1346 34.6403 66.5728 34.6888C66.7423 33.9693 67.7753 29.3301 66.7996 27.2372C66.7038 27.0322 66.7922 26.7882 66.9968 26.6922C67.1163 26.636 67.2493 26.6435 67.3587 26.7004C67.4357 26.7405 67.5005 26.805 67.5403 26.89C68.6706 29.3127 67.5019 34.331 67.356 34.9308C67.4667 34.9901 67.5741 35.0584 67.6767 35.138C68.4978 35.7762 68.8874 36.962 68.6936 38.2325C68.3641 40.3923 66.8597 41.5544 65.8577 41.8491C65.6369 43.5671 65.3446 44.9027 64.9577 45.9763C64.77 46.5606 64.3804 47.5028 63.614 48.5621C63.6181 48.6449 63.6606 49.4538 63.7659 50.4527C64.1954 50.5421 65.8604 50.9679 66.4762 52.301C66.6936 52.7714 66.8415 53.4255 66.9387 54.1833C68.3587 54.3801 76.314 55.5614 79.9169 57.7833C81.792 58.9395 90.6223 64.4913 93.4852 66.292C91.3097 60.2745 90.0227 55.3891 90.0005 55.3046C89.9755 55.21 89.9863 55.112 90.0261 55.0269C89.9687 54.9267 89.9235 54.8207 89.8931 54.7085C89.777 54.2799 89.9998 53.982 90.4083 53.7769L90.3799 53.7246L80.0101 49.103C79.9513 49.0766 79.8994 49.0366 79.8588 48.9863C78.3997 47.1801 78.1154 46.3962 78.0986 46.0329C78.0837 45.9837 78.0776 45.9308 78.083 45.8765C78.2775 43.7854 79.5239 41.3112 80.5975 40.0449C80.6664 39.9635 80.7643 39.9124 80.871 39.9023C81.8608 39.8106 83.8223 40.32 86.0066 41.0635C86.1761 40.7607 86.4806 40.2357 86.6798 39.9961C86.752 39.9092 86.8358 39.825 86.9283 39.7432C86.9276 39.71 86.9303 39.6762 86.9377 39.6423C87.0923 38.9342 88.1571 37.8725 89.2685 37.0233C89.467 36.4204 90.1321 34.5833 90.9883 34.1769L91.149 34.0999C91.5852 33.8908 92.2239 33.5845 92.9079 33.3472L94.313 29.7757C92.7526 28.7358 91.9289 27.5814 92.0403 26.5415C90.9269 25.5186 90.0322 24.1833 89.8479 22.4768C89.8148 22.1699 89.8074 21.8276 89.8229 21.4555C89.0376 22.5791 87.8472 23.2329 86.6818 23.3449C86.5596 23.3568 86.4387 23.3625 86.3199 23.3625C84.8149 23.3626 83.6474 22.427 83.2916 20.9004C83.2909 20.8981 83.2902 20.8957 83.2896 20.8934C83.2889 20.8889 83.2875 20.8846 83.2862 20.8801C83.2848 20.8742 83.2842 20.8684 83.2828 20.8624L83.2821 20.8593C83.0431 19.7914 83.1478 18.8957 83.5948 18.1974C83.9844 17.5888 84.5401 17.2894 84.8858 17.1534C84.8993 17.1477 84.9128 17.1416 84.9263 17.1361C85.3982 16.9486 85.9148 16.9568 86.3807 17.159C86.8466 17.3612 87.2058 17.7332 87.3935 18.2065C87.5798 18.6797 87.5717 19.1977 87.3705 19.6648C87.1686 20.1319 86.798 20.4924 86.3253 20.6797C86.0991 20.7697 85.8621 20.8145 85.6251 20.8145C85.3692 20.8145 85.1133 20.7619 84.8709 20.6568C84.4887 20.4911 84.1788 20.2109 83.9763 19.8545C83.979 20.0929 84.01 20.349 84.0674 20.6221C84.4388 21.146 85.1315 21.4449 85.9303 21.4413C87.0309 21.4268 88.0343 20.8493 88.6136 19.8964C89.2645 18.8271 89.544 17.8866 89.6635 17.2411C89.3766 16.5144 88.8526 15.808 88.1875 14.9106C87.5143 14.0028 86.6764 12.873 85.8527 11.3694C84.5448 8.983 84.5076 5.91519 85.7629 3.90897C86.6771 2.44783 88.1632 1.69296 89.9437 1.78699C91.1395 1.8492 92.1145 2.30567 92.8424 3.14354C93.6864 4.1151 94.0443 5.42785 94.1888 6.51713C94.5365 5.64549 94.8424 4.90206 95.0767 4.3431C94.336 3.19966 94.3812 2.34169 94.6337 1.75592C95.1928 0.460366 97.0192 -0.150719 99.7741 0.0315842C102.389 0.205764 105.587 1.06421 108.778 2.44871C111.968 3.83322 114.781 5.58287 116.698 7.37524C118.718 9.2636 119.523 11.017 118.963 12.3125C118.71 12.8983 118.117 13.5187 116.779 13.7601C116.505 14.3734 116.129 15.2066 115.675 16.1762C116.648 15.457 117.98 14.7143 119.379 14.6661C120.469 14.6261 121.447 15.0158 122.279 15.8175C123.566 17.0565 124.035 18.6577 123.598 20.326ZM52.945 45.4966C53.3995 46.3495 54.4427 47.8316 56.184 47.7333C57.8383 47.6451 58.5844 45.8728 58.87 44.8968C58.1941 45.0599 57.0881 45.2959 55.9315 45.413C54.7728 45.5304 53.6398 45.5209 52.945 45.4966ZM51.9059 45.19C51.8593 45.0593 51.8823 44.9141 51.966 44.8038C52.0497 44.6937 52.1827 44.6335 52.3218 44.644C52.3394 44.6452 54.0936 44.7749 55.8491 44.5972C57.6047 44.4193 59.2974 43.9405 59.3143 43.9357C59.448 43.8974 59.5931 43.9302 59.6971 44.0231C59.8018 44.1159 59.8518 44.2557 59.8301 44.3938C59.8045 44.5572 59.1664 48.3954 56.2286 48.552C56.1543 48.5561 56.0821 48.558 56.0105 48.558C53.1328 48.5582 51.9559 45.3307 51.9059 45.19ZM59.9456 38.1918C60.5087 38.1347 60.8335 37.5946 60.7707 36.967C60.7072 36.3396 60.2184 35.882 59.7181 35.9327C59.1549 35.9897 58.8295 36.5298 58.893 37.1573C58.9564 37.7848 59.3825 38.2488 59.9456 38.1918ZM50.1983 36.8338C49.6973 36.8846 49.3097 37.4309 49.3732 38.0585C49.4427 38.7487 49.9248 39.1436 50.4258 39.0929C50.9262 39.0422 51.3137 38.4957 51.2509 37.8683C51.1875 37.2408 50.6986 36.7831 50.1983 36.8338ZM54.3934 24.2012C53.8161 23.7534 53.1253 23.5716 52.4987 23.7029C52.2779 23.7492 52.1361 23.9663 52.1821 24.1879C52.228 24.4096 52.444 24.5513 52.6655 24.5056C53.0585 24.4236 53.5055 24.5489 53.893 24.8496C54.2381 25.1174 54.4913 25.4884 54.6013 25.8699C54.6344 25.9857 54.6553 26.1024 54.6607 26.2175C54.6715 26.437 54.8525 26.6077 55.0693 26.6077C55.076 26.6077 55.0821 26.6076 55.0888 26.6073C55.3144 26.5964 55.4886 26.4043 55.4778 26.1782C55.473 26.0735 55.4595 25.969 55.4399 25.865C55.3218 25.2351 54.9457 24.6298 54.3934 24.2012ZM57.4568 20.1493C56.4825 21.3461 56.3717 23.5668 56.367 23.6608C56.3569 23.887 56.5318 24.0787 56.7573 24.0889C56.7633 24.0891 56.7694 24.0892 56.7762 24.0892C56.9936 24.0892 57.1745 23.9177 57.184 23.6979C57.2097 23.1333 57.4224 21.4886 58.0908 20.668C58.2333 20.4926 58.2076 20.2344 58.0327 20.0911C57.8572 19.9482 57.5999 19.9742 57.4568 20.1493ZM51.4441 26.7519C51.5474 26.6421 51.6574 26.5577 51.7756 26.5053C51.7952 26.4969 51.8147 26.4893 51.8343 26.4824C52.1085 26.3868 52.4508 26.4401 52.8775 26.6449C53.0808 26.7428 53.3252 26.6565 53.4231 26.4522C53.5007 26.2885 53.4609 26.0987 53.3373 25.9795C53.3063 25.9501 53.2712 25.9247 53.2307 25.9053C52.5541 25.5805 51.9538 25.5299 51.4454 25.7555C50.4137 26.2124 49.9762 27.6737 49.4691 29.3659C49.0808 30.6603 48.6683 32.037 47.9708 33.1397C47.9404 33.173 47.9168 33.2101 47.8992 33.2496C47.1383 34.3996 46.0471 35.2276 44.3132 35.3071C44.0877 35.3175 43.9128 35.5091 43.9229 35.7354C43.933 35.9552 44.114 36.1267 44.3314 36.1265C44.3375 36.1265 44.3442 36.1265 44.3503 36.1261C45.5002 36.0734 46.4097 35.7331 47.1416 35.2118C47.7142 34.8041 48.1781 34.2858 48.5629 33.7069C48.725 33.5772 49.729 32.8451 51.1983 33.3078C51.4137 33.3753 51.6432 33.2553 51.7108 33.0393C51.7783 32.8233 51.6588 32.5932 51.4434 32.5254C50.5663 32.2496 49.8141 32.3128 49.2388 32.4769C49.677 31.5204 49.9816 30.5048 50.2523 29.6018C50.6082 28.4133 50.9485 27.28 51.4441 26.7519ZM63.533 34.1055C63.8652 34.247 64.2338 34.3266 64.6471 34.3266C64.8847 34.3266 65.138 34.3004 65.4067 34.2449C65.6275 34.1992 65.7699 33.9825 65.7247 33.7608C65.6788 33.5389 65.4627 33.396 65.2419 33.4419C63.2285 33.8578 62.3885 32.1502 61.3386 29.498C60.45 27.2528 59.527 24.9319 57.1644 25.3848C56.9511 25.4257 56.8086 25.6266 56.8363 25.8402C56.8369 25.8482 56.8383 25.8563 56.8396 25.8645C56.8822 26.0867 57.0969 26.2327 57.3177 26.1901C58.9044 25.8874 59.6087 27.351 60.5783 29.8005C61.2704 31.5477 62.0306 33.4668 63.533 34.1055ZM41.8055 22.1137C41.8595 22.1189 41.9175 22.1215 41.9797 22.1215C41.9851 22.1215 41.9898 22.1213 41.9952 22.1212C42.8784 22.1155 44.5414 21.5923 45.7635 20.4966C47.9363 18.4817 53.3961 14.2292 57.1664 18.2486C57.3211 18.4137 57.5797 18.4213 57.7444 18.2663C57.9092 18.1112 57.9173 17.8518 57.7627 17.6869C57.6688 17.5869 57.5729 17.4907 57.4764 17.3985C54.4683 14.5344 50.0234 15.4286 45.2132 19.89C43.9722 21.0022 42.3497 21.3421 41.8838 21.2977C41.6596 21.2748 41.4591 21.4408 41.4375 21.6661C41.4159 21.8915 41.5806 22.0919 41.8055 22.1137ZM59.45 18.8069C61.5047 18.2464 63.4385 19.1632 65.0495 21.4645C65.8381 22.548 66.2649 23.3827 66.6072 24.0536C66.986 24.7951 67.2925 25.3939 67.8834 25.8803C67.9387 25.9261 67.9961 25.9711 68.0569 26.0149C68.1291 26.0669 68.2122 26.0918 68.2946 26.0918C68.4222 26.0918 68.5478 26.0324 68.6274 25.9208C68.7591 25.7368 68.7172 25.4807 68.5336 25.3488C67.9867 24.9552 67.7274 24.4479 67.3351 23.6799C66.9792 22.9835 66.5363 22.1169 65.7146 20.9873C63.9219 18.426 61.6269 17.3703 59.2495 18.0123C59.2447 18.0136 59.24 18.0146 59.2353 18.0159C59.0172 18.0754 58.8889 18.3007 58.9483 18.5191C59.0077 18.7378 59.2326 18.8669 59.45 18.8069ZM61.1394 32.2882C61.2515 32.0916 61.1833 31.8412 60.9875 31.7288C60.9213 31.6909 59.3494 30.8145 57.4959 31.9173C57.3015 32.0327 57.2373 32.2843 57.3528 32.479C57.4291 32.6081 57.5655 32.6799 57.7053 32.6799C57.7762 32.6799 57.8477 32.6613 57.9132 32.6224C59.3413 31.7729 60.527 32.4104 60.583 32.4414C60.7788 32.5526 61.0273 32.484 61.1394 32.2882ZM55.4568 35.7424C55.2448 35.6619 55.0092 35.7686 54.9288 35.98C54.8924 36.0776 54.0301 38.3879 54.5959 39.9026C54.8052 40.5285 55.2678 40.8491 55.6054 41.083C55.8518 41.254 56.0037 41.3651 56.026 41.4906C56.0449 41.5969 56.0118 41.8674 55.5784 42.4847C55.4487 42.6699 55.4926 42.9256 55.6776 43.056C55.7492 43.1065 55.8309 43.1308 55.9126 43.1308C56.0409 43.1308 56.1678 43.07 56.2475 42.9567C56.7276 42.2728 56.9078 41.7764 56.8315 41.3469C56.7478 40.8786 56.3879 40.629 56.0706 40.4087C55.7742 40.2033 55.494 40.0092 55.3663 39.6284C55.0227 38.7069 55.3738 37.1159 55.6938 36.2713C55.7735 36.0595 55.6675 35.8228 55.4568 35.7424ZM66.1048 38.8651C66.2514 38.8651 66.3932 38.7859 66.4668 38.647C66.4695 38.6411 66.7821 38.0511 66.936 37.7939C67.0528 37.6 66.9907 37.3482 66.7976 37.2312C66.6032 37.1141 66.352 37.1767 66.2358 37.3707C66.0697 37.6472 65.7571 38.2381 65.7436 38.2631C65.6383 38.4632 65.7146 38.7113 65.9138 38.8173C65.9752 38.8498 66.04 38.8651 66.1048 38.8651ZM45.0154 40.3633C45.1592 40.5382 45.1342 40.7964 44.9594 40.9404C44.8837 41.0032 44.7912 41.0338 44.7001 41.0338C44.5819 41.0338 44.4651 40.9828 44.3841 40.8844C44.38 40.8792 43.9567 40.3638 43.7534 40.1428C43.6008 39.9762 43.611 39.7168 43.7777 39.5635C43.9438 39.4102 44.2024 39.4209 44.355 39.5874C44.5731 39.8252 44.9978 40.3415 45.0154 40.3633Z" fill="#1E5542"/>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M34.2418 19.6844C34.1539 19.5215 33.945 19.5086 33.8304 19.652C33.7073 19.8056 33.6438 19.9916 33.57 20.1713C33.0231 21.5029 32.2704 22.1109 31.9633 22.4065C31.886 22.4807 31.8074 22.7559 31.9194 22.8868C32.245 23.2685 32.9182 23.7421 33.5043 25.3031C33.5567 25.4429 33.6118 25.5836 33.6855 25.7128C33.7882 25.8934 34.0068 25.9045 34.1285 25.7319C34.4031 25.3413 34.4191 24.7203 35.3349 23.6475C35.8725 23.0182 36.3955 22.8207 35.9467 22.4385C34.8279 21.4873 34.4453 20.0617 34.2418 19.6844Z" fill="white"/>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M76.6048 32.015C76.5035 31.8273 76.2631 31.8126 76.1311 31.9773C75.9894 32.1544 75.9161 32.3688 75.8312 32.5761C75.2003 34.1122 74.3303 34.8139 73.9806 35.1504C73.8917 35.2356 73.8007 35.5521 73.9304 35.7039C74.0086 35.7953 74.0881 35.8867 74.1748 35.9693C75.4051 37.1344 75.693 38.4828 75.9641 38.9586C76.0822 39.1655 76.3342 39.1792 76.4741 38.9799C76.5719 38.8414 76.6461 38.6812 76.7047 38.5205C77.6232 36.0208 79.3413 35.8446 78.5687 35.1872C77.2801 34.0909 76.8389 32.4496 76.6048 32.015Z" fill="white"/>
    </G>
    <Defs>
    <ClipPath id="clip0_8606_166306">
    <Rect width="80" height="80" rx="40" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
    

  )
}

export default CongratsImg

const styles = StyleSheet.create({})