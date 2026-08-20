from schemas.prediction import PredictionRequest
import re

def remove_garbage_words(text: PredictionRequest) -> str:
    text = str(text)
    return " ".join(
        w for w in text.split()
        if re.search(r"[aeiou]", w) and not re.search(r"\d", w)
    )