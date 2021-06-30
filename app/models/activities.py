from .db import db

class Activity(db.Model):
    __tablename__='activities'

    id=db.Column(db.Integer, primary_key = True)
    name=db.Column(db.String, nullable=False)
    attributes=db.Column(db.String, nullable=False)
    destination_id=db.Column(db.Integer, db.ForeignKey('destinations.id'), nullable=False)
    image=db.Column(db.String, nullable=False)
    
    destinations=db.relationship("Destination", back_populates='activities')
    