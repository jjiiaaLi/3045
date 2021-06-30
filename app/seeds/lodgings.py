from app.models import db, Lodging


def seed_lodgings():

    newYork1 = Lodging(name='Capsule Motel', attributes='Minimalistic and low cost,Private charging port in every capsule,Pest free and EM interference free',
                destination_id=1, image='https://www.uniqhotels.com/media/hotels/ac-hotel-orig/capsule_hotel_lucerne.jpg.700x345_q85_box-0%2C173%2C2000%2C1159_crop_detail.jpg')

    db.session.add(newYork1)

    db.session.commit()

    newYork2 = Lodging(name='Creators\' Traditional', attributes='Live and feel like a creator,Experience the past,Affordable and private',
                destination_id=1, image='https://tradezoneindia.files.wordpress.com/2015/08/futuristic-hotel-furniture.jpg')

    db.session.add(newYork2)

    db.session.commit()

    newYork3 = Lodging(name='Star Lounge', attributes='For those with credits to spar,Themed to your liking,Includes in house maintenace drones',
                destination_id=1, image='https://miro.medium.com/max/625/1*DSGTtsBCk8whguVFp45eVQ.jpeg')

    db.session.add(newYork3)

    db.session.commit()

    SanFran1 = Lodging(name='Minimal Haven', attributes='Simple but feature rich,Sound proofed and pest free,Voice command theme selection',
                destination_id=2, image='https://media.istockphoto.com/photos/capsule-hotel-room-interior-picture-id1006574500?k=6&m=1006574500&s=612x612&w=0&h=Pmw2T0KRkDRgvh4A7TsdU_Gejr9vwUDlCuapWs1S3aU=')

    db.session.add(SanFran1)

    db.session.commit()

    SanFran2 = Lodging(name='Traditional Atmosphere', attributes='Built according to archeological findings,Experience the creator life,Save on credits not on luxury',
                destination_id=2, image='https://videohive.img.customer.envatousercontent.com/files/14d04f8b-f604-43d3-a171-7d3ddcf523a1/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=8311003dda660260c5dda4a2f851880c')

    db.session.add(SanFran2)

    db.session.commit()

    SanFran3 = Lodging(name='Ocean Resort', attributes='Relax among the marine life,Recharge underneath the waves,Not responsible for salt water damage to electronics',
                destination_id=2, image='https://crneff84.github.io/private-island-resort/img/hotelroom1.jpg')

    db.session.add(SanFran3)

    db.session.commit()

    
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_lodgings():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()




