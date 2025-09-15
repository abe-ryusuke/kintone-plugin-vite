
import { createApp } from 'vue';
import App from './desktop/App.vue';


(function() {
  'use strict';

  kintone.events.on('app.record.index.show', (event) => {
    // 作成されたアプリケーションインスタンスをカスタマイズビューで用意した #appにマウント
    createApp(App).mount('.kintone-app-headermenu-space');

    return event;
  });
})();