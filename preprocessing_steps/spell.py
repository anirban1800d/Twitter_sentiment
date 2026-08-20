from schemas.prediction import PredictionRequest
from textblob import TextBlob

def spellcorr(text: PredictionRequest) -> str:
    if not isinstance(text, str):
        return ""              
    return str(TextBlob(text).correct())