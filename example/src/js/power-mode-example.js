import { registerPlugin } from '@capacitor/core'

export const PowerMode = registerPlugin("PowerModeExtended");

/*
// Returns the status of power saving mode
PowerMode.lowPowerMode()
.then(data => {
    // It is displayed as { lowPowerModeEnabled: true/false }
    console.log(data)
})

// Open the battery settings window.
// ※iOS does not recommend going directly to the battery settings screen, so jump to the settings home screen.
PowerMode.openPowerSettings()
*/