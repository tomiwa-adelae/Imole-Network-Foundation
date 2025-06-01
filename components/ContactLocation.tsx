"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icon issues in Next.js
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = new L.Icon({
	iconUrl: markerIcon.src,
	shadowUrl: markerShadow.src,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});

// Coordinates for 51B Agboola Ajumobi Crescent, Magodo Phase 2, Lagos
const position: [number, number] = [6.6219, 3.3769];

export default function ContactLocation() {
	return (
		<MapContainer
			center={position}
			zoom={14}
			style={{ height: "500px", width: "100%" }}
		>
			{/* OpenStreetMap tiles (Free, no API key required) */}
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

			{/* Marker at London Eye */}
			<Marker position={position} icon={defaultIcon}>
				<Popup>
					51B Agboola Ajumobi Crescent, Magodo Phase 2, Lagos
				</Popup>
			</Marker>
		</MapContainer>
	);
}
