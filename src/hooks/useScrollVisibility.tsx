import { useState } from 'react';

const useScrollVisibility = () => {
  const [isScrollViewVisible, setIsScrollViewVisible] = useState(true);

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;
    const contentHeight = event.nativeEvent.contentSize.height;

    if (scrollY + screenHeight >= contentHeight - 100) {
      setIsScrollViewVisible(false);
    } else {
      setIsScrollViewVisible(true);
    }
  };

  return { isScrollViewVisible, handleScroll };
};

export default useScrollVisibility;
