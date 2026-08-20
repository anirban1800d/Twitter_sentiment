from schemas.class_prob import ClassProbability
from pydantic import BaseModel
class PredictResponse(BaseModel):
    input_text: str
    cleaned_text: str
    prediction: str
    confidence: str
    probabilities: list[ClassProbability]