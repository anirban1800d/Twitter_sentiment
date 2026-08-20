from preprocessing_steps.clean_text import clean_text
from preprocessing_steps.contraction import expand_contractions
from preprocessing_steps.remove_garbage import remove_garbage_words
from preprocessing_steps.remove_punc import remove_punctuation
from preprocessing_steps.spell import spellcorr
from schemas.prediction import PredictionRequest


def preprocess(text: PredictionRequest) -> str:
    """Full preprocessing chain — must match training exactly."""
    text = expand_contractions(str(text).lower())
    text = clean_text(text)
    text = spellcorr(text)
    text = remove_garbage_words(text)
    text = remove_punctuation(text)
    return text