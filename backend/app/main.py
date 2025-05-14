from fastapi import FastAPI
from models import create_user, get_users
from pydantic import BaseModel

app = FastAPI()

class UserIn(BaseModel):
    name: str
    email: str

@app.post("/users/")
def add_user(user: UserIn):
    return create_user(user.name, user.email)

@app.get("/users/")
def list_users():
    return get_users()
