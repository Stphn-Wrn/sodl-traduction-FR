const MODULE_ID = 'SODL-traduction-FR';

Hooks.once('babele.init', (babele) => {
  babele.register({
    module: MODULE_ID,
    lang: 'fr',
    dir: 'compendium/fr',
  });
});
