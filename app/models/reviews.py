from .db import db

class Review(db.Model):
    __tablename__='reviews'

    id = db.Column(db.Integer, primary_key = True)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    destination_id=db.Column(db.Integer, db.ForeignKey('destinations.id'), nullable=False)
    content=db.Column(db.String, nullable=False)

    destinations=db.relationship("Destination", back_populates='reviews')
    users=db.relationship("User", back_populates='reviews')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "destination_id":self.destination_id,
            "content":self.content
        }
    