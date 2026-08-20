import os
import re
import string
import joblib
from fastapi.middleware.cors import CORSMiddleware
from schemas.class_prob import ClassProbability
from schemas.prediction import PredictionRequest
from schemas.prediction_response import PredictResponse
from preprocessing_steps.preprocess import preprocess

from fastapi import FastAPI, HTTPException

app = FastAPI(
    title="Social Media Comment Sentiment Classifier",
    description="Text sentiment prediction using TF-IDF + Multinomial Naive Bayes.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model_path = "model/multinomial_nb_pipeline.pkl"

try:
    model = joblib.load(model_path)
    CLASS_LABELS = model.classes_.tolist()
except Exception as e:
    raise RuntimeError(f"Could not load model: {e}")

@app.get("/", tags=["Health"])
def root():
    return {
        "status": "running",
        "model": "Multinomial Naive Bayes (TF-IDF)",
        "classes": CLASS_LABELS,
        "endpoints": {
            "predict": "POST /predict",
            "docs":    "GET  /docs",
        }
    }

@app.post("/predict",response_model=PredictResponse, tags=["Prediction"])
async def predict(request: PredictionRequest):
    try:
        clean_text = preprocess(request.text)

        if not clean_text:
            raise HTTPException(status_code=400, detail="Input text is empty after preprocessing.")

        model_predict = model.predict([clean_text])[0]
        model_predict_proba = model.predict_proba([clean_text])[0]
        confidence = max(model_predict_proba)

        probabilities = [
            ClassProbability(
                label = label,
                probability = round(float(prob), 4),
                percentage = f"{round(prob * 100, 2)}%"
            )
            for label, prob in sorted(zip(CLASS_LABELS, model_predict_proba),
                                      key=lambda x: x[1], 
                                      reverse=True,
                                    )
        ]

        return PredictResponse(
            input_text=request.text,
            cleaned_text= clean_text,
            prediction= model_predict,
            confidence= f"{confidence * 100:.1f}%",
            probabilities= probabilities
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict/batch", tags=["Prediction"])
def predict_batch(texts: list[str]):
    """
    Batch prediction — accepts a list of raw strings,
    returns predictions and top probability for each.
    """
    if not texts:
        raise HTTPException(status_code=422, detail="texts list cannot be empty.")
    if len(texts) > 100:
        raise HTTPException(status_code=422, detail="Maximum 100 texts per batch.")

    results = []
    for raw in texts:
        cleaned     = preprocess(raw)
        prediction  = model.predict([cleaned])[0]
        proba       = model.predict_proba([cleaned])[0]
        confidence  = max(proba)
        results.append({
            "input_text": raw,
            "prediction": prediction,
            "confidence": f"{confidence * 100:.1f}%",
        })
    return {"count": len(results), "results": results}      
    