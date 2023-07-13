import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.app.base',
  appName: 'ionic-app-base',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
