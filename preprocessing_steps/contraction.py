from schemas.prediction import PredictionRequest
import re

CONTRACTIONS = {
    r"\bhe's\b": "he is", r"\bthere's\b": "there is", r"\bwe're\b": "we are",
    r"\bthat's\b": "that is", r"\bwon't\b": "will not", r"\bcan't\b": "cannot",
    r"\bain't\b": "am not", r"\bisn't\b": "is not", r"\baren't\b": "are not",
    r"\bwasn't\b": "was not", r"\bweren't\b": "were not", r"\bdon't\b": "do not",
    r"\bdoesn't\b": "does not", r"\bdidn't\b": "did not", r"\bhaven't\b": "have not",
    r"\bhasn't\b": "has not", r"\bshouldn't\b": "should not", r"\bwouldn't\b": "would not",
    r"\bcouldn't\b": "could not", r"\bi'm\b": "i am", r"\bi've\b": "i have",
    r"\bi'd\b": "i would", r"\bi'll\b": "i will", r"\byou're\b": "you are",
    r"\byou've\b": "you have", r"\byou'd\b": "you would", r"\byou'll\b": "you will",
    r"\bthey're\b": "they are", r"\bthey've\b": "they have", r"\bthey'd\b": "they would",
    r"\bthey'll\b": "they will", r"\bit's\b": "it is", r"\bit'll\b": "it will",
    r"\bwe've\b": "we have", r"\bwe'll\b": "we will", r"\bwe'd\b": "we would",
    r"\blet's\b": "let us", r"\bwho's\b": "who is", r"\bwhat's\b": "what is",
    r"\bwhere's\b": "where is", r"\bhere's\b": "here is",
    r"\bwould've\b": "would have", r"\bshould've\b": "should have", r"\bcould've\b": "could have",
}


def expand_contractions(text: PredictionRequest) -> str:
    text = str(text)
    for pattern, repl in CONTRACTIONS.items():
        text = re.sub(pattern, repl, text)
    return text