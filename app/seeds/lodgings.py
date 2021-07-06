from app.models import db, Lodging, destinations


def seed_lodgings():

    newYork1 = Lodging(name='Capsule Motel', attributes='Minimalistic and low cost,Private charging port in every capsule,Pest free and EM interference free',
                destination_id=1, image='https://www.uniqhotels.com/media/hotels/ac-hotel-orig/capsule_hotel_lucerne.jpg.700x345_q85_box-0%2C173%2C2000%2C1159_crop_detail.jpg')

    db.session.add(newYork1)

    db.session.commit()

    newYork2 = Lodging(name='Creators\' Traditional', attributes='Live and feel like a creator,Experience the past,Affordable and private',
                destination_id=1, image='https://tradezoneindia.files.wordpress.com/2015/08/futuristic-hotel-furniture.jpg')

    db.session.add(newYork2)

    db.session.commit()

    newYork3 = Lodging(name='Star Lounge', attributes='For those with credits to spare,Themed to your liking,Includes in house maintenace drones',
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

    vegas1 = Lodging(
        name='Desert Pod',
        attributes=
        'Built in an old bomb shelter, Air filtration keeps out the smallest of dust, Get to know your fellow travellers',
        destination_id=3,
        image=
        'https://i.pinimg.com/736x/6a/5d/be/6a5dbeb43bbe2427738baa856176efe4.jpg'
    )

    db.session.add(vegas1)
    db.session.commit()

    vegas2 = Lodging(
        name='Creator Comfort',
        attributes=
        'Reconstructed creator residence only recently renovated, Affordable space all to your self, Free WD-40 station in every room',
        destination_id=3,
        image=
        "https://cdnb.artstation.com/p/assets/images/images/003/324/589/large/jesse-gibson-highresscreenshot00004.jpg?1472450910"
    )

    db.session.add(vegas2)
    db.session.commit()

    vegas3 = Lodging(
        name='Species Bunker',
        attributes=
        'Freshly dug underground lodging space, Complimentary creature zoo and home to hundreds of nonnative plant life, Exquisite social rooms filled with ancient manuscripts',
        destination_id=3,
        image=
        'https://assets.newatlas.com/dims4/default/104719d/2147483647/strip/true/crop/4000x2000+0+0/resize/1440x720!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fc5%2F49%2F5eee7b894455b8adebeb3fdf97aa%2F0-living-room.jpg'
    )

    db.session.add(vegas3)
    db.session.commit()

    texas1 = Lodging(
        name='Tree House',
        attributes=
        'Built with modern material science, No chance of deconstruction mid stay like previous models, Affordable and safe',
        destination_id=4,
        image=
        'https://ssl.tzoo-img.com/images/tzoo.1.0.685682.TOP_TreeHouse-Point.jpg?width=412&spr=3'
    )

    db.session.add(texas1)
    db.session.commit()

    texas2 = Lodging(
        name='Anti-Gravity Cottage',
        attributes=
        'It\'s a floating house!, Utmost privacy option in this sector, Top bucket list destination',
        destination_id=4,
        image=
        'https://ae01.alicdn.com/kf/HTB1K3UXasuYBuNkSmRyq6AA3pXaA/fantasy-art-floating-island-in-the-sky-PAT062-canvas-fabric-poster-custom-wall-art-room-decor.jpg_Q90.jpg_.webp'
    )
    db.session.add(texas2)
    db.session.commit()

    texas3 = Lodging(
        name='Sky Rover',
        attributes=
        'Enjoy the entire vacation never having to leave the Rover, Travels around the sky keeping you away from scavangers, Enjoy all the attractions from a safe distance',
        destination_id=4,
        image=
        'https://simpleflying.com/wp-content/uploads/2021/04/EOSSMALL_0000_Layer7-1000x563.jpeg'
    )
    db.session.add(texas3)
    db.session.commit()

    space1 = Lodging(
        name='Space Bubble',
        attributes=
        "Not really a room, Feel the freedom of space, Not an actual room but a magnet that allows you to stick to the outside of the station",
        destination_id=5,
        image=
        'https://wp-assets.futurism.com/2020/02/new-details-nasa-space-hotel-iss.jpg'
    )

    db.session.add(space1)
    db.session.commit()

    space2 = Lodging(
        name='Private Pod',
        attributes=
        "This one is actually inside the station, your own little space with all the ammenities, 3 Free cabin decompressions with booking",
        destination_id=5,
        image='https://i.ytimg.com/vi/H0CBLw0xOlo/maxresdefault.jpg')

    db.session.add(space2)
    db.session.commit()

    space3 = Lodging(
        name='Orbital Delux',
        attributes=
        'For those who have too many credits on account, Take satifaction in taking up more space than necessary, Feel the satisfaction in spending almost 300 times more than the second option and not caring',
        destination_id=5,
        image='https://i.ytimg.com/vi/4bLz_4LKMsg/maxresdefault.jpg')

    db.session.add(space3)
    db.session.commit()

    moon1 = Lodging(
        name='Ball and Chain',
        attributes=
        'Very affordable, Does not protect you from the elements, Keeps you securly in one spot(most of the time)',
        destination_id=6,
        image=
        'https://borngeekblog.com/wp-content/uploads/2016/02/ball-and-chain-775x480.jpg'
    )

    db.session.add(moon1)
    db.session.commit()

    moon2 = Lodging(
        name='Private Lander',
        attributes=
        'Allows you to accend back to the Moon orbiter at will, Extra ascensions available for scheduling via central link, Privacy at it\'s best',
        destination_id=6,
        image=
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbYVcACmC1pKTNHbEZZrOwR4h9dd8SE8SJejKbrDrnrveZ-ILppcQ-UcwMxlLKDB5j3o&usqp=CAU'
    )

    db.session.add(moon2)
    db.session.commit()
    moon3 = Lodging(
        name='Customize Your Stay',
        attributes=
        'Built to order, Ridiculously expensive, Customize your stay with a built on demand Lunar dugout',
        destination_id=6,
        image=
        'https://i.pinimg.com/originals/2a/11/58/2a11587f109736a6f6f1927608ddc051.jpg'
    )
    db.session.add(moon3)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_lodgings():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
