function initMap() {
  const restoCoords = {
    lat: 40.681850,
    lng: -74.000354
  };

  const basicMap = new google.maps.Map(
    document.querySelector('#map'),
      {
        center: restoCoords,
        zoom: 11
      }
  );

  const restoMarker = new google.maps.Marker({
    position: restoCoords,
    title: 'Ugly Delicious Restaurants',
    map: basicMap
  });

  restoMarker.addListener('click', () => {
    alert('Lets Eat!');
  })

  const restoInfo = new google.maps.InfoWindow({
    content: '<h1>Pizza Party People!</h1>'
  })

  restoInfo.open(basicMap, restoMarker);

  const locations = [
    {
      name: 'Lucali',
      coords: {
        lat: 40.681850,
        lng: -74.000354
      }
    },
    {
      name: 'Pepes',
      coords: {
        lat: 41.303178,
        lng: -72.917209
      }
    },
    {
      name: 'Totonnos',
      coords: {
        lat: 40.578916,
        lng: -73.983814
      }
    },
  ];

  const markers = [];
  for (const location of locations) {
    markers.push(new google.maps.Marker({
      position: location.coords,
      title: location.name,
      map: basicMap,
      icon: {
        url: '/static/img/pizza-slice.png',
        scaledSize: {
          width: 30,
          height: 30
        }
      }
    }));
  }

  for (const marker of markers) {
    const markerInfo = (`
      <h1>${marker.title}</h1>
      <p>
        Located at: <code>${marker.position.lat()}</code>,
        <code>${marker.position.lng()}</code>
      </p>
    `);

    const infoWindow = new google.maps.InfoWindow({
      content: markerInfo,
      maxWidth: 200
    });
  }
}

