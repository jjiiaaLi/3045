from flask import Blueprint, request
from app.models import Booking, db
from ..forms.booking_form import BookingForm

booking_routes = Blueprint('bookings', __name__)


@booking_routes.route('/post',methods=['POST'])
def post_booking():
    form=BookingForm()
    form['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():
        booking=Booking(
            user_id=form.data['user_id'],
            destination=form.data['destination'],
            lodging=form.data['lodging'],
            activities=form.data['activities'],
            start_date=form.data['start_date'],
            end_date=form.data['end_date']
        )
        db.session.add(booking)
        db.session.commit()

        bookings=Booking.query.all()
        return {'bookings':[booking.to_dict() for booking in bookings]}