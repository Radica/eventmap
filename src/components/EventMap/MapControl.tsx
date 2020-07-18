import { useContext, useLayoutEffect } from 'react';
import { MapContext } from 'react-mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import type { ReactElement } from 'react';
import type { Map as MapType, Control } from 'mapbox-gl';

type Props = {
    control: Control;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
};

export default ({ control, position }: Props): ReactElement => {
    const map = useContext<MapType>(MapContext);

    useLayoutEffect(() => {
        map.addControl(control, position);
        return () => map.removeControl(control);
    }, [map, control, position]);

    return null;
};
