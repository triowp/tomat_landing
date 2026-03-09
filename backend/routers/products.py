from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db, engine
from models import Base, Product
from schemas import ProductOut, ProductCreate
from typing import List

Base.metadata.create_all(bind=engine)

router = APIRouter(prefix="/products", tags=["products"])

def seed_products(db: Session):
    if db.query(Product).count() == 0:
        items = [
            Product(name="Томатная паста Премиум", description="Густая томатная паста из отборных томатов. Концентрация 28-30%.", price=450, unit="кг", stock=500, image_url="https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400"),
            Product(name="Томатная паста Стандарт", description="Классическая томатная паста. Концентрация 25-27%.", price=320, unit="кг", stock=800, image_url="https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=400"),
            Product(name="Томатная паста Органик", description="Органическая паста без консервантов и ГМО.", price=680, unit="кг", stock=200, image_url="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400"),
            Product(name="Томатная паста в банках 0.5л", description="Фасованная паста в стеклянных банках по 0.5 литра.", price=85, unit="шт", stock=1200, image_url="https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400"),
        ]
        db.add_all(items)
        db.commit()

@router.get("/", response_model=List[ProductOut])
def get_products(db: Session = Depends(get_db)):
    seed_products(db)
    return db.query(Product).all()

@router.get("/{product_id}", response_model=ProductOut)
def get_product(product_id: int, db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.id == product_id).first()

@router.post("/", response_model=ProductOut)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    db_product = Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product