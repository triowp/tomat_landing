from pydantic import BaseModel
from typing import Optional

class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    unit: str
    stock: int
    image_url: Optional[str] = None

class ProductCreate(ProductBase):
    pass

class ProductOut(ProductBase):
    id: int

    class Config:
        from_attributes = True