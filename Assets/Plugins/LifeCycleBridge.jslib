mergeInto(LibraryManager.library, {
  GameStarted: function () {
    try {
      if (typeof window !== 'undefined' && window.LifeCycle && typeof window.LifeCycle.GameStarted === 'function') {
        window.LifeCycle.GameStarted();
      } else {
        if (typeof window !== 'undefined') {
          var ev = new Event('LifeCycle.GameStarted');
          window.dispatchEvent(ev);
          console && console.log && console.log('LifeCycle.GameStarted dispatched (fallback)');
        }
      }
    } catch (e) {
      console && console.warn && console.warn('GameStarted JS error:', e);
    }
  },

  GameEnded: function () {
    try {
      if (typeof window !== 'undefined' && window.LifeCycle && typeof window.LifeCycle.GameEnded === 'function') {
        window.LifeCycle.GameEnded();
      } else {
        if (typeof window !== 'undefined') {
          var ev = new Event('LifeCycle.GameEnded');
          window.dispatchEvent(ev);
          console && console.log && console.log('LifeCycle.GameEnded dispatched (fallback)');
        }
      }
    } catch (e) {
      console && console.warn && console.warn('GameEnded JS error:', e);
    }
  },

  _registerLifeCycleUnload: function () {
    if (typeof window === 'undefined') return;
    if (window.__lifeCycleUnloadRegistered) return;
    window.__lifeCycleUnloadRegistered = true;
    window.addEventListener('beforeunload', function () {
      try {
        if (window.LifeCycle && typeof window.LifeCycle.GameEnded === 'function') {
          window.LifeCycle.GameEnded();
        } else {
          window.dispatchEvent(new Event('LifeCycle.GameEnded'));
        }
      } catch (e) {
        console && console.warn && console.warn('beforeunload LifeCycle.GameEnded failed', e);
      }
    });
  }
});
