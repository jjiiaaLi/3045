from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Review


class ReviewForm(FlaskForm):
    user_id=IntegerField('UserId',[DataRequired()])
    destination_id=IntegerField('DestinationId',[DataRequired()])
    content=StringField('Review', [DataRequired()])