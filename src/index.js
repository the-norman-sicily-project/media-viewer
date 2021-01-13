import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools/es';
import { catalog } from '../data/catalog.js';

const catalogProp = {
  catalog,
};

const miradorProp = {
  id: 'nsp-mirador',
  window: {
    imageToolsEnabled: true,
    imageToolsOpen: true,
    allowClose: true, // Configure if windows can be closed or not
    allowFullscreen: true, // Configure to show a "fullscreen" button in the WindowTopBar
    allowMaximize: true, // Configure if windows can be maximized or not
    allowTopMenuButton: true, // Configure if window view and thumbnail display menu are visible or not
    allowWindowSideBar: true, // Configure if side bar menu is visible or not
    authNewWindowCenter: 'parent', // Configure how to center a new window created by the authentication flow. Options: parent, screen
    sideBarPanel: 'layers', // Configure which sidebar is selected by default. Options: info, attribution, canvas, annotations, search
    defaultSidebarPanelHeight: 201, // Configure default sidebar height in pixels
    defaultSidebarPanelWidth: 235, // Configure default sidebar width in pixels
    defaultView: 'gallery', // Configure which viewing mode for windows to be opened in
    forceDrawAnnotations: false,
    hideWindowTitle: false, // Configure if the window title is shown in the window title bar or not
    highlightAllAnnotations: false, // Configure whether to display annotations on the canvas by default
    showLocalePicker: false, // Configure locale picker for multi-lingual metadata
    sideBarOpen: true, // Configure if the sidebar  is open by default
    panels: { // Configure which panels are visible in WindowSideBarButtons
      info: true,
      attribution: true,
      canvas: true,
      annotations: true,
      search: true,
      layers: true,
    },
    views: [
      { key: 'single', behaviors: ['individuals'] },
      { key: 'gallery' },
    ],
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
  ...miradorImageToolsPlugin,
  ...catalogProp,
  ...miradorProp,
});
