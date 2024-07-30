export interface PowerModePlugin {
  lowPowerModeEnabled(): Promise<{ lowPowerModeEnabled: boolean }>;
  openPowerSettings(): Promise<void>;
}
