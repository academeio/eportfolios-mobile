import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Text as SvgText, Rect } from 'react-native-svg';

function LogoSvg() {
    return (
        <View
            style={[
                StyleSheet.absoluteFill,
                {
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            ]}
        >
            <Svg viewBox="0 0 200 80">
                <Rect
                    x="10"
                    y="5"
                    width="180"
                    height="70"
                    rx="12"
                    ry="12"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                />
                <SvgText
                    x="100"
                    y="56"
                    textAnchor="middle"
                    fontFamily="System"
                    fontSize="42"
                    fontWeight="bold"
                    fill="#fff"
                >
                    ePortfolios
                </SvgText>
            </Svg>
        </View>
    );
}

export default LogoSvg;
