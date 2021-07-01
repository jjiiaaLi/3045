from flask import Blueprint, session, request
from app.models import Review, db
from app.forms import ReviewForm

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