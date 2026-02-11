let classifier = null;

async function loadClassifier() {
  if (!classifier) {
    document.getElementById('status').textContent = 'Loading sentiment model (DistilBERT, ~60-100 MB, one-time)...';
    
    try {
      // Recommended lightweight & accurate model for English sentiment
      classifier = await pipeline(
        'sentiment-analysis',
        'Xenova/distilbert-base-uncased-finetuned-sst-2-english',
      );
      
      document.getElementById('status').textContent = 'Model ready! (Hugging Face Transformers.js)';
    } catch (err) {
      console.error('Model load failed:', err);
      document.getElementById('status').textContent = 'Failed to load model. Check console & browser support.';
      return false;
    }
  }
  return true;
}

async function analyze() {
  const text = document.getElementById('inputText').value.trim();
  if (!text) {
    document.getElementById('result').innerHTML = '';
    return;
  }

  const loaded = await loadClassifier();
  if (!loaded) return;

  document.getElementById('status').textContent = 'Analyzing sentiment...';

  try {
    const result = await classifier(text);  // Returns array of predictions (usually length 1)
    const top = result[0];  // { label: 'POSITIVE'|'NEGATIVE', score: 0.0–1.0 }

    let label = top.label.toLowerCase();
    let colorClass = label === 'positive' ? 'positive' : 'negative';
    let scorePercent = (top.score * 100).toFixed(1);

    document.getElementById('result').innerHTML = `
      <strong>Sentiment:</strong> <span class="${colorClass}">${label.toUpperCase()}</span><br>
      <strong>Confidence:</strong> ${scorePercent}%<br>
      <small>(using DistilBERT fine-tuned on SST-2 via Transformers.js)</small>
    `;

    document.getElementById('status').textContent = 'Done!';
  } catch (err) {
    console.error(err);
    document.getElementById('status').textContent = 'Error during analysis';
    document.getElementById('result').innerHTML = '<p style="color:red;">Something went wrong. Check console.</p>';
  }
}

// Warm up on page load (optional, improves perceived speed)
window.onload = loadClassifier;
