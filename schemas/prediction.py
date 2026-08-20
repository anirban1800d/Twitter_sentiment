from pydantic import BaseModel, Field
class PredictionRequest(BaseModel):
    text: str = Field(...,description="The text to be preprocessed and predicted.", example="This is a sample text for prediction.")