/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia2FmdWk0ayIsImEiOiJja3lwNWZhazgwNnVtMnVtZDlpMzV6NXNiIn0.nSnKszWi7fKj42-NNLUznA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kafui4k/ckyp760ivn4dj15nuur097wsm'
    //   center: [342.232, -23.2309293],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Add marker
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
