from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='DemoBot', email='demo@aa.io',
                password='password', image='https://static.thenounproject.com/png/417102-200.png')

    db.session.add(demo)

    db.session.commit()

    demo1 = User(username='DanBot', email='demo2@aa.io',
                password='password', image='https://cdn1.iconfinder.com/data/icons/robot-emoji-line-faces/32/robot_emoji_happy-512.png')

    db.session.add(demo1)

    db.session.commit()

    demo2 = User(username='KetoBot', email='demo3@aa.io',
                password='password', image='https://cdn0.iconfinder.com/data/icons/artificial-intelligence-50/64/happy_robot_smart_future_tech-512.png')

    db.session.add(demo2)

    db.session.commit()

    demo4 = User(username='ImAToaster', email='demo4@aa.io',
                password='password', image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlPxm3-Yq-jwtN8tXOwa92tH3UK3wZm5HEH3GUKe1Iunp1j6VY6sDZ9UqMuEYdCKJtrd--aH9&usqp=CAc')

    db.session.add(demo4)

    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
