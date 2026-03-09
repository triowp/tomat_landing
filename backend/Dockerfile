# backend/Dockerfile
# Python FastAPI app

FROM python:3.11-slim

# create working directory
WORKDIR /app

# copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy the code
COPY . .

# ensure SQLite database file is writable
RUN touch market.db

# default command
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
