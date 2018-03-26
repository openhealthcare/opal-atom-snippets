'use babel';

import OpalSnippetsView from './opal-snippets-view';
import { CompositeDisposable } from 'atom';

export default {

  opalSnippetsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.opalSnippetsView = new OpalSnippetsView(state.opalSnippetsViewState);

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'opal-snippets:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
    this.opalSnippetsView.destroy();
  },

  serialize() {
    return {
      opalSnippetsViewState: this.opalSnippetsView.serialize()
    };
  },

  toggle() {
  }

};
