from flask import Blueprint
from app.models import Lodging

lodging_routes=Blueprint('lodgings', __name__)

@lodging_routes.route('/<int:id>', methods=["GET"])
def getDestinationLodgings(id):
    lodgings=Lodging.query.filter_by(destination_id=id).all()

    return {"lodgings":[lodging.to_dict() for lodging in lodgings]}



@lodging_routes.route('/getAll', methods=["GET"])
def get_all_lodgings():
    all_lodgings=Lodging.query.all()

    return{'lodgings':[lodging.to_dict() for lodging in all_lodgings]}