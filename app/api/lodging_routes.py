from flask import Blueprint
from app.models import Lodging

lodging_routes=Blueprint('lodgings', __name__)

@lodging_routes.route('/<int:id>', methods=["GET"])
def getDestinationLodgings(id):
    lodgings=Lodging.query.filter_by(destination_id=id).all()

    return {"lodgings":[lodging.to_dict() for lodging in lodgings]}

