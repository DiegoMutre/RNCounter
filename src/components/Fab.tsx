import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    Platform,
    TouchableOpacity,
} from 'react-native';

interface Fab {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

const TouchableButton = ({
    onPress,
    children,
}: {
    onPress: () => void;
    children: React.ReactNode;
}) => {
    const Touchable =
        Platform.OS === 'android' ? (
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple(
                    '#24425b',
                    false,
                    30,
                )}>
                {children}
            </TouchableNativeFeedback>
        ) : (
            <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
                {children}
            </TouchableOpacity>
        );

    return Touchable;
};

export default function Fab({ onPress, title, position }: Fab) {
    return (
        <View
            style={[
                styles.fabLocaltion,
                position === 'bl' ? styles.left : styles.right,
            ]}>
            <TouchableButton onPress={onPress}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableButton>
        </View>
    );
}

const styles = StyleSheet.create({
    fabLocaltion: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
});
