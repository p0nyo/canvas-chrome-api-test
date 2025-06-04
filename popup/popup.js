document.getElementById('fetchBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const result = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['popup/fetch.js']
  });

  if (result && result[0] && result[0].result) {
    const assignments = result[0].result;
    document.getElementById('output').textContent = JSON.stringify(assignments, null, 2);
  } else {
    document.getElementById('output').textContent = 'No data returned or script failed.';
  }
});
