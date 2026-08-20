# Twitter Sentiment Frontend

React + Vite frontend for the FastAPI Social Media Comment Sentiment Classifier.

## Backend contract

The frontend expects FastAPI at:

`http://127.0.0.1:8000`

Override it with:

`VITE_API_BASE_URL`

### GET /

Health check.

### POST /predict

Request:

```json
{"text":"I absolutely love this product"}
```

Response fields used by the UI:

- `input_text`
- `cleaned_text`
- `prediction`
- `confidence`
- `probabilities`

`confidence` is a string such as `"90.8%"` in the backend code.

### POST /predict/batch

Your backend is:

```python
def predict_batch(texts: list[str]):
```

Therefore the frontend intentionally sends a raw JSON array:

```json
[
  "I love this",
  "This is terrible"
]
```

Do NOT change it to:

```json
{"texts":["I love this"]}
```

unless the backend signature is changed.

## Run

From `frontend/`:

```bash
npm install
npm run dev
```

Then start FastAPI separately from `backend/`:

```bash
uvicorn main:app --reload
```

The exact backend command may need to be adjusted to your existing backend import path.

## Build

```bash
npm run build
npm run preview
```

## Troubleshooting

### Backend disconnected

Check that FastAPI is running and that `.env` contains:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

After changing `.env`, restart Vite.

### CORS

Your FastAPI backend already enables CORS with `allow_origins=["*"]`, so local development should work.

### 422 on batch

This frontend sends a raw array because the backend endpoint accepts `list[str]`.

### Probability bars

The backend returns `probability` between 0 and 1. The UI converts it to a percentage:

```js
probability * 100
```


## Nexus animated background

The UI includes a lightweight CSS-only ambient background:

- animated perspective grid
- slowly drifting violet/blue glow orbs
- subtle scanline
- light film-grain/noise texture
- `prefers-reduced-motion` support

No extra animation library is required.
