# Debugging Notes

## Fixed issues from the original generated frontend

### 1. Incorrect component imports

`AppLayout.jsx` is located under:

`src/components/layout/AppLayout.jsx`

It now imports feature components using the correct relative paths.

### 2. Duplicate inline components

The original generated AppLayout mixed placeholder implementations with imported components.

The final version uses the actual feature components:

- `SingleInput`
- `BatchInput`
- `ModelInfo`
- `ApiStatusIndicator`

### 3. Batch request format

The backend has:

```python
@app.post("/predict/batch")
def predict_batch(texts: list[str]):
```

Therefore Axios sends:

```js
apiClient.post('/predict/batch', texts)
```

where `texts` is an array.

### 4. Undefined `lines`

The original BatchInput referenced `lines` during rendering even though it was declared only inside `handleAnalyze`.

The fixed version calculates:

```js
const lines = useMemo(() => splitBatchText(text), [text])
```

### 5. Confidence type

The backend returns:

```python
confidence=f"{confidence * 100:.1f}%"
```

Therefore the frontend treats confidence as a string and displays it directly.

### 6. Probability width

The backend probability is a decimal:

```text
0.908
```

The frontend converts it to:

```text
90.8%
```

before applying the CSS width.

### 7. API status

The health endpoint is `/`, not `/health`.

### 8. Vite HTML location

`index.html` belongs at the frontend root. `public/` does not need an `index.html`.

## If something fails

Run:

```bash
npm install
npm run dev
```

Check the browser console and Network tab.

Also verify:

```text
GET https://twitter-sentiment-sc78.onrender.com/
POST https://twitter-sentiment-sc78.onrender.com/predict
POST https://twitter-sentiment-sc78.onrender.com/predict/batch
```


## Production API

The deployed FastAPI backend is:

`https://twitter-sentiment-sc78.onrender.com`

For Vercel, configure `VITE_API_BASE_URL` with this value. Do not commit secrets.
