mapboxgl.accessToken =
    'pk.eyJ1IjoiaW1tYXRoZXVzIiwiYSI6ImNrb3pxN3VrbTEyaTgydm1wMjlrd3JsMzgifQ.NNCxSyA1im2_6S3F6EyAxA'
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
})
StockholmCords = [18.06, 59.3294] // coords for stockholm

function successLocation(position) {
    setUpMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setUpMap(StockholmCords)
}

function setUpMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 13,
    })
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    })
    map.addControl(directions, 'top-left')
}
setUpMap([18.06, 59.3294])
