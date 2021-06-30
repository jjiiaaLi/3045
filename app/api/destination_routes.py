from flask import Blueprint
from app.models import Destination, destinations

destination_routes=Blueprint('destinations', __name__)


@destination_routes.route('/', methods=["GET"])
def loadPopDestinations():
    destinations=Destination.query.all()
    return {"destinations":[destination.to_dict() for destination in destinations]}


@destination_routes.route('/<int:id>/',methods=["GET"])
def loadSingleDestination(id):
    destination=Destination.query.filter_by(id=id).first()
    
    return destination.to_dict()




