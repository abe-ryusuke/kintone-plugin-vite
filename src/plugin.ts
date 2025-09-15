(function(PLUGIN_ID: any) {
  const config = kintone.plugin.app.getConfig(PLUGIN_ID);

  kintone.events.on('app.record.index.show', (event: any) => {
    console.log('Hello, kintone plugin!');
    return event;
  });

  kintone.events.on('mobile.app.record.index.show', (event: any) => {
    console.log('Hello, kintone plugin!');
    return event;
  });
})(kintone.$PLUGIN_ID);