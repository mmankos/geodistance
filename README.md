# geodistance
Lightweight, zero-dependency, ES module utility for calculating the great-circle distance between two latitude/longitude coordinates, in kilometers, using the Haversine formula.

## Instalation
```
npm install @mmankos/geodistance
```

## Usage
```
import { geodistance } from "@mmankos/geodistance";

console.log(
	geodistance(
		{ lat: 48.71395, lon: 21.25808 },
		{ lat: 48.7172272, lon: 21.2496774 },
	),
);
```
