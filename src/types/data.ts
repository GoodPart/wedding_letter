export interface ILocationInfo {}

export interface IMapInfo {
  zoom?: number;
  lat: number;
  log: number;
  draggable?: boolean;
  keyboardShortcuts?: boolean;
  location?: string;
  mapLocation?: string;
}
