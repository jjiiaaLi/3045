from flask import Blueprint
from app.models import Activity

activities_routes=Blueprint('activities', __name__)

@activities_routes.route('/<int:id>', methods=["GET"])
def getDestinationActivities(id):
    activities=Activity.query.filter_by(destination_id=id).all()
    return {'activities':[activity.to_dict() for activity in activities]}
