/**
 * Calculates the great-circle distance between two geographic coordinates in
 * kilometers using the Haversine formula.
 *
 * @param {Object} a - The first coordinate.
 * @param {number} a.lat - Latitude of the first point in decimal degrees.
 * @param {number} a.lon - Longitude of the first point in decimal degrees.
 * @param {Object} b - The second coordinate.
 * @param {number} b.lat - Latitude of the second point in decimal degrees.
 * @param {number} b.lon - Longitude of the second point in decimal degrees.
 * @returns {number} The distance between the two points in kilometers.
 */
export const geodistance = (a, b) => {
	const toRad = Math.PI / 180;
	const earthRadiusKm = 6372.8;

	const dLat = (b.lat - a.lat) * toRad;
	const dLon = (b.lon - a.lon) * toRad;

	const lat1 = a.lat * toRad;
	const lat2 = b.lat * toRad;

	const hav =
		Math.sin(dLat / 2) ** 2 +
		Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

	return 2 * earthRadiusKm * Math.asin(Math.sqrt(hav));
};
