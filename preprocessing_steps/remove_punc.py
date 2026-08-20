from schemas.prediction import PredictionRequest
import string

def remove_punctuation(text: PredictionRequest) -> str:
    text = str(text)
    for ch in string.punctuation:
        text = text.replace(ch, "")
    return text