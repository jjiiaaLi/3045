from app.models import db, Destination

# Adds a demo user, you can add other users here if you want
def seed_destinations():

    city1 = Destination(name='Sector Alpha 16BZ Lima 957-H29', summary='Abandoned creator population hub with rustic features. Take a scenic stroll through 300 square miles of twisted concrete labyrinth and stay awhile at lodgings repurposed according to your specs.  Individuals with soy-based wire insulation visit at your own risk',
                images='https://i.pinimg.com/originals/8b/25/78/8b25784db97a2528223c5a2d5cdb2673.jpg,\
                    https://www.wallpaperflare.com/static/660/848/833/apocalyptic-city-ruin-new-york-city-wallpaper.jpg,\
                    https://www.iliketowastemytime.com/sites/default/files/post-apocalyptic-new-york-wallpaper-1920x1200.jpg,\
                    https://i.pinimg.com/originals/0f/f3/5d/0ff35d6d48f0dec060bb28596ff4db46.jpg,\
                    https://cdn.cms.prod.nypr.digital/images/041110crysis1.2e16d0ba.fill-661x496.jpg')
                        

    db.session.add(city1)

    db.session.commit()


    city2=Destination(name="Z159798663_0081", summary='Sea side creator hub known for it\'s foggy climate and abundant ocean fauna.  Now 64.53 percent under water.  Home to a small population of creators mostly near the shore area', 
                images='https://i.pinimg.com/originals/6c/47/39/6c4739d8bf8b3bb9c7e123cb22361a79.jpg,\
                    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXW6TCSh9gAnmrw1MBf9aLbNTx7VK83p3sA&usqp=CAU,\
                        https://i.pinimg.com/originals/c8/59/ce/c859ce02df9e538e3ab3ea1ec392ffec.jpg\
                            https://i.pinimg.com/originals/44/7c/3e/447c3ef1ede69974d5009a77767dafe5.jpg,\
                                https://i.pinimg.com/originals/2e/93/7b/2e937b5e054e43a99916c9f8526b5748.jpg')


    db.session.add(city2)

    db.session.commit()
    
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_destinations():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
