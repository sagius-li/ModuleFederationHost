import { initFederation } from '@angular-architects/native-federation';

function getRemoteEntryUrl(): string {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode') || 'remote';
  if (mode === 'debug') {
    return 'http://localhost:4201/remoteEntry.json';
  } else {
    return '/remotes/remote/browser/remoteEntry.json';
  }
}

initFederation({
  remote: getRemoteEntryUrl()
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
