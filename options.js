function saveOptions() {
  chrome.storage.sync.set({
    redirectTo: document.getElementById("redirect_to").value,
  });
}

function restoreOptions() {
  chrome.storage.sync.get({
    'redirectTo': 'latest',
  }, function(items) {
    document.getElementById("redirect_to").value = items.redirectTo;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById("redirect_to").addEventListener("change", saveOptions);

document.getElementById("redirect_to_label").textContent = chrome.i18n.getMessage("redirect_to");
document.getElementById("java_latest").textContent = chrome.i18n.getMessage("latest");
