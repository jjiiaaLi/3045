from .db import db


class Destination(db.Model):
    __tablename__='destinations'

    id=db.Column(db.Integer, primary_key = True)
    name=db.Column(db.String, nullable=False)
    summary=db.Column(db.String, nullable=False)
    images=db.Column(db.String, nullable=False)

    activities=db.relationship('Activity', back_populates='destinations')
    lodgings=db.relationship('Lodging', back_populates='destinations')
    