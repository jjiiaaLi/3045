from flask import Blueprint, session, request
from app.models import Review, db
from app.forms import ReviewForm
import json

review_routes = Blueprint('review', __name__)


@review_routes.route('/<int:id>', methods=["GET"])
def get_reviews(id):
    reviews=Review.query.filter_by(destination_id=id)
    return {'reviews':[review.to_dict() for review in reviews]}



@review_routes.route('/postReview', methods=["POST"])
def post_review():
    form=ReviewForm()
    form['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():
        review=Review(
            user_id=form.data['user_id'],
            destination_id=form.data['destination_id'],
            content=form.data['content']
        )
        db.session.add(review)
        db.session.commit()
        
        reviews=Review.query.filter_by(destination_id=form.data['destination_id'])
        return {'reviews':[review.to_dict() for review in reviews]}


@review_routes.route('/editAReview', methods=['PUT'])
def edit_review():

    data=json.loads(request.data.decode('utf-8'))
    destination_id=data['destination_id']
    review_id=data['review_id']
    content=data['content']
    review_to_edit=Review.query.filter_by(id=review_id).first()
    review_to_edit.content=content
    db.session.commit()
    reviews=Review.query.filter_by(destination_id=destination_id)
    return {'reviews':[review.to_dict() for review in reviews]}