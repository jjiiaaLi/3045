from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField 
from wtforms.validators import DataRequired
from wtforms.fields.html5 import DateField
from app.models import Booking


class BookingForm(FlaskForm):
    user_id=IntegerField('user',[DataRequired()])
    destination=StringField('destination',[DataRequired()])
    lodging=StringField('lodging',[DataRequired()])
    activities=StringField('activities')
    start_date=DateField('startdate', format='%Y-%m-%d')
    end_date=DateField('enddate', format='%Y-%m-%d')