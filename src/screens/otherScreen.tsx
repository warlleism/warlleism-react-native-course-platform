import * as React from 'react';
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import useScrollVisibility from '../hooks/useScrollVisibility';

const OtherScreen = () => {
    const scrollViewRef = React.useRef<ScrollView>(null);
    const { isScrollViewVisible, handleScroll } = useScrollVisibility();

    return (
        <>
            <ScrollView
                ref={scrollViewRef}
                onScroll={handleScroll}
            >
                <View>
                    <Text>Other Screen</Text>
                    <Text>Other Screen</Text>
                </View>
            </ScrollView>
        </>
    );
}

export default OtherScreen;
