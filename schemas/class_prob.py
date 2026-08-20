from pydantic import BaseModel, Field
class ClassProbability(BaseModel):
    label: str
    probability: float
    percentage: str