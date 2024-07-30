import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PowerModePlugin)
public class PowerModePlugin: CAPPlugin {
    @objc func lowPowerModeEnabled(_ call: CAPPluginCall) {
        let lowPowerModeEnabled = ProcessInfo.processInfo.isLowPowerModeEnabled
        call.resolve(["lowPowerModeEnabled": lowPowerModeEnabled])
    }
    @objc func openPowerSettings(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            if let url = URL(string: UIApplication.openSettingsURLString) {
                if UIApplication.shared.canOpenURL(url) {
                    UIApplication.shared.open(url, options: [:], completionHandler: nil)
                    call.resolve()
                } else {
                    call.reject("Unable to open settings")
                }
            } else {
                call.reject("Invalid URL")
            }
        }
    }
}
