package com.bunkr.plugins.powermode;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.content.Context;
import android.content.Intent;
import android.os.PowerManager;
import android.provider.Settings;

@CapacitorPlugin(name = "PowerModeExtended")
public class PowerModePlugin extends Plugin {
   @PluginMethod
        public void lowPowerModeEnabled(PluginCall call) {
            PowerManager powerManager = null;
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
                powerManager = (PowerManager) getContext().getSystemService(Context.POWER_SERVICE);
            }
            boolean lowPowerModeEnabled = powerManager.isPowerSaveMode();

            JSObject ret = new JSObject();
            ret.put("lowPowerModeEnabled", lowPowerModeEnabled);
            call.resolve(ret);
        }
    
    @PluginMethod
        public void openPowerSettings(PluginCall call) {
            Intent intent = new Intent(Settings.ACTION_BATTERY_SAVER_SETTINGS);
            if (intent.resolveActivity(getContext().getPackageManager()) != null) {
                getContext().startActivity(intent);
                call.resolve();
            } else {
                call.reject("Unable to open power settings");
            }
        }
}
