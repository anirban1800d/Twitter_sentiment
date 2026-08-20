from schemas.prediction import PredictionRequest
import re

def clean_text(text: PredictionRequest) -> str:
    text = str(text).lower()
    text = re.sub(r"<.*?>", " ", text)                       # HTML tags
    text = re.sub(r"(http\S+|www\S+|\w+\.\w+/\w+)", " ", text)  # URLs
    text = re.sub(r"\(.*?\)", " ", text)                      # bracketed text
    text = re.sub(r"[^a-z\s]", " ", text)                     # keep letters only
    text = re.sub(r"\b[a-z]{1,2}\b", " ", text)               # drop 1-2 letter junk
    text = re.sub(r"\s+", " ", text).strip()
    return text
