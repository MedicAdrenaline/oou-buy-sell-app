import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.oou.buysell',
  appName: 'OOU Buy & Sell',
  webDir: 'www',
  server: {
    url: 'https://adrena-oou-buy-sell.onrender.com',
    cleartext: false,
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#f5f3ff',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#4f35f3',
    },
  },
};

export default config;
