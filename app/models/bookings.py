from app.models import activities
from .db import db

class Booking(db.Model):
    __tablename__='bookings'

    id=db.Column(db.Integer, primary_key = True)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    destination=db.Column(db.String, nullable=False)
    lodging=db.Column(db.String, nullable=False)
    activities=db.Column(db.String, nullable=True)
    start_date=db.Column(db.String, nullable=False)
    end_date=db.Column(db.String, nullable=False)

    users=db.relationship('User', back_populates='bookings')

    def to_dict(self):
        return {
            "id":self.id,
            "user_id":self.user_id,
            "destination":self.destination,
            "lodging":self.lodging,
            "activities":self.activities,
            "start_date":self.start_date,
            "end_date":self.end_date
        }