from flask import Blueprint
from app.models import Destination, destinations

destination_routes=Blueprint('destinations', __name__)


@destination_routes.route('/')
def loadPopDestinations():
    destinations=Destination.query.all()
    return {"destinations":[destination.to_dict() for destination in destinations]}
