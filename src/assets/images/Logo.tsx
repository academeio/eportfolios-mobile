import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Text as SvgText, Rect } from 'react-native-svg';

function LogoSvg() {
    return (
        <View
            style={[
                StyleSheet.absoluteFill,
                {
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: 15,
                    paddingLeft: 40
                }
            ]}
        >
            <Svg width="80" height="42" viewBox="0 0 120 60">
                <Rect
                    x="4"
                    y="4"
                    width="112"
                    height="52"
                    rx="8"
                    ry="8"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.5"
                />
                <SvgText
                    x="60"
                    y="42"
                    textAnchor="middle"
                    fontFamily="System"
                    fontSize="32"
                    fontWeight="bold"
                    fill="#fff"
                >
                    eP
                </SvgText>
            </Svg>
        </View>
    );
}

export default LogoSvg;
