from flask import Blueprint, request
from app.models import Booking, db
from ..forms.booking_form import BookingForm
import json

booking_routes = Blueprint('bookings', __name__)


@booking_routes.route('/load', methods=["GET"])
def load_bookings():
    bookings=Booking.query.all()
    return {'bookings':[booking.to_dict() for booking in bookings]}



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


@booking_routes.route('/edit/<int:id>',methods=["PUT"])
def edit_booking(id):
    data = json.loads(request.data.decode('utf-8'))

    user_id=data['user_id']
    destination=data['destination']
    lodging=data['lodging']
    activities=data['activities']
    start_date=data['start_date']
    end_date=data['end_date']

    booking_to_edit=Booking.query.filter_by(id=id).first()
    booking_to_edit.user_id=user_id
    booking_to_edit.destination=destination
    booking_to_edit.lodging=lodging
    booking_to_edit.activities=activities
    booking_to_edit.start_date=start_date
    booking_to_edit.end_date=end_date

    db.session.commit()

    bookings = Booking.query.all()
    return {'bookings': [booking.to_dict() for booking in bookings]}


@booking_routes.route('/delete/<int:booking_id>', methods=["DELETE"])
def delete_booking(booking_id):

    booking=Booking.query.filter_by(id=booking_id).first()
    db.session.delete(booking)
    db.session.commit()

    bookings=Booking.query.all()
    return {'bookings':[booking.to_dict() for booking in bookings]}
