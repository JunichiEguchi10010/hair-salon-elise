/**
 * HAIR SALON ÉLISE — Google Maps Platform 用スタイル。
 * 白〜グレー基調の淡色・ミニマル表示（彩度を抑え、公園は淡いグレーグリーン）。
 * Map 初期化時は [...eliseMapStyles] で渡すこと。
 */
export const eliseMapStyles: Array<{
  featureType?: string;
  elementType?: string;
  stylers: Array<Record<string, string | number | boolean>>;
}> = [
  { elementType: "geometry", stylers: [{ color: "#f4f2ee" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8a857c" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#faf9f6" }] },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#ebe8e2" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e2e5df" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9a968c" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#e8e4de" }],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#ddd8d0" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#dddcd7" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#a09b93" }],
  },
];

/**
 * 深沢公園「13」ブロック（公園面）の視覚的中心。
 * Map center / Marker position の単一ソース。
 */
export const ELISE_MAP_CENTER = {
  lat: 35.616138,
  lng: 139.658038,
} as const;

export const ELISE_MAP_ZOOM = 16;
