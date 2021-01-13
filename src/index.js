import Mirador from 'mirador/dist/es/src/index';
import miradorImageToolsPlugin from 'mirador-image-tools/es/plugins/miradorImageToolsPlugin';
import { catalog } from '../data/catalog.js';

const plugins = [
  ...miradorImageToolsPlugin
];

const catalogProp = {
  catalog,
};

const miradorProp = {
  id: 'viewer',
  window: {
    imageToolsEnabled: true,
    imageToolsOpen: true,
  },
  workspace: {
    isWorkspaceAddVisible: true,
    showZoomControls: true,
  },
  manifestsPanel: {
    name: 'Collection tree browser',
    module: 'CollectionTreeManifestsPanel',
  },
  language: 'en',
  availableLanguages: {
    en: 'English',
    it: 'Italiano',
  },
  selectedTheme: 'dark',
  config: {
    theme: 'light',
    language: {
      en: 'English',
      it: 'Italiano',
    },
  },
};

const mirador = Mirador.viewer({
  ...catalogProp,
  ...miradorProp,
}, plugins);
